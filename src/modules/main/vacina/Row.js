import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import {
    Left, CardItem, Body, Card, Thumbnail, Right, Spinner
} from 'native-base';
import moment from 'moment';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { ApplicationStyles, Colors } from '../../../components/Themes';
import Imagens from '../../../utils/image/Imagens';

const Row = (props) => (
    <View>
        <Card>
            <CardItem>
                <TouchableWithoutFeedback onPress={props.onPressDesc}>
                    <Left>
                        <Thumbnail source={Imagens.getKitSaude3().injecao} style={ApplicationStyles.style.screen.circleLogo} />
                        <Body>
                            <Text>Próxima Vacina</Text>
                            <Text>{props.nome}</Text>
                            <Text note>{moment(props.dataPrevista).format('DD-MM-YYYY')}</Text>
                        </Body>
                    </Left>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={props.onPress}>
                    {(props.rowLoading === props.rowID) ?
                        <Spinner size={'small'} />
                        :
                        <Right>
                            {
                                props.dataAplicacao === undefined || props.dataAplicacao === null
                                    ?
                                    <IconIonicons
                                        name="md-square-outline"
                                        size={20} color={Colors.logo}
                                    />
                                    :
                                    <IconIonicons
                                        name="md-checkbox-outline"
                                        size={20} color={Colors.logo}
                                    />
                            }

                        </Right>
                    }
                </TouchableWithoutFeedback>
            </CardItem>
        </Card>
    </View>

);

export default Row;

