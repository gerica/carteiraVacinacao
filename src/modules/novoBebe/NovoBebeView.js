import React, { Component } from 'react';
import { View, Text, ScrollView, DatePickerAndroid, TouchableWithoutFeedback } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    Button, Icon, Left, Container, Content, Header,
    Body, Title, Form, Item, Input, Label,
    Grid, Col, ListItem, Right, Radio, Spinner
} from 'native-base';
import { ApplicationStyles, Colors } from '../../components/Themes';
import { MENINO, MENINA } from '../../model/bebe';
import I18n from '../../i18n/i18n';

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
    dataNascimentoString() {
        const { bebe } = this.props;
        if (bebe.dataNascimento) {
            return bebe.dataNascimento.toLocaleDateString();
        }
        return '';
    }
    showPicker = async (stateKey, options) => {
        try {
            const newState = {};
            const { action, year, month, day } = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                this.props.action.attrBebeDataNascimento(null);
            } else {
                const date = new Date(year, month, day);
                this.props.actions.attrBebeDataNascimento(date);
            }
            this.setState(newState);
        } catch ({ code, message }) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    };
    styleValid() {
        const style = ApplicationStyles.screen.buttonDefault1;
        if (!this.isFormFill()) {
            style.opacity = 0.4;
        } else {
            style.opacity = 0.8;
        }
        return style;
    }
    validCreate() {

    }
    isFormFill() {
        const { bebe } = this.props;
        if (bebe) {
            if (bebe.nome && bebe.sobrenome && bebe.dataNascimento && bebe.sexo) {
                return true;
            }
        }
        return false;
    }
    render() {
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
                            <Title>{I18n.t('novoBebe.title')}</Title>
                        </Body>
                    </Header>
                    <Content style={{ padding: 1 }}>
                        <View style={[ApplicationStyles.screen.marginJusiify, ApplicationStyles.screen.rowCenter]}>
                            <Text style={ApplicationStyles.screen.textStyleWarning}>
                                {this.props.message}
                            </Text>
                        </View>
                        <Grid style={styles.grid}>
                            <Col>
                                <Form>
                                    <Item floatingLabel>
                                        <Label>{I18n.t('novoBebe.nome')}</Label>
                                        <Input
                                            onChangeText={
                                                text => this.props.actions.attrBebeNome(text)
                                            }
                                            value={this.props.bebe.nome}
                                        />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>{I18n.t('novoBebe.sobrenome')}</Label>
                                        <Input
                                            onChangeText={
                                                text => this.props.actions.attrBebeSobrenome(text)
                                            }
                                            value={this.props.bebe.sobrenome}
                                        />
                                    </Item>
                                    <Item label="Wallet">
                                        <Label>{I18n.t('novoBebe.datanascimento')}</Label>
                                        <TouchableWithoutFeedback onPress={this.showPicker.bind(this, 'preset', { date: this.props.bebe.dataNascimento || new Date() })}>
                                            <View style={[ApplicationStyles.screen.rightContainer, { paddingRight: '5%' }]}>
                                                <MaterialIcons name='today' size={30} color={Colors.belizeHole} />
                                                <Text>{this.dataNascimentoString()}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>

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
                                    disabled={!this.isFormFill()}
                                    rounded
                                    block
                                    style={this.styleValid()}
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
