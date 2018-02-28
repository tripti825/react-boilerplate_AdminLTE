import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { injectIntl, intlShape } from 'react-intl';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '', 
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

    const { name, email, password } = this.state;
    const { packet } = this.props;

    if (name && password && email) {
      packet.name = { name };
      packet.email = { email };
      packet.password = { password };
      this.props.register(packet);
    }
  }

  render() {
    const { name, email, password} = this.state;
    const { messages } = this.props;
    
    const fieldOnePlaceholder   = this.props.intl.formatMessage(messages.registrationFirstField);
    const fieldTwoPlaceholder   = this.props.intl.formatMessage(messages.registrationSecondField);
    const fieldThreePlaceholder = this.props.intl.formatMessage(messages.registrationThirdField);

    return (
      <div className="box box-info">
        <div className="box-header with-border text-center">
        <img className="mb-4" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="" width="72" height="72"/>
        <h3 className="box-title"><FormattedMessage {...messages.registrationPageTitle} /></h3>
        </div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label htmlFor="name" className="control-label"><FormattedMessage {...messages.registrationFirstField} /></label>
              <div>
              <input name="name" value={name} onChange={this.handleChange} type="text" className="form-control" placeholder={fieldOnePlaceholder} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="control-label"><FormattedMessage {...messages.registrationSecondField} /></label>
              <div>
              <input name="email" value={email} onChange={this.handleChange} type="email" className="form-control" placeholder={fieldTwoPlaceholder} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="control-label"><FormattedMessage {...messages.registrationThirdField} /></label>
              <div>
              <input name="password" value={password} onChange={this.handleChange} type="password" className="form-control" placeholder={fieldThreePlaceholder} />
              </div>
            </div>
            
          </div>
          <div className="box-footer">
            <button type="submit" className="btn btn-info pull-right"><FormattedMessage {...messages.registrationSecondButton} /></button>
            <Link to="/"><button className="btn btn-default"><FormattedMessage {...messages.registrationFirstButton} /></button></Link>
          </div>
        </form>
        <div className="box-header with-border">
        <Link to="/login"><h3 className="box-title default-option"><FormattedMessage {...messages.registrationFirstLink} /></h3></Link>
        </div>
      </div>
    );
  }
}

Registration.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(Registration);
