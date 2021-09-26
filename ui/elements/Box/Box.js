import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import StyledBox from './StyledBox';
import { withForwardRef, withThemeProvider, withGlobalProps } from '../../hoc';
import { COLOR_VARIANT } from '../../constant';
import { getObjectValues } from '../../utils';

const Box = ({
  forwardRef,
  borderColorVariant,
  borderSides,
  colorVariant,
  isRounded,
  isCentered,
  isClipped,
  isFullHeight,
  withBorder,
  withBoxShadow,
  children,
  ...rest
}) => (
  <StyledBox
    ref={forwardRef}
    borderColorVariant={borderColorVariant}
    borderSides={borderSides}
    colorVariant={colorVariant}
    isRounded={isRounded}
    isCentered={isCentered}
    isClipped={isClipped}
    isFullHeight={isFullHeight}
    withBorder={withBorder}
    withBoxShadow={withBoxShadow}
    {...rest}
  >
    {children}
  </StyledBox>
);

Box.propTypes = {
  /** Border color variant */
  borderColorVariant: PropTypes.oneOf(getObjectValues(COLOR_VARIANT)),
  /** Border sides */
  borderSides: PropTypes.array,
  /** Box color variant */
  colorVariant: PropTypes.oneOf(getObjectValues(COLOR_VARIANT)),
  /** Make the Box rounded. */
  isRounded: PropTypes.bool,
  /** Make the Box rounded. */
  isClipped: PropTypes.bool,
  /** Apply text-align: center to the box */
  isCentered: PropTypes.bool,
  /** Add border to the Box */
  withBorder: PropTypes.bool,
  /** Add shadow to the Box */
  withBoxShadow: PropTypes.bool
};

export default compose(withForwardRef, withGlobalProps, withThemeProvider)(Box);
