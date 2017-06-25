import { createLogger } from 'redux-logger';

// log actions in development mode
/* global __DEV__ */
export default createLogger({
  collapsed: true,

  // only log in development mode
  predicate: () => __DEV__,

  level: 'log', // console's level

  // transform immutable state to plain objects
  stateTransformer: state => state.toJS(),

  // transform immutable action payloads to plain objects
  actionTransformer: action =>
    action && action.payload && action.payload.toJS
      ? { ...action, payload: action.payload.toJS() }
      : action
});
