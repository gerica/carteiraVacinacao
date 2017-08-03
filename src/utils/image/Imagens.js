import KitSaude1 from './KitSaude1';
import KitSaude3 from './KitSaude3';

const chegada = require('../../../resources/img/chegada.png');
const closeUpFather = require('../../../resources/img/close_up_father.png');
const coracao = require('../../../resources/img/coracao.png');
const elefante = require('../../../resources/img/elefante.png');
const gravida = require('../../../resources/img/gravida.png');
const livroArvore = require('../../../resources/img/livro_arvore.png');
const sapatoMadeira = require('../../../resources/img/sapato_madeira.png');
const sapatoMenina = require('../../../resources/img/sapato_menina.png');
const sapatoMenino = require('../../../resources/img/sapato_menino.png');
const logoSistema = require('../../../resources/img/mamae_final.png');

export default class Imagens {
    static chegada = chegada;
    static closeUpFather = closeUpFather;
    static elefante = elefante;
    static gravida = gravida;
    static livroArvore = livroArvore;
    static sapatoMadeira = sapatoMadeira;
    static sapatoMenina = sapatoMenina;
    static sapatoMenino = sapatoMenino;
    static coracao = coracao;
    static logoSistema = logoSistema;

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
    static getForIndex(nomeImagen) {
        return this[nomeImagen];
    }
    static getKitSaude() {
        const i = Math.floor(Math.random() * 2);
        if (i < 1) {
            return KitSaude1;
        }
        return KitSaude3;
    }
    static getKitSaude3() {
        return KitSaude3;
    }
    static getKitSaude1() {
        return KitSaude1;
    }
}    
