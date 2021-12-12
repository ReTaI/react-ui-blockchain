import BasicActionTypes from "../actions/BasicActionTypes";

export const signin = (role, address) => {
    return {
        type: BasicActionTypes.SIGNIN,
        address,
        role,
    }
};

export const signup = (role, address) => {
    return {
        type: BasicActionTypes.SIGNUP,
        address,
        role,
    }
};