import { Map } from 'immutable';
import axios from 'axios';
import User from '../../model/User';

// Endpoints
const END_POINT = 'http://api.neoron.co:80';
// const END_AUTH = '/Auth';

// Initial state
const initialState = Map({
    user: Map(new User()),
});

// Actions
const RESET = 'SettingsState/RESET';

// Action creators
export function onReset() {
    return { type: RESET };
}
export function init() {
    return (dispach) => {
        dispach(onReset());
    };
}

// Reducer
export default function SettingsStateReducer(state = initialState, action) {
    switch (action.type) {
        case RESET:
            return initialState;

        default:
            return state;
    }
}
