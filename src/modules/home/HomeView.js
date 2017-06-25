import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import { Card, CardSection, Button, Container, Header } from '../../components/common';

class HomeView extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: () => (
            <Image
                source={require('../../../images/icons/settings_menu.png')}
            />
        ),
    };    

    renderButtonSignup() {
        const hastUsername = this.props.user !== undefined && this.props.user !== null;
        if (hastUsername) {
            return null;
        }

        const { navigate } = this.props.navigation;
        return (
            <CardSection>
                < Button onPress={() => navigate('Login')}> Login </Button >
                < Button onPress={() => navigate('Sigunp')}> Signup </Button >
            </CardSection>
        );
    }

    render() {
        const { user } = this.props;
        return (
            <Container>
                <Card>
                    <Header navigation={this.props.navigation} title='Carteira' balance='23.231' />
                    <CardSection style={styles.customNome}>
                        <Text style={styles.textName}>{user.name}</Text>
                    </CardSection>

                    <CardSection style={styles.customUsername}>
                        <View style={{ flexDirection: 'row' }} >
                            <Image
                                source={require('../../../images/home/HOME_DESCONECTADO_A/Logo text wihive.png')}
                                style={{ marginRight: 5 }}
                            />
                            <Text style={styles.textUsername}>{user.username}</Text>
                        </View>
                    </CardSection>
                    <CardSection style={styles.customIcon}>
                        <Image
                            source={require('../../../images/Wallet/NEO symbol@2x.png')}
                        />
                    </CardSection>
                    <CardSection style={styles.customValor}>
                        <Text style={styles.textValor}>23.352</Text>
                    </CardSection>
                    <CardSection style={styles.customIcon}>
                        <Image
                            source={require('../../../images/Wallet/IconeBanco@2x@1x.png')}
                        />
                    </CardSection>
                    <CardSection style={styles.customIcon}>
                        <Image
                            source={require('../../../images/Wallet/Win button@1x.png')}
                        />
                    </CardSection>
                    <CardSection style={styles.customIcon}>
                        <Image
                            source={require('../../../images/Offers/Neoron logo@3x.png')}
                        />
                    </CardSection>
                    <CardSection style={styles.customIcon}>
                        <Image
                            source={require('../../../images/Offers/Neoron logo@3x.png')}
                        />
                    </CardSection>
                    <CardSection style={styles.customIcon}>
                        <Image
                            source={require('../../../images/home/Botao Roxo Fundo.png')}
                            style={{ width: 150, height: 50 }}
                        />
                    </CardSection>

                </Card>
            </Container >
        );
    }
}

const styles = {
    textName: {
        fontSize: 23,
        color: '#FFFFFF',
        fontFamily: 'LucidaGrande',
        fontWeight: 'bold'
    },
    customNome: {
        paddingTop: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0
    },
    textUsername: {
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily: 'LucidaGrande',
    },
    customUsername: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0
    },
    customIcon: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0
    },
    customValor: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0
    },
    textValor: {
        fontSize: 28,
        color: '#FFFFFF',
        fontFamily: 'LucidaGrande',
        fontWeight: 'bold'
    }

};

export default HomeView;
