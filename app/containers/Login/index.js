import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import Wrapper from './Wrapper';
import LoginPage from 'components/Login';
import { loginActions } from './action';
import { alert, authentication } from './selectors';
import { generatePacket } from 'utils/helpers/request';
import messages from './messages';
import { Alert } from 'reactstrap';

class Login extends Component {
  
  render() {
    const { alert, authentication, location, login } = this.props;
    const packet = generatePacket({});
    
    return(
      <div>
      {alert.message && <Alert color="danger">
                          {alert.message}
                        </Alert>}
      <Wrapper>
      {authentication.loggedIn && <Redirect to={{pathname: '/dashboard',state: { from: location }}}/>}
      <LoginPage messages={messages} login={login} packet={packet} />
      </Wrapper>
      </div>
    )

  }
}

const mapStateToProps = createStructuredSelector({
  authentication: authentication(),
  alert: alert()
})

const mapDispatchToProps = {
  login: loginActions.login
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Login);