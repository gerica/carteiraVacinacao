import { ApplicationStyles, Colors, Fonts } from '../Themes';

const style = {
    ...ApplicationStyles.style,
    ...ApplicationStyles.padrao,
    containerBotaoBebe: {
        height: 50,
        width: '45%',
        paddingHorizontal: 1,
        // borderWidth: 1
    },
    botaoNovoBebe: {
        ...ApplicationStyles.padrao.botaoPadrao,
        backgroundColor: Colors.yellow5,
    },
};

export default { style };
