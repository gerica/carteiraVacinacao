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

export function calcProximaData(bebe, vacinas) {
    const calcDate = v => {
        const dataNascimento = moment(bebe.dataNascimento, 'DD-MM-YYYY');
        const vacina = criarVacina(v);
        switch (vacina.idade) {
            case chaveVacinas[0]:
                vacina.dataPrevista = dataNascimento;
                break;
            case chaveVacinas[1]:
                vacina.dataPrevista = dataNascimento.add(2, 'months');
                break;
            case chaveVacinas[2]:
                vacina.dataPrevista = dataNascimento.add(3, 'months');
                break;
            case chaveVacinas[3]:
                vacina.dataPrevista = dataNascimento.add(4, 'months');
                break;
            case chaveVacinas[4]:
                vacina.dataPrevista = dataNascimento.add(5, 'months');
                break;
            case chaveVacinas[5]:
                vacina.dataPrevista = dataNascimento.add(6, 'months');
                break;
            case chaveVacinas[6]:
                vacina.dataPrevista = dataNascimento.add(9, 'months');
                break;
            case chaveVacinas[7]:
                vacina.dataPrevista = dataNascimento.add(12, 'months');
                break;
            case chaveVacinas[8]:
                vacina.dataPrevista = dataNascimento.add(15, 'months');
                break;
            case chaveVacinas[9]:
                vacina.dataPrevista = dataNascimento.add(4, 'years');
                break;
            case chaveVacinas[10]:
                vacina.dataPrevista = dataNascimento.add(9, 'years');
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
    console.log(result);

    return result;
}

function criarVacina(dado) {
    const vacina = new Vacina();
    vacina.idade = dado.idade;
    vacina.nome = dado.nome;
    vacina.doses = dado.doses;
    vacina.doencasEvitadas = dado.idade;
    vacina.opcional = dado.opcional || false;
    vacina.somenteMenina = dado.somenteMenina || false;
    return vacina;
}

