import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

class Level1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '', 
        post: ''
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

    const { title, post } = this.state;
    const { packet }   = this.props;

    if (title && post) {
      packet.data = [{ title, post }];
      this.props.postdata(packet)
    }
  }
  render() {
    const { title, post} = this.state;
    const { messages } = this.props;

    const fieldOnePlaceholder = this.props.intl.formatMessage(messages.level1PageFieldOneTitle);
    const fieldTwoPlaceholder = this.props.intl.formatMessage(messages.level1PageFieldTwoTitle);
    
    return (
      <div className="box box-info">
        <h3 className="box-title"><FormattedMessage {...messages.level1PageTitle} /></h3>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label htmlFor="title" className="control-label"><FormattedMessage {...messages.level1PageFieldOneTitle} /></label>
              <div>
              <input name="title" value={title} onChange={this.handleChange} type="text" className="form-control" placeholder={fieldOnePlaceholder} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="post" className="control-label"><FormattedMessage {...messages.level1PageFieldTwoTitle} /></label>
              <div>
              <input name="post" value={post} onChange={this.handleChange} type="text" className="form-control" placeholder={fieldTwoPlaceholder} />
              </div>
            </div>
            
          </div>
          <div className="box-footer">
          <button type="submit" className="btn btn-info pull-right"><FormattedMessage {...messages.level1PageButtonOne} /></button>
            <Link to="/dashboard"><button className="btn btn-default"><FormattedMessage {...messages.level1PageButtonTwo} /></button></Link>
          </div>
        </form>
      </div>
    );
  }
}

Level1.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(Level1);