import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
// import IconEntypo from 'react-native-vector-icons/Entypo';
import {
    Button, Container, Content, Header, Body,
    Title, Grid, Col
} from 'native-base';
import { ApplicationStyles, Colors } from '../../components/Themes';
import pt from '../../i18n/locales/pt-BR';
import Imagens from '../../utils/image/Imagens';

I18n.fallbacks = true;
I18n.defaultLocale = 'pt';
I18n.locale = 'pt-BR';

I18n.translations = {
    pt
};


const { height, width } = Dimensions.get('window');

class HomeView extends Component {

    static navigationOptions = {
        header: null,
    };
    componentWillMount() {
        this.props.actions.init();        
    }
    onNovo() {
        const { navigate } = this.props.navigation;
        navigate('NovoBebe');
    }
    onLogin() {
        const { navigate } = this.props.navigation;
        navigate('Login');
    }
    onDashboard(bebe) {
        const { navigate } = this.props.navigation;
        navigate('Main', { bebe });
    }
    imagens = new Imagens();
    renderButtonBebes() {
        const { bebes } = this.props;
        if (!bebes) {
            return null;
        }
        let count = 1;
        const getButton = bebe => {
            count++;
            return (<Button
                key={count}
                rounded
                block
                style={ApplicationStyles.screen.buttonDefault1}
                onPress={this.onDashboard.bind(this, bebe)}
            >
                <Text style={ApplicationStyles.screen.textWhite}>{bebe.nome}</Text>
            </Button>
            );
        };

        const buttons = bebes.map(getButton);
        return (
            <View>
                {buttons}
            </View>);
    }
    render() {
        console.log(this.props);
        return (
            <ScrollView>
                <Container>
                    <Header style={{ backgroundColor: Colors.headerBackgroud }}>
                        <Body>
                            <Title>{I18n.t('home.title')}</Title>
                        </Body>
                    </Header>
                    <Content style={{ padding: 1 }}>
                        <Image source={this.imagens.elefante} style={styles.image} />
                        <Grid style={styles.grid}>
                            <Col>
                                {this.renderButtonBebes()}
                                <Button rounded block style={ApplicationStyles.screen.buttonDefault1} onPress={this.onNovo.bind(this)}>
                                    <Text style={ApplicationStyles.screen.textWhite}>{I18n.t('home.novo')}</Text>
                                </Button>
                            </Col>
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
        height: height / 1.5,
    },
    grid: {
        alignItems: 'flex-end',
    },
};

export default HomeView;

