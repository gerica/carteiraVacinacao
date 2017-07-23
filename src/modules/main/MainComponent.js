import { Component } from 'react';
import { Colors } from '../../components/Themes';
import { MENINA } from '../../model/bebe';

class MainComponent extends Component {

    onMenu() {
        const { navigate } = this.props.navigation;
        navigate('DrawerOpen');
    }
    getStyleBebe() {
        if (this.props.bebe.sexo === MENINA) {
            return {
                backgroundColor: Colors.menina.c8,
            };
        }
        return {
            backgroundColor: Colors.menino.c11,
        };
    }
    render() {
        return null;
    }
}

export default MainComponent;
