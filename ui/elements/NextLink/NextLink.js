import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import Link from 'next/link';
import Anchor from '../Anchor';
import { withForwardRef, withThemeProvider, withGlobalProps } from '../../hoc';
import textPropTypes from '../../common/propTypes/textPropTypes';

const NextLink = ({
  colorVariant,
  forwardRef,
  passHref,
  fontSizeVariant,
  fontWeightVariant,
  link = { pathname: '/', query: {}, asPath: '/' },
  isChangedOnHover,
  isUnderlined,
  onClick,
  onMouseLeave,
  onMouseOver,
  scroll,
  size,
  textAlign,
  children,
  ...rest
}) => {
  const anchorProps = {
    colorVariant,
    fontSizeVariant,
    fontWeightVariant,
    isChangedOnHover,
    isUnderlined,
    onClick,
    onMouseLeave,
    onMouseOver,
    size,
    textAlign
  };

  if (typeof link === 'string') {
    return (
      <Anchor className="Anchor-NexLink" href={link} {...anchorProps} {...rest}>
        {children}
      </Anchor>
    );
  } else if (typeof onClick === 'function') {
    return (
      <Anchor className="Anchor-NexLink-Function" {...anchorProps} {...rest}>
        {children}
      </Anchor>
    );
  }

  return (
    <Link
      as={link.asPath}
      href={{ pathname: link.pathname, query: link.query }}
      passHref
      scroll={scroll}
      ref={forwardRef}
    >
      <Anchor {...anchorProps} {...rest}>
        {children}
      </Anchor>
    </Link>
  );
};

NextLink.defaultProps = {
  ...Anchor.defaultProps,
  scroll: true,
};

NextLink.propTypes = {
  ...textPropTypes,
  ...Anchor.propTypes,
  /** Force the Link to expose href to its child. */
  passHref: PropTypes.bool,
  /** Disabling the scroll changes to top on page. */
  scroll: PropTypes.bool
};

export default compose(
  withForwardRef,
  withThemeProvider,
  withGlobalProps
)(NextLink);
