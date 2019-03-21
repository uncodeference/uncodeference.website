import * as React from 'react'
import { colors } from '../../styles/variables'
import styled from '@emotion/styled'
import { Section } from '../Section'
import { Link as L } from '../../components/ui/Links'

const ColoredSection = styled.div`
  background-image: linear-gradient(270deg, ${colors.brand}, hsla(173, 45%, 62%, 0.9));
  a {
    color: ${colors.black} !important;
  }
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

const FAQContainer = styled(Section)``

const FAQSection = () => (
  <ColoredSection>
    <FAQContainer id="faq" title="FAQ">
      <h3>How can I support the event?</h3>
      <p>
        Our projects are open source, feel free to check out the repos in&nbsp;
        <a target="blank" href="https://github.com/uncodeference">
          GitHub
        </a>
        &nbsp;and propose any change.
      </p>
      <h3>How can I go to Wattens?</h3>
      <p>
        You have multiple options: You can either take the normal bus/train transport from Innsbruck Hbf or take the shuttle bus we will
        provide, but remember to sign up first via email, because there is a max of 50 ppl.
      </p>
      <h3>You've got even more questions?</h3>
      <p>
        Check out our&nbsp;
        <a target="blank" href="https://github.com/uncodeference/uncodeference.faq">
          GitHub FAQs
        </a>
        &nbsp; or hit us up on&nbsp;
        <a target="blank" href="https://twitter.com/uncodeference">
          Twitter
        </a>
        .
      </p>
    </FAQContainer>
  </ColoredSection>
)

export default FAQSection
