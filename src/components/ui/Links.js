import styled from '@emotion/styled'
import { colors } from '../../styles/variables';

export const Link = styled.a`
  font-size: 17px;
  font-family: "Courier new", monospace;
  text-decoration: none;
  border-bottom: .5px dotted ${colors.accent};
  margin: 1em 0;
`

export const LinkImportant = styled(Link)`
  font-weight: bold;
  margin: 2em 0;
`;
