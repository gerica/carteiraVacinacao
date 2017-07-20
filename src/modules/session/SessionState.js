import { Map } from 'immutable';

const RESET_STATE = 'SessionState/RESET';
const INITIALIZE_STATE = 'SessionState/INITIALIZE';
const ATTR_MESSAGE = 'SessionState/ATTR_MESSAGE';
const ATTR_BEBE = 'SessionState/ATTR_BEBE';

//Exemplo de como export function para o bindActionCreators
export const exemple = banner => {
  const b = banner;
  return b;
};


// Initial state
const initialState = Map({
  isReady: false,
  message: '',
  bebe: null
});

export function resetSessionStateFromSnapshot(state) {
  return {
    type: RESET_STATE,
    payload: state
  };
}

export function initializeSessionState() {
  return {
    type: INITIALIZE_STATE
  };
}

export function setMessage(value) {
  return {
    type: ATTR_MESSAGE,
    payload: value
  };
}
export function attrBebe(value) {
  return {
    type: ATTR_BEBE,
    payload: value
  };
}


// Reducer
export default function SessionStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALIZE_STATE:
      return initialState;
    case RESET_STATE:
      return state.set('isReady', true);
    case ATTR_MESSAGE:
      return state.update('message', () => action.payload);
    case ATTR_BEBE:
      return state.update('bebe', () => action.payload);

    default:
      return state;
  }
}
