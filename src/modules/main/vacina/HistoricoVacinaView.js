import React from 'react';
import { View, ListView, StyleSheet, ScrollView } from 'react-native';
import { Body, Button, Left, Header, Icon, Title, Footer, FooterTab } from 'native-base';
import { ApplicationStyles } from '../../../components/Themes';
import * as vacinaServices from '../../../services/vacina/VacinaService';
import RowHistorico from './RowHistorico';
import I18n from '../../../i18n/i18n';
import MainComponent from '../MainComponent';

class RealizarVacinaView extends MainComponent {
    static navigationOptions = {
        header: null,
    };
    onDescricaoVacina(vacina) {
        const { navigate } = this.props.navigation;
        navigate('DescricaoVacina', { vacina });
    }    
    renderCardsHistoricos() {
        const historicoVacinas = vacinaServices.getHistorico(this.props.bebe);
        if (!historicoVacinas) {
            return;
        }

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(historicoVacinas),
        };
        return (
            <ListView
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                    <RowHistorico onPressDesc={this.onDescricaoVacina.bind(this, rowData)} {...rowData} />}
                renderSeparator={
                    (sectionId, rowId) => <View key={rowId} style={styles.separator} />
                }
            />
        );
    }
    render() {
        return (
            <View style={ApplicationStyles.style.screen.mainContainer}>
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
                        <Title>{`${I18n.t('historico.title')}`}</Title>
                    </Body>
                </Header>
                <ScrollView>
                    {this.renderCardsHistoricos()}
                </ScrollView>
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
