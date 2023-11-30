import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase/Firebase';



const SignUp = () => {


    const [inpData, setInpData] = useState({})

    const navigate = useNavigate()
    const navigationHandler = () => {
        navigate('/products')
    }

    const setInpValue = (event) => {
        // console.log(event.target.value)
        setInpData(prev => ({
            ...prev,
            [event.target.id]: event.target.value,

        }))

    }
    const submitDataHandler = () => {
        createUserWithEmailAndPassword(auth, inpData.email, inpData.password)
            .then((success) => {
                // console.log(success.user.uid)
                navigationHandler()
            })
            .catch((error) => { alert(error.code) })
    }

    return (
        <Stack justifyContent={'center'} alignItems={'center'} height='100vh'>
            <Stack sx={{ width: 450, boxShadow: '0 0 10px #000', p: 3, borderRadius: '7px', gap: 2 }}>
                <Box textAlign={'center'}>
                    <Typography variant='h3'  >SignUp</Typography>
                    <Typography  >Already have an acccount?</Typography>
                    <Link to={'/login'}>Login in</Link>
                </Box>
                <Box >
                    <TextField id='email' type='email' onChange={setInpValue} label='Email' placeholder='Enter your email' sx={{ width: '100%' }} />
                </Box>
                <Box>
                    <TextField id='password' type='password' onChange={setInpValue} label='Password' placeholder='Enter yoru password' sx={{ width: '100%' }} />
                </Box>
                <Box textAlign={'end'}>
                    <Button onClick={submitDataHandler} variant="contained">Sign Up</Button>
                </Box>

            </Stack>
        </Stack >
    )
}

export default SignUp