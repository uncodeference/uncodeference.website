import * as React from 'react'
import { colors } from '../../styles/variables'
import styled from '@emotion/styled'
import { Section } from '../Section'

const ColoredSection = styled.div`
  background-image: linear-gradient(270deg, ${colors.brand}, hsla(173, 45%, 62%, 0.9));
  padding: 4rem;
`

const FAQContainer = styled(Section)`
  display: flex;
  flex-direction: row;
`

const FAQSection = () => (
  <ColoredSection>
    <FAQContainer id="faq" title="FAQ" />
  </ColoredSection>
)

export default FAQSection
