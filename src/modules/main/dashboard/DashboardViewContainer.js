import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import DashboardView from './DashboardView';
import * as SessionActions from '../../session/SessionState';
import * as DashboardActions from './DashboardState';

const mapStateToProps = (reducer) => {
    // const session = reducer.get('session').toJS();
    const state = reducer.get('dashboardState').toJS();
    const { message, bebe } = state;
    return { message, bebe };
};

const init = dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    actionsSession: bindActionCreators(SessionActions, dispatch),
    actions: bindActionCreators(DashboardActions, dispatch)
});

export default connect(mapStateToProps, init)(DashboardView);
