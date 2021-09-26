import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { rem } from '../../utils';
import { spacing, customCSS } from '../../helpers';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  padding: ${rem(10)} 0;

  & svg {
    animation: ${rotate} 1s linear infinite;
  }
  ${spacing}
  ${customCSS}
`;

export default StyledSpinner;
