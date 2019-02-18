import * as React from 'react'
import background from '../../assets/last-year.jpg'
import styled from '@emotion/styled'
import { colors } from '../../styles/variables'
import { Section } from '../Section'

const ColoredSection = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position-y: center;
  padding: 4rem;
`

const PreviousEditionsContainer = styled(Section)`
  display: flex;
  flex-direction: row;

  h2 {
    color: ${colors.brand};
  }
`

const PreviousEditionsSection = () => (
  <ColoredSection>
    <PreviousEditionsContainer id="last-year" title="Last Year" />
  </ColoredSection>
)

export default PreviousEditionsSection
