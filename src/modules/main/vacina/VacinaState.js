import { Map } from 'immutable';
import BebeDao from '../../../dao/BebeDao';

const dao = new BebeDao();

// Initial state
const initialState = Map({
    message: '',
    bebe: null,
    vacina: null,
    rowLoading: offRowLoading,

});

// Actions
const RESET = 'VacinaState/RESET';
const ATTR_BEBE = 'VacinaState/ATTR_BEBE';
const ATTR_VACINA = 'VacinaState/ATTR_VACINA';
const ATTR_BEBE_VACINA_DATA_APLICACAO = 'VacinaState/ATTR_BEBE_VACINA_DATA_APLICACAO';
const ATTR_ROW_LOADING = 'VacinaState/ATTR_ROWLOADING';
const offRowLoading = -1;

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
export function attrRowLoading(value) {
    return {
        type: ATTR_ROW_LOADING,
        payload: value
    };
}
export function attrBebeVacinaDataAplicacao(bebe, value, rowID) {
    return (dispatch) => {
        dispatch(attrRowLoading(rowID));
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

                dao.save(novaLista).then(() => {
                    dispatch(attrBebe(antigoBebe));
                    dispatch(attrRowLoading(offRowLoading));
                }).catch(() => {
                    dispatch(attrRowLoading(offRowLoading));
                });
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
        case ATTR_ROW_LOADING:
            return state.update('rowLoading', () => action.payload);

        default:
            return state;
    }
}
