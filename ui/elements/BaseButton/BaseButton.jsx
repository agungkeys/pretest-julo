import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import StyledBaseButton from './StyledBaseButton';
import { withForwardRef, withThemeProvider, withGlobalProps } from '../../hoc';

const BaseButton = ({
  children,
  onClick,
  onMouseOver,
  onMouseLeave,
  isDisabled,
  forwardRef,
  type,
  ...rest
}) => (
  <StyledBaseButton
    disabled={isDisabled}
    onClick={onClick}
    onMouseOver={onMouseOver}
    onMouseLeave={onMouseLeave}
    ref={forwardRef}
    {...(type && { type: type })}
    {...rest}
  >
    {children}
  </StyledBaseButton>
);

BaseButton.propTypes = {
  /** Make the Button act as other elements. */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.elementType
  ]),
  /** Disable the button for being clicked. */
  isDisabled: PropTypes.bool,
  /** onClick action for the button */
  onClick: PropTypes.func,
  /** Specify the type of the button. */
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default compose(
  withForwardRef,
  withThemeProvider,
  withGlobalProps
)(BaseButton);
