import { Map } from 'immutable';

// Initial state
const initialState = Map({
    message: ''
});

// Actions
const RESET = 'NovoBebeState/RESET';

// Action creators
export function onReset() {
    return { type: RESET };
}

// Reducer
export default function NovoBebeStateReducer(state = initialState, action) {
    switch (action.type) {

        case RESET:
            return initialState;

        default:
            return state;
    }
}
