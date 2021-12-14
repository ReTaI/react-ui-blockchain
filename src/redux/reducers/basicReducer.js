import BasicActionTypes from '../actions/BasicActionTypes';
const initialState = {
    role: 0,
    address: null,
    supplies: [],
};

export default function basicReducer(state = initialState, action) {
    switch(action.type) {
        case BasicActionTypes.SIGNUP:
            return { ...state, role: action.role, address: action.address };
        case BasicActionTypes.SIGNIN:
            console.log('action', action);
            return { ...state, role: action.role, address: action.address };
        case BasicActionTypes.LOGOUT:
            return { ...state, role: 0, address: null };
        case BasicActionTypes.SET_SUPPLY:
            return { ...state, supplies: [ ...state.supplies, action.payload ]};
        default:
            return state;
    }
}