// KIT SAUDE 3
// const abservente = require('../../../resources/img/kit_saude_3/absorvente.png');

const amostra = require('../../../resources/img/kit_saude_1/amostra.png');
const balanca = require('../../../resources/img/kit_saude_1/balanca.png');
const batom = require('../../../resources/img/kit_saude_1/batom.png');
const carro = require('../../../resources/img/kit_saude_1/carro.png');
const casa = require('../../../resources/img/kit_saude_1/casa.png');
const chinelo = require('../../../resources/img/kit_saude_1/chinelo.png');
const coracao = require('../../../resources/img/kit_saude_1/coracao.png');
const correto = require('../../../resources/img/kit_saude_1/correto.png');
const curativo = require('../../../resources/img/kit_saude_1/curativo.png');
const engrenagem = require('../../../resources/img/kit_saude_1/engrenagem.png');
const estrela = require('../../../resources/img/kit_saude_1/estrela.png');
const exame = require('../../../resources/img/kit_saude_1/exame.png');
const exames = require('../../../resources/img/kit_saude_1/exames.png');
const folha = require('../../../resources/img/kit_saude_1/folha.png');
const foto = require('../../../resources/img/kit_saude_1/foto.png');
const guardaChuva = require('../../../resources/img/kit_saude_1/guarda_chuva.png');
const lampada = require('../../../resources/img/kit_saude_1/lampada.png');
const lupa = require('../../../resources/img/kit_saude_1/lupa.png');
const mundo = require('../../../resources/img/kit_saude_1/mundo.png');
const mundo2 = require('../../../resources/img/kit_saude_1/mundo2.png');
const pe = require('../../../resources/img/kit_saude_1/pe.png');
const pirula = require('../../../resources/img/kit_saude_1/pirula.png');
const premio = require('../../../resources/img/kit_saude_1/premio.png');
const presente = require('../../../resources/img/kit_saude_1/presente.png');
const prontuario = require('../../../resources/img/kit_saude_1/prontuario.png');
const rei = require('../../../resources/img/kit_saude_1/rei.png');
const sexo = require('../../../resources/img/kit_saude_1/sexo.png');
const sol = require('../../../resources/img/kit_saude_1/sol.png');
const soro = require('../../../resources/img/kit_saude_1/soro.png');
const testoura = require('../../../resources/img/kit_saude_1/tesoura.png');

export default class KitSaude3 {
    // abservente = abservente;
    static amostra = amostra;
    static batom = batom;
    static balanca = balanca;
    static carro = carro;
    static casa = casa;
    static chinelo = chinelo;
    static correto = correto;
    static engrenagem = engrenagem;
    static estrela = estrela;
    static exames = exames;
    static folha = folha;
    static foto = foto;
    static guardaChuva = guardaChuva;
    static lampada = lampada;
    static lupa = lupa;
    static mundo = mundo;
    static mundo2 = mundo2;
    static pe = pe;
    static pirula = pirula;
    static premio = premio;
    static presente = presente;
    static prontuario = prontuario;
    static rei = rei;
    static sexo = sexo;
    static sol = sol;
    static testoura = testoura;
    static curativo = curativo;
    static exame = exame;
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
    static getForIndex(nomeImagen) {
        return this[nomeImagen];
    }
}
