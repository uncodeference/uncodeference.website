import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { colors } from '../styles/variables'
import invertedLogo from '../assets/logo.inverted.png'

const StyledHeader = styled.header`
  color: ${transparentize(0.5, colors.white)};
  width: 100%;
`

const Navbar = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  > * {
    margin-left: 1em;
    margin-right: 1em;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  a {
    border-bottom-style: none;
  }
`

const StyledLogo = styled(Link)`
  font-size: 1.5rem;
  > img {
    height: 4rem;
    margin-top: 0.5rem; // TODO: make this better
  }

  &:hover {
    opacity: 0.7;
  }
`
const NavTextItem = styled(Link)`
  color: ${colors.brand};
  font-size: 1.3rem;
  font-weight: 600;

  &:hover {
    opacity: 0.7;
  }
`
const LogoEntry: React.FunctionComponent<{ icon: string; to: string }> = ({ icon, to }) => (
  <li>
    <StyledLogo to={to}>
      <img src={icon} />
    </StyledLogo>
  </li>
)
const NavTextEntry: React.FunctionComponent<{ label: string; to: string }> = ({ label, to }) => (
  <li>
    <NavTextItem to={to}>{label}</NavTextItem>
  </li>
)

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => (
  <StyledHeader>
    <Navbar>
      <LogoEntry icon={invertedLogo} to="/" />
      <NavTextEntry label="Attend" to="#attend" />
      <NavTextEntry label="Last Year" to="#last-year" />
      <NavTextEntry label="FAQ" to="#faq" />
      <NavTextEntry label="Sponsors" to="#sponsors" />
      <NavTextEntry label="Contact" to="#contact" />
    </Navbar>
  </StyledHeader>
)

export default Header
