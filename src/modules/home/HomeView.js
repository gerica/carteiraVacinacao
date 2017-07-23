import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {
    Button, Right, Footer,
    Header, Body, FooterTab,
    Title
} from 'native-base';
import { Colors } from '../../components/Themes';
import HomeStyle from '../../components/Styles/HomeStyle';
import I18n from '../../i18n/i18n';
import { MENINA } from '../../model/bebe';

// const { height, width } = Dimensions.get('window');

class HomeView extends Component {

    static navigationOptions = {
        // header: null,
        drawerLabel: 'Inicial',
        drawerIcon: () => (
            <View >
                <IconIonicons
                    name="md-home"
                    size={20} color={Colors.black}
                />
            </View>
        ),
    };
    componentWillMount() {
        this.props.actions.init();
    }
    onNovoMenu() {
        const { navigate } = this.props.navigation;
        // navigate('NovoBebe');
        navigate('DrawerOpen');
    }
    onNovo() {
        const { navigate } = this.props.navigation;
        navigate('NovoBebe');        
    }
    onMain(bebe) {
        const { navigate } = this.props.navigation;
        navigate('Main', { bebe });
    }

    onTabVacina(bebe) {
        this.props.actionsSession.attrBebe(bebe);
        this.refs.tabsVeiw.goToPage(1);
        // this.forceUpdate();
    }
    getStyleBotao(bebe) {
        if (bebe.sexo === MENINA) {
            return HomeStyle.style.screen.botaoMenina;
        }
        return HomeStyle.style.screen.botaoMenino;
    }
    getButton(bebe) {
        return (
            <Button iconRight rounded style={this.getStyleBotao(bebe)} onPress={this.onMain.bind(this, bebe)}>
                <Text style={HomeStyle.style.screen.textWhite}>{bebe.nome}</Text>
                <IconIonicons name='ios-heart-outline' size={30} style={{ marginLeft: 0, paddingRight: 10 }} color={Colors.white} />
            </Button>
        );
    }
    getButtonNovoBebe() {
        return (
            <Button iconRight rounded style={HomeStyle.style.botaoNovoBebe} onPress={this.onNovo.bind(this)}>
                <Text style={HomeStyle.style.textNovoBebe}>Novo Bebe</Text>
                <IconIonicons name='md-people' size={30} style={{ marginLeft: 0, paddingRight: 10 }} color={Colors.button} />
            </Button>
        );
    }
    renderButtonBebes() {
        const { bebes } = this.props;
        if (!bebes) {
            return (
                <View style={[HomeStyle.style.screen.centerContainer]}>
                    <View style={HomeStyle.style.screen.rowCenter}>
                        <View style={HomeStyle.style.containerBotaoBebe}>
                            {this.getButtonNovoBebe()}
                        </View>
                    </View>
                </View>
            );
        }
        const result = [];
        let adicionarBotao = false;

        for (let i = 0; i < bebes.length; i++) {
            adicionarBotao = false;
            result[i] = (
                <View key={i} style={HomeStyle.style.screen.rowCenter}>
                    <View style={HomeStyle.style.containerBotaoBebe}>
                        {this.getButton(bebes[i])}
                    </View>
                    <View style={HomeStyle.style.containerBotaoBebe}>
                        {adicionarBotao = ++i < bebes.length}
                        {adicionarBotao ? this.getButton(bebes[i]) : this.getButtonNovoBebe()}
                    </View>
                </View>
            );
        }
        if (adicionarBotao) {
            result[result.length + 1] = (
                <View key={result.length + 1} style={HomeStyle.style.screen.rowCenter}>
                    <View style={HomeStyle.style.containerBotaoBebe}>
                        {this.getButtonNovoBebe()}
                    </View>
                    <View style={HomeStyle.style.containerBotaoBebe} />
                </View>);
        }
        return (
            <View style={[HomeStyle.style.screen.centerContainer]}>
                {result}
            </View>);
    }
    render() {
        // console.log(this.props);
        return (
            <View style={[HomeStyle.style.screen.mainContainer, { backgroundColor: Colors.amarelo.c1 }]}>
                <Header style={{ backgroundColor: Colors.headerBackgroud }} >
                    <Body>
                        <Title>{I18n.t('home.title')}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.onNovoMenu.bind(this)}>
                            <IconIonicons
                                name="md-menu"
                                size={20} color={Colors.white}
                            />
                        </Button>
                    </Right>
                </Header>
                {this.renderButtonBebes()}
                <Footer>
                    <FooterTab style={{ backgroundColor: Colors.headerBackgroud }} >
                        <Body>
                            <Title>{I18n.t('home.footer')}</Title>
                        </Body>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}

export default HomeView;

