import React from 'react';
import { View } from 'react-native';
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';
import SignupViewContainer from '../signup/SignupViewContainer';
import HomeViewContainer from '../home/HomeViewContainer';
import LoginViewContainer from '../login/LoginViewContainer';
import NovoBebeViewContainer from '../novoBebe/NovoBebeViewContainer';
import MainViewContainer from '../main/MainViewContainer';

export const Drawer = DrawerNavigator({
  Home: { screen: HomeViewContainer },
  Sigunp: { screen: SignupViewContainer },
  Login: { screen: LoginViewContainer },
  NovoBebe: { screen: NovoBebeViewContainer }
}, {
    header: null,
    contentComponent: (props) => (
      <View style={styles.container}>
        <DrawerItems {...props} />
      </View>
    ),
    contentOptions: {
      activeTintColor: '#e1ef95',
      inactiveTintColor: '#ffffff',
      style: {
        paddingVertical: 50,
        paddingHorizontal: 50,
        backgroundColor: '#233261',
        height: '100%'
      }
    }

  });
const styles = {
  container: {
    flex: 1,
  },
};

const AppNavigator = StackNavigator({
  Home: { screen: HomeViewContainer },
  Main: { screen: MainViewContainer },
  NovoBebe: { screen: NovoBebeViewContainer }
});

export default AppNavigator;
