import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';

export default class TabOne extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.rootId = 'Profiles';
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>I am Tab 1</Text>
                </Content>
            </Container>
        );
    }
}
