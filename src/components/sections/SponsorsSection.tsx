import * as React from 'react'
import styled from '@emotion/styled'
import { Section } from '../Section'
import { colors } from '../../styles/variables'
import Text from '../../components/ui/Text';
import { Link } from '../../components/ui/Links';
import Title from '../../components/ui/Title';

export const Spacer = () => (<span className="spacer">&nbsp;&middot;&nbsp;</span>);

const ColoredSection = styled.div`
  background: black;
  padding: 4rem;
`

const SponsorsContainer = styled(Section)`
  display: flex;
  flex-direction: row;
  h2 {
    color: ${colors.brand};
  }
`

const SponsorsSection = () => (
  <ColoredSection>
    <SponsorsContainer id="sponsors" title="Sponsors" >

      <Title>Who is sponsoring us? <span role="img" aria-label="money">💵</span></Title>
      <Text> <Link target="_blank" href="https://gronda.eu">Gronda</Link>: Organization</Text>
      <Text> <Link target="_blank" href="http://www.werkstaette-wattens.at/de">Werkstätte Wattens</Link>: Venue</Text>

      <br />
      <br />

      <Title>Who else is supporting us? <span role="img" aria-label="rocket">🚀</span></Title>
      <Text> <Link target="_blank" href="https://webundspeck.com/">Web&amp;Speck Meetup</Link></Text>
      <Text> <Link target="_blank" href="https://www.agent.sh/">Agent conf</Link></Text> <br />

    </SponsorsContainer>
  </ColoredSection>
)

export default SponsorsSection
