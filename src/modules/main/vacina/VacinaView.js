import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, TouchableHighlight } from 'react-native';
import {
    Container, Content, CardItem, Body, Card,
    Thumbnail, Left
} from 'native-base';
import moment from 'moment';
import { ApplicationStyles, Colors } from '../../../components/Themes';
import * as vacinaServices from '../../../services/vacina/VacinaService';
import Row from './Row';
import Imagens from '../../../utils/image/Imagens';
import I18n from '../../../i18n/i18n';
import { MENINA } from '../../../model/bebe';

class VacinaView extends Component {

    onVacinar() {
        const { navigate } = this.props.navigation;
        navigate('RealizarVacina');
    }
    onHistorico() {
        const { navigate } = this.props.navigation;
        navigate('HistoricoVacina');
    }
    onNovo() {

    }
    getStyleBebe() {
        if (this.props.bebe.sexo === MENINA) {
            return {
                ...ApplicationStyles.style.screen.mainContainer,
                backgroundColor: Colors.menina.c3,
            };
        }
        return {
            ...ApplicationStyles.style.screen.mainContainer,
            backgroundColor: Colors.menino.c1,
        };
    }
    renderCardsProximaVacinasList() {
        const proximaVacina = vacinaServices.getProximas(this.props.bebe);
        if (!proximaVacina) {
            return;
        }

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(proximaVacina),
        };
        return (
            <ListView
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                    <Row
                        onPress={this.onVacinar.bind(this, rowData)}
                        {...rowData}
                    />}
                renderSeparator={
                    (sectionId, rowId) => <View key={rowId} style={styles.separator} />
                }
            />
        );
    }
    renderCardsProximaVacinas() {
        const proximaVacina = vacinaServices.getProximas(this.props.bebe);
        if (!proximaVacina) {
            return;
        }
        const getText = (v, i) => <Text key={i}>{v.nome}</Text>;
        const proximaVacinasText = proximaVacina.map(getText);
        const dataPrevista = moment(proximaVacina[0].dataPrevista).format('DD-MM-YYYY');

        return (
            <TouchableHighlight
                onPress={this.onVacinar.bind(this)}
                underlayColor={Colors.white}
            >
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={Imagens.getKitSaude3().injecao} style={ApplicationStyles.style.screen.circleLogo} />
                            <Body>
                                <Text>Próxima Vacina - {dataPrevista}</Text>
                                <View>
                                    {proximaVacinasText}
                                </View>
                            </Body>
                        </Left>
                    </CardItem>
                </Card>
            </TouchableHighlight>
        );
    }
    renderCardHistorico() {
        const historicoVacina = vacinaServices.getHistorico(this.props.bebe);
        if (historicoVacina.length === 0) {
            return;
        }
        const getText = (v, i) => {
            if (i > 4) {
                return null;
            }
            const dataAplicacao = moment(v.dataPrevista).format('DD-MM-YYYY');
            return (<Text key={i}>{v.nome} - {dataAplicacao}</Text>);
        };
        const ordenar = (a, b) => {
            const dateA = new Date(a.dataAplicacao).getTime();
            const dateB = new Date(b.dataAplicacao).getTime();
            return dateB - dateA;
        };
        const historicoVacinasText = historicoVacina.sort(ordenar).map(getText);

        return (
            <TouchableHighlight
                onPress={this.onHistorico.bind(this)}
                underlayColor={Colors.white}
            >
                <Card>
                    <CardItem>
                        <Left>
                            {/* <Thumbnail source={new Imagens().getKitSaude3().receita} /> */}
                            <Body>
                                <Text>{I18n.t('historico.title')}</Text>
                                <View>
                                    {historicoVacinasText}
                                </View>
                            </Body>
                        </Left>
                    </CardItem>
                </Card>
            </TouchableHighlight>
        );
    }
    render() {
        return (
            <Container style={this.getStyleBebe()}>
                <Content>
                    {this.renderCardsProximaVacinas()}
                    {this.renderCardHistorico()}
                    {/* <Button rounded block style={ApplicationStyles.style.screen.buttonDefault1} onPress={this.onNovo.bind(this)}>
                        <Text style={ApplicationStyles.style.screen.textWhite}>{I18n.t('vacina.novaVacina')}</Text>
                    </Button> */}
                </Content>
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

export default VacinaView;
