import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import RealizarVacinaView from './RealizarVacinaView';
import * as SessionActions from '../../session/SessionState';
import * as VacinaActions from './VacinaState';

const mapStateToProps = (reducer) => {
    const session = reducer.get('session').toJS();
    const state = reducer.get('vacinaState').toJS();
    const { bebe } = session;
    const { message, bebeVacinar } = state;
    return { message, bebe, bebeVacinar };
};

const init = dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    actionsSession: bindActionCreators(SessionActions, dispatch),
    actions: bindActionCreators(VacinaActions, dispatch)
});

export default connect(mapStateToProps, init)(RealizarVacinaView);
