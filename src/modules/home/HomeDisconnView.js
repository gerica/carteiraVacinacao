import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { View, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon
} from 'native-base';
import { ApplicationStyles, Colors } from '../../components/Themes';
import pt from '../../i18n/locales/pt-BR';

I18n.fallbacks = true;
// 
// const deviceLocale = I18n.locale;
// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.defaultLocale = 'pt';
I18n.locale = 'pt-BR';

I18n.translations = {
    pt
};

class HomeView extends Component {

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: () => (
            <View style={ApplicationStyles.menu.circleMenu}>
                <IconEntypo
                    name="home"
                    size={13} color={Colors.logo}
                />
            </View>
        ),
    };

    onSigunp() {
        const { navigate } = this.props.navigation;
        navigate('Sigunp');
    }
    onLogin() {
        const { navigate } = this.props.navigation;
        navigate('Login');
    }
    render() {
        return (
            <Container >
                <Header
                    backgroundColor={Colors.background}
                    androidStatusBarColor={Colors.bar}
                >
                    <Left>
                        <Button
                            transparent
                            onPress={() =>
                                this.props.navigation.navigate('DrawerOpen')
                            }
                        >
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{I18n.t('home.title')}</Title>
                    </Body>
                    <Right />
                </Header>
                <Grid>
                    <Row size={3} />
                    <Row size={1} style={{ backgroundColor: '#005482' }}>
                        <Col />
                        <Col >
                            <Text>vai</Text>
                        </Col>
                        <Col />
                    </Row>
                </Grid>
                <Footer>
                    <FooterTab>
                        <Grid>
                            <Row>
                                <Col />
                                <Col >
                                    <Text>vai2</Text>
                                </Col>
                                <Col />
                            </Row>
                        </Grid>
                        <Button transparent style={{ marginLeft: '22%' }}>
                            <IconIonicons
                                name='ios-arrow-dropright-circle-outline'
                                style={{ fontSize: 50, }}
                            />
                        </Button>
                    </FooterTab>
                </Footer >
            </Container >

        );
    }
}

export default HomeView;
