import { connect } from 'react-redux';
import AppView from './AppView';

const mapStateToProps = (reducer) => {
  console.log(reducer);
  const sessionState = reducer.get('session').toJS();
  const { isReady } = sessionState;
  return { isReady };
};

export default connect(mapStateToProps)(AppView);
