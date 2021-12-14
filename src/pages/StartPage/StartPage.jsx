import React, { memo, useState } from 'react';
import { FormGroup, TextField, Button, Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { signin, signup, logout } from '../../redux/actionCreators/basicActions';
import { authorization, registerOwner, registerSupplier } from '../../API';
import { addresses } from '../../addresses';

const StartPage = () => {
    const [ isChecked, setIsChecked ] = useState(false);

    const { role } = useSelector(store => store.basicReducer);

    const dispatch = useDispatch();
    const handleSignin = () => {
        authorization().then((data) => {
          console.log(data);
          dispatch(signin(data, addresses.owner))
        });
    };
    const handleSignup = () => {
      isChecked 
      ? registerOwner().then((data) => console.log(data)).then(() => dispatch(signup(1, addresses.owner)))
      : registerSupplier().then((data) => console.log(data)).then(() => dispatch(signup(3, addresses.supplier)))
    };
    const handleCheckChange = (event) => {
      setIsChecked(event.target.checked);
    }
    const handleLogout = () => {
      dispatch(logout());
    }

    return (
      !role
      ? (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center'}}>
            <div style={{ width: 600 }}>
      <FormGroup>
        <Button
          type="submit"
          value="submit"
          onClick={handleSignin}
        >
          SIGN IN
        </Button>
        </FormGroup>
      <FormGroup>
        <Checkbox label='Owner' checked={isChecked} onChange={handleCheckChange}/>
      </FormGroup>
      <FormGroup>
        <Button
          type="submit"
          value="submit"
          onClick={handleSignup}
        >
          SIGN UP
        </Button>
      </FormGroup>
            </div>
        </div>
      )
      : (
        <FormGroup>
        <Button
          type="submit"
          value="submit"
          onClick={handleLogout}
        >
          LOG OUT
        </Button>
      </FormGroup>
      )
    )
}

export default memo(StartPage);