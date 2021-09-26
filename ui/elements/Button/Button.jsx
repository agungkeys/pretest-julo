import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import Spinner from '../../elements/Spinner';
import StyledButton from './StyledButton';

import { withForwardRef, withThemeProvider, withGlobalProps } from '../../hoc';
import { SIZE_VARIANT, COLOR_VARIANT } from '../../constant';
import { getObjectValues } from '../../utils';

const Button = ({
  children,
  colorVariant,
  onClick,
  onMouseOver,
  onMouseLeave,
  iconName,
  isDisabled,
  isLoading,
  isFullWidth,
  isOutlined,
  isRounded,
  forwardRef,
  size,
  type,
  ...rest
}) => (
  <StyledButton
    disabled={isLoading ? true : isDisabled}
    isLoading={isLoading}
    colorVariant={colorVariant}
    onClick={onClick}
    onMouseOver={onMouseOver}
    onMouseLeave={onMouseLeave}
    isFullWidth={isFullWidth}
    isOutlined={isOutlined}
    isRounded={isRounded}
    ref={forwardRef}
    size={size}
    className={isLoading ? 'loading' : ''}
    {...(type && { type: type })}
    {...rest}
  >
    {isLoading ? (
      <>
        <Spinner className="loader" size={20} padding={0} />
        <span>{children}</span>
      </>
    ) : (
      children
    )}
  </StyledButton>
);
Button.defaultProps = {
  colorVariant: COLOR_VARIANT.DEFAULT,
  size: SIZE_VARIANT.MEDIUM,
  isRounded: true
};

Button.propTypes = {
  /** Make the Button act as other elements. */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.elementType
  ]),
  /** Disable the button for being clicked. */
  isDisabled: PropTypes.bool,
  /** Loading the button for being clicked. */
  isLoading: PropTypes.bool,
  /** Color variant */
  colorVariant: PropTypes.oneOf(getObjectValues(COLOR_VARIANT)),
  /** onClick action for the button */
  onClick: PropTypes.func,
  /** Make the button fill the remaining space. */
  isFullWidth: PropTypes.bool,
  /** Reverse the color of given color variant. */
  isOutlined: PropTypes.bool,
  /** Make the button rounded. */
  isRounded: PropTypes.bool,
  /** Specify the size of the button. */
  size: PropTypes.oneOf(getObjectValues(SIZE_VARIANT)),
  /** Specify the type of the button. */
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default compose(
  withForwardRef,
  withThemeProvider,
  withGlobalProps
)(Button);
