/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!../../images/user2-160x160.jpg';

import React, { Component }         from 'react';
import { connect }  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose }  from 'redux';
import { Helmet }   from 'react-helmet';
import { Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { FormattedMessage, injectIntl, intlShape }      from 'react-intl';
import tinycolor from 'tinycolor2';
import { Alert } from 'reactstrap';


import messages  from './messages';
import { headeritems, sidebaritems } from './menuitems';
import { loginActions }              from 'containers/Login/action';
import { alert, authentication }     from './selectors';
import Section from './Section';
import themes  from 'public/styles';
import Header  from 'components/Header';
import Sidebar from 'components/Sidebar';
import Content from 'components/Content';
import Country from 'containers/Country/Loadable';

import {
  boxedLayoutMaxWidth,
} from 'public/styles/variables';

const StyledDashboard = styled.div `
  /* clearfix */
  &:before, &:after {
    display: table;
    content: " ";
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  &:after {
    clear: both;
  }

  /* theme */
  ${props => (props.theme.sidebarBg && `background-color: ${props.theme.sidebarBg};`)}

  min-height: 100vh;
  position: relative;
  overflow: hidden;

  ${props => (props.boxed && `
    max-width: ${boxedLayoutMaxWidth};
    margin: 0 auto;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    position: relative;
  `)}
`;

class App extends Component {
  constructor(props) {
    super(props);
    this._sidebarToggle = this.sidebarToggle.bind(this);
    this.onDismiss = this.onDismiss.bind(this);

    this.state = {
      sidebarCollapse: this.props.initialCollapse,
      visible: true
    };
  }

  onDismiss() { this.setState({ visible: false }); }

  sidebarToggle() { this.setState({ sidebarCollapse: !this.state.sidebarCollapse }); }

  render() {
    const theme = themes[this.props.theme];
    const { alert, authentication, location } = this.props;
    const userMenuProfile = this.props.intl.formatMessage(messages.HeaderUserMenuItemOne);
    const userMenuSignOut = this.props.intl.formatMessage(messages.HeaderUserMenuItemTwo);

    const sidebarmap = (menu) => menu.map((item, index) => {
      let link = location.pathname;
      return <Sidebar.Menu.Item 
                key={index} 
                href={item.link? item.link: `${link}`} 
                title={item.title} 
                icon={{className: item.icon}}>
                {item.children && sidebarmap(item.children)}
              </Sidebar.Menu.Item>

    })
    const headermap = (menu) => menu.map((item, index) =>
      <Header.Item key={index} title={item.title} iconClass={item.icon} href={item.href} />
    )
    return (
      <div>
      <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
      <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      {!authentication.loggedIn && <Redirect to={{pathname: '/',state: { from: location }}}/>}
      
      {authentication.loggedIn && <StyledDashboard>
      <ThemeProvider theme={theme}>
        <Header 
          logoHref={this.props.logoHref}
            logoLg={this.props.logoLg}
            logoSm={this.props.logoSm}
            fixed={this.props.fixed}
            sidebarToggle={this._sidebarToggle}
            sidebarCollapse={this.state.sidebarCollapse}
            sidebarMini={this.props.sidebarMini}>
            
            {headermap(headeritems)}          

            <Header.UserMenu
            name={authentication.user.user_data[0].result.name}
            image="user2-160x160.jpg"
            profileAction={() => alert('Access profile')}
            profileTitle={userMenuProfile}
            signOutAction={() => this.props.logout()}
            signOutTitle={userMenuSignOut}
            key="2"
            />
        </Header>
      </ThemeProvider>
      
      <ThemeProvider theme={theme}>
        <Sidebar 
          fixed={this.props.fixed}
          sidebarCollapse={this.state.sidebarCollapse}
          sidebarMini={this.props.sidebarMini}>
          <Sidebar.UserPanel
            name={authentication.user.user_data[0].result.name}
            image="user2-160x160.jpg"
            online
            key="1"
            />
          
          <Sidebar.Menu header="MAIN NAVIGATION" key="2">
              {sidebarmap(sidebaritems)}
          </Sidebar.Menu>
        </Sidebar>
      </ThemeProvider>
      
      <ThemeProvider theme={theme}>
        <Content
          fixed={this.props.fixed}
          name="content-wrapper"
          sidebarCollapse={this.state.sidebarCollapse}
          sidebarMini={this.props.sidebarMini}
          >
          {alert.message && <Alert color={alert.color} isOpen={this.state.visible} toggle={this.onDismiss}>
                          {alert.message}
                        </Alert>}
      
          {this.props.children}
        </Content>
      </ThemeProvider>
      </StyledDashboard>}

      </div>
    )
  }
}

App.defaultProps = {
  theme: 'skin-blue',
  fixed: false,
  initialCollapse: false,
  sidebarMini: true,
};
App.propTypes = {
  children: React.PropTypes.node,
  fixed: React.PropTypes.bool,
  sidebarMini: React.PropTypes.bool,
  initialCollapse: React.PropTypes.bool,
  theme: React.PropTypes.string,
  intl: intlShape.isRequired
};

const mapStateToProps = createStructuredSelector({
  authentication: authentication(),
  alert: alert()
})

const mapDispatchToProps = {
  logout: loginActions.logout
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  injectIntl
)(App);
