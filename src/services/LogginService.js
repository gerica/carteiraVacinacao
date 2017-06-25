/* global __DEV__ */
export default class LogginService {
    logInfo(...args) {
        if (__DEV__) {
            console.log.apply(this, args);
        }
    }
    logWarn(...args) {
        if (__DEV__) {
            console.warn.apply(this, args);
        }
    }
    logError(...args) {
        if (__DEV__) {
            console.error.apply(this, args);
        }
    }

}
