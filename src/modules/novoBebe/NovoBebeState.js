import { Map, List } from 'immutable';
import Bebe from '../../model/bebe.js';
import BebeDao from '../../dao/BebeDao';

// Initial state
const initialState = Map({
    message: '',
    onLoading: false,
    bebe: Map(new Bebe())
});

// Actions
const RESET = 'NovoBebeState/RESET';
const ATTR_ON_LOADING = 'NovoBebeState/ATTR_ON_LOADING';
const ATTR_BEBE = 'NovoBebeState/ATTR_BEBE';
const ATTR_BEBE_NOME = 'NovoBebeState/ATTR_BEBE_NOME';
const ATTR_BEBE_SOBRENOME = 'NovoBebeState/ATTR_BEBE_SOBRENOME';
const ATTR_BEBE_DATA_NASCIMENTO = 'NovoBebeState/ATTR_BEBE_DATA_NASCIMENTO';
const ATTR_BEBE_SEXO = 'NovoBebeState/ATTR_BEBE_SEXO';

const dao = new BebeDao();

// Action creators
export function init() {
    return (dispatch) => {
        dispatch(onReset());
        // dao.delete();
        // dispatch(attrBebe(new Bebe()));
    };
}

// Action creators
export function onReset() {
    return { type: RESET };
}
export function attrOnLoading(value) {
    return {
        type: ATTR_ON_LOADING,
        payload: value
    };
}
export function attrBebe(value) {
    return {
        type: ATTR_BEBE,
        payload: value
    };
}
export function attrBebeNome(value) {
    return {
        type: ATTR_BEBE_NOME,
        payload: value
    };
}
export function attrBebeSobrenome(value) {
    return {
        type: ATTR_BEBE_SOBRENOME,
        payload: value
    };
}
export function attrBebeDataNascimento(value) {
    return {
        type: ATTR_BEBE_DATA_NASCIMENTO,
        payload: value
    };
}
export function attrBebeSexo(value) {
    return {
        type: ATTR_BEBE_SEXO,
        payload: value
    };
}
// Action creators
export function save(bebe, navigate) {
    return (dispatch) => {
        dispatch(attrOnLoading(true));
        dao.find().then((value) => {
            let list;
            console.log(value);
            if (!value) {
                list = List();
            } else {
                list = value;
            }
            const newList = list.push(bebe);
            console.log(newList);
            dao.save(newList).then(() => navigate('Home'));
        });
        dispatch(onReset());
        dispatch(attrOnLoading(false));
        // dispatch(attrBebe(new Bebe()));
    };
}


// Reducer
export default function NovoBebeStateReducer(state = initialState, action) {
    switch (action.type) {

        case RESET:
            return initialState;
        case ATTR_ON_LOADING:
            return state.update('onLoading', () => action.payload);
        case ATTR_BEBE:
            return state.update('bebe', () => action.payload);
        case ATTR_BEBE_NOME:
            return state.updateIn(['bebe', 'nome'], () => action.payload);
        case ATTR_BEBE_SOBRENOME:
            return state.updateIn(['bebe', 'sobrenome'], () => action.payload);
        case ATTR_BEBE_DATA_NASCIMENTO:
            return state.updateIn(['bebe', 'dataNascimento'], () => action.payload);
        case ATTR_BEBE_SEXO:
            return state.updateIn(['bebe', 'sexo'], () => action.payload);
        default:
            return state;
    }
}
