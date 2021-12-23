import React, { memo, useState, useEffect } from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    const role = localStorage.getItem('role');

    const handleLogout = () => {
        localStorage.removeItem('role');
        localStorage.removeItem('address');
    }
    return (
        <>
            <AppBar position="static" id="header" style={{ flexDirection: 'row' }}>
                <Toolbar>
                    <Link to="/" id="homepage" style={{ color: 'white', textDecoration: 'none' }}>Blockchain UI Ponomarev</Link>
                    {!role
                        ?
                        <>
                            <Link to="/signin" id="auth" style={{ color: 'white', textDecoration: 'none', marginLeft: "5%" }}>Sign In</Link>
                            <Link to="/signup" id="reg" style={{ color: 'white', textDecoration: 'none', marginLeft: "5%" }}>Sign Up</Link>
                        </>
                        : <Button variant="outlined" color="error" onClick={handleLogout} style={{marginLeft: "5%"}}>Log out</Button>}
                        <Link to="/admin" id="reg" style={{ color: 'white', textDecoration: 'none', marginLeft: "5%" }}>Admin</Link>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default memo(Header);