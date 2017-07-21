import { ApplicationStyles, Colors, Fonts } from '../Themes';

const HomeStyles = {
    ...ApplicationStyles,
    containerBotaoBebe: {
        height: 50,
        width: '45%',
        paddingHorizontal: 1,
        // borderWidth: 1
    },
    botaoNovoBebe: {
        ...ApplicationStyles.screen.buttonDefault1,
        backgroundColor: Colors.yellow5,

    },
    textNovoBebe: {
        ...Fonts.style.normal,
        color: Colors.button,
    },

};

export default HomeStyles;
