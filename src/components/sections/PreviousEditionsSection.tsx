import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '../../styles/variables'
import { Section } from '../Section'

const Title = styled.h3`
  color: ${colors.white} !important;
  letter-spacing: 0.06em;
`

const ColoredSection = styled.div`
  background: rgba(0, 0, 0, 0.9);
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

const PreviousEditionsContainer = styled(Section)`
  h2 {
    color: ${colors.brand};
  }
`

const PreviousEditionsSection = () => (
  <ColoredSection>
    <PreviousEditionsContainer id="last-year" title="Last Year">
      <Title>60 Developers</Title>
      <Title>8 Countries</Title>
      <Title>6 Rooms</Title>
      <Title>40 Talks</Title>
    </PreviousEditionsContainer>
  </ColoredSection>
)

export default PreviousEditionsSection
