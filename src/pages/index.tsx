import * as React from 'react'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import background from '../assets/background.jpg'
import logo from '../assets/logo.inverted.png'
import Header from '../components/Header'
import Container from '../components/Container'
import { colors, fonts } from '../styles/variables'
import AttendSection from '../components/sections/AttendSection'
import PreviousEditionsSection from '../components/sections/PreviousEditionsSection'
import FAQSection from '../components/sections/FAQSection'
import SponsorsSection from '../components/sections/SponsorsSection'
import { scale, marginY, userSelect, textTransform, fontSize, scaleEm, grow } from '../styles/mixins'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MainSection = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position-y: center;
`

const InfoBox = styled.div`
  color: ${colors.brand};
  background-color: ${colors.black};
  border: 4px solid ${colors.brand};
  display: flex;
  flex-direction: column;
  margin: 4vmin;
  max-width: 45em;
  padding: ${scaleEm(1.2, grow.slow)};
  align-items: center;
  font-family: ${fonts.monospace};
  align-self: center;
  text-align: center;
  @media (min-width: 481px) {
    ${marginY(scaleEm(2, grow.fast))};
  }
  > * {
    margin: 0;
  }
  *::selection {
    color: ${colors.white};
    background-color: ${colors.brand}; // think of a better place for this
  }
`

const Title = () => (
  <h1
    css={[
      textTransform('uppercase'), //
      fontSize(scaleEm(1.5, grow.slow)),
    ]}
  >
    uncodeference.io '19
  </h1>
)

const Spacer = () => (
  <div
    css={[
      fontSize('1em'), //
      marginY('1em'),
      userSelect('none'),
    ]}
  >
    &#8226;&#8226;&#8226;
  </div>
)

const StyledTicketsButton = styled.a`
  font-size: 1.5em;
  padding: 0.4rem 2rem;
  background-color: ${colors.brand};
  color: ${colors.black};
  border-style: solid;
  user-select: none;
  font-weight: bold;

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
      <AnchorLink href="#unmeetup">un&lt;meet&gt;up</AnchorLink>
    </div>
    <div>
      <span>
        Friday 10<sup>th</sup>
      </span>
      <AnchorLink href="#attend">un&#123;code&#125;ference</AnchorLink>
    </div>
    <div>
      <span>
        Saturday 11<sup>th</sup>
      </span>
      <AnchorLink href="#unhiking">(un)hiking</AnchorLink>
    </div>
  </div>
)

// kept for emotionjs demo purpose
// // const ListSchedule = styled(Schedule)`
// //   div > span:after {
// //     content: ': ';
// //   }
// // `

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
    > a {
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

const Logo = () => (
  <img
    src={logo}
    css={{
      width: scale('xl', 'normal', 'growFast'),
      ...marginY(scale('m')),
      '@media (min-width: 481px)': {
        display: 'none',
      },
    }}
  />
)

const MainInfo: React.FunctionComponent = () => (
  <InfoBox>
    <Logo />
    <Title />
    <Location>
      May 10<sup>th</sup> 2019 &middot;{' '}
      <a href="https://www.google.com/maps/place/Werkstätte+Wattens/@47.287262,11.5905719,17z/data=!3m1!4b1!4m5!3m4!1s0x479d6467027ebc8d:0x97e24643b15d2bec!8m2!3d47.2872584!4d11.5927606">
        Wattens, AT
      </a>
    </Location>
    <Spacer />
    <Description>
      The software engineering <a href="http://unconference.net/unconferencing-how-to-prepare-to-attend-an-unconference/">unconference</a>{' '}
      in the heart of Tyrol (Austria)
    </Description>
    <Spacer />
    <StyledSchedule />
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
      <AttendSection />
      <PreviousEditionsSection />
      <FAQSection />
      <SponsorsSection />
      {/*<Contact />*/}
    </Page>
  </IndexLayout>
)

export default IndexPage
