import React, { PropTypes, Component } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import NavigatorViewContainer from './navigator/NavigatorViewContainer';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';

import store from '../redux/store';
import LogginService from '../services/LogginService';
import Imagens from './../utils/image/Imagens';

const log = new LogginService();

class AppView extends Component {
  static displayName = 'Survey App';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const { dispatch } = this.props;

        if (snapshot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
    this.configureApp();
  }
  configureApp() {
    // config.setConfiguration(endpoint.API_ROOT, endpoint.END_POINT);
    // log.logInfo(config.getConfiguration(endpoint.API_ROOT));
  }
  render() {
    log.logInfo('AppView - render()');
    if (!this.props.isReady) {
      return (
        <View style={styles.centered}>
          <Image source={Imagens.logoSistema} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <NavigatorViewContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AppView;
