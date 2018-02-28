import injectSaga     from 'utils/injectSaga';
import injectReducer  from 'utils/injectReducer';
import { generatePacket } from 'utils/helpers/request';
import Level         from 'components/Level1';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { level1Actions } from './action';
import { authentication, alert, level1 } from './selectors';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

class Level1 extends Component {
  render() {
    const { authentication, alert, location, postdata, level1 } = this.props;
    const packet = generatePacket({query_type: 'insert'});
  
  return(
      <div>
      {!authentication.loggedIn && <Redirect to={{pathname: '/',state: { from: location }}}/>}
      
      <Level packet={packet} messages={messages} postdata={postdata} authentication={authentication} alert={alert} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  authentication: authentication(),
  alert: alert(),
  level1: level1()
});

const mapDispatchToProps = {
  postdata: level1Actions.postdata
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'level1', reducer });
const withSaga = injectSaga({ key: 'level1', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Level1);