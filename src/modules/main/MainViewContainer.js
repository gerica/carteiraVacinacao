import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import MainView from './MainView';
import * as SessionActions from '../session/SessionState';
import * as MainActions from './MainState';
import * as DashboardActions from './dashboard/DashboardState';

const mapStateToProps = (reducer) => {
    // const session = reducer.get('session').toJS();
    const state = reducer.get('mainState').toJS();
    const { message, bebe } = state;
    return { message, bebe };
};

const init = dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    actionsSession: bindActionCreators(SessionActions, dispatch),
    actionsDashboard: bindActionCreators(DashboardActions, dispatch),
    actions: bindActionCreators(MainActions, dispatch)
});

export default connect(mapStateToProps, init)(MainView);
