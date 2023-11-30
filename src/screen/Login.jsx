import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { auth } from '../config/firebase/Firebase'

const Login = () => {
    const [inpData, setInpData] = useState({})



    const setInpValue = (event) => {
        // console.log(event.target.value)
        setInpData(prev => ({
            ...prev,
            [event.target.id]: event.target.value,

        }))
        console.log(inpData)

    }

    const navigation = useNavigate()
    const navigationHandler = () => {
        navigation('/products')
    }

    const submitDataHandler = async () => {
        try {
            await signInWithEmailAndPassword(auth, inpData.email, inpData.password)
            navigationHandler()
        }
        catch (error) {
            const err = error.code.slice(5)
            alert(err)
            console.log(err)
            // alert(error.code.slice(5))
        }
    }


    return (
        <Stack justifyContent={'center'} alignItems={'center'} height='100vh'>
            <Stack sx={{ width: 450, boxShadow: '0 0 10px #000', p: 3, borderRadius: '7px', gap: 2 }}>
                <Box textAlign={'center'}>
                    <Typography variant='h3'  >Login</Typography>
                    <Typography  >Don't have an acccount?</Typography>
                    <Link to={'/'}>Sign up </Link>
                </Box>
                <Box >
                    <TextField id='email' type='email' onChange={setInpValue} label='Email' placeholder='Enter your email' sx={{ width: '100%' }} />
                </Box>
                <Box>
                    <TextField id='password' type='password' onChange={setInpValue} label='Password' placeholder='Enter yoru password' sx={{ width: '100%' }} />
                </Box>
                <Box textAlign={'end'}>
                    <Button onClick={submitDataHandler} variant="contained">Login</Button>
                </Box>

            </Stack>
        </Stack >
    )
}

export default Login