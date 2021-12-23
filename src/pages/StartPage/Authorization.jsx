import React, { useState, memo } from 'react';
import { FormGroup, Typography, Button, TextField } from '@mui/material';
import { signin } from '../../API';

const Authorization = () => {
    const [address, setAddress] = useState('');

    const handleAddressChange = event => {
        setAddress(event.target.value);
    };
    const handleSignin = () => {
        signin(address);
    };

    return (
        <>
        <Typography>Authorization</Typography>
            <FormGroup>
                <TextField
                    type="text"
                    label="Address"
                    value={address}
                    onChange={handleAddressChange}
                />
            </FormGroup>
            <FormGroup>
                <Button
                variant="contained"
                type="submit"
                onClick={handleSignin}
                >Sign in</Button>
            </FormGroup>
        </>
    )
};

export default memo(Authorization);