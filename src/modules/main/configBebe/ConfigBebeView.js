import React from 'react';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { Text, View, Alert, Picker } from 'react-native';
import { CardItem, Body, Card, Header, Right, Button, Title, Footer, FooterTab } from 'native-base';
import moment from 'moment';
import { ApplicationStyles, Colors } from '../../../components/Themes';
import I18n from '../../../i18n/i18n';
import MainComponent from '../MainComponent';
import { MENINA } from '../../../model/bebe';
import * as vacinaServices from '../../../services/vacina/VacinaService';

class ConfigBebeView extends MainComponent {
    static navigationOptions = {
        header: null,
        drawerLabel: I18n.t('configBebe.menu'),
        drawerIcon: () => (
            <View >
                <IconIonicons
                    name="md-settings"
                    size={20} color={Colors.black}
                />
            </View>
        ),
    };
    componentWillMount() {
        const { bebe } = this.props;
        this.props.actions.init(bebe);
    }
    onTimeForNotiticatin(value) {
        const { bebe } = this.props;
        this.props.actions.changeTimeForNotification(bebe, value);
        vacinaServices.proximaNotificacao(bebe, value);
    }
    onApagar() {
        const { bebe, navigation } = this.props;
        this.props.actions.onApagar(bebe, navigation);
    }
    renderAlertApagar() {
        return (
            // Works on both iOS and Android
            Alert.alert(
                'Apagar Bebe',
                `Confirmar apagar o(a) bebe, ${this.props.bebe.nome}?`,
                [
                    { text: 'Cancel' },
                    { text: 'OK', onPress: this.onApagar.bind(this) },
                ],
                { cancelable: true }
            )
        );
    }
    render() {
        const { bebe, timeForNotification } = this.props;
        return (
            <View style={ApplicationStyles.style.screen.mainContainer}>
                <Header style={this.getStyleBebe()}>
                    <Body>
                        <Title>{`${I18n.t('configBebe.title')} `}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.onMenu.bind(this)}>
                            <IconIonicons
                                name="md-menu"
                                size={20} color={Colors.white}
                            />
                        </Button>
                    </Right>
                </Header>
                <View style={styles.containerNotificacao}>
                    <Text>
                        Seleciona o prazo para a notificação
                    </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={timeForNotification}
                        onValueChange={this.onTimeForNotiticatin.bind(this)}
                    >
                        <Picker.Item label="2 dias antes" value={1} />
                        <Picker.Item label="5 dias antes" value={2} />
                        <Picker.Item label="1 semana antes" value={3} />
                    </Picker>
                </View>
                <Card>
                    <CardItem header>
                        <Text>Nome: {bebe.nome} {bebe.sobrenome}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>Data de Nascimento: {moment(bebe.dataNascimento).format('DD-MM-YYYY')}</Text>
                            <Text>Sexo: {bebe.sexo === MENINA ? 'Menina' : 'Menino'}</Text>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Button
                            rounded
                            block
                            style={styles.botaoApagar}
                            onPress={this.renderAlertApagar.bind(this)}
                        >
                            <Text style={ApplicationStyles.padrao.textNovoBebe}>{I18n.t('configBebe.apagar')}</Text>
                        </Button>
                    </CardItem>
                </Card>
                <Footer>
                    <FooterTab style={this.getStyleBebe()} >
                        <Body>
                            <Title>{I18n.t('home.footer')}</Title>
                        </Body>
                    </FooterTab>
                </Footer>

            </View>
        );
    }
}

const styles = {
    botaoApagar: {
        ...ApplicationStyles.padrao.botaoPadrao,
        backgroundColor: Colors.vermelho.c5,
    },
    containerNotificacao: {
        // ...ApplicationStyles.style.screen.mainContainer,
        marginVertical: 1,
        marginHorizontal: 3,
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
    }
};

export default ConfigBebeView;
