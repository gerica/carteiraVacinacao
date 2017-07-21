import React, { Component } from 'react';
import { View, ListView, StyleSheet, ScrollView } from 'react-native';
import {
    Container, Content, Body, Button, Footer, FooterTab,
    Right, Left, Header, Icon, Title
} from 'native-base';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { ApplicationStyles, Colors } from '../../../components/Themes';
import * as vacinaServices from '../../../services/vacina/VacinaService';
import Row from './Row';
import I18n from '../../../i18n/i18n';
import { MENINA } from '../../../model/bebe';

class RealizarVacinaView extends Component {
    static navigationOptions = {
        header: null,
    };

    onVacinar(rowData) {
        // console.log(rowData);
        this.props.actions.attrBebeVacinaDataAplicacao(this.props.bebe, rowData);
    }
    onDescricaoVacina(vacina) {
        const { navigate } = this.props.navigation;
        navigate('DescricaoVacina', { vacina });
    }
    onNovo() {

    }
    getStyleBebe() {
        if (this.props.bebe.sexo === MENINA) {
            return {
                backgroundColor: Colors.menina.c8,
            };
        }
        return {
            backgroundColor: Colors.menino.c8,
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
                        onPressDesc={this.onDescricaoVacina.bind(this, rowData)}
                        {...rowData}
                    />}
                renderSeparator={
                    (sectionId, rowId) => <View key={rowId} style={styles.separator} />
                }
            />
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
                        <Right>
                            <Button
                                transparent
                                onPress={() =>
                                    this.props.navigation.goBack()
                                }
                            >
                                <IconIonicons
                                    name="md-settings"
                                    size={20} color={Colors.white}
                                />
                            </Button>
                        </Right>
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
