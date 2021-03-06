import React, { Component } from 'react';

import { Text, Image, Dimensions } from 'react-native';
import {
    Button, Icon, Left, Container, Content, CardItem,
    Body, Card, Thumbnail
} from 'native-base';
import { ApplicationStyles } from '../../../components/Themes';
import Imagens from '../../../utils/image/Imagens';
import * as cardInfo from '../../../services/card/CardInfo';
// import I18n from '../../i18n/i18n';

const { height, width } = Dimensions.get('window');

class Dashboard extends Component {

    imagens = new Imagens();
    render() {        
        const card = cardInfo.getRandomCard();
        return (
            <Container style={ApplicationStyles.screen.mainContainer}>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={this.imagens.getKitSaude3().getForIndex(card.thumbnail)} />
                                <Body>
                                    <Text>{card.title}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={this.imagens.getForIndex(card.image)} style={{ height: 200, width: width / 1.16, flex: 1 }} />
                                <Text>{card.text}</Text>                                
                            </Body>
                        </CardItem>                        
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="star" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default Dashboard;

