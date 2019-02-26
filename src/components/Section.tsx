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
`
