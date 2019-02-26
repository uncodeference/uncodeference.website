import styled from '@emotion/styled'
import Text from './Text';

export default styled(Text)`
  font-weight: bold;
  letter-spacing: 0.1em;

  ::before {
    content: '> ';
  }
`;
