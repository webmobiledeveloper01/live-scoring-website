import { SET_SIGN_MODAL } from '../actions/types';

// Initial State Alerts
const initialState = {
    open: false
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_SIGN_MODAL:
            return payload;
        default:
            return state;
    }
}