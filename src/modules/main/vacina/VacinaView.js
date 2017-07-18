import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, TouchableHighlight } from 'react-native';
import {
    Container, Content, CardItem, Body, Card, Button,
    Thumbnail, Right, Left
} from 'native-base';
import moment from 'moment';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { ApplicationStyles, Colors } from '../../../components/Themes';
import * as vacinaServices from '../../../services/vacina/VacinaService';
import Row from './Row';
import Imagens from '../../../utils/image/Imagens';
import I18n from '../../../i18n/i18n';

class VacinaView extends Component {

    onVacinar() {
        const { navigate } = this.props.navigation;
        const { bebe } = this.props;
        navigate('RealizarVacina', { bebe });
    }
    onNovo() {

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
                            <Thumbnail source={new Imagens().getKitSaude3().injecao} />
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
    render() {
        console.log(this.props);
        return (
            <Container style={ApplicationStyles.screen.mainContainer}>
                <Content>

                    {this.renderCardsProximaVacinas()}
                    <Card>
                        <CardItem header>
                            <Text>Hitórico</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>{this.props.bebe.nome}</Text>
                                <Text>BCG-ID (1) - 14/07/2015</Text>
                                <Text>Hepatite B (2) - 14/07/2015</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button rounded block style={ApplicationStyles.screen.buttonDefault1} onPress={this.onNovo.bind(this)}>
                        <Text style={ApplicationStyles.screen.textWhite}>{I18n.t('vacina.novaVacina')}</Text>
                    </Button>
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

