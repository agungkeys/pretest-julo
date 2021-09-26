import styled from '@emotion/styled';
import { spacing, customCSS } from '../../helpers';
import { rem } from '../../utils';
// import julo from '../../theme';

// const theme = julo;

const propsGutterSizeStyle = ({ gutterSize, theme }) =>
  gutterSize &&
  `
  padding-left: ${rem(theme.container.gutterSizes[gutterSize])};
  padding-right: ${rem(theme.container.gutterSizes[gutterSize])};
  `;

const propsflexOrderStyle = ({ flexOrder }) =>
  flexOrder && `order: ${flexOrder};`;

const propsTextAlignStyle = ({ textAlign }) => {
  const textAlignConfig = {
    left: 'left',
    center: 'center',
    right: 'right'
  };

  return (
    textAlignConfig[textAlign] && `text-align: ${textAlignConfig[textAlign]};`
  );
};

const propsAutoWidth = `
  flex: 0 0 auto;
  width: auto;
  max-width: none;
`;

const propsAlignSelfStyle = ({ alignSelf }) => {
  const alignConfig = {
    auto: 'auto',
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch'
  };

  return alignConfig[alignSelf] && `align-self: ${alignConfig[alignSelf]};`;
};

const getRange = range => {
  return 100 / (12 / range);
};

const getMultipleBreakpointsRange = props => {
  return Object.keys(props.theme.breakpoints)
    .filter(breakpoint => props[breakpoint])
    .map(
      i =>
        props[i] &&
        `@media (min-width: ${props.theme.breakpoints[i]}px){ 
        flex: 0 0 ${getRange(props[i])}%;
        max-width: ${getRange(props[i])}%;
      }`
    )
    .join(' ');
};

const StyledCol = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-width: 100%;
  flex-basis: ${props => (props.flexBasis ? props.flexBasis : 0)};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : 1)};
  ${props => props.flexOrder && `order: ${flexOrder};`};
  ${props => props.flexShrink && `flex-shrink: ${props.flexShrink};`}
  ${propsGutterSizeStyle}
  ${propsflexOrderStyle}
  ${props =>
    props.range &&
    `
    flex: 0 0 ${getRange(props.range)}%;
    max-width: ${getRange(props.range)}%;
  `}
  ${getMultipleBreakpointsRange}
  ${propsTextAlignStyle}
  ${props => props.isAutoWidth && propsAutoWidth}
  ${props => props.alignSelf && propsAlignSelfStyle}
  ${spacing}
  ${customCSS}
`;

export default StyledCol;
