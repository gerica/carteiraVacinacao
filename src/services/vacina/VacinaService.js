import moment from 'moment';
import dados from './vacinas';
import Vacina from '../../model/vacina';

const chaveVacinas = [
    'Ao nascer', '2 meses', '3 meses',
    '4 meses', '5 meses', '6 meses', '9 meses',
    '12 meses', '15 meses', '4 anos', '9 anos'
];

export function criarListaInicial() {
    const result = dados.vacinas.map(criarVacina);
    return result;
}

export function calcProximaData(vacinas, dataParametro) {
    const calcDate = v => {
        const dataReferencia = moment(dataParametro, 'DD-MM-YYYY');
        const vacina = criarVacina(v);
        switch (vacina.idade) {
            case chaveVacinas[0]:
                vacina.dataPrevista = dataReferencia;
                break;
            case chaveVacinas[1]:
                vacina.dataPrevista = dataReferencia.add(2, 'months');
                break;
            case chaveVacinas[2]:
                vacina.dataPrevista = dataReferencia.add(3, 'months');
                break;
            case chaveVacinas[3]:
                vacina.dataPrevista = dataReferencia.add(4, 'months');
                break;
            case chaveVacinas[4]:
                vacina.dataPrevista = dataReferencia.add(5, 'months');
                break;
            case chaveVacinas[5]:
                vacina.dataPrevista = dataReferencia.add(6, 'months');
                break;
            case chaveVacinas[6]:
                vacina.dataPrevista = dataReferencia.add(9, 'months');
                break;
            case chaveVacinas[7]:
                vacina.dataPrevista = dataReferencia.add(12, 'months');
                break;
            case chaveVacinas[8]:
                vacina.dataPrevista = dataReferencia.add(15, 'months');
                break;
            case chaveVacinas[9]:
                vacina.dataPrevista = dataReferencia.add(4, 'years');
                break;
            case chaveVacinas[10]:
                vacina.dataPrevista = dataReferencia.add(9, 'years');
                break;

            default:
                break;
        }

        return vacina;
    };
    const result = vacinas.map(calcDate);
    return result;
}

export function getProxima(bebe) {
    const proxima = v => {
        for (const chave of chaveVacinas) {
            if (chave === v.idade && (!v.dataAplicacao)) {
                return v;
            }
        }
        return null;
    };
    const result = bebe.vacinas.find(proxima);

    return result;
}

export function getProximas(bebe) {
    const proxima = getProxima(bebe);
    if (proxima) {
        const filterProxima = e => proxima.idade === e.idade;
        const result = bebe.vacinas.filter(filterProxima);
        return result;
    }
    return null;
}
export function getHistorico(bebe) {
    const filterProxima = e => e.dataAplicacao;
    const result = bebe.vacinas.filter(filterProxima);
    return result;
}

export function getProximasARealizar(bebe) {
    const filterVacinasAFazer = v => !v.dataAplicacao;
    const result = bebe.vacinas.filter(filterVacinasAFazer);
    return result;
}

export function criarVacina(dado) {
    const vacina = new Vacina();
    vacina.id = dado.id;
    vacina.idade = dado.idade;
    vacina.nome = dado.nome;
    vacina.doses = dado.doses;
    vacina.doencasEvitadas = dado.doencasEvitadas;
    vacina.opcional = dado.opcional || false;
    vacina.somenteMenina = dado.somenteMenina || false;
    return vacina;
}

export function recalcularDataVacinas(bebe, dataAplicacao) {
    const vacinasARealizar = getProximasARealizar(bebe);
    const result = calcProximaData(vacinasARealizar, dataAplicacao);
    return result;
}
