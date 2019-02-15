import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import background from '../assets/background.jpg'
import Header from '../components/Header'
import Container from '../components/Container'
import { colors, fonts } from '../styles/variables'

const MainSection = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position-y: center;
  padding-top: 1rem;
  padding-bottom: 2rem;
`

const InfoBox = styled.div`
  color: ${colors.brand};
  background-color: rgba(0, 0, 0, 0.8);
  border: 4px solid ${colors.brand};
  display: flex;
  flex-direction: column;
  max-width: 44em;
  margin: 7em 1em;
  padding: 2em;
  align-items: center;
  font-family: ${fonts.monospace};
  align-self: center;
  > * {
    margin: 0;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  margin-bottom: 0;
`

const Spacer = () => <StyledSpacer>&#8226;&#8226;&#8226;</StyledSpacer>

const StyledSpacer = styled.div`
  margin: 1em 0 !important;
`

const StyledTicketsButton = styled.a`
  font-size: 1.8em;
  padding: 0.2rem 1.8rem;
  background-color: ${colors.brand};
  color: ${colors.black};
  border-style: solid;

  &:hover,
  &:focus {
    border-bottom-style: solid;
    background-color: ${colors.black};
    color: ${colors.brand};
  }
`

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`

const TicketsButton = () => <StyledTicketsButton href="#TODO">Tickets</StyledTicketsButton>

{
  /* TODO: format the following as table */
}
const Schedule = () => (
  <div>
    <span>
      Thursday 9<sup>th</sup>: un&lt;meet&gt;up
    </span>
    <br />
    <span>
      Friday 10<sup>th</sup>: un&#123;code&#125;ference
    </span>
    <br />
    <span>
      Saturday 11<sup>th</sup>: (un)hiking
    </span>
  </div>
)

const MainInfo: React.FunctionComponent = () => (
  <InfoBox>
    <Title>uncodeference.io '19</Title>
    <h3>
      09.-11. May 2019 &middot;{' '}
      <a href="https://www.google.com/maps/place/Werkstätte+Wattens/@47.287262,11.5905719,17z/data=!3m1!4b1!4m5!3m4!1s0x479d6467027ebc8d:0x97e24643b15d2bec!8m2!3d47.2872584!4d11.5927606">
        Wattens, AT
      </a>
    </h3>
    <Spacer />
    <p>
      The software engineering <a href="http://unconference.net/unconferencing-how-to-prepare-to-attend-an-unconference/">unconference</a>{' '}
      in the heart of Tyrol, Austria
    </p>
    <Spacer />
    <Schedule />
    <Spacer />
    <TicketsButton />
  </InfoBox>
)

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <MainSection>
        <CenteredContainer>
          <Header />
          <MainInfo />
        </CenteredContainer>
      </MainSection>
    </Page>
  </IndexLayout>
)

export default IndexPage
