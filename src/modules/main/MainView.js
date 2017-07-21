import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {
    Icon, Container, Header, Button, Body, Title,
    Tabs, Tab, TabHeading, Spinner, Left, Right
} from 'native-base';
import { ApplicationStyles, Colors } from '../../components/Themes';
import DashboardViewContainer from './dashboard/DashboardViewContainer';
import VacinaViewContainer from './vacina/VacinaViewContainer';
import I18n from '../../i18n/i18n';
import { MENINA } from '../../model/bebe';

class Dashboard extends Component {
    static navigationOptions = {
        header: null,
    };

    componentWillMount() {
        const { bebe } = this.props.navigation.state.params;
        if (bebe) {
            this.props.actions.attrBebe(bebe);
            this.props.actionsDashboard.attrBebe(bebe);
            this.props.actionsVacina.attrBebe(bebe);
        }
    }
    getStyleBebe() {
        if (this.props.bebe.sexo === MENINA) {
            return {
                backgroundColor: Colors.menina.c8,
            };
        }
        return {
            backgroundColor: Colors.menino.c8,
        };
    }
    render() {
        // console.log(this.props);
        if (this.props.onLoading || !this.props.bebe) {
            return <Spinner />;
        }
        return (
            <ScrollView>
                <Container style={ApplicationStyles.style.screen.mainContainer}>
                    <Header style={this.getStyleBebe()}>
                        <Left>
                            <Button
                                transparent
                                onPress={() =>
                                    this.props.navigation.goBack()
                                }
                            >
                                <Icon name='ios-arrow-round-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>{`${I18n.t('dashboard.title')} ${this.props.bebe.nome}`}</Title>
                        </Body>
                        <Right>
                            <Button
                                transparent
                                onPress={() =>
                                    this.props.navigation.goBack()
                                }
                            >
                                <IconIonicons
                                    name="md-settings"
                                    size={20} color={Colors.white}
                                />
                            </Button>
                        </Right>
                    </Header>
                    <Tabs initialPage={0} tabBarPosition={'bottom'} >
                         <Tab heading={<TabHeading style={this.getStyleBebe()}><Icon name="home" /></TabHeading>} >                         
                            <VacinaViewContainer navigation={this.props.navigation} />
                        </Tab>
                        <Tab heading={<TabHeading style={this.getStyleBebe()}><Icon name="book" /></TabHeading>}>
                            <DashboardViewContainer />
                        </Tab>
                        {/* <Tab heading={<TabHeading><Icon name="medkit" /></TabHeading>}>
                            <Text>
                                Remédio
                            </Text>
                        </Tab>
                        <Tab heading={<TabHeading><Icon name="trending-up" /></TabHeading>}>
                            <Text>
                                Crescimento
                            </Text>
                        </Tab> */}
                    </Tabs>

                </Container>
            </ScrollView >

        );
    }
}

export default Dashboard;
