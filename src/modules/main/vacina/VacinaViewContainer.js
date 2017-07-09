import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import VacinaView from './VacinaView';
import * as SessionActions from '../../session/SessionState';
import * as VacinaActions from './VacinaState';

const mapStateToProps = (reducer) => {
    // const session = reducer.get('session').toJS();
    const state = reducer.get('vacinaState').toJS();
    const { message, bebe } = state;
    return { message, bebe };
};

const init = dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    actionsSession: bindActionCreators(SessionActions, dispatch),
    actions: bindActionCreators(VacinaActions, dispatch)
});

export default connect(mapStateToProps, init)(VacinaView);
