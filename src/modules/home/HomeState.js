import { Map } from 'immutable';

// Initial state
const initialState = Map({
    message: ''
});

// Actions
const RESET = 'HomeState/RESET';

// Action creators
export function onReset() {
    return { type: RESET };
}

// Reducer
export default function HomeStateReducer(state = initialState, action) {
    switch (action.type) {

        case RESET:
            return initialState;

        default:
            return state;
    }
}
