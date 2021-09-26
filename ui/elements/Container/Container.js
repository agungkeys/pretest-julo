import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import StyledContainer from './StyledContainer';
import { withForwardRef, withThemeProvider, withGlobalProps } from '../../hoc';

const Container = ({ forwardRef, isFluid, children, ...rest }) => (
  <StyledContainer ref={forwardRef} isFluid={isFluid} {...rest}>
    {children}
  </StyledContainer>
);
Container.propTypes = {
  /** Full width container, spanning the entire width of the viewport. */
  isFluid: PropTypes.bool
};

export default compose(withForwardRef, withThemeProvider, withGlobalProps)(Container);
