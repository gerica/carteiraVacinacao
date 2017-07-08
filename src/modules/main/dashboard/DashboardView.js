import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { Text, Image } from 'react-native';
import {
    Button, Icon, Left, Container, Content, CardItem,
    Body, Card, Thumbnail
} from 'native-base';
import { ApplicationStyles } from '../../../components/Themes';
import pt from '../../../i18n/locales/pt-BR';
import { getImgRandom } from '../../../utils/ImagensRandom';

I18n.fallbacks = true;
I18n.defaultLocale = 'pt';
I18n.locale = 'pt-BR';

I18n.translations = {
    pt
};


class Dashboard extends Component {

    // getImgRandom() {
    //     const max = imgRandom.length - 1;
    //     const min = 0;
    //     const range = max - min;

    //     const i = Math.floor(Math.random() * (range + 1)) + min;
    //     return imgRandom[i];
    // }

    render() {
        return (
            <Container style={ApplicationStyles.screen.mainContainer}>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={getImgRandom()} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={getImgRandom()} style={{ height: 200, width: 200, flex: 1 }} />
                                <Text>
                                    Your text here
                                </Text>
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

