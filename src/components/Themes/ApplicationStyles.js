import Colors from './Colors';
import Fonts from './Fonts';

const padrao = {
    botaoPadrao: {
        opacity: 1,
        width: '100%',
        backgroundColor: Colors.yellow5,
    },
    textNovoBebe: {
        ...Fonts.style.normal,
        color: Colors.button,
    },
    textStyleError: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#ed7375'
    },
    textStyleSuccess: {
        fontSize: 20,
        alignSelf: 'center',
        color: Colors.white,
    },
    textStyleWarning: {
        fontSize: 20,
        alignSelf: 'center',
        color: Colors.sunFlower
    },
};


const style = {
    screen: {
        mainContainer: {
            flex: 1,
            // backgroundColor: Colors.background
        },
        circleLogo: {
            backgroundColor: 'transparent',
            // width: 50,
            // height: 50,
            borderRadius: 100 / 2,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: Colors.amarelo.c13,
        },
        leftContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            // borderWidth: 1
        },
        rightContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            // borderWidth: 1
        },
        centerContainer: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // borderBottomWidth: 1
        },
        rowCenter: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 1
        },
        rowSpaceBetween: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // borderWidth: 1
        },
        columnCenter: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        marginJusiify: {
            marginTop: '5%',
            marginLeft: '10%',
            marginRight: '10%',
            borderBottomWidth: 0,
            // borderWidth: 1
        },
        botaoMenino: {
            ...padrao.botaoPadrao,
            backgroundColor: Colors.menino.c26,
        },
        botaoMenina: {
            ...padrao.botaoPadrao,
            backgroundColor: Colors.menina.c8,
        },

        textWhite: {
            ...Fonts.style.normalBold,
            color: Colors.white,
        },

    },
    header: {},
    footer: {}
};

export default { style, padrao };
