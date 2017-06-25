import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import LogoutView from './LogoutView';
import * as SessionStateActions from '../session/SessionState';


const mapStateToProps = (reducer) => {
    const session = reducer.get('session').toJS();
    const { user, isReady, message } = session;
    return { user, isReady, message };
};

const init = dispatch => {
    return {
        navigate: bindActionCreators(NavigationActions.navigate, dispatch),
        sessionActions: bindActionCreators(SessionStateActions, dispatch)
    };
};

export default connect(mapStateToProps, init)(LogoutView);
