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

class NovoBebeView extends Component {

    static navigationOptions = {
        header: null,
        // drawerLabel: 'Novo Bebe',
        // drawerIcon: () => (
        //     <View style={ApplicationStyles.menu.circleMenu}>
        //         <IconEntypo
        //             name="new-message"
        //             size={13} color={Colors.logo}
        //         />
        //     </View>
        // ),
    };

    componentWillMount() {
        this.props.actions.init();
    }
    onSexoSelected(value) {
        const { bebe } = this.props;
        return bebe.sexo === value;
    }
    onNovo() {
        const { navigate } = this.props.navigation;
        // navigate('Sigunp');
        this.props.actions.save(this.props.bebe, navigate);
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
                            <Title>{I18n.t('home.title')}</Title>
                        </Body>
                    </Header>
                    <Content style={{ padding: 1 }}>
                        <Grid style={styles.grid}>
                            <Col>
                                <Form>
                                    <Item floatingLabel>
                                        <Label>Nome</Label>
                                        <Input
                                            onChangeText={
                                                text => this.props.actions.attrBebeNome(text)
                                            }
                                            value={this.props.bebe.nome}
                                        />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>Sobrenome</Label>
                                        <Input
                                            onChangeText={
                                                text => this.props.actions.attrBebeSobrenome(text)
                                            }
                                            value={this.props.bebe.sobrenome}
                                        />
                                    </Item>
                                    <Item floatingLabel last>
                                        <Label>Data de Nacimento</Label>
                                        <Input
                                            onChangeText={
                                                text => this.props.actions.attrBebeDataNascimento(text)
                                            }
                                            value={this.props.bebe.dataNascimento}
                                        />
                                    </Item>

                                    <ListItem>
                                        <Text>Menino</Text>
                                        <Right>
                                            <Radio
                                                selected={this.onSexoSelected(MENINO)}
                                                onPress={
                                                    () => console.log(this.props.actions.attrBebeSexo(MENINO))
                                                }
                                            />
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Text>Menina</Text>
                                        <Right>
                                            <Radio
                                                selected={this.onSexoSelected(MENINA)}
                                                onPress={
                                                    () => console.log(this.props.actions.attrBebeSexo(MENINA))
                                                }
                                            />
                                        </Right>
                                    </ListItem>

                                </Form>
                                <Button
                                    rounded
                                    block
                                    style={ApplicationStyles.screen.buttonDefault1}
                                    onPress={this.onNovo.bind(this)}
                                >
                                    <Text style={ApplicationStyles.screen.textWhite}>{I18n.t('novoBebe.salvar')}</Text>
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
    grid: {
        alignItems: 'flex-end',
    },
};

export default NovoBebeView;

