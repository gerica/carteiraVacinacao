import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
// import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {
    Button, Container, Content, Header, Body,
    Title, Grid, Col
} from 'native-base';
import { ApplicationStyles, Colors } from '../../components/Themes';
import Imagens from '../../utils/image/Imagens';
import I18n from '../../i18n/i18n';

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
    
    onTabVacina(bebe) {
        this.props.actionsSession.attrBebe(bebe);
        this.refs.tabsVeiw.goToPage(1);
        // this.forceUpdate();
    }
    getButton(bebe) {
        return (
            <View>
                <Button
                    iconLeft
                    rounded
                    style={ApplicationStyles.screen.buttonDefault1}
                    onPress={this.onDashboard.bind(this, bebe)}
                >
                    <IconIonicons name='ios-heart-outline' size={30} style={{ marginLeft: 0, paddingRight: 10 }} color={Colors.white} />
                    {/* <Thumbnail source={new Imagens().getKitSaude3().injecao} style={{ marginLeft: 0, paddingRight: 10 }}/> */}
                    <Text style={ApplicationStyles.screen.textWhite}>{bebe.nome}</Text>
                </Button>
            </View>
        );
    }
    renderButtonBebes() {
        const { bebes } = this.props;

        if (!bebes) {
            return null;
        }
        const result = [];

        for (let i = 0; i < bebes.length; i++) {
            result[i] = (
                <View key={i} style={ApplicationStyles.screen.rowCenter}>
                    <View style={{ height: 50, width: '45%' }}>
                        {this.getButton(bebes[i])}
                    </View>
                    <View style={{ height: 50, width: '45%' }}>
                        {++i < bebes.length ? this.getButton(bebes[i]) : null}
                    </View>
                </View>
            );
        }
        return (
            <View>
                {result}
            </View>);
    }

    renderHome() {
        return (
            <View style={[ApplicationStyles.screen.mainContainer, ApplicationStyles.screen.centerContainer]}>
                {this.renderButtonBebes()}
            </View>
        );
    }
    // renderButtonBebes() {
    //     const { bebes } = this.props;
    //     console.log(bebes);
    //     if (!bebes) {
    //         return null;
    //     }
    //     let count = 1;
    //     const getButton = bebe => {
    //         count++;
    //         return (<Button
    //             key={count}
    //             rounded
    //             block
    //             style={ApplicationStyles.screen.buttonDefault1}
    //             onPress={this.onDashboard.bind(this, bebe)}
    //         >
    //             <Text style={ApplicationStyles.screen.textWhite}>{bebe.nome}</Text>
    //         </Button>
    //         );
    //     };

    //     const buttons = bebes.map(getButton);
    //     return (
    //         <View>
    //             {buttons}
    //         </View>);
    // }
    imagens = new Imagens();
    render() {
        // console.log(this.props);
        return (
            <ScrollView>

                <Header style={{ backgroundColor: Colors.headerBackgroud }}>
                    <Body>
                        <Title>{I18n.t('home.title')}</Title>
                    </Body>
                </Header>
                <View>
                    <Image source={this.imagens.elefante} style={styles.image} >
                    </Image>
                        {this.renderHome()}
                    {/* <Grid style={styles.grid}>
                        <Col>
                            {this.renderHome()}
                            <Button rounded block style={ApplicationStyles.screen.buttonDefault1} onPress={this.onNovo.bind(this)}>
                                <Text style={ApplicationStyles.screen.textWhite}>{I18n.t('home.novo')}</Text>
                            </Button>
                        </Col>
                    </Grid> */}
                </View>

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

