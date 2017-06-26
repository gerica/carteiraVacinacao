import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {
    Button,
    Icon,
    Left,
    Container,
    Content,
    Footer,
    FooterTab,
    Header,
    Body,
    Title,
    Form,
    Item,
    Input,
    Label,
    Grid,
    Col,
    ListItem,
    Right,
    Radio
} from 'native-base';
import { ApplicationStyles, Colors, Fonts } from '../../components/Themes';
import pt from '../../i18n/locales/pt-BR';

I18n.fallbacks = true;
I18n.defaultLocale = 'pt';
I18n.locale = 'pt-BR';

I18n.translations = {
    pt
};

const { height, width } = Dimensions.get('window');

class NovoBebeView extends Component {

    static navigationOptions = {
        drawerLabel: 'Novo Bebe',
        drawerIcon: () => (
            <View style={ApplicationStyles.menu.circleMenu}>
                <IconEntypo
                    name="new-message"
                    size={13} color={Colors.logo}
                />
            </View>
        ),
    };

    onNovo() {
        const { navigate } = this.props.navigation;
        navigate('Sigunp');
    }
    render() {
        // console.log(getTheme());
        return (
            <ScrollView>
                <Container>
                    <Header style={{ backgroundColor: Colors.headerBackgroud }}>
                        <Left>
                            <Button
                                transparent
                                onPress={() =>
                                    this.props.navigation.navigate('DrawerOpen')
                                }
                            >
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>{I18n.t('home.title')}</Title>
                        </Body>
                    </Header>
                    <Content style={{ padding: 1 }}>
                        <Grid style={styles.grid}>
                            <Col>
                                <Form>
                                    <Item floatingLabel>
                                        <Label>Nome</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel last>
                                        <Label>Sobrenome</Label>
                                        <Input />
                                    </Item>

                                    <ListItem>
                                        <Text>Menino</Text>
                                        <Right>
                                            <Radio selected={false} />
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Text>Menina</Text>
                                        <Right>
                                            <Radio selected={false} />
                                        </Right>
                                    </ListItem>

                                </Form>
                                <Button rounded block style={styles.button} onPress={this.onNovo.bind(this)}>
                                    <Text style={styles.text}>{I18n.t('novoBebe.salvar')}</Text>
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

export default NovoBebeView;

