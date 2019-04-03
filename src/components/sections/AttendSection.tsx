import * as React from 'react'
import { colors } from '../../styles/variables'
import styled from '@emotion/styled'
import { Section } from '../Section'
import { Link } from 'gatsby'
import { lstat } from 'fs'

const ColoredSection = styled.div`
  background-image: linear-gradient(90deg, ${colors.brand}, hsla(173, 45%, 62%, 0.9));
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

const AttendContainer = styled(Section)`
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
          <p>
            The uncodeference is a place to learn, meet new friends, share ideas and have lots of fun. We wanna provide the best place for a
            true&nbsp;
            <Link to="#what-is-an-unconference">
              <i>unconference</i>
            </Link>
            &nbsp;experience. We want to connect people and build a place where thoughts and experiences can be exchanged in the most
            awesome way.
          </p>
          <p>
            From our last year's experience this worked pretty well and this year we wanna bring this idea further. That's the reason why
            the conference might seem as a 3-day event. We've got
            <ul>
              <li>
                the <b>un&lt;meet&gt;up</b> on Thursday the 9<sup>th</sup>
              </li>
              <li>
                the <b>un{'{code}'}ference</b> on Friday the 10<sup>th</sup>
              </li>
              <li>
                and the <b>(un)hike</b> on Saturday the 11<sup>th</sup>.
              </li>
            </ul>
          </p>
          <p>
            Just to make sure, the&nbsp;
            <b>
              main event takes place on Friday the 10<sup>th</sup>
            </b>
            &nbsp;and this is also the date a ticket is needed. The&nbsp;<b>un&lt;meet&gt;up</b>&nbsp;and the&nbsp;<b>(un)hike</b>&nbsp;are
            satellite events for the community, we would be really happy if you join in, but it's completely up to you!
          </p>
        </section>
        <section>
          <h3>The Venue</h3>
          <p>
            <a href="https://www.werkstaette-wattens.at/en" target="blank">
              Werkstätte Wattens
            </a>
            &nbsp;is an international business and creative centre for founders, startups, movers &amp; shakers and service providers at
            various stages of development. They focus on technology, innovation, and the creation of regional value and sustainable growth.
          </p>
          <p />
          <address>
            Address:&nbsp;
            <a href="https://www.openstreetmap.org/node/4774623335#map=18/47.28758/11.59321&layers=T" target="blank">
              Weisstraße 9, 6112 Wattens, Austria
            </a>
          </address>
        </section>
        <section>
          <h3>The Meetup</h3>
          <p>
            Due to the great feedback of last year's uncodeference we decided to convert the formerly known ReactJS Tirol meetup into
            the&nbsp;<b>un&lt;meet&gt;up</b>&nbsp;and broadened up it's topics to software engineering in general.
            <br />
            Because of it being grown out of the uncodeference we decided to host it this year alongside the uncodeference as a satellite
            event. For more info and RSVP please visit&nbsp;
            <a href="https://github.com/uncodeference/unmeetup" target="blank">
              our GitHub repository
            </a>
            &nbsp; where everything is organized by the community! We are looking forward to see you there!
          </p>
        </section>
        <section>
          <h3>The Hike</h3>
          <p>To be announced!</p>
        </section>
        <section>
          <h3>Code of Conduct</h3>
          <p>
            All attendees, speakers, sponsors and volunteers at our conference are required to agree with the{' '}
            <a href="http://confcodeofconduct.com/">Conference Code of Conduct</a>. We expect cooperation from all participants to help
            ensure a safe environment for everybody.
          </p>
        </section>
      </div>
    </AttendContainer>
  </ColoredSection>
)

export default AttendSection
