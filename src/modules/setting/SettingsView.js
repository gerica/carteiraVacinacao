import React, { Component } from 'react';
import { View } from 'react-native';
import IconOcticons from 'react-native-vector-icons/Octicons';
import { Container, Header } from '../../components/common';

class SettingsView extends Component {
    static navigationOptions = {
        drawerLabel: 'settings',
        drawerIcon: () => (
            <View style={styles.circleMenu}>
                <IconOcticons
                    name="gear"
                    size={13} color="#8befbf"
                    style={styles.menuIconCenter}
                />
            </View>
        ),
    };

    componentWillMount() {
        this.props.actions.init();
    }

    render() {
        return (
            <Container>
                <Header
                    navigation={this.props.navigation}
                    title='settings'
                    balance={this.props.user.wallet.balance}                    
                />
            </Container >
        );
    }
}

const styles = {
    circleMenu: {
        backgroundColor: '#45539e',
        width: 24,
        height: 24,
        borderRadius: 100 / 2,
    },
    menuIconCenter: {
        marginLeft: '28%',
        marginTop: '20%'
    }
};

export default SettingsView;
