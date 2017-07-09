import dados from './vacinas';
import Vacina from '../../model/vacina';

const chaveVacinas = [
    'Ao nascer', '2 meses', '3 meses',
    '4 meses', '5 meses', '6 meses', '9 meses',
    '12 meses', '15 meses', '4 Anos', '9 Anos'
];

export function criarListaInicial() {    
    const criarVacina = (dado) => {        
        const vacina = new Vacina();
        vacina.idade = dado.idade;
        vacina.vacinas = dado.vacinas;
        vacina.doses = dado.doses;
        vacina.doencasEvitadas = dado.idade;
        return vacina;
    };
    const result = dados.vacinas.map(criarVacina);    
    return result;
}

