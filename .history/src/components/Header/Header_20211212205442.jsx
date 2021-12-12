import React from 'react';
import { AppBar, Toolbar, Button, Snackbar} from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
          <AppBar position="static" id="header">
            <Toolbar>
              <Link to="/" id="homepage">News Site Ponomarev</Link>
            </Toolbar>
            
          </AppBar>
        </>
    );
}