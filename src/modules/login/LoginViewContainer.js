import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import LoginView from './LoginView';
import * as LoginStateActions from './LoginState';
import * as SessionStateActions from '../session/SessionState';

const mapStateToProps = (reducer) => {
    const loginState = reducer.get('loginState').toJS();
    const { user, message, loading, loginIsSuccess } = loginState;
    return { user, message, loading, loginIsSuccess };
};

const init = dispatch => ({
        navigate: bindActionCreators(NavigationActions.navigate, dispatch),
        actions: bindActionCreators(LoginStateActions, dispatch),
        sessionActions: bindActionCreators(SessionStateActions, dispatch)
    });

export default connect(mapStateToProps, init)(LoginView);
