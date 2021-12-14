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

export const logout = () => {
    return {
        type: BasicActionTypes.LOGOUT,
    }
};

export const setSupply = (data) => {
    return {
        type: BasicActionTypes.SET_SUPPLY,
        payload: data,
    }
}