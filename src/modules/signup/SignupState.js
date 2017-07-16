import { Map } from 'immutable';
import LogginService from '../../services/LogginService';
// import I18n from '../../i18n/i18n';

const log = new LogginService();

// Initial state
const initialState = Map({
    message: '',
    typeMessage: null,
    loading: false,
});

// Actions
const RESET = 'SignupState/RESET';
const ATTR_LOADING = 'SignupState/ATTR_LOADING';
const ATTR_MESSAGE = 'SignupState/ATTR_MESSAGE';
const ATTR_TYPE_MESSAGE = 'SignupState/ATTR_TYPE_MESSAGE';
const ATTR_CURRENT_PASS = 'SignupState/ATTR_CURRENT_PASS';

// Action creators
export function init() {
    return (dispatch) => {
        log.logInfo('SignupState - init()');
        // dispatch(onReset());
        dispatch(attrCurrentPass(1));
        dispatch(attrLoading(true));
        dispatch(attrMessage(''));
        dispatch(attrTypeMessage(null));
    };
}
export function onReset() {
    return { type: RESET };
}
export function attrLoading(value) {
    return {
        type: ATTR_LOADING,
        payload: value
    };
}
export function attrMessage(value) {
    return {
        type: ATTR_MESSAGE,
        payload: value
    };
}
export function attrTypeMessage(value) {
    return {
        type: ATTR_TYPE_MESSAGE,
        payload: value
    };
}
export function attrCurrentPass(value) {
    return {
        type: ATTR_CURRENT_PASS,
        payload: value
    };
}

// Reducer
export default function SignupStateReducer(state = initialState, action) {
    switch (action.type) {
        case RESET:
            return initialState;
        case ATTR_CURRENT_PASS:
            return state.update('currentPass', () => action.payload);
        case ATTR_MESSAGE:
            return state.update('message', () => action.payload);
        case ATTR_TYPE_MESSAGE:
            return state.update('typeMessage', () => action.payload);
        case ATTR_LOADING:
            return state.update('loading', () => action.payload);

        default:
            return state;
    }
}
        // case LOADING_OFF:
        //     return state.update('loading', () => false).update('error', () => '');
