// KIT SAUDE 3
// const abservente = require('../../../resources/img/kit_saude_3/absorvente.png');
const calendario = require('../../../resources/img/kit_saude_3/calendario.png');
const coracao = require('../../../resources/img/kit_saude_3/coracao.png');
const curativo = require('../../../resources/img/kit_saude_3/curativo.png');
const dente = require('../../../resources/img/kit_saude_3/dente.png');
const dna = require('../../../resources/img/kit_saude_3/dna.png');
const enfermeira = require('../../../resources/img/kit_saude_3/enfermeira.png');
const estetoscopio = require('../../../resources/img/kit_saude_3/estetoscopio.png');
const exame = require('../../../resources/img/kit_saude_3/exame.png');
const injecao = require('../../../resources/img/kit_saude_3/injecao.png');
const malaMedico = require('../../../resources/img/kit_saude_3/mala_medico.png');
const medico = require('../../../resources/img/kit_saude_3/medico.png');
const receita = require('../../../resources/img/kit_saude_3/receita.png');
const remedio = require('../../../resources/img/kit_saude_3/remedio.png');
const remedioPote = require('../../../resources/img/kit_saude_3/remedio_pote.png');
const soro = require('../../../resources/img/kit_saude_3/soro.png');

export default class KitSaude3 {
    // abservente = abservente;
    static calendario = calendario;
    static curativo = curativo;
    static dente = dente;
    static dna = dna;
    static enfermeira = enfermeira;
    static estetoscopio = estetoscopio;
    static exame = exame;
    static injecao = injecao;
    static malaMedico = malaMedico;
    static medico = medico;
    static receita = receita;
    static remedio = remedio;
    static remedioPote = remedioPote;
    static soro = soro;
    static coracao = coracao;


    constructor() {
        throw new Error('Esta classe não deve ser instanciada, pois seu métodos são estáticos');
    }

    static getImgRandom() {
        const max = Object.values(this).length - 1;
        const min = 0;
        const range = max - min;

        const i = Math.floor(Math.random() * (range + 1)) + min;
        return Object.values(this)[i];
    }
    static getForIndex(i) {
        return Object.values(this)[i];
    }
}
