import React from 'react';
import { AppBar, Toolbar, Button, Snackbar} from '@mui/material';

const Header = () => {
    return (
        <>
          <AppBar position="static" id="header">
            <Toolbar>
              <Link to="/" id="homepage">News Site Ponomarev</Link>
            </Toolbar>
            {isAuthorized
              ? (
                <>
                  <Toolbar>
                    <Link to={`/user/${authorizedId}`} id="userpage">My Page</Link>
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
                  <Toolbar>
                    <GoogleLogin
                      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                      buttonText="Sign in with Google"
                      onSuccess={onGoogleSuccess}
                      onFailure={onGoogleFailure}
                      className="google-login-button"
                    />
                  </Toolbar>
                </>
              )}
            {status ? (
              <Snackbar
                open={errorShow}
                autoHideDuration={3000}
                onClose={handleErrorClose}
                message="Google Authorization Failed"
              />
            ) : null}
          </AppBar>
          <ModalWindow />
        </>
    );
}