import { Map } from 'immutable';
import { NavigationActions } from 'react-navigation';
import BebeDao from '../../../dao/BebeDao';

const dao = new BebeDao();

// Initial state
const initialState = Map({
    message: '',
    bebe: null
});

// Actions
const RESET = 'ConfigBebeState/RESET';
const ATTR_BEBE = 'ConfigBebeState/ATTR_BEBE';

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

        default:
            return state;
    }
}
