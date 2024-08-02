import { SET_OPEN_RQUEST_PALYER } from '../actions/types';

// Initial State Alerts
const initialState = {
    open: false
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_OPEN_RQUEST_PALYER:
            return payload;
        default:
            return state;
    }
}