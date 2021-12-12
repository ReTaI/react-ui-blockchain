import BasicActionTypes from '../actions/BasicActionTypes';
const initialState = {
    isAuthorized: false,
};

export default function basicReducer(state = initialState, action) {
    switch(action.type) {
        case BasicActionTypes.SIGNUP:
            return { ...state, role: action.payload };
        case BasicActionTypes.SIGNIN:
            return { ...state, role: action.payload };
        default:
            return state;
    }
}