import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import StyledAnchor from './StyledAnchor';
import { withForwardRef, withThemeProvider, withGlobalProps } from '../../hoc';
import textPropTypes from '../../common/propTypes/textPropTypes';

const Anchor = ({
  as,
  children,
  colorVariant,
  forwardRef,
  fontSizeVariant,
  fontWeightVariant,
  href,
  isChangedOnHover,
  isUnderlined,
  onClick,
  onMouseLeave,
  onMouseOver,
  shouldOpenNewTab,
  textAlign,
  ...rest
}) => {
  const anchorAttrs = {
    target: '_blank',
    rel: 'noopener noreferrer'
  };

  return (
    <StyledAnchor
      as={as}
      colorVariant={colorVariant}
      fontSizeVariant={fontSizeVariant}
      fontWeightVariant={fontWeightVariant}
      href={href}
      ref={forwardRef}
      isChangedOnHover={isChangedOnHover}
      isUnderlined={isUnderlined}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      shouldOpenNewTab={shouldOpenNewTab}
      textAlign={textAlign}
      {...(shouldOpenNewTab && anchorAttrs)}
      {...rest}
    >
      {children}
    </StyledAnchor>
  );
};

Anchor.defaultProps = {
  colorVariant: 'default',
  fontSizeVariant: 'md',
  isChangedOnHover: true
};

Anchor.propTypes = {
  ...textPropTypes,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Specifies the URL of the page the link goes to. */
  href: PropTypes.string,
  /** Specifies if the link should open new tab.
   * If enabled, it will add target="_blank" and rel="noopener noreferrer" attributes to the element. */
  shouldOpenNewTab: PropTypes.bool,
  /** Make the color to change on hover. */
  isChangedOnHover: PropTypes.bool,
  /** Make the link to be underlined. */
  isUnderlined: PropTypes.bool
};

export default compose(
  withForwardRef,
  withThemeProvider,
  withGlobalProps
)(Anchor);
