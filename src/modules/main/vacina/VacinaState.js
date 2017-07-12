import { Map, List } from 'immutable';
import Bebe from '../../../model/bebe';
import Vacina from '../../../model/vacina';
import BebeDao from '../../../dao/BebeDao';
import * as vacinaService from '../../../services/vacina/VacinaService';

const dao = new BebeDao();

// Initial state
const initialState = Map({
    message: '',
    bebe: null,
    vacina: null
});

// Actions
const RESET = 'HomeState/RESET';
const ATTR_BEBE = 'HomeState/ATTR_BEBE';
const ATTR_VACINA = 'HomeState/ATTR_VACINA';
const ATTR_BEBE_VACINA_DATA_APLICACAO = 'HomeState/ATTR_BEBE_VACINA_DATA_APLICACAO';

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
export function attrVacina(value) {
    return {
        type: ATTR_VACINA,
        payload: value
    };
}
export function attrBebeVacinaDataAplicacao(bebe, value) {
    return (dispatch) => {
        dao.find().then((result) => {
            const findBebe = b => b.nome === bebe.nome;
            const antigoBebe = result.find(findBebe);
            if (antigoBebe) {
                const findVacina = vacina => value.id === vacina.id;
                const vacinaAlterar = bebe.vacinas.find(findVacina);

                const indexVacina = bebe.vacinas.indexOf(vacinaAlterar);
                if (vacinaAlterar.dataAplicacao === undefined || vacinaAlterar.dataAplicacao === null) {
                    vacinaAlterar.dataAplicacao = new Date();
                } else {
                    vacinaAlterar.dataAplicacao = null;
                }
                antigoBebe.vacinas.splice(indexVacina, 1);
                antigoBebe.vacinas.splice(indexVacina, 0, vacinaAlterar);

                const indexBebes = result.indexOf(antigoBebe);
                const novaLista = result;
                novaLista.splice(indexBebes, 1);
                novaLista.splice(indexBebes, 0, antigoBebe);

                dao.save(novaLista).then(() => dispatch(attrBebe(antigoBebe)));
            }
        });
        // dispatch({
        //     type: ATTR_BEBE_VACINA_DATA_APLICACAO,
        //     value: novaListaVacina,
        // });
    };
}

// Reducer
export default function DashboradStateReducer(state = initialState, action) {
    switch (action.type) {

        case RESET:
            return initialState;
        case ATTR_BEBE:
            return state.update('bebe', () => action.payload);
        case ATTR_VACINA:
            return state.update('vacina', () => action.payload);
        case ATTR_BEBE_VACINA_DATA_APLICACAO:
            return state.updateIn(['bebe', 'vacinas'], () => action.payload);

        default:
            return state;
    }
}
