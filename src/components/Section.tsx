import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import Container from './Container'

interface SectionProps {
  id: string
  title: string
  className?: string
}

const SectionComponent: React.SFC<SectionProps> = ({ id, className, title, children }) => (
  <Container id={id} className={className}>
    <h2>{title}</h2>
    <div>{children}</div>
  </Container>
)

export const Section = styled(SectionComponent)`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
    h2 {
      transform: none;
      writing-mode: initial;
      font-size: 2rem;
      margin: 0;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
  @media (min-width: 801px) {
    flex-direction: row;
    h2 {
      transform: rotate(180deg);
      writing-mode: vertical-lr;
      font-size: 3rem;
      margin: 0 5rem 0 0;
    }
    h3 {
      font-size: 1.5rem;
    }
  }

  h2 {
    color: ${colors.black};
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  h3 {
    color: ${colors.black};
    text-transform: uppercase;
  }
`
