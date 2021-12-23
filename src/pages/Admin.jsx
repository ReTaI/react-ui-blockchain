import React, { useState, memo } from 'react';
import { FormGroup, Typography, Button, TextField } from '@mui/material';
import { createHouse } from '../API';

const Admin = () => {
    const role = +localStorage.getItem('role');

    const [address, setAddress] = useState('');
    const [total, setTotal] = useState('');
    const [useful, setUseful] = useState('');

    const handleAddressChange = event => {
        setAddress(event.target.value);
    };
    const handleTotalChange = event => {
        setTotal(event.target.value);
    };
    const handleUsefulChange = event => {
        setUseful(event.target.value);
    };
    const handleCreate = () => {
        const curTotal = +total;
        const curUseful = +useful;
        if(address==='' || !curTotal || !curUseful) return;
        const curAdmin = localStorage.getItem('currentAddress');
        createHouse(address, curTotal, curUseful, curAdmin);
    };
    return (
        role===1 ? 
        <>
        <Typography>Add house</Typography>
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
                    label="Total area"
                    value={total}
                    onChange={handleTotalChange}
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    type="number"
                    label="Useful area"
                    value={useful}
                    onChange={handleUsefulChange}
                />
            </FormGroup>
            <FormGroup>
                <Button
                variant="contained"
                type="submit"
                onClick={handleCreate}
                >Create</Button>
            </FormGroup>
        </>
        : <div>Access denied</div>
    )
};

export default memo(Admin);