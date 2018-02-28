import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Alert } from 'reactstrap';

import Wrapper from './Wrapper';
import { generatePacket } from 'utils/helpers/request';
import RegistrationPage from 'components/Registration';
import { registerActions } from './action';
import { alert, authentication, registration } from './selector';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

class Registration extends Component {
  
  render() {
    const { alert, authentication, registration, location, register } = this.props;
    const packet = generatePacket({});
    
    return(
      <div>
      {alert.message && <Alert color="danger">
                          {alert.message}
                        </Alert>}
      <Wrapper>
      {registration.registered && <Redirect to={{pathname: '/login',state: { from: location }}}/>}

      {authentication.loggedIn && <Redirect to={{pathname: '/dashboard',state: { from: location }}}/>}
      <RegistrationPage messages={messages} register={register} packet={packet} />
      </Wrapper>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  authentication: authentication(),
  registration: registration(),
  alert: alert()
});

const mapDispatchToProps = {
  register: registerActions.register
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'register', reducer });
const withSaga = injectSaga({ key: 'register', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Registration);
