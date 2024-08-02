
// Initial State Alerts
const initialState = true;

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_DARK":
            return payload;
        default:
            return state;
    }
}