import styled from '@emotion/styled'
import { colors } from '../../styles/variables';

export default styled.p`
  color: ${colors.white} !important;
  font-size: 17px;
  max-width: 800px;

  @media only screen and (max-device-width: 425px) {
    font-size: 15px;
  }
`
