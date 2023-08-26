import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import React from 'react';

function Login(props) {
    return (
        <div className='Login-Container'>
            <div className='Login-Form'>
            <TextField id="standard-basic" label="UserName" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" />
            <Button variant="contained">Login</Button>
            </div>
        </div>
    );
}

export default Login;