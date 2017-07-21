import React from 'react';
import { View } from 'react-native';
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';
import SignupViewContainer from '../signup/SignupViewContainer';
import HomeViewContainer from '../home/HomeViewContainer';
import LoginViewContainer from '../login/LoginViewContainer';
import NovoBebeViewContainer from '../novoBebe/NovoBebeViewContainer';
import MainViewContainer from '../main/MainViewContainer';
import RealizarVacinaViewContainer from '../main/vacina/RealizarVacinaViewContainer';
import HistoricoVacinaViewContainer from '../main/vacina/HistoricoVacinaViewContainer';
import DescricaoVacinaViewContainer from '../main/vacina/DescricaoVacinaViewContainer';

const AppNavigator = StackNavigator({
  Home: { screen: HomeViewContainer },
  Main: { screen: MainViewContainer },
  NovoBebe: { screen: NovoBebeViewContainer },
  RealizarVacina: { screen: RealizarVacinaViewContainer },
  HistoricoVacina: { screen: HistoricoVacinaViewContainer },
  DescricaoVacina: { screen: DescricaoVacinaViewContainer }
});

export default AppNavigator;
