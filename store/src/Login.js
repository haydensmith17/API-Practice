import React, { useState, useContext } from 'react';
import { Box, Button, TextField, Alert, Collapse, IconButton, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'
import Edit from './Edit';
import { AuthContext } from './UserHttp';



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { login } = useContext(AuthContext)


  function handleClick() {
    navigate('/SignUp');
  }

  async function handleLogin() {
    try {
      debugger
      setIsLoading(true); // Show loading state
      await login(email, password); // Try to login

      // Navigate to store only if login is successful
      navigate('/Store');
    } catch (error) {
      setOpen(true); // Show the error alert
      setIsLoading(false); // Stop loading state
      console.error(error); // Log the error for debugging
    }
  }


  // Handle the Enter key press for the "Login" button
  const handleLoginKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      handleLogin(); // Call the login function
    }
  };


  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch', display: 'flex', flexDirection: 'column', margin: '10px auto' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
        <TextField onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" type="password" />

        {/* Add the onKeyDown event to the LoadingButton */}
        <LoadingButton loading={isLoading} onClick={handleLogin} onKeyDown={handleLoginKeyDown} variant="contained">
          Login
        </LoadingButton>

        <Button onClick={handleClick} variant="text">
          Sign Up
        </Button>
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <AlertTitle>Error</AlertTitle>
            Invalid Email or Password!
          </Alert>
        </Collapse>
      </Box>
    </>
  );
}

export default Login;
