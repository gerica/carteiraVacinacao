import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import HomeDisconnView from './HomeDisconnView';
import * as SessionActions from '../session/SessionState';

const mapStateToProps = (reducer) => {
    const session = reducer.get('session').toJS();
    const { message } = session;
    return { message };
};

const init = dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    actions: bindActionCreators(SessionActions, dispatch)
});

export default connect(mapStateToProps, init)(HomeDisconnView);
