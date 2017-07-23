import React from 'react';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { Text, View, Alert } from 'react-native';
import { CardItem, Body, Card, Header, Right, Button, Title, Footer, FooterTab } from 'native-base';
import moment from 'moment';
import { ApplicationStyles, Colors } from '../../../components/Themes';
import I18n from '../../../i18n/i18n';
import MainComponent from '../MainComponent';
import { MENINA } from '../../../model/bebe';

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
        const { bebe } = this.props;
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
    }
}

export default ConfigBebeView;
