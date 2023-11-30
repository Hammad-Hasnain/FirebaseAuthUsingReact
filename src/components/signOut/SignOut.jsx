import React, { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import "./signOut.css"
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase/Firebase';
import { useNavigate } from 'react-router-dom';


const SignOut = () => {

    const navigation = useNavigate()
    const navigationHandler = () => {
        navigation('/login')
    }

    const signOutHandler = () => {
        console.log("hello getting sign out")
        signOut(auth)
            .then(() => {
                console.log("signed out")
                // window.location.href = '/login'  // return
                // navigationHandler()
                window.location.replace('/login')  // no return 

            })
            .catch((error) => {
                console.log(error)
            })
    }

    return <button className='signOut' onClick={signOutHandler}   >
        <LogoutIcon />
    </button>
}

export default SignOut