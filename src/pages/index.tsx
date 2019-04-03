import * as React from 'react'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import background from '../assets/background.jpg'
import Header from '../components/Header'
import Container from '../components/Container'
import { colors, fonts } from '../styles/variables'
import { Link } from 'gatsby'
import AttendSection from '../components/sections/AttendSection'
import PreviousEditionsSection from '../components/sections/PreviousEditionsSection'
import FAQSection from '../components/sections/FAQSection'
import SponsorsSection from '../components/sections/SponsorsSection'

const MainSection = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position-y: center;
  padding-top: 1rem;
`

const InfoBox = styled.div`
  color: ${colors.brand};
  background-color: ${colors.black};
  border: 4px solid ${colors.brand};
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    max-width: 100%;
    margin: 0em;
    padding: 1em;
  }
  @media (min-width: 641px) {
    max-width: 75%;
    margin-top: 5em;
    margin-bottom: 10em;
    margin-left: 1em;
    margin-right: 1em;
    padding: 2em;
  }
  align-items: center;
  font-family: ${fonts.monospace};
  align-self: center;
  > * {
    margin: 0;
  }
  *::selection {
    color: ${colors.white};
    background-color: ${colors.brand}; // think of a better place for this
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  @media (max-width: 680px) {
    font-size: 1.6em;
  }
  @media (min-width: 681px) {
    font-size: 2.2rem;
  }
  @media (min-width: 880px) {
    font-size: 3rem;
  }
  margin-bottom: 0;
`

const Spacer = ({ className }: { className?: string }) => <div className={className}>&#8226;&#8226;&#8226;</div>

const StyledSpacer = styled(Spacer)`
  margin: 1em 0 !important;
  user-select: none;
`

const StyledTicketsButton = styled.a`
  font-size: 1.8em;
  padding: 0.2rem 1.8rem;
  background-color: ${colors.brand};
  color: ${colors.black};
  border-style: solid;
  user-select: none;

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

const TicketsButton = () => <StyledTicketsButton href="https://ti.to/uncodeference/2019">Tickets</StyledTicketsButton>

const Schedule = ({ className }: { className?: string }) => (
  <div className={className}>
    <div>
      <span>
        Thursday 9<sup>th</sup>
      </span>
      <a href="#TODO">un&lt;meet&gt;up</a>
    </div>
    <div>
      <span>
        Friday 10<sup>th</sup>
      </span>
      <Link to="#attend">un&#123;code&#125;ference</Link>
    </div>
    <div>
      <span>
        Saturday 11<sup>th</sup>
      </span>
      <Link to="#unhiking">(un)hiking</Link>
    </div>
  </div>
)

// kept for emotionjs demo purpose
const ListSchedule = styled(Schedule)`
  div > span:after {
    content: ': ';
  }
`

const StyledSchedule = styled(Schedule)`
  width: 100%;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
    > div {
      margin-bottom: 2em;
    }
    > div:last-child {
      margin-bottom: 0em;
    }
  }
  @media (min-width: 601px) {
    flex-direction: row;
  }
  justify-content: space-around;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    > :nth-child(2) {
      font-size: 1.3rem;
      font-weight: bolder;
    }
  }
`

const Location = styled.p`
  margin-top: 1em;
  @media (max-width: 640px) {
    font-size: 1em;
  }
  @media (min-width: 641px) {
    font-size: 1.5rem;
  }
`

const Description = styled.p`
  text-align: center;
  @media (min-width: 360px) {
    font-size: calc(16px + 6 * ((100vw - 360px) / 640));
  }
  @media (min-width: 1000px) {
    font-size: 22px;
  }
`

const MainInfo: React.FunctionComponent = () => (
  <InfoBox>
    <Title>uncodeference.io '19</Title>
    <Location>
      May 10<sup>th</sup> 2019 &middot;{' '}
      <a href="https://www.google.com/maps/place/Werkstätte+Wattens/@47.287262,11.5905719,17z/data=!3m1!4b1!4m5!3m4!1s0x479d6467027ebc8d:0x97e24643b15d2bec!8m2!3d47.2872584!4d11.5927606">
        Wattens, AT
      </a>
    </Location>
    <StyledSpacer />
    <Description>
      The software engineering <a href="http://unconference.net/unconferencing-how-to-prepare-to-attend-an-unconference/">unconference</a>{' '}
      in the heart of Tyrol (Austria)
    </Description>
    <StyledSpacer />
    <StyledSchedule />
    <StyledSpacer />
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
      <AttendSection />
      <PreviousEditionsSection />
      <FAQSection />
      <SponsorsSection />
      {/*<Contact />*/}
    </Page>
  </IndexLayout>
)

export default IndexPage
