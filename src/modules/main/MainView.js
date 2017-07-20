import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {
    Icon, Container, Header, Button, Body, Title,
    Tabs, Tab, TabHeading, Right, Thumbnail
} from 'native-base';
import { ApplicationStyles, Colors } from '../../components/Themes';
import DashboardViewContainer from './dashboard/DashboardViewContainer';
// import HomeViewContainer from './home/HomeViewContainer';
import VacinaViewContainer from './vacina/VacinaViewContainer';
import I18n from '../../i18n/i18n';
import Imagens from '../../utils/image/Imagens';

class MainView extends Component {
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
                    onPress={this.onTabVacina.bind(this, bebe)}
                >
                     <IconIonicons name='ios-heart-outline' size={30} style={{ marginLeft: 0, paddingRight: 10 }} color={Colors.white} /> 
                    {/* <Thumbnail source={new Imagens().getKitSaude3().injecao} style={{ marginLeft: 0, paddingRight: 10 }}/> */}
                    <Text style={ApplicationStyles.screen.textWhite}>{bebe.nome}</Text>
                </Button>
            </View>
        );
    }
    imagens = new Imagens();
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
    renderTabBebe() {
        return (
            <Tabs initialPage={0} tabBarPosition={'bottom'} ref="tabsVeiw">
                <Tab heading={<TabHeading><Icon name="home" /></TabHeading>}>
                    {/* {this.renderHome()} */}
                    <DashboardViewContainer />
                </Tab>
                <Tab heading={<TabHeading><Icon name="book" /></TabHeading>}>
                    <VacinaViewContainer navigation={this.props.navigation} />
                </Tab>
                <Tab heading={<TabHeading><Icon name="medkit" /></TabHeading>}>
                    <Text>
                        Remédio
                    </Text>
                </Tab>
                <Tab heading={<TabHeading><Icon name="trending-up" /></TabHeading>}>
                    <TouchableOpacity tabLabel='Back' onPress={() => this.refs.ScrollableTabs.goToPage(0)}>
                        <Text>Lets go back!</Text>
                    </TouchableOpacity>
                    <Text>
                        Crescimento
                    </Text>
                </Tab>
            </Tabs>
        );
    }
    render() {
        // console.log(this.props);
        // if (this.props.onLoading || !this.props.bebe) {
        //     return <Spinner />;
        // }               
        return (
            <ScrollView>
                <Container style={ApplicationStyles.screen.mainContainer}>
                    <Header style={{ backgroundColor: Colors.headerBackgroud }}>
                        <Body>
                            <Title>{`${I18n.t('dashboard.title')} `}</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={this.onNovo.bind(this)}>
                                <IconIonicons
                                    name="md-settings"
                                    size={20} color={Colors.white}
                                />
                            </Button>
                        </Right>
                    </Header>
                    {this.renderTabBebe()}

                </Container>
            </ScrollView>

        );
        // return (
        //     <ScrollableTabView
        //         renderTabBar={() => <DefaultTabBar />}
        //         ref={(tabView) => { this.tabView = tabView; }}
        //     >
        //         <Text tabLabel='Tab #1'>My</Text>
        //         <Text tabLabel='Tab #2'>favorite</Text>
        //         <Text tabLabel='Tab #3'>project</Text>
        //         <TouchableOpacity tabLabel='Back' onPress={() => this.tabView.goToPage(0)}>
        //             <Text>Lets go back!</Text>
        //         </TouchableOpacity>
        //     </ScrollableTabView>
        // );
    }
}

const styles = {
    container: {
    },
    avatar: {
        backgroundColor: 'black',
        width: 60,
        height: 60,
    },
    badge: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        left: 20,
        top: 20,
    }
};

export default MainView;
