import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Left, CardItem, Body, Card, Thumbnail } from 'native-base';
import moment from 'moment';
import Imagens from '../../../utils/image/Imagens';
import { ApplicationStyles } from '../../../components/Themes';

const RowHistorico = (props) => (
    <View >
        <Card>
            <CardItem>
                <TouchableWithoutFeedback onPress={props.onPressDesc}>
                    <Left>
                        <Thumbnail source={Imagens.getKitSaude().getImgRandom()} style={ApplicationStyles.style.screen.circleLogo} />
                        <Body>
                            <Text>Vacina Aplicada</Text>
                            <Text>{props.nome}</Text>
                            <Text note>{moment(props.dataAplicacao).format('DD-MM-YYYY')}</Text>
                        </Body>
                    </Left>
                </TouchableWithoutFeedback>
            </CardItem>
        </Card>
    </View >
);

export default RowHistorico;

