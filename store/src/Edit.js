import DrawerAppBar from "./AppBar";
import React, { useState, useEffect, useContext } from 'react';
import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { AuthContext } from './UserHttp';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';


function Edit() {
    const baseUrl = "https://localhost:7107/User";
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [storedUser, setStoredUser] = useState([])
    const { edit } = useContext(AuthContext)

    // Retrieve user data from local storage
    // useEffect(() => {
    //     const storedUserString = localStorage.getItem("user");
    
    //     if (storedUserString) {
    //         const storedUser = JSON.parse(storedUserString);
    
    //         setFirstname(storedUser.firstname || "");
    //         setLastname(storedUser.lastname || "");
    //         setEmail(storedUser.email || "");
    //         setAddress(storedUser.address || "");
    //         setPassword(storedUser.password || "");
    //     }
    // }, []);
    

    // Save updated user information
    async function SaveInfo() {
        debugger
        const userId = storedUser.personid
        await edit(userId, email, password, firstname, lastname, city, address)
    }

    return (
        <>
            <DrawerAppBar />
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch', display: 'flex', flexDirection: 'column', margin: '10px auto' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField value={firstname} onChange={e => setFirstname(e.target.value)} label="First Name" variant="outlined" />
                <TextField value={lastname} onChange={e => setLastname(e.target.value)} label="Last Name" variant="outlined" />
                <TextField value={email} onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" />
                <TextField value={address} onChange={e => setAddress(e.target.value)} label="Address" variant="outlined" />
                <TextField value={password} onChange={e => setPassword(e.target.value)} label="Password" variant="outlined" type="password" />
                <TextField value={city} onChange={e => setCity(e.target.value)} label="City" variant="outlined" />
                <Button onClick={SaveInfo} variant="contained">Save</Button>

                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Your info was successfully saved.
                </Alert>
            </Box>
        </>
    );
}

export default Edit;
