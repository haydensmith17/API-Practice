import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useContext } from 'react';
import { AuthContext } from './UserHttp';


function SingUp() {
    const baseUrl = "https://localhost:7107/User";
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [user, setUser] = useState([])
    const navigate = useNavigate();
    const {signup} = useContext(AuthContext)

    async function CreateAccount() {
        await signup(email, password, firstname, lastname, city, address)
        navigate('/Store');

    }

    function BackToLogin() {

        navigate('/')
    }



    return (
        <>
            <Box component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch', display: 'flex', flexDirection: 'column', margin: '10px auto' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField onChange={text => setFirstname(text.target.value)} id="outlined-basic" label="First Name" variant="outlined" />
                <TextField onChange={text => setLastname(text.target.value)} id="outlined-basic" label="Last Name" variant="outlined"  />
                <TextField onChange={text => setEmail(text.target.value)} id="outlined-basic" label="Email" variant="outlined"  />
                <TextField onChange={text => setAddress(text.target.value)} id="outlined-basic" label="Address" variant="outlined"  />
                <TextField onChange={text => setCity(text.target.value)} id="outlined-basic" label="City" variant="outlined"  />
                <TextField onChange={text => setPassword(text.target.value)} id="outlined-basic" label="Password" variant="outlined" type='password' />
                <Button onClick={CreateAccount} variant="contained">Create Account</Button>

                <Button onClick={BackToLogin} variant="text">User Login</Button>




            </Box>
        </>
    )
}

export default SingUp