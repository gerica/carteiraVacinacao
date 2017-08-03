import { Map } from 'immutable';
import { NavigationActions } from 'react-navigation';
import BebeDao from '../../../dao/BebeDao';
import UtilsDao from '../../../dao/UtilsDao';

const utilsDao = new UtilsDao();
const dao = new BebeDao();

// Initial state
const initialState = Map({
    message: '',
    bebe: null,
    timeForNotification: 3
});

// Actions
const RESET = 'ConfigBebeState/RESET';
const ATTR_BEBE = 'ConfigBebeState/ATTR_BEBE';
const ATTR_TIME_FOR_NOTIFICATION = 'ConfigBebeState/ATTR_TIME_FOR_NOTIFICATION';

// Action creators
export function onReset() {
    return { type: RESET };
}
// Action creators
export function init(bebe) {
    return (dispatch) => {
        // dispatch(onReset());
        utilsDao.find(bebe.nome)
            .then((value) => {
                if (value) {
                    dispatch(attrTimeForNotification(value));
                } else {
                    dispatch(attrTimeForNotification(3));
                }
            }).catch(() => console.log('error'));
    };
}
export function attrBebe(value) {
    return {
        type: ATTR_BEBE,
        payload: value
    };
}
export function attrTimeForNotification(value) {
    return {
        type: ATTR_TIME_FOR_NOTIFICATION,
        payload: value
    };
}
export function changeTimeForNotification(bebe, value) {
    return (dispatch) => {
        utilsDao.save(bebe.nome, value).then(() => dispatch(attrTimeForNotification(value)));
    };
}
export function onApagar(bebe, navigation) {
    return (dispatch) => {
        dao.find().then((result) => {
            const findBebe = b => b.nome === bebe.nome;
            const bebeBd = result.find(findBebe);
            const indexOfBebe = result.indexOf(bebeBd);

            const novaLista = result;
            novaLista.splice(indexOfBebe, 1);

            dao.save(novaLista).then(() => {
                // dispatch(onReset());
                navigation.dispatch(NavigationActions.navigate({ routeName: 'Home' }));
            });
        });
        // 
    };
}

// Reducer
export default function ConfigBebeStateReducer(state = initialState, action) {
    switch (action.type) {

        case RESET:
            return initialState;
        case ATTR_BEBE:
            return state.update('bebe', () => action.payload);
        case ATTR_TIME_FOR_NOTIFICATION:
            return state.update('timeForNotification', () => action.payload);

        default:
            return state;
    }
}
