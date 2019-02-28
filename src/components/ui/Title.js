import styled from '@emotion/styled'
import Text from './Text';

export default styled.h3`
  font-weight: bold;
  letter-spacing: 0.1em;

  ::before {
    content: '> ';
  }
`;
