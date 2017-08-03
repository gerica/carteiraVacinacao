import { Map } from 'immutable';
import BebeDao from '../../../dao/BebeDao';
import * as vacinaService from '../../../services/vacina/VacinaService';

const dao = new BebeDao();

// Initial state
const initialState = Map({
    message: '',
    bebe: null,
    vacina: null,
    rowLoading: offRowLoading,
    dataAplicacao: null
});

// Actions
const RESET = 'VacinaState/RESET';
const ATTR_BEBE = 'VacinaState/ATTR_BEBE';
const ATTR_VACINA = 'VacinaState/ATTR_VACINA';
const ATTR_BEBE_VACINA_DATA_APLICACAO = 'VacinaState/ATTR_BEBE_VACINA_DATA_APLICACAO';
const ATTR_ROW_LOADING = 'VacinaState/ATTR_ROWLOADING';
const ATTR_DATA_APLICACAO = 'VacinaState/ATTR_DATA_APLICACAO';
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
export function attrDataAplicacao(value) {
    return {
        type: ATTR_DATA_APLICACAO,
        payload: value
    };
}
export function attrBebeVacinaDataAplicacao(bebe, value, rowID, recalcular, dataAplicacao) {
    return (dispatch) => {
        dispatch(attrRowLoading(rowID));
        dao.find().then((result) => {
            const findBebe = b => b.nome === bebe.nome;
            const antigoBebe = result.find(findBebe);
            if (antigoBebe) {
                toggleVacinar(bebe, value, antigoBebe, dataAplicacao);
                if (recalcular) {
                    reacalcularDataVacinas(antigoBebe, dataAplicacao);                                        
                }
                const novaLista = gerarNovaListaBebes(result, antigoBebe);
                salvarNovaListaVacinas(dispatch, novaLista, antigoBebe);
            }
        });
    };
}

function reacalcularDataVacinas(antigoBebe, dataAplicacao) {
    const novaListaVacinas = vacinaService.recalcularDataVacinas(antigoBebe, dataAplicacao);
    novaListaVacinas.forEach(e => {
        const findIndexVacina = v => v.id === e.id;
        const indexVacina = antigoBebe.vacinas.findIndex(findIndexVacina);
        antigoBebe.vacinas.splice(indexVacina, 1);
        antigoBebe.vacinas.splice(indexVacina, 0, e);
    });
}

function toggleVacinar(bebe, value, antigoBebe, dataAplicacao) {
    const findVacina = vacina => value.id === vacina.id;
    const vacinaAlterar = bebe.vacinas.find(findVacina);

    const indexVacina = bebe.vacinas.indexOf(vacinaAlterar);
    if (vacinaAlterar.dataAplicacao === undefined || vacinaAlterar.dataAplicacao === null) {
        vacinaAlterar.dataAplicacao = dataAplicacao;
    } else {
        vacinaAlterar.dataAplicacao = null;
    }
    antigoBebe.vacinas.splice(indexVacina, 1);
    antigoBebe.vacinas.splice(indexVacina, 0, vacinaAlterar);
}

function salvarNovaListaVacinas(dispatch, novaLista, antigoBebe) {
    dao.save(novaLista).then(() => {
        vacinaService.proximaNotificacao(3, antigoBebe);
        dispatch(attrBebe(antigoBebe));
        dispatch(attrRowLoading(offRowLoading));
    }).catch(() => {
        dispatch(attrRowLoading(offRowLoading));
    });
}

function gerarNovaListaBebes(result, antigoBebe) {
    const indexBebes = result.indexOf(antigoBebe);
    const novaLista = result;
    novaLista.splice(indexBebes, 1);
    novaLista.splice(indexBebes, 0, antigoBebe);
    return novaLista;
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
        case ATTR_DATA_APLICACAO:
            return state.update('dataAplicacao', () => action.payload);

        default:
            return state;
    }
}
