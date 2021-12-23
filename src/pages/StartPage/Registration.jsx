import React, { useState, memo } from 'react';
import { FormGroup, Typography, Button, TextField } from '@mui/material';
import { signup } from '../../API';

const Registration = () => {
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('');

    const handleAddressChange = event => {
        setAddress(event.target.value);
    };
    const handleRoleChange = event => {
        setRole(event.target.value);
    };
    const handleSignup = () => {
        const currentRole = +role;
        if (!(currentRole>0 && currentRole<3)) {
            setRole('');
            alert('invalid role');
            return;
        }
        signup(address, role);
    };

    return (
        <>
        <Typography>Registration</Typography>
            <FormGroup>
                <TextField
                    type="text"
                    label="Address"
                    value={address}
                    onChange={handleAddressChange}
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    type="number"
                    label="Role"
                    value={role}
                    onChange={handleRoleChange}
                />
            </FormGroup>
            <FormGroup>
                <Button
                variant="contained"
                type="submit"
                onClick={handleSignup}
                >Sign Up</Button>
            </FormGroup>
        </>
    )
}

export default memo(Registration);