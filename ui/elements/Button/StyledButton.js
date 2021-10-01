import styled from '@emotion/styled';
import BaseButton from '../BaseButton';
import { COLORS, PALETTE } from '../../constant';
import { spacing, customCSS } from '../../helpers';
import { rem } from '../../utils';

export const baseStyle = ({ theme }) => `
  user-select: none;
  outline: none;
  box-shadow: none;
  transition: 0.3s;
  border-width: ${rem(theme.button.borderWidth)};
`;

export const typographyStyle = ({ theme }) => `
  font-family: inherit;
  font-weight: ${theme.button.fontWeight};
  text-align: center;
  vertical-align: middle;
`;

export const cursorStyle = () => `
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const hoverStyle = ({ theme, colorVariant }) => {
  const {
    greyButtonHoverColor,
    greyButtonHoverBgColor,
    greyButtonHoverBorderColor,
  } = theme.button;

  const hoverConfig = {
    primary: `opacity: 0.9;`,
    grey: `
      color: ${greyButtonHoverColor};
      background-color: ${greyButtonHoverBgColor};
      border-color: ${greyButtonHoverBorderColor};
    `,
    ['grey-soft']: `
      color: ${greyButtonHoverBorderColor};
      background-color: ${greyButtonHoverBgColor};
      border-color: ${greyButtonHoverBorderColor};
    `,
    caution: `opacity: 0.9;`,
    white: `opacity: 0.9;`,
  };

  return (
    hoverConfig[colorVariant] &&
    `&:not(:disabled):hover { ${hoverConfig[colorVariant]} }`
  );
};

export const propsFullWidthStyle = ({ isFullWidth }) => {
  return `${
    isFullWidth
      ? `
      display: block;
      width: 100%;
      `
      : `display: inline-block;`
  }`;
};

export const propsColorVariantStyle = ({ theme, colorVariant }) => {
  const {
    defaultButtonColor,
    defaultButtonBgColor,
    primaryButtonColor,
    primaryButtonBgColor,
    primaryButtonBorderColor,
    greyButtonColor,
    greyButtonBgColor,
    greyButtonBorderColor,
    cautionButtonColor,
    cautionButtonBgColor,
    cautionButtonBorderColor,
    cautionLightButtonColor,
    cautionLightButtonBgColor,
    cautionLightButtonBorderColor,
    primaryDarkerButtonColor,
    primaryDarkerButtonBgColor,
    primaryDarkerButtonBorderColor,
    dangerButtonColor,
    dangerButtonBgColor,
    dangerButtonBorderColor,
    dangerLightButtonColor,
    dangerLightButtonBgColor,
    dangerLightButtonBorderColor,
    whiteButtonColor,
    whiteButtonBgColor,
    whiteButtonBorderColor,
  } = theme.button;

  const hoverConfig = {
    default: () => `
      color: ${defaultButtonColor};
      background: ${defaultButtonBgColor};
      border: none;
    `,
    primary: () => `
      color: ${primaryButtonColor};
      background-color: ${primaryButtonBgColor};
      border: 1px solid ${primaryButtonBorderColor};
    `,
    grey: () => `
      color: ${greyButtonColor};
      background-color: ${greyButtonBgColor};
      border: 1px solid ${greyButtonBorderColor};
    `,
    ['grey-soft']: () => `
      color: ${greyButtonColor};
      background-color: ${greyButtonBorderColor};
      border: 1px solid ${greyButtonBorderColor};
    `,
    caution: () => `
      color: ${cautionButtonColor};
      background-color: ${cautionButtonBgColor};
      border: 1px solid ${cautionButtonBorderColor};
    `,
    caution_light: () => `
      color: ${cautionLightButtonColor};
      background-color: ${cautionLightButtonBgColor};
      border: 1px solid ${cautionLightButtonBorderColor};
    `,
    primary_darker: () => `
      color: ${primaryDarkerButtonColor};
      background-color: ${primaryDarkerButtonBgColor};
      border: 1px solid ${primaryDarkerButtonBorderColor};
    `,
    danger: () => `
      color: ${dangerButtonColor};
      background-color: ${dangerButtonBgColor};
      border: 1px solid ${dangerButtonBorderColor};
    `,
    danger_light: () => `
      color: ${dangerLightButtonColor};
      background-color: ${dangerLightButtonBgColor};
      border: 1px solid ${dangerLightButtonBorderColor};
    `,
    white: () => `
    color: ${whiteButtonColor};
    background-color: ${whiteButtonBgColor};
    border: 1px solid ${whiteButtonBorderColor};`,
  };
  return hoverConfig[colorVariant];
};

export const propsOutlinedStyle = ({ theme, colorVariant }) => {
  const {
    primaryButtonColor,
    primaryButtonBgColor,
    primaryButtonBorderColor,
    greyButtonColor,
    greyButtonBgColor,
    greyButtonBorderColor,
    cautionButtonColor,
    cautionButtonBgColor,
    cautionButtonBorderColor,
    cautionLightButtonColor,
    cautionLightButtonBgColor,
    primaryDarkerButtonColor,
    primaryDarkerButtonBgColor,
    cautionLightButtonBorderColor,
    dangerButtonColor,
    dangerButtonBgColor,
    whiteButtonColor,
    whiteButtonBgColor,
    whiteButtonBorderColor,
  } = theme.button;

  const colorConfig = {
    primary: `
      color: ${primaryButtonBgColor};
      background-color: ${primaryButtonColor};
      border: 1px solid ${primaryButtonBorderColor};
      &:not(:disabled):hover {
        color: ${primaryButtonColor};
        background-color: ${primaryButtonBgColor};
      }
    `,
    grey: `
      color: ${greyButtonBgColor};
      background-color: ${greyButtonColor};
      border: 1px solid ${greyButtonBorderColor};
      &:not(:disabled):hover {
        color: ${greyButtonColor};
        background-color: ${greyButtonBgColor};
      }
    `,
    ['grey-soft']: `
      color: ${greyButtonBorderColor};
      background-color: ${greyButtonColor};
      border: 1px solid ${greyButtonBorderColor};
      &:not(:disabled):hover {
        color: ${greyButtonColor};
        background-color: ${greyButtonBorderColor};
      }
    `,
    caution: () => `
      color: ${cautionButtonBgColor};
      background-color: ${cautionButtonColor};
      border: 1px solid ${cautionButtonBorderColor};
      &:not(:disabled):hover {
        color: ${cautionButtonColor};
        background-color: ${cautionButtonBgColor};
      }
    `,
    caution_light: `
      color: ${cautionLightButtonBgColor};
      background-color: ${cautionLightButtonColor};
      border: 1px solid ${cautionLightButtonBorderColor};
      &:not(:disabled):hover {
        color: ${cautionLightButtonColor};
        background-color: ${cautionLightButtonBgColor};
      }
    `,
    primary_darker: `
      color: ${primaryDarkerButtonBgColor};
      background-color: ${primaryButtonColor};
      border: 1px solid ${primaryButtonBorderColor};
      &:not(:disabled):hover {
        color: ${primaryDarkerButtonColor};
        background-color: ${primaryDarkerButtonBgColor};
        border: 1px solid ${primaryButtonBorderColor};
      }
    `,
    danger: `
      color: ${dangerButtonBgColor};
      background-color: ${dangerButtonColor};
      border: 1px solid ${dangerButtonBgColor};
      &:not(:disabled):hover {
        color: ${dangerButtonColor};
        background-color: ${dangerButtonBgColor};
        border: 1px solid ${dangerButtonBgColor};
      }
    `,
    white: `color: ${whiteButtonColor};
    background-color: ${whiteButtonBgColor};
    border: 1px solid ${whiteButtonBorderColor};
    &:not(:disabled):hover {
      color: #000000;
      background-color: ${whiteButtonColor};
      border: 1px solid ${whiteButtonColor};
    }`,
  };

  return colorConfig[colorVariant];
};

export const propsRoundedStyle = ({ theme }) => `
  border-radius: ${rem(theme.button.borderRadius)};
`;

export const propsSizeStyle = ({ theme, size }) => {
  const { fontSize, paddingY, paddingX } = theme.button;
  return `
    font-size: ${rem(fontSize[size])};
    padding: ${rem(paddingY[size])} ${rem(paddingX[size])};
  `;
};

export const propsDisabledStyle = `
  &:disabled {
    background-color: ${COLORS.DISABLED};
    border-color: ${COLORS.DISABLED};
    color: ${PALETTE.WHITE};
  }
`;

export const propsLoadingStyle = `
  &.loading {
    position: relative;
    .loader {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      left: 0;
      top: 0;
    }
    span {
      visibility: hidden;
    }
  }
`;

const StyledButton = styled(BaseButton)`
  && {
    ${propsFullWidthStyle}
    ${typographyStyle}
    ${propsColorVariantStyle}
    ${hoverStyle}
    ${propsSizeStyle}
    ${propsDisabledStyle}
    ${props => props.isOutlined && propsOutlinedStyle}
    ${props => props.isRounded && propsRoundedStyle}
    ${props => props.isLoading && propsLoadingStyle}
    ${baseStyle}
    ${cursorStyle}
    ${spacing}
    ${customCSS}
  }
  
`;

export default StyledButton;
