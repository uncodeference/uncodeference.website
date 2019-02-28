import * as React from 'react'
import { colors } from '../../styles/variables'
import styled from '@emotion/styled'
import { Section } from '../Section'
import { Link as L } from '../../components/ui/Links';

const ColoredSection = styled.div`
  background-image: linear-gradient(270deg, ${colors.brand}, hsla(173, 45%, 62%, 0.9));
  padding: 4rem;
`

const FAQContainer = styled(Section)`
  display: flex;
  flex-direction: row;
`

const Title = styled.h4`
  color: ${colors.white} !important;
  letter-spacing: 0.06em;
`;

const Link = styled(L)`
  color: ${colors.black};
`;

const Text = styled.p`
  color: ${colors.white} !important;
`;

const FAQSection = () => (
  <ColoredSection>
    <FAQContainer id="faq" title="FAQ">
      <Title>How can I support the event?</Title>
      <Text> Our projects are open source, feel free to check out the repos in&nbsp;
        <Link target="blank" href="https://github.com/uncodeference/unmeetup">GitHub</Link>
        &nbsp;and propose any change.
      </Text>

      <Title>How can I go to Wattens?</Title>
      <Text> You have multiple options: You can either take the normal bus/train transport from Innsbruck Hbf or
        take the shuttle bus we will provide, but remember to sign up first via email, because there is a max of 50 ppl.
      </Text>

      <Title>Read more in our &nbsp;<Link target="blank" href="https://github.com/uncodeference/uncodeference.faq">GitHub FAQs</Link></Title>

    </FAQContainer>
  </ColoredSection>
)

export default FAQSection
