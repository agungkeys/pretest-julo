import styled from '@emotion/styled';

import { rem } from '../../utils';
import { spacing, customCSS } from '../../helpers';

const baseStyle = `
  vertical-align: middle; 
  border-style: none;
  overflow: hidden;
`;

const handleFluid = `
  max-width: 100%;
  height: auto;
`;

const handleShape = ({ shapeVariant, theme }) => {
  const variantConfig = {
    rounded: rem(theme.image.roundedBorderRadius),
    circle: '50%',
    roundTop: `${rem(theme.image.roundedBorderRadius)} ${rem(
      theme.image.roundedBorderRadius,
    )} 0 0`,
    roundBottom: `0 0 ${rem(theme.image.roundedBorderRadius)} ${rem(
      theme.image.roundedBorderRadius,
    )}`,
  };

  return (
    variantConfig[shapeVariant] &&
    `border-radius: ${variantConfig[shapeVariant]};`
  );
};

const handleFit = ({ fit }) => {
  const fitStyleConfig = {
    none: 'none',
    fill: 'fill',
    contain: 'contain',
    cover: 'cover',
    ['scale-down']: 'scale-down',
  };
  return fitStyleConfig[fit] && `object-fit: ${fitStyleConfig[fit]}`;
};

const handleFullWidth = `
  width: 100%;
`;

const handleDisplay = ({ display }) => {
  return `display: ${display};`;
};

// component styling
const StyledImage = styled.img`
  ${baseStyle}
  ${props => props.isFluid && handleFluid}
  ${props => props.shapeVariant && handleShape}
  ${props => props.fit && handleFit}
  ${props => props.isFullWidth && handleFullWidth}
  ${props => props.display && handleDisplay}
  ${spacing}
  ${customCSS}
`;

export { StyledImage };
