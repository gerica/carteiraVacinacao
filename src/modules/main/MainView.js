import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { Text, ScrollView } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {
    Icon, Container, Header, Button, Body, Title,
    Tabs, Tab, TabHeading, Spinner, Left, Right
} from 'native-base';
import { ApplicationStyles, Colors } from '../../components/Themes';
import pt from '../../i18n/locales/pt-BR';
import DashboardViewContainer from './dashboard/DashboardViewContainer';
import VacinaViewContainer from './vacina/VacinaViewContainer';

I18n.fallbacks = true;
I18n.defaultLocale = 'pt';
I18n.locale = 'pt-BR';

I18n.translations = {
    pt
};

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
    render() {
        // console.log(this.props);
        if (this.props.onLoading || !this.props.bebe) {
            return <Spinner />;
        }
        return (
            <ScrollView>
                <Container style={ApplicationStyles.screen.mainContainer}>
                    <Header style={{ backgroundColor: Colors.headerBackgroud }}>
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
                    <Tabs initialPage={0} tabBarPosition={'bottom'}>
                        <Tab heading={<TabHeading><Icon name="home" /></TabHeading>}>
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
                            <Text>
                                Crescimento
                            </Text>
                        </Tab>
                    </Tabs>

                </Container>
            </ScrollView>

        );
    }
}

export default Dashboard;
