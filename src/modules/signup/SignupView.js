import React, { Component } from 'react';
import { Text, View } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import I18n from 'react-native-i18n';
import LogginService from '../../services/LogginService';
import { Colors } from '../../components/Themes';
import en from '../../i18n/locales/en';

I18n.fallbacks = true;
I18n.translations = { en };

const log = new LogginService();

class SignupView extends Component {
    static navigationOptions = {
        drawerLabel: 'Signup',
        drawerIcon: () => (
            <View>
                <IconEntypo
                    name="add-user"
                    size={13} color={Colors.logo}
                />
            </View>
        ),
    };
    componentWillMount() {
        this.props.actions.init();
    }
    
    render() {
        log.logInfo(this.props);
        return (
            <View>
                <Text>
                    signup
                </Text>
            </View>
        );
    }
}

export default SignupView;
