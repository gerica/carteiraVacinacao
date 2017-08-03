import React from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet,
    ScrollView,
    Alert,
    DatePickerIOS,
    Platform,
    TouchableWithoutFeedback,
    DatePickerAndroid
} from 'react-native';
import {
    Container, Content, Body, Button, Footer, FooterTab,
    Left, Header, Icon, Title, Item, Label
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ApplicationStyles, Colors } from '../../../components/Themes';
import * as vacinaServices from '../../../services/vacina/VacinaService';
import Row from './Row';
import I18n from '../../../i18n/i18n';
import MainComponent from '../MainComponent';

class RealizarVacinaView extends MainComponent {
    static navigationOptions = {
        header: null,
    };

    componentWillMount() {
        this.props.actions.attrDataAplicacao(new Date());
    }

    getProximasVacinas() {
        const proximaVacina = vacinaServices.getProximas(this.props.bebe);
        if (!proximaVacina) {
            return;
        }

        return proximaVacina;
    }
    onPodeVacinar(rowData, rowID) {
        const proximaVacina = this.getProximasVacinas();
        if (!proximaVacina) {
            return;
        }

        const loopVacinas = v => {
            if (!v.dataAplicacao) {
                return true;
            }
        };

        const vacinasFazer = proximaVacina.filter(loopVacinas);
        if (vacinasFazer.length === 1 && (!rowData.dataAplicacao)) {
            this.renderAlertConfirmar(rowData, rowID);
        } else {
            this.onVacinar(rowData, rowID, false);
        }
    }
    onVacinar(rowData, rowID, recalcular) {
        this.props.actions.attrBebeVacinaDataAplicacao(this.props.bebe,
            rowData,
            rowID,
            recalcular,
            this.props.dataAplicacao);
    }
    onDescricaoVacina(vacina) {
        const { navigate } = this.props.navigation;
        navigate('DescricaoVacina', { vacina });
    }
    renderCardsProximaVacinasList() {
        const proximaVacina = this.getProximasVacinas();
        if (!proximaVacina) {
            return;
        }

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(proximaVacina),
        };
        const { rowLoading } = this.props;
        return (
            <ListView
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionID, rowID) =>
                    <Row
                        onPress={this.onPodeVacinar.bind(this, rowData, rowID)}
                        onPressDesc={this.onDescricaoVacina.bind(this, rowData)}
                        {...rowData}
                        rowLoading={rowLoading}
                        rowID={rowID}
                    />}
                renderSeparator={
                    (sectionId, rowId) => <View key={rowId} style={styles.separator} />
                }
            />
        );
    }
    showPicker = async (stateKey, options) => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open(options);
            if (action !== DatePickerAndroid.dismissedAction) {
                const date = new Date(year, month, day);
                this.props.actions.attrDataAplicacao(date);
            }
        } catch ({ code, message }) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    };
    dataVacinacaoString() {
        const { dataAplicacao } = this.props;
        if (dataAplicacao) {
            return dataAplicacao.toLocaleDateString();
        }
        return '';
    }
    renderAlertConfirmar(rowData, rowID) {
        return (
            // Works on both iOS and Android
            Alert.alert(
                I18n.t('realizarVacina.alertTitle'),
                `Confirmar vacinação do bebe ${this.props.bebe.nome}?`,
                [
                    { text: 'Cancelar' },
                    {
                        text: 'OK', onPress: this.onVacinar.bind(this, rowData, rowID, true)
                    },
                ],
                { cancelable: true }
            )
        );
    }
    renderDatePiker() {
        if (Platform.OS === 'ios') {
            return (<DatePickerIOS
                date={this.props.bebe.dataNascimento || new Date()}
                mode="date"
                timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                onDateChange={(date) => this.props.actions.attrBebeDataNascimento(date)}
            />);
        }
        return (
            <TouchableWithoutFeedback onPress={this.showPicker.bind(this, 'preset', { date: this.props.dataAplicacao || new Date() })}>
                <View style={[ApplicationStyles.style.screen.rightContainer, { paddingRight: '5%' }]}>
                    <MaterialIcons name='today' size={30} color={Colors.belizeHole} />
                    <Text>{this.dataVacinacaoString()}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    render() {
        // console.log(this.props);
        return (
            <Container style={ApplicationStyles.style.screen.mainContainer}>
                <Header style={this.getStyleBebe()}>
                    <Left>
                        <Button
                            transparent
                            onPress={() =>
                                this.props.navigation.goBack()
                            }
                        >
                            <Icon name='ios-arrow-round-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{`${I18n.t('realizarVacina.title')}`}</Title>
                    </Body>
                </Header>
                <ScrollView>
                    <Content style={{ padding: 1 }}>
                        <Item label={I18n.t('realizarVacina.dataAplicacao')}>
                            <Label>{I18n.t('realizarVacina.dataAplicacao')}</Label>
                            {this.renderDatePiker()}
                        </Item>
                        <Item>
                            {this.renderCardsProximaVacinasList()}
                        </Item>
                    </Content>
                </ScrollView>
                <Footer>
                    <FooterTab style={this.getStyleBebe()} >
                        <Body>
                            <Title>{I18n.t('home.footer')}</Title>
                        </Body>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    /*
     * Removed for brevity
     */
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        margin: 1,
        // backgroundColor: Colors.darkBlueGreyThree,
    },
});

export default RealizarVacinaView;
