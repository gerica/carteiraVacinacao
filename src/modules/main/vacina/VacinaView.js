import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { Text } from 'react-native';
import {
    Left, Container, Content, CardItem,
    Body, Card, Thumbnail, Button
} from 'native-base';
import moment from 'moment';
import { ApplicationStyles } from '../../../components/Themes';
import pt from '../../../i18n/locales/pt-BR';
import Imagens from '../../../utils/image/Imagens';
import * as vacinaServices from '../../../services/vacina/VacinaService';

I18n.fallbacks = true;
I18n.defaultLocale = 'pt';
I18n.locale = 'pt-BR';

I18n.translations = {
    pt
};

class VacinaView extends Component {

    onNovo() {
    }

    imagens = new Imagens();
    render() {
        const proximaVacina = vacinaServices.getProxima(this.props.bebe);
        console.log(proximaVacina);
        return (
            <Container style={ApplicationStyles.screen.mainContainer}>
                <Content>
                    {proximaVacina === undefined ? null :
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={this.imagens.getKitSaude3().injecao} />
                                    <Body>
                                        <Text>Próxima Vacina</Text>
                                        <Text>{proximaVacina.nome}</Text>
                                        <Text note>{moment(proximaVacina.dataPrevista).format('DD-MM-YYYY')}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>
                    }
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

export default VacinaView;

