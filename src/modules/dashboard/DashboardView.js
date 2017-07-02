import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {
    Button, Icon, Left, Container, Content, Header,
    Body, Title, Form, Item, Input, Label,
    Grid, Col, ListItem, Right, Radio, Spinner
} from 'native-base';
import { ApplicationStyles, Colors, Fonts } from '../../components/Themes';
import pt from '../../i18n/locales/pt-BR';
import { MENINO, MENINA } from '../../model/bebe';

I18n.fallbacks = true;
I18n.defaultLocale = 'pt';
I18n.locale = 'pt-BR';

I18n.translations = {
    pt
};

const { height, width } = Dimensions.get('window');

class Dashboard extends Component {
    static navigationOptions = ({ navigation }) => {
        console.log(navigation);
        return {
            title: 'teste',
        };
    };

    static navigationOptions = {
        drawerLabel: 'Carteira',
        drawerIcon: () => (
            <View style={ApplicationStyles.menu.circleMenu}>
                <IconEntypo
                    name="new-message"
                    size={13} color={Colors.logo}
                />
            </View>
        ),
    };

    componentWillMount() {
        const { bebe } = this.props.navigation.state.params;
        this.props.actions.init(bebe);
    }
    render() {
        // console.log(getTheme());
        console.log(this.props);
        if (this.props.onLoading) {
            return <Spinner />;
        }
        return (
            <ScrollView>
                <Container>                    
                    <Content style={{ padding: 1 }}>
                        <Grid style={styles.grid}>
                        </Grid>
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
    },
    text: {
        ...Fonts.style.normal,
        color: Colors.white,
    }
};

export default Dashboard;

