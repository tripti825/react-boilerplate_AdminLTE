/* eslint-disable react/jsx-filename-extension */
import React  from 'react';
import styled from 'styled-components';

import Navbar   from '../Navbar';
import Logo     from '../NavbarLogo';
import UserMenu from '../UserMenu';
import NavItem  from '../NavItem';

const StyledHeader = styled.header`
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

  position: ${props => (props.fixed ? 'fixed' : 'relative')};
  width: ${props => (props.boxed ? '1024px' : '100%')};
  max-height: 100px;
  z-index: 1030;

  /* theme */
  ${props => props.theme.headerBoxShadow && `
    -webkit-box-shadow: ${props.theme.headerBoxShadow};
    box-shadow: ${props.theme.headerBoxShadow};
  `}
`;

const Header = props => (
  <StyledHeader fixed={props.fixed} >
    <Logo
      collapse={props.sidebarCollapse}
      sidebarMini={props.sidebarMini}
      onClick={props.logoOnClick}
      href={props.logoHref}
      logoLg={props.logoLg}
      logoSm={props.logoSm}
    />
    <Navbar
      toggle={props.sidebarToggle}
      collapse={props.sidebarCollapse}
      sidebarMini={props.sidebarMini}
    >
      {props.children}
    </Navbar>
  </StyledHeader>
);

Header.propTypes = {
  children: React.PropTypes.node,
  fixed: React.PropTypes.bool,
  logoOnClick: React.PropTypes.func,
  logoHref: React.PropTypes.string,
  logoLg: React.PropTypes.element,
  logoSm: React.PropTypes.element,
  sidebarMini: React.PropTypes.bool,
  sidebarCollapse: React.PropTypes.bool,
  sidebarToggle: React.PropTypes.func.isRequired,
};

Header.defaultProps = {
  fixed: false,
  sidebarMini: false,
  sidebarCollapse: false,
  logoLg: <span><b>React</b>App</span>,
  logoSm: <span>App</span>,
};

Header.UserMenu = UserMenu;
Header.Item = NavItem;

export default Header;
