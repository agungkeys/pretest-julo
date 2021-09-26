import styled from '@emotion/styled';
import { spacing, customCSS } from '../../helpers';

const StyledBaseButton = styled.button`
  outline: none;
  padding: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  font-family: inherit;
  ${spacing}
  ${customCSS}
`;

export default StyledBaseButton;
