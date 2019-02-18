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
import Contact from '../components/sections/Contact'

const MainSection = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position-y: center;
  padding-top: 1rem;
  padding-bottom: 2rem;
`

const InfoBox = styled.div`
  color: ${colors.brand};
  background-color: ${colors.black};
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
  *::selection {
    color: ${colors.white};
    background-color: ${colors.brand}; // think of a better place for this
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
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

const TicketsButton = () => <StyledTicketsButton href="#TODO">Tickets</StyledTicketsButton>

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
  flex-direction: row;
  justify-content: space-around;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    > span {
      margin-bottom: 0.3rem;
    }
    > :nth-child(2) {
      font-size: 1.3rem;
      font-weight: bolder;
    }
  }
`

const MainInfo: React.FunctionComponent = () => (
  <InfoBox>
    <Title>uncodeference.io '19</Title>
    <h3>
      09.-11. May 2019 &middot;{' '}
      <a href="https://www.google.com/maps/place/Werkstätte+Wattens/@47.287262,11.5905719,17z/data=!3m1!4b1!4m5!3m4!1s0x479d6467027ebc8d:0x97e24643b15d2bec!8m2!3d47.2872584!4d11.5927606">
        Wattens, AT
      </a>
    </h3>
    <StyledSpacer />
    <p>
      The software engineering <a href="http://unconference.net/unconferencing-how-to-prepare-to-attend-an-unconference/">unconference</a>{' '}
      in the heart of Tyrol (Austria)
    </p>
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
      <Contact />
    </Page>
  </IndexLayout>
)

export default IndexPage
