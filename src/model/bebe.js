import { List } from 'immutable';

export default class Bebe {
    nome = '';
    sobrenome = '';
    dataNascimento = '';
    sexo = '';
    vacinas = new List();
}

export const MENINO = 'M';
export const MENINA = 'F';
