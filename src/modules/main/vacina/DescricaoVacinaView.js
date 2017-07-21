import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
    Header, Icon, CardItem, Body, Card, Button,
    Title, Left
} from 'native-base';
import moment from 'moment';
import { ApplicationStyles, Colors } from '../../../components/Themes';
import I18n from '../../../i18n/i18n';

class VacinaView extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        console.log(this.props.navigation.state.params);
        const { vacina } = this.props.navigation.state.params;
        return (
            <View style={ApplicationStyles.screen.mainContainer}>
                <Header style={{ backgroundColor: Colors.headerBackgroud }}>
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
                        <Title>{`${I18n.t('descricaoVacina.title')}`}</Title>
                    </Body>
                </Header>
                <ScrollView>
                    <Card>
                        <CardItem>
                            <Left>
                                {/* <Thumbnail source={new Imagens().getKitSaude3().receita} /> */}
                                <Body>
                                    {/* <Text>{I18n.t('descricaoVacina.title')}</Text> */}
                                    <View>
                                        <Text>Nome: {vacina.nome}</Text>                                        
                                        <Text>Data Prevista: {moment(vacina.dataPrevista).format('DD-MM-YYYY')}</Text>
                                        <Text>Doenças Evitadas: {vacina.doencasEvitadas}</Text>
                                        <Text>Dose: {vacina.doses}</Text>
                                        <Text>Idade: {vacina.idade}</Text>
                                        <Text>Data Aplicação: {moment(vacina.dataAplicacao).format('DD-MM-YYYY')}</Text>                                        
                                    </View>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                </ScrollView>
            </View>
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
