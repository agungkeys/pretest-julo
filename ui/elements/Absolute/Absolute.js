import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import StyledAbsolute from './StyledAbsolute';
import { withForwardRef, withThemeProvider, withGlobalProps } from '../../hoc';

const Absolute = ({
  as,
  forwardRef,
  top,
  left,
  right,
  bottom,
  children,
  ...rest
}) => (
  <StyledAbsolute
    as={as}
    ref={forwardRef}
    top={top}
    left={left}
    right={right}
    bottom={bottom}
    {...rest}
  >
    {children}
  </StyledAbsolute>
);

Absolute.propTypes = {
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number
};

export default compose(
  withForwardRef,
  withThemeProvider,
  withGlobalProps
)(Absolute);
