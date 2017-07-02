import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import NovoBebeView from './NovoBebeView';
import * as SessionActions from '../session/SessionState';
import * as Actions from './NovoBebeState';

const mapStateToProps = (reducer) => {
    const novoBebe = reducer.get('novoBebeState').toJS();
    // const session = reducer.get('session').toJS();
    // const { message } = session;
    const { message, bebe } = novoBebe;
    return { message, bebe };
};

const init = dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    actionsSession: bindActionCreators(SessionActions, dispatch),
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, init)(NovoBebeView);
