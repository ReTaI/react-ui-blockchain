import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormGroup, TextField, Button, Checkbox } from '@mui/material';
import { setSupplyApi, sendMoney } from '../../API';
import { setSupply } from '../../redux/actionCreators/basicActions';

const OwnerPage = () => {
    const { supplies, address } = useSelector((store) => store.basicReducer);
    const dispatch = useDispatch();

    const [ shopName, setShopName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ month, setMonth ] = useState('');
    const [ supplier, setSupplier ] = useState('');

    const handleSupplierChange = (event) => {
        setSupplier(event.target.value);
    }
    const handleShopNameChange = (event) => {
        setShopName(event.target.value);
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    }
    const handleSetSupply = () => {
        setSupplyApi(address, shopName, description, month).then(data => dispatch(setSupply(data))).then(() => sendMoney(supplier, address));
    }

    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center' }}>
            <div style={{ width: 600 }}>
            <FormGroup>
                <TextField
                    label="Supplier Address"
                    variant="standard"
                    type="text"
                    onChange={handleSupplierChange}
                    value={supplier}
                    required />
            </FormGroup>
            <FormGroup>
                <TextField
                    label="Shop Name"
                    variant="standard"
                    type="text"
                    onChange={handleShopNameChange}
                    value={shopName}
                    required />
            </FormGroup>
            <FormGroup>
                <TextField
                    label="Description"
                    variant="standard"
                    type="text"
                    onChange={handleDescriptionChange}
                    value={description}
                    required />
            </FormGroup>
            <FormGroup>
                <TextField
                    label="Month"
                    variant="standard"
                    type="text"
                    onChange={handleMonthChange}
                    value={month}
                    required />
            </FormGroup>
            <FormGroup>
                <Button
                    type="submit"
                    value="submit"
                    onClick={handleSetSupply}
                >
                    SET SUPPLY
                </Button>
            </FormGroup>
            </div>
        <div style={{ width: 600 }}>
            {supplies?.map(supply => (
                <>
                <label>
                    {supply.toShop}
                </label>
                <label>
                    {supply.description}
                </label>
                <label>
                    {supply.month}
                </label>
                </>
            ))}
        </div>
        </div>
        </>
    );
};

export default memo(OwnerPage);
