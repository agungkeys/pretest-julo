import styled from '@emotion/styled';
import { spacing, customCSS } from '../../helpers';
import { rem } from '../../utils';

const propsFlexDirectionStyle = ({ flexDirection }) =>
  flexDirection && `flex-direction: ${flexDirection};`;

const propsFlexWrapStyle = ({ flexWrap }) =>
  flexWrap && `flex-wrap: ${flexWrap};`;

const propsJustifyContentStyle = ({ justifyContent }) =>
  justifyContent && `justify-content: ${justifyContent};`;

const propsAlignItemsStyle = ({ alignItems }) =>
  alignItems && `align-items: ${alignItems};`;

const propsAlignContentStyle = ({ alignContent }) =>
  alignContent && `align-content: ${alignContent};`;

const propsGutterStyle = ({ gutterSize, noGutters, theme }) =>
  !noGutters &&
  `
    margin-left: -${rem(theme.container.gutterSizes[gutterSize])};
    margin-right: -${rem(theme.container.gutterSizes[gutterSize])};`;

const propsFullHeight = ({ isFullHeight }) => {
  return isFullHeight && 'height: 100%;';
};

const StyledRow = styled.div`
  display: flex;
  ${propsFlexDirectionStyle}
  ${propsFlexWrapStyle}
  ${propsJustifyContentStyle}
  ${propsAlignItemsStyle}
  ${propsAlignContentStyle}
  ${propsGutterStyle}
  ${propsFullHeight}
  ${spacing}
  ${customCSS}
`;

export default StyledRow;
