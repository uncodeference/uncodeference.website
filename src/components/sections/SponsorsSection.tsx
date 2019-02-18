import * as React from 'react'
import styled from '@emotion/styled'
import { Section } from '../Section'
import { colors } from '../../styles/variables'

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
    <SponsorsContainer id="sponsors" title="Sponsors" />
  </ColoredSection>
)

export default SponsorsSection
