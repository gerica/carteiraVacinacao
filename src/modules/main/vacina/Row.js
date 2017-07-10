import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import {
    Left, CardItem, Body, Card, Thumbnail, Right
} from 'native-base';
import moment from 'moment';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../components/Themes';
import Imagens from '../../../utils/image/Imagens';

const Row = (props) => (
    <View >
        <View>
            <TouchableHighlight
                onPress={props.onPress}
                underlayColor={Colors.white}
            >
                <View>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={new Imagens().getKitSaude3().injecao} />
                                <Body>
                                    <Text>Próxima Vacina</Text>
                                    <Text>{props.nome}</Text>
                                    <Text note>{moment(props.dataPrevista).format('DD-MM-YYYY')}</Text>
                                </Body>
                            </Left>
                            <Right>
                                <IconIonicons
                                    name="ios-power"
                                    size={20} color={Colors.logo}
                                />
                            </Right>
                        </CardItem>
                    </Card>
                </View>
            </TouchableHighlight>
        </View>
    </View >
);

export default Row;
