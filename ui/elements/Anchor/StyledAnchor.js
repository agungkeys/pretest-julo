import styled from '@emotion/styled';
import { spacing, customCSS } from '../../helpers';
import { rem } from '../../utils';
import { LINE_HEIGHT } from '../../constant';

export const propsUnderlineStyle = ({ isUnderlined }) => {
  return `text-decoration: ${isUnderlined ? 'underline' : 'none'};`;
};

const propsChangedHover = ({ theme, colorVariant }) => {
  const colorConfig = {
    default: theme.link.defaultHover,
    primary: theme.link.primaryHover,
    grey: theme.link.greyHover
  };

  return `&:hover {
    color: ${colorConfig[colorVariant]};
  }`;
};

// styling from props for text string
const propsColorVariantStyle = ({ theme, colorVariant }) =>
  `color: ${theme.colorVariant[colorVariant]}`;

const propsSizeStyle = ({ theme, fontSizeVariant }) =>
  `font-size: ${rem(theme.fontSizes[fontSizeVariant])};`;

const propsFontWeightStyles = ({ fontWeightVariant }) => {
  const fontWeightConfig = {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800
  };
  return (
    fontWeightConfig[fontWeightVariant] &&
    `font-weight: ${fontWeightConfig[fontWeightVariant]};`
  );
};

const propsFontStyle = ({ fontStyleVariant }) =>
  `font-style: ${fontStyleVariant};`;

const propsTextAlignStyle = ({ textAlign }) => {
  const textAlignConfig = {
    left: 'left',
    center: 'center',
    right: 'right'
  };

  return (
    textAlignConfig[textAlign] && `text-align: ${textAlignConfig[textAlign]}`
  );
};

const propsStrikeThroughStyle = `
  text-decoration: line-through;
`;

const propsTruncateStyle = ({ truncatedMaxLine }) => `
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${truncatedMaxLine};
  overflow: hidden;
`;

const propsCaseStyle = ({ caseVariant }) => {
  const caseVariantConfig = {
    allUpper: () => `text-transform: uppercase;`,
    allLower: () => `text-transform: lowercase;`,
    capEach: () => `text-transform: capitalize;`,
    capFirst: () => `&::first-letter {
      text-transform: capitalize;
    }`
  };

  return caseVariantConfig[caseVariant] && caseVariantConfig[caseVariant];
};

const propsLineHeightVariant = ({ lineHeightVariant }) => {
  const lineHeightConfig = {
    [LINE_HEIGHT.NONE]: 1,
    [LINE_HEIGHT.TIGHT]: 1.25,
    [LINE_HEIGHT.SNUG]: 1.375,
    [LINE_HEIGHT.NORMAL]: 1.5,
    [LINE_HEIGHT.RELAXED]: 1.625,
    [LINE_HEIGHT.LOOSE]: 2
  };

  return (
    lineHeightConfig[lineHeightVariant] &&
    `line-height: ${lineHeightConfig[lineHeightVariant]}`
  );
};

const propsWordBreak = ({ wordBreak }) => {
  return `word-break: ${wordBreak}`;
};



const StyledAnchor = styled('a')`
  margin: 0;
  padding: 0;
  display: ${props => (props.isBlock ? 'block' : 'inline-block')};
  ${propsSizeStyle}
  ${propsFontWeightStyles}
  ${propsFontStyle}
  ${propsColorVariantStyle}
  ${propsTextAlignStyle}
  ${props => props.isChangedOnHover && propsChangedHover}
  ${props => props.isTruncated && propsTruncateStyle}
  ${props => props.isStrikedThrough && propsStrikeThroughStyle}
  ${props => props.caseVariant && propsCaseStyle}
  ${props => props.lineHeight && propsLineHeight}
  ${props => props.lineHeightVariant && propsLineHeightVariant}
  ${props => props.wordBreak && propsWordBreak}
  ${propsUnderlineStyle}
  ${spacing}
  ${customCSS}
  cursor: pointer;
`;

export default StyledAnchor;
