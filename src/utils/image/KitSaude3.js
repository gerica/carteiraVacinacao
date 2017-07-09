// KIT SAUDE 2
// const abservente = require('../../../resources/img/kit_saude_3/absorvente.jpg');
const calendario = require('../../../resources/img/kit_saude_3/calendario.jpg');
const coracao = require('../../../resources/img/kit_saude_3/coracao.jpg');
const curativo = require('../../../resources/img/kit_saude_3/curativo.jpg');
const dente = require('../../../resources/img/kit_saude_3/dente.jpg');
const dna = require('../../../resources/img/kit_saude_3/dna.jpg');
const enfermeira = require('../../../resources/img/kit_saude_3/enfermeira.jpg');
const estetoscopio = require('../../../resources/img/kit_saude_3/estetoscopio.jpg');
const exame = require('../../../resources/img/kit_saude_3/exame.jpg');
const injecao = require('../../../resources/img/kit_saude_3/injecao.jpg');
const malaMedico = require('../../../resources/img/kit_saude_3/mala_medico.jpg');
const medico = require('../../../resources/img/kit_saude_3/medico.jpg');
const receita = require('../../../resources/img/kit_saude_3/receita.jpg');
const remedio = require('../../../resources/img/kit_saude_3/remedio.jpg');
const remedioPote = require('../../../resources/img/kit_saude_3/remedio_pote.jpg');
const soro = require('../../../resources/img/kit_saude_3/soro.jpg');

export default class KitSaude3 {
    // abservente = abservente;
    calendario = calendario;
    curativo = curativo;
    dente = dente;
    dna = dna;
    enfermeira = enfermeira;
    estetoscopio = estetoscopio;
    exame = exame;
    injecao = injecao;
    malaMedico = malaMedico;
    medico = medico;
    receita = receita;
    remedio = remedio;
    remedioPote = remedioPote;
    soro = soro;
    coracao = coracao;

    getImgRandom() {
        const max = Object.values(this).length - 1;
        const min = 0;
        const range = max - min;

        const i = Math.floor(Math.random() * (range + 1)) + min;
        return Object.values(this)[i];
    }
    getForIndex(i) {
        return Object.values(this)[i];
    }
}
