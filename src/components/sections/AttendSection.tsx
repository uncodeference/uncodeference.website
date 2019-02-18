import * as React from 'react'
import { colors } from '../../styles/variables'
import styled from '@emotion/styled'
import { Section } from '../Section';

const ColoredSection = styled.div`
  background-image: linear-gradient(90deg, ${colors.brand}, hsla(173, 45%, 62%, 0.9));
  padding: 4rem;
`

const AttendContainer = styled(Section)`
  display: flex;
  flex-direction: row;

  h2 {
    color: ${colors.black};
    margin: 0 5rem 0 0;
    font-weight: bold;
    text-transform: uppercase;
    transform: rotate(180deg);
    text-align: center;
    writing-mode: vertical-lr;
    font-size: 3rem;
  }

  h3 {
    color: ${colors.black};
    text-transform: uppercase;
  }

  a {
    color: ${colors.black};
  }
`

const AttendSection = () => (
  <ColoredSection>
    <AttendContainer id="attend" title="Attend">
      <div>
        <section>
          <h3>The Conference</h3>
          <div>
            <p>The unconference* format creates space for peer-to-peer learning, collaboration and creativity.</p>
            <p>
              At the start, the whole group will gather together and be guided through creating an agenda using open space technology. The
              exact process is not important to understand in advance – the process will become clear as it happens. The important part is
              that all those gathered will have the opportunity to put conference sessions on the agenda. No session will be voted off or
              ‘won’t happen’ for some other reason. All sessions are welcome!
            </p>
            <p>The sessions convened will range from the formal to the informal:</p>
            <ul>
              <li>
                From the well thought out pre-prepared talk reflecting years of research and practice to the spur of the moment ‘new idea’
                that would be fun to talk about.
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
        </section>
        <section>
          <h3>The Venue</h3>
        </section>
        <section>
          <h3>The Meetup</h3>
        </section>
        <section>
          <h3>The Hike</h3>
        </section>
        <section>
          <h3>Code of Conduct</h3>
          <p>
          All attendees, speakers, sponsors and volunteers at our conference are required to agree with the <a href="http://confcodeofconduct.com/"><b>Conference Code of Conduct</b></a>. We expect cooperation from all participants to help ensure a safe environment for everybody.
          </p>
        </section>
      </div>
    </AttendContainer>
  </ColoredSection>
)

export default AttendSection
