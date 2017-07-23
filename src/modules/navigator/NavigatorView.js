import React from 'react';
import { View } from 'react-native';
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';
import HomeViewContainer from '../home/HomeViewContainer';
import NovoBebeViewContainer from '../novoBebe/NovoBebeViewContainer';
import MainViewContainer from '../main/MainViewContainer';
import RealizarVacinaViewContainer from '../main/vacina/RealizarVacinaViewContainer';
import HistoricoVacinaViewContainer from '../main/vacina/HistoricoVacinaViewContainer';
import DescricaoVacinaViewContainer from '../main/vacina/DescricaoVacinaViewContainer';
import ConfigBebeViewContainer from '../main/configBebe/ConfigBebeViewContainer';
import { Colors } from '../../components/Themes';

export const HomeDrawerNavigator = DrawerNavigator({
  Home: { screen: HomeViewContainer },
  NovoBebe: { screen: NovoBebeViewContainer },
}, {
    drawerWidth: 200,
    drawerPosition: 'right',
    contentComponent: (props) => (
      <View>
        {renderItem(props)}
      </View>
    ),
    contentOptions: {
      activeTintColor: Colors.sunFlower,
      activeBackgroundColor: Colors.amarelo.c5,
      inactiveTintColor: Colors.button,
      inactiveBackgroundColor: Colors.amarelo.c3,
      style: {
        backgroundColor: Colors.amarelo.c1,
      }
    }
  });

export const MainDrawerNavigator = DrawerNavigator({
  Main: { screen: MainViewContainer },
  ConfigBebe: { screen: ConfigBebeViewContainer },
}, {
    drawerWidth: 200,
    drawerPosition: 'right',
    contentComponent: (props) => (
      <View>
        {renderItem(props)}
      </View>
    ),
    contentOptions: {
      activeTintColor: Colors.sunFlower,
      activeBackgroundColor: Colors.amarelo.c5,
      inactiveTintColor: Colors.button,
      inactiveBackgroundColor: Colors.amarelo.c3,
      style: {
        backgroundColor: Colors.amarelo.c1,
      }
    }
  });

function renderItem(props) {
  console.log(props);
  // console.log(props.navigation.state.routes);
  return (
    <DrawerItems {...props} />
  );
}


const AppNavigator = StackNavigator({
  Home: { screen: HomeDrawerNavigator },
  Main: { screen: MainDrawerNavigator },
  RealizarVacina: { screen: RealizarVacinaViewContainer },
  HistoricoVacina: { screen: HistoricoVacinaViewContainer },
  DescricaoVacina: { screen: DescricaoVacinaViewContainer }
}, { headerMode: 'none', }
);

export default AppNavigator;
