import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignupView from './SignupView';
import * as SignupStateActions from './SignupState';

const mapStateToProps = (reducer) => {
    const signupState = reducer.get('signupState').toJS();
    const {
        loading,
        message,
        typeMessage,
            } = signupState;
    return {
        loading,
        message,
        typeMessage,
    };
};

const init = dispatch => ({
    actions: bindActionCreators(SignupStateActions, dispatch)
});


export default connect(mapStateToProps, init)(SignupView);
