import * as React from 'react'
import { colors } from '../../styles/variables'
import styled from '@emotion/styled'
import { Section } from '../Section'

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
      <h3 id="what-is-an-unconference">
        What is an <i>unconference</i>?
      </h3>
      <div>
        <p>The unconference* format creates space for peer-to-peer learning, collaboration and creativity.</p>
        <p>
          At the start, the whole group will gather together and be guided through creating an agenda using open space technology. The exact
          process is not important to understand in advance – the process will become clear as it happens. The important part is that all
          those gathered will have the opportunity to put conference sessions on the agenda. No session will be voted off or ‘won’t happen’
          for some other reason. All sessions are welcome!
        </p>
        <p>The sessions convened will range from the formal to the informal:</p>
        <ul>
          <li>
            From the well thought out pre-prepared talk reflecting years of research and practice to the spur of the moment ‘new idea’ that
            would be fun to talk about.
          </li>
          <li>From the demonstration of a working tool to the whiteboarding of something completely new.</li>
        </ul>
        <p>
          Read more about it&nbsp;
          <a target="_blank" href="http://unconference.net/unconferencing-how-to-prepare-to-attend-an-unconference/">
            here
          </a>
          .
        </p>
      </div>
      <h3>How can I support the event?</h3>
      <p>
        Our projects are open source, feel free to check out the repos in&nbsp;
        <a target="blank" href="https://github.com/uncodeference">
          GitHub
        </a>
        &nbsp;and propose any change.
      </p>
      <h3>How can I go to Wattens?</h3>
      <ul>
        <li>
          <b>Public Transport</b>: Either take the train from Innsbruck Main Station to Fritzens/Wattens or go by bus to Wattens City
          Centre. Either option will take you around 50min. If you take the train you will have to walk around 1.5km.
        </li>
        <li>
          <b>Car</b>: There are parking spots you can use at the Werkstätte. It will take you around 20min if you drive from Innsbruck to
          Wattens by car.
        </li>
        <li>
          <b>Shuttle Service</b>: We will provide a free shuttle service from Innsbruck to Wattens for around 50 people.
        </li>
      </ul>
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
