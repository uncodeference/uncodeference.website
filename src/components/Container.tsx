import * as React from 'react'
import styled from '@emotion/styled'

import { widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
`

interface ContainerProps {
  className?: string
  id?: string
}

const Container: React.SFC<ContainerProps> = ({ id, children, className }) => (
  <StyledContainer id={id} className={className}>
    {children}
  </StyledContainer>
)

export default Container
