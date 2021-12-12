import React from 'react';
import { AppBar, Toolbar, Button, Snackbar} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'redux';

const Header = () => {
    const { role, address } = useSelector((state) => state.basicReducer);

    return (
        <>
          <AppBar position="static" id="header">
            <Toolbar>
              <Link to="/" id="homepage">News Site Ponomarev</Link>
            </Toolbar>
            {!!role
            ? (
            <>
              <Toolbar>
                <Link to={`/user/${address}`} id="userpage">My Page</Link>
              </Toolbar>
              <Toolbar>
                <Button variant="outlined" onClick={handleLogout}>Logout</Button>
              </Toolbar>
            </>
            )
            : (
            <>
              <Toolbar>
                <Button variant="outlined" onClick={handleSignIn}>Sign In</Button>
              </Toolbar>
              <Toolbar>
                <Button variant="outlined" onClick={handleSignUp}>Sign Up</Button>
              </Toolbar>
            </>
          )}
          </AppBar>
        </>
    );
}