import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import HomeView from './HomeView';
import * as SessionActions from '../session/SessionState';

const mapStateToProps = (reducer) => {
    const session = reducer.get('session').toJS();
    const { user, message } = session;
    return { user, message };
};

const init = dispatch => {
    return {
        navigate: bindActionCreators(NavigationActions.navigate, dispatch),
        actions: bindActionCreators(SessionActions, dispatch)
    };
};

export default connect(mapStateToProps, init)(HomeView);
