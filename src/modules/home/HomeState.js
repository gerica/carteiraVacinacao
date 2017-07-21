import { Map } from 'immutable';
import BebeDao from '../../dao/BebeDao';

const dao = new BebeDao();

// Initial state
const initialState = Map({
    message: '',
    bebes: null
});

// Actions
const RESET = 'HomeState/RESET';
const ATTR_BEBES = 'HomeState/ATTR_BEBES';

// Action creators
export function onReset() {
    return { type: RESET };
}
// Action creators
export function init() {
    return (dispatch) => {
        dispatch(onReset());
        dao.find().then((value) => {            
            dispatch(attrBebes(value));
        });
    };
}
export function attrBebes(value) {
    return {
        type: ATTR_BEBES,
        payload: value
    };
}

// Reducer
export default function HomeStateReducer(state = initialState, action) {
    switch (action.type) {

        case RESET:
            return initialState;
        case ATTR_BEBES:
            return state.update('bebes', () => action.payload);

        default:
            return state;
    }
}
