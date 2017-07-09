import { Map } from 'immutable';
import BebeDao from '../../../dao/BebeDao';

const dao = new BebeDao();

// Initial state
const initialState = Map({
    message: '',
    bebe: null
});

// Actions
const RESET = 'HomeState/RESET';
const ATTR_BEBE = 'HomeState/ATTR_BEBE';

// Action creators
export function onReset() {
    return { type: RESET };
}
// Action creators
export function init() {
    return (dispatch) => {
        dispatch(onReset());
    };
}
export function attrBebe(value) {
    return {
        type: ATTR_BEBE,
        payload: value
    };
}

// Reducer
export default function DashboradStateReducer(state = initialState, action) {
    switch (action.type) {

        case RESET:
            return initialState;
        case ATTR_BEBE:
            return state.update('bebe', () => action.payload);

        default:
            return state;
    }
}
