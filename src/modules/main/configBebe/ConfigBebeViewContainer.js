import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import ConfigBebeView from './ConfigBebeView';
import * as SessionActions from '../../session/SessionState';
import * as ConfigBebeActions from './ConfigBebeState';

const mapStateToProps = (reducer) => {
    // const session = reducer.get('session').toJS();
    const state = reducer.get('configBebeState').toJS();
    const { message, bebe, timeForNotification } = state;
    return { message, bebe, timeForNotification };
};

const init = dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    actionsSession: bindActionCreators(SessionActions, dispatch),
    actions: bindActionCreators(ConfigBebeActions, dispatch)
});

export default connect(mapStateToProps, init)(ConfigBebeView);
