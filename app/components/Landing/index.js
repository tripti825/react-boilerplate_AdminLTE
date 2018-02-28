import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LocaleToggle    from 'containers/LocaleToggle';

class Landing extends Component {
  render() {
    const { messages } = this.props;
    return(
      <div>
        
        <section id="banner">
        <h2><FormattedMessage {...messages.landingSectionOneTitle} /></h2>
        <ul className="actions">
          <li><Link to="/login" className="button special"><FormattedMessage {...messages.landingSectionLoginButton} /></Link></li>
          <li><LocaleToggle /></li>
        </ul>
        
        </section>
        
        <section id="one" className="wrapper special">
          <div className="inner">
            <header className="major">
            <h2><FormattedMessage {...messages.landingSectionTwoTitle} /></h2>
            </header>
            <div className="features">
              <div className="feature">
              <i className="fa fa-diamond"></i>
              <h3>Etiam consequat</h3>
              <p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
              </div>
              <div className="feature">
              <i className="fa fa-copy"></i>
              <h3>Sed adipiscing</h3>
              <p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
              </div>
              <div className="feature">
              <i className="fa fa-paper-plane-o"></i>
              <h3>Feugiat nullam</h3>
              <p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
              </div>
              <div className="feature">
              <i className="fa fa-save"></i>
              <h3>Amet imperdiet</h3>
              <p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
              </div>
              <div className="feature">
              <i className="fa fa-envelope-o"></i>
              <h3>Tempus lorem</h3>
              <p>Sed tempus feugiat adipiscing nisl cursus aliquam dolore.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="two" className="wrapper style2 special">
          <div className="inner narrow">
            <header>
            <h2><FormattedMessage {...messages.landingSectionThreeTitle} /></h2>
            </header>
            <form className="grid-form" method="post" action="">
              <div className="form-control-cust narrow">
              <label>Name</label>
              <input name="name" id="name" type="text" />
              </div>
              <div className="form-control-cust narrow">
              <label>Email</label>
              <input name="email" id="email" type="email" />
              </div>
              <div className="form-control-cust">
              <label>Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <ul className="actions">
                <li><input value="Send Message" type="submit" disabled /></li>
              </ul>
            </form>
          </div>
        </section>
      </div>
    )
    
  }
}


export default Landing;
