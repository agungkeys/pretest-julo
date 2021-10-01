import styled from '@emotion/styled';
import { spacing, customCSS } from '../../helpers';

const StyledAbsolute = styled.div`
  position: absolute;
  ${props => typeof props.top !== 'undefined' && `top: ${props.top}px;`}
  ${props => typeof props.right !== 'undefined' && `right: ${props.right}px;`}
  ${props =>
    typeof props.bottom !== 'undefined' && `bottom: ${props.bottom}px;`}
  ${props => typeof props.left !== 'undefined' && `left: ${props.left}px;`}
  ${spacing}
  ${customCSS}
`;

export default StyledAbsolute;
