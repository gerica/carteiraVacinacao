import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {
    Button,
    Icon,
    StyleProvider,
    Container,
    Content,
    Footer,
    FooterTab,
    Left,
    Header,
    Body,
    Title,
    Grid,
    Col
} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { ApplicationStyles, Colors, Fonts } from '../../components/Themes';
import pt from '../../i18n/locales/pt-BR';

I18n.fallbacks = true;
I18n.defaultLocale = 'pt';
I18n.locale = 'pt-BR';

I18n.translations = {
    pt
};

const imgBackGround = require('../../../resources/img/elefante.jpg');

const { height, width } = Dimensions.get('window');

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

    onNovo() {
        const { navigate } = this.props.navigation;
        navigate('NovoBebe');
    }
    onLogin() {
        const { navigate } = this.props.navigation;
        navigate('Login');
    }
    render() {
        // console.log(getTheme());
        return (
            <ScrollView>
                <Container>
                    <Header style={{ backgroundColor: Colors.headerBackgroud }}>
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
                    </Header>
                    <Content style={{ padding: 1 }}>
                        <Image source={imgBackGround} style={styles.image} >
                            <Grid style={styles.grid}>
                                <Col>
                                    <Button rounded block style={styles.button} onPress={this.onNovo.bind(this)}>
                                        <Text style={styles.text}>{I18n.t('home.novo')}</Text>
                                    </Button>
                                </Col>
                            </Grid>
                        </Image>
                    </Content>
                </Container>
            </ScrollView>
        );
    }
}

const styles = {
    image: {
        width,
        height: height - 80,
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
        marginVertical: 3,
        marginHorizontal: 10,
    },
    text: {
        ...Fonts.style.normal,
        color: Colors.white,
    }
};

export default HomeView;

