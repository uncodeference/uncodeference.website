import * as React from 'react'
import { colors } from '../../styles/variables'
import styled from '@emotion/styled'
import { Section } from '../Section'

const ColoredSection = styled.div`
  background-image: linear-gradient(135deg, ${colors.brand}, hsla(173, 45%, 62%, 0.9));
  @media (max-width:480px){
      padding: 1rem;
  }
  @media (min-width:481px){
      padding: 2rem;
    }
  @media (min-width:800px){
      padding: 4rem;
    }
`

const ContactContainer = styled(Section)`
`

const Contact = () => (
  <ColoredSection>
    <ContactContainer id="contact" title="Contact" />
  </ColoredSection>
)

export default Contact
