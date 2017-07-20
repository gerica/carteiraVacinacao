import { Map } from 'immutable';
import BebeDao from '../../../dao/BebeDao';

const dao = new BebeDao();

// Initial state
const initialState = Map({
    message: '',
    bebeVacinar: null,
});

// Actions
const RESET = 'HomeState/RESET';
const ATTR_BEBE_VACINAR = 'HomeState/ATTR_BEBE_VACINAR';

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
export function attrBebeVacinar(value) {
    return {
        type: ATTR_BEBE_VACINAR,
        payload: value
    };
}
export function attrBebeVacinaDataAplicacao(bebe, value, actionsSession) {
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

                dao.save(novaLista).then(() => {
                    dispatch(attrBebeVacinar(antigoBebe));
                    dispatch(actionsSession.attrBebe(antigoBebe));
                });
            }
        });
        // dispatch({
        //     type: ATTR_BEBE_VACINAR_VACINA_DATA_APLICACAO,
        //     value: novaListaVacina,
        // });
    };
}

// Reducer
export default function DashboradStateReducer(state = initialState, action) {
    switch (action.type) {

        case RESET:
            return initialState;
        case ATTR_BEBE_VACINAR:
            return state.update('bebeVacinar', () => action.payload);

        default:
            return state;
    }
}
