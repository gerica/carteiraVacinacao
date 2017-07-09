import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import HomeView from './HomeView';
import * as SessionActions from '../session/SessionState';
import * as HomeActions from './HomeState';

const mapStateToProps = (reducer) => {
    // const session = reducer.get('session').toJS();
    const home = reducer.get('homeState').toJS();
    const { message, bebes } = home;
    return { message, bebes };
};

const init = dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    actionsSession: bindActionCreators(SessionActions, dispatch),
    actions: bindActionCreators(HomeActions, dispatch)
});

export default connect(mapStateToProps, init)(HomeView);
