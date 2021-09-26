import styled from '@emotion/styled';
import { spacing, customCSS } from '../../helpers';
import { rem } from '../../utils';

const propsRoundedStyle = ({ theme }) => `
  border-radius: ${rem(theme.box.borderRadius)}; 
`;

const borderStyle = ({ borderSides }) => `
  ${borderSides ? `border-width: 0` : `border-width: 1px`};
  border-style: solid;
`;

const borderColorStyle = ({ borderColorVariant, theme }) => {
  const borderColorVariantConfig = {
    default: theme.box.defaultBorderColor,
    primary: theme.box.primaryBorderColor,
    secondary: theme.box.secondaryBorderColor,
    grey: theme.box.greyBorderColor,
    blue: theme.box.blueBorderColor,
    danger: theme.box.dangerBorderColor,
    red: theme.box.redBorderColor,
  };

  if (borderColorVariant) {
    return (
      borderColorVariantConfig[borderColorVariant] &&
      `border-color: ${borderColorVariantConfig[borderColorVariant]};`
    );
  }

  return `border-color: ${borderColorVariantConfig.default};`;
};

const borderSidesStyle = ({ borderSides }) => {
  const borderRules = [];
  borderSides.map(borderSide => {
    switch (borderSide) {
      case 'left':
        borderRules.push('border-left-width: 1px');
        break;
      case 'right':
        borderRules.push('border-right-width: 1px');
        break;
      case 'top':
        borderRules.push('border-top-width: 1px');
        break;
      case 'bottom':
        borderRules.push('border-bottom-width: 1px');
        break;
      default:
        borderRules.push('border-width: 1px');
        break;
    }
  });

  return borderRules.length && borderRules.join(';');
};

const propsBoxShadowStyle = ({ borderColorVariant, theme }) => {
  const boxShadowConfig = {
    default: theme.box.defaultShadow,
    primary: theme.box.primaryShadow,
    secondary: theme.box.secondaryShadow,
    grey: theme.box.greyShadow,
    blue: theme.box.blueShadow,
    red: theme.box.redShadow,
  };

  if (borderColorVariant) {
    return (
      boxShadowConfig[borderColorVariant] &&
      `box-shadow: ${boxShadowConfig[borderColorVariant]};`
    );
  }

  return `box-shadow: ${boxShadowConfig.default};`;
};

const propsBoxBackground = ({ colorVariant, theme }) => {
  const bgColorConfig = {
    default: theme.box.defaultBgColor,
    primary: theme.box.primaryBgColor,
    secondary: theme.box.secondaryBgColor,
    grey: theme.box.greyBgColor,
    blue: theme.box.blueBgColor,
    red: theme.box.redBgColor,
  };
  return (
    bgColorConfig[colorVariant] &&
    `background-color: ${bgColorConfig[colorVariant]};`
  );
};

const propsClipped = `
  overflow: hidden;
`;

const propsCenter = `
  text-align: center;
`;

const propsFullHeight = `
  height: 100%;
`;

const StyledBox = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  ${spacing}
  ${customCSS}
  ${props => props.colorVariant && propsBoxBackground}
  ${props => props.isRounded && propsRoundedStyle}
  ${props => props.withBorder && borderStyle}
  ${props => props.withBorder && borderColorStyle}
  ${props => props.borderSides && borderSidesStyle}
  ${props => props.withBoxShadow && propsBoxShadowStyle}
  ${props => props.isClipped && propsClipped}
  ${props => props.isCentered && propsCenter}
  ${props => props.isFullHeight && propsFullHeight}
`;

export default StyledBox;
