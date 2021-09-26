import React from 'react';
import { compose } from 'recompose';
import StyledText from './StyledText';
import { withForwardRef, withThemeProvider, withGlobalProps } from '../../hoc';
import textPropTypes from '../../common/propTypes/textPropTypes';
import { COLOR_VARIANT, FONT_SIZE, FONT_STYLE } from '../../constant';

const Text = ({
  as,
  caseVariant,
  colorVariant,
  isBlock,
  fontSizeVariant,
  fontWeightVariant,
  forwardRef,
  textAlign,
  isStrikedThrough,
  isTruncated,
  truncatedMaxLine,
  lineHeightVariant,
  wordBreak,
  children,
  ...rest
}) => (
  <StyledText
    as={as}
    caseVariant={caseVariant}
    isBlock={isBlock}
    colorVariant={colorVariant}
    fontSizeVariant={fontSizeVariant}
    fontWeightVariant={fontWeightVariant}
    ref={forwardRef}
    textAlign={textAlign}
    isStrikedThrough={isStrikedThrough}
    isTruncated={isTruncated}
    truncatedMaxLine={truncatedMaxLine}
    lineHeightVariant={lineHeightVariant}
    wordBreak={wordBreak}
    {...rest}
  >
    {children}
  </StyledText>
);

Text.propTypes = {
  ...textPropTypes
};

Text.defaultProps = {
  as: 'span',
  colorVariant: COLOR_VARIANT.DEFAULT,
  fontSizeVariant: FONT_SIZE.BASE,
  fontStyleVariant: FONT_STYLE.NORMAL,
  truncatedMaxLine: 2
};

export default compose(
  withForwardRef,
  withThemeProvider,
  withGlobalProps
)(Text);
