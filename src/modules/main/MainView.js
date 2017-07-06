import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { Text, ScrollView } from 'react-native';
import {
    Icon, Container, Header, Button, Body, Title,
    Tabs, Tab, TabHeading, Spinner, Left
} from 'native-base';
import { ApplicationStyles, Colors } from '../../components/Themes';
import pt from '../../i18n/locales/pt-BR';
import DashboardViewContainer from './dashboard/DashboardViewContainer';

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
        }
    }
    render() {
        if (this.props.onLoading || !this.props.bebe) {
            return <Spinner />;
        }
        console.log(this.props);
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
                    </Header>
                    <Tabs initialPage={0} tabBarPosition={'bottom'}>
                        <Tab heading={<TabHeading><Icon name="home" /></TabHeading>}>
                            <DashboardViewContainer />
                        </Tab>
                        <Tab heading={<TabHeading><Icon name="book" /></TabHeading>}>
                            <Text>
                                Vacina
                            </Text>
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
