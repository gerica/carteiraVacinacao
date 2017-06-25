import Colors from './Colors';
import Fonts from './Fonts';

const ApplicationStyles = {
    screen: {
        mainContainer: {
            flex: 1,
            backgroundColor: Colors.background
        },
        circleLogo: {
            backgroundColor: 'transparent',
            width: 50,
            height: 50,
            borderRadius: 100 / 2,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#59c1df',
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
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 0
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
        textStyleError: {
            fontSize: 20,
            alignSelf: 'center',
            color: '#ed7375'
        },
        textStyleSuccess: {
            fontSize: 20,
            alignSelf: 'center',
            color: '#ffffff'
        },
        textStyleWarning: {
            fontSize: 20,
            alignSelf: 'center',
            color: '#CCFF33'
        },
    },
    header: {
        circleLogo: {
            backgroundColor: 'transparent',
            width: 20,
            height: 20,
            borderRadius: 100 / 2,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: Colors.borderLogo,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        textLogo: {
            ...Fonts.style.normal,
            color: '#FFFFFF',
            fontWeight: 'bold',
            marginRight: '10%'
        },
        navBar: {
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        title: {
            ...Fonts.style.h4,
            color: Colors.headerTitle,
            fontWeight: 'bold'
        },
    },
    menu: {
        circleMenu: {
            backgroundColor: Colors.circleMenu,
            width: 24,
            height: 24,
            borderRadius: 100 / 2,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    footer: {
        leftContainerColor: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            backgroundColor: Colors.textGreen,
            margin: 1,
            // borderWidth: 1
        },
        rightContainerColor: {
            flex: 1,
            margin: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: Colors.textGreen,
            // borderWidth: 1
        },
        centerContainer: {
            width: '100%',
            height: 35,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 1,
        },
        buttonStyle: {
            width: 60,
            height: 35,
            margin: 5,
            backgroundColor: Colors.textGreen
        },
        textStyle: {
            ...Fonts.style.noramlCenter,
        }
    }
};

export default ApplicationStyles;
