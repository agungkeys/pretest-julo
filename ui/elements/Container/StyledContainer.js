import styled from '@emotion/styled';
import { spacing, customCSS } from '../../helpers';
import { rem } from '../../utils';

const spacingStyle = ({ theme }) => `
	padding-right: ${rem(theme.basePadding)};
	padding-left: ${rem(theme.basePadding)};
	margin-right: auto;
	margin-left: auto;
`;

const maxWidthMediaQuery = ({ theme }) =>
  Object.keys(theme.breakpoints)
    .map(i => {
      return `@media (min-width: ${theme.breakpoints[i]}px){ 
			max-width: ${theme.container.width[i]}px;
			padding-left: ${theme.container.padding[i]}px;
			padding-right: ${theme.container.padding[i]}px;
		}`;
    })
    .join(' ');

const StyledContainer = styled.div`
	${spacingStyle}
	${props => !props.isFluid && maxWidthMediaQuery}
	${spacing}
  ${customCSS}
`;

export default StyledContainer;
