import KitSaude3 from './KitSaude3';

const chegada = require('../../../resources/img/chegada.jpg');
const closeUpFather = require('../../../resources/img/close_up_father.jpg');
const coracao = require('../../../resources/img/coracao.jpg');
const cute = require('../../../resources/img/cute.jpg');
const enfermeira = require('../../../resources/img/efermeira.jpg');
const elefante = require('../../../resources/img/elefante.jpg');
const fundo = require('../../../resources/img/fundo.jpg');
const fundo2 = require('../../../resources/img/fundo2.jpg');
const gravida = require('../../../resources/img/gravida.jpg');
const livroArvore = require('../../../resources/img/livro_arvore.jpg');
const malaVacina = require('../../../resources/img/mala_vacina.jpg');
const meninoMenina = require('../../../resources/img/menino_menina.jpg');
const ovos = require('../../../resources/img/ovos.jpg');
const sapatoMadeira = require('../../../resources/img/sapato_madeira.jpg');
const sapatoMenina = require('../../../resources/img/sapato_menina.jpg');
const sapatoMenino = require('../../../resources/img/sapato_menino.jpg');

export default class Imagens {
    static chegada = chegada;
    static closeUpFather = closeUpFather;
    static cute = cute;
    static enfermeira = enfermeira;
    static elefante = elefante;
    static fundo = fundo;
    static fundo2 = fundo2;
    static gravida = gravida;
    static livroArvore = livroArvore;
    static malaVacina = malaVacina;
    static meninoMenina = meninoMenina;
    static sapatoMadeira = sapatoMadeira;
    static sapatoMenina = sapatoMenina;
    static sapatoMenino = sapatoMenino;
    static ovos = ovos;
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
    static getKitSaude3() {
        return KitSaude3;
    }
}    
