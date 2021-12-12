import BasicActionTypes from "../actions/BasicActionTypes";

export const signin = (role, address) => {
    return {
        type: BasicActionTypes.SIGNIN,
        address,
        role,
    }
}