import { Map } from 'immutable';
import LogginService from '../../services/LogginService';

const log = new LogginService();

// Initial state
const initialState = Map({
    message: '',
    loading: false,
});

// Actions
const RESET = 'LoginState/RESET';
const ATTR_MESSAGE = 'LoginState/ATTR_MESSAGE';
const ATTR_LOADING = 'LoginState/ATTR_LOADING';

// Action creators
export function attrMessageChange(text) {
    return {
        type: ATTR_MESSAGE,
        payload: text
    };
}
export function attrLoading(value) {
    return {
        type: ATTR_LOADING,
        payload: value
    };
}
export function onReset() {
    return { type: RESET };
}
export function init() {
    log.logInfo('LoginState - init()');
    return (dispatch) => {
        dispatch(attrMessageChange(''));
        dispatch(attrLoading(false));
        dispatch(onReset());
    };
}

// Reducer
export default function LoginStateReducer(state = initialState, action) {
    switch (action.type) {
        case ATTR_MESSAGE:
            return state.update('message', () => action.payload);
        case ATTR_LOADING:
            return state.update('loading', () => action.payload);
        case RESET:
            return initialState;

        default:
            return state;
    }
}
