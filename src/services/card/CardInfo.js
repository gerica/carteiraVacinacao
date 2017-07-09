import content from './content';

export function getRandomCard() {
    const max = content.infos.length - 1;
    const min = 0;
    const range = max - min;

    const i = Math.floor(Math.random() * (range + 1)) + min;
    return content.infos[i];
}
