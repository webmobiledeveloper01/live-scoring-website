import { SET_AUTH } from '../actions/types';

// Initial State Alerts
const initialState = {
    name:"",
    authentification:false,
    role:"common"
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_AUTH:
            return payload;
        default:
            return state;
    }
}