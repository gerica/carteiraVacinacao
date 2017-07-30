import React from 'react';
import { View, ListView, StyleSheet, ScrollView, Alert } from 'react-native';
import {
    Container, Content, Body, Button, Footer, FooterTab,
    Left, Header, Icon, Title
} from 'native-base';
import { ApplicationStyles } from '../../../components/Themes';
import * as vacinaServices from '../../../services/vacina/VacinaService';
import Row from './Row';
import I18n from '../../../i18n/i18n';
import MainComponent from '../MainComponent';

class RealizarVacinaView extends MainComponent {
    static navigationOptions = {
        header: null,
    };

    getProximasVacinas() {
        const proximaVacina = vacinaServices.getProximas(this.props.bebe);
        if (!proximaVacina) {
            return;
        }

        return proximaVacina;
    }
    onPodeVacinar(rowData, rowID) {
        // console.log(rowData);  
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
            this.onVacinar(rowData, rowID);
        }
    }
    onVacinar(rowData, rowID) {
        this.props.actions.attrBebeVacinaDataAplicacao(this.props.bebe, rowData, rowID);
    }
    onRecalcularDataProximaVacinas() {
        console.log('recalcular');
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
    renderAlertConfirmar(rowData, rowID) {
        return (
            // Works on both iOS and Android
            Alert.alert(
                'Confirmação',
                `Confirmar vacinação do bebe ${this.props.bebe.nome}?`,
                [
                    { text: 'Cancelar' },
                    {
                        text: 'OK',
                        onPress: () => {
                            this.onVacinar(rowData, rowID);
                            this.onRecalcularDataProximaVacinas();
                        }
                    },
                ],
                { cancelable: true }
            )
        );
    }

    render() {
        return (
            <ScrollView>
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
                            <Title>{`${I18n.t('vacina.realizarVacinaTitle')}`}</Title>
                        </Body>
                    </Header>
                    <Content style={{ padding: 1 }}>
                        {this.renderCardsProximaVacinasList()}
                    </Content>
                    <Footer>
                        <FooterTab style={this.getStyleBebe()} >
                            <Body>
                                <Title>{I18n.t('home.footer')}</Title>
                            </Body>
                        </FooterTab>
                    </Footer>
                </Container>
            </ScrollView>
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
