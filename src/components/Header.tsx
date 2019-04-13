import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { colors } from '../styles/variables'
import invertedLogo from '../assets/logo.inverted.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { scaleEm, grow } from '../styles/mixins'

const StyledHeader = styled.header`
  color: ${transparentize(0.5, colors.white)};
  width: 100%;
`

const StyledLogo = styled(Link)`
  font-size: 1.5rem;
  line-height: 0;
  > img {
    height: 4rem;
  }

  &:hover {
    opacity: 0.7;
  }
`
const NavTextItem = styled(AnchorLink)`
  color: ${colors.brand};
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.5);
  font-size: ${scaleEm(0.8, grow.slow)};
  font-weight: 600;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`
const LogoEntry: React.FunctionComponent<{ icon: string; to: string }> = ({ icon, to }) => (
  <StyledLogo to={to}>
    <img src={icon} />
  </StyledLogo>
)
const NavTextEntry: React.FunctionComponent<{ label: string; to: string }> = ({ label, to }) => <NavTextItem href={to}>{label}</NavTextItem>

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  > *:last-child {
    margin-right: 1em;
  }
  a {
    border-bottom-style: none;
  }
  @media (max-width: 480px) {
    display: none;
  }
`

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
