import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n';
import { ApplicationStyles, Colors } from '../../components/Themes';
import en from '../../i18n/locales/en';

I18n.fallbacks = true;
I18n.translations = { en };

class LoginView extends Component {
    static navigationOptions = {
        drawerLabel: 'Logout',
        drawerIcon: () => (
            <View style={ApplicationStyles.menu.circleMenu}>
                <IconFontAwesome
                    name="sign-out"
                    size={13} color={Colors.logo}
                />
            </View>
        ),
    };
    onLogout() {
        this.props.sessionActions.onLogout();
    }
    render() {
        return (
            <View>
                <Text>
                    Login
                </Text>
            </View>
        );
    }
}

export default LoginView;
