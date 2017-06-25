import React, { Component } from 'react';
import { Text, View } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

import { ApplicationStyles, Colors } from '../../components/Themes';

class LoginView extends Component {
    static navigationOptions = {
        drawerLabel: 'Login',
        drawerIcon: () => (
            <View style={ApplicationStyles.menu.circleMenu}>
                <IconEntypo
                    name="login"
                    size={13} color={Colors.logo}
                />
            </View>
        ),
    };
    componentWillMount() {
        this.props.actions.init();
    }
    onLogin() {
        const { user } = this.props;
        this.props.actions.onLogin({ user }, this.props.sessionActions);
    }
    closeMessage() {
        this.props.actions.onMessageChange('');
    }

    render() {
        return (
            <View>
                <Text>
                    signup
                </Text>
            </View>
        );
    }
}

export default LoginView;
