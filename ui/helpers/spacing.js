import { rem } from '../utils';

const spacing = ({
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  marginX,
  marginY,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  paddingX,
  paddingY,
  theme
}) => {
  const factor = theme.multiplierFactor || 1;

  const spaces = {};

  for (let i = 0; i <= 50; i++) {
    spaces[i] = rem(i * factor);
  }

  return [
    ...(typeof margin !== 'undefined' ? [`margin: ${spaces[margin]}`] : []),
    ...(typeof marginLeft !== 'undefined'
      ? [`margin-left: ${spaces[marginLeft]};`]
      : []),
    ...(typeof marginRight !== 'undefined'
      ? [`margin-right: ${spaces[marginRight]};`]
      : []),
    ...(typeof marginTop !== 'undefined'
      ? [`margin-top: ${spaces[marginTop]};`]
      : []),
    ...(typeof marginBottom !== 'undefined'
      ? [`margin-bottom: ${spaces[marginBottom]};`]
      : []),
    ...(typeof marginX !== 'undefined'
      ? [`margin-left: ${spaces[marginX]}`, `margin-right: ${spaces[marginX]};`]
      : []),
    ...(typeof marginY !== 'undefined'
      ? [`margin-top: ${spaces[marginY]}`, `margin-bottom: ${spaces[marginY]};`]
      : []),
    ...(typeof padding !== 'undefined' ? [`padding: ${spaces[padding]};`] : []),
    ...(typeof paddingLeft !== 'undefined'
      ? [`padding-left: ${spaces[paddingLeft]};`]
      : []),
    ...(typeof paddingRight !== 'undefined'
      ? [`padding-right: ${spaces[paddingRight]};`]
      : []),
    ...(typeof paddingTop !== 'undefined'
      ? [`padding-top: ${spaces[paddingTop]};`]
      : []),
    ...(typeof paddingBottom !== 'undefined'
      ? [`padding-bottom: ${spaces[paddingBottom]};`]
      : []),
    ...(typeof paddingX !== 'undefined'
      ? [
          `padding-left: ${spaces[paddingX]}`,
          `padding-right: ${spaces[paddingX]};`
        ]
      : []),
    ...(typeof paddingY !== 'undefined'
      ? [
          `padding-top: ${spaces[paddingY]}`,
          `padding-bottom: ${spaces[paddingY]};`
        ]
      : [])
  ].join(';');
};

export default spacing;