import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import SettingsView from './SettingsView';
import * as SettingsStateActions from './SettingsState';
import * as SessionStateActions from '../session/SessionState';

const mapStateToProps = (reducer) => {
    const settingsState = reducer.get('settingsState').toJS();
    const sessionState = reducer.get('session').toJS();
    const { user } = sessionState;
    return { user };
};

const init = dispatch => {
    return {
        navigate: bindActionCreators(NavigationActions.navigate, dispatch),
        actions: bindActionCreators(SettingsStateActions, dispatch),
        sessionActions: bindActionCreators(SessionStateActions, dispatch)
    };
};

export default connect(mapStateToProps, init)(SettingsView);
