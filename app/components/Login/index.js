import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '', 
        password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e){
    e.preventDefault();

    const { email, password } = this.state;
    const { packet }   = this.props;

    if (email && password) {
      packet.email    = email;
      packet.password = password;
      this.props.login(packet);
    }
  }

  render() {
    const { email, password} = this.state;
    const { messages } = this.props;

    const fieldOnePlaceholder = this.props.intl.formatMessage(messages.loginFirstField);
    const fieldTwoPlaceholder = this.props.intl.formatMessage(messages.loginSecondField);
    return (
      <div className="box">
      <div className="box-header with-border text-center">
      <img className="mb-4" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="" width="72" height="72"/>
        <h3 className="box-title"><FormattedMessage {...messages.loginPageTitle} /></h3>
        </div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label htmlFor="email" className="control-label"><FormattedMessage {...messages.loginFirstField} /></label>
              <div>
              <input name="email" value={email} onChange={this.handleChange} type="email" className="form-control" placeholder={fieldOnePlaceholder} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="control-label"><FormattedMessage {...messages.loginSecondField} /></label>
              <div>
              <input name="password" value={password} onChange={this.handleChange} type="password" className="form-control" placeholder={fieldTwoPlaceholder} />
              </div>
            </div>
            
          </div>
          <div className="box-footer">
          <button type="submit" className="btn btn-info pull-right"><FormattedMessage {...messages.loginSecondButton} /></button>
            <Link to="/"><button className="btn btn-default"><FormattedMessage {...messages.loginFirstButton} /></button></Link>
          </div>
        </form>
        <div className="box-header with-border ">
        <Link to="/register"><h3 className="box-title default-option"><FormattedMessage {...messages.loginFirstLink} /></h3></Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(Login);
