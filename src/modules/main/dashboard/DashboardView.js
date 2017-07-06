import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { View, Text, Dimensions, ScrollView, Image } from 'react-native';
import IconFoundation from 'react-native-vector-icons/Foundation';
import {
    Button, Icon, Left, Container, Content, CardItem,
    Body, Card, Thumbnail
} from 'native-base';
import { ApplicationStyles, Colors, Fonts } from '../../../components/Themes';
import pt from '../../../i18n/locales/pt-BR';
import { MENINO, MENINA } from '../../../model/bebe';

I18n.fallbacks = true;
I18n.defaultLocale = 'pt';
I18n.locale = 'pt-BR';

I18n.translations = {
    pt
};

const { height, width } = Dimensions.get('window');
const imgRandom = require('../../../../resources/img/sapato_menino.jpg');
const imgBackGround = require('../../../../resources/img/elefante.jpg');

class Dashboard extends Component {
    componentWillMount() {
        // const { bebe } = this.props.navigation.state.params;
        // if (bebe) {
        //     this.props.actions.attrBebe(bebe);
        // }
    }
    render() {
        // if (this.props.onLoading || !this.props.bebe) {
        //     return <Spinner />;
        // }
        console.log(this.props);
        return (
            // <Container style={ApplicationStyles.screen.mainContainer}>
            //     <Content style={{ paddingHorizontal: 2, }}>
            //         <Grid style={styles.grid}>
            //             <Col>
            //                 <Row>
            //                     <Image source={imgRandom} style={styles.image} />
            //                 </Row>
            //             </Col>
            //         </Grid>
            //     </Content>
            // </Container>
            <Container style={ApplicationStyles.screen.mainContainer}>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={imgBackGround} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={imgRandom} style={{ height: 200, width: 200, flex: 1 }} />
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

const styles = {
    image: {
        width,
        height: height / 3,
    },
    grid: {
        alignItems: 'flex-end',
    },
    button: {
        // backgroundColor: 'transparent',
        backgroundColor: Colors.background,
        opacity: 0.8,
        borderColor: Colors.bar,
        borderWidth: 1,
        margin: 1,
    },
    text: {
        ...Fonts.style.normal,
        color: Colors.white,
    }
};

export default Dashboard;

