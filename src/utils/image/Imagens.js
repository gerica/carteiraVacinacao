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
    chegada = chegada;
    closeUpFather = closeUpFather;
    cute = cute;
    enfermeira = enfermeira;
    elefante = elefante;
    fundo = fundo;
    fundo2 = fundo2;
    gravida = gravida;
    livroArvore = livroArvore;
    malaVacina = malaVacina;
    meninoMenina = meninoMenina;
    sapatoMadeira = sapatoMadeira;
    sapatoMenina = sapatoMenina;
    sapatoMenino = sapatoMenino;
    ovos = ovos;
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
    getKitSaude3() {
        return new KitSaude3();
    }
}    
