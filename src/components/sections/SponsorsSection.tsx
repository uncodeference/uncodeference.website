import * as React from 'react'
import styled from '@emotion/styled'
import { Section } from '../Section'
import { colors } from '../../styles/variables'
import arz from '../../assets/sponsors/arz.png'

const Title = styled.h3`
  color: white !important;
`

const Text = styled.p``

const ColoredSection = styled.div`
  background: rgba(0, 0, 0, 0.9);
  color: ${colors.white};
  @media (max-width: 480px) {
    padding: 1rem;
  }
  @media (min-width: 481px) {
    padding: 2rem;
  }
  @media (min-width: 800px) {
    padding: 4rem;
  }
`

const SponsorsContainer = styled(Section)`
  h2 {
    color: ${colors.brand};
  }
`

const Sponsor = styled(
  ({ className, name, image, url }: { className?: string; name: string; type: string; image: string; url: string }) => (
    <a className={className} href={url}>
      <img src={image} alt={`Logo of ${name}`} />
    </a>
  )
)`
  border-style: none;
  img {
    max-width: 6rem;
    max-height: 6rem;
    text-decoration: none;
  }
`

const SponsorsSection = () => (
  <ColoredSection>
    <SponsorsContainer id="sponsors" title="Sponsors">
      <Title>Sponsors</Title>
      <Sponsor name="ARZ Allgemeines Rechenzentrum GmbH" type="Bronze" image={arz} url="https://www.arz.at/m086/homepage/de/index.jsp" />
      <br />
      <Title>Organization</Title>
      <Text>
        <a target="_blank" href="https://gronda.eu">
          Gronda
        </a>
        :&nbsp;Organization
      </Text>
      <Text>
        <a target="_blank" href="http://www.werkstaette-wattens.at/de">
          Werkstätte Wattens
        </a>
        :&nbsp;Venue
      </Text>
      <br />
      <Title>Who else is supporting us?</Title>
      <Text>
        <a target="_blank" href="https://scriptconf.org/">
          Script Conf
        </a>
      </Text>
      <Text>
        <a target="_blank" href="https://webundspeck.com/">
          Web&amp;Speck Meetup
        </a>
      </Text>
      <Text>
        <a target="_blank" href="https://www.agent.sh/">
          Agent conf
        </a>
      </Text>{' '}
      <br />
    </SponsorsContainer>
  </ColoredSection>
)

export default SponsorsSection
