import React from 'react';
import PropTypes from 'prop-types';
import StyledRow from './StyledRow';
import { compose } from 'recompose';
import { withForwardRef, withThemeProvider, withGlobalProps } from '../../hoc';
import { SIZE_VARIANT } from '../../constant';
import { getObjectValues } from '../../utils';

const Row = ({
    flexDirection, 
    flexWrap, 
    justifyContent, 
    alignItems, 
    alignContent, 
    noGutters, 
    gutterSize,
    isFullHeight,
    forwardRef,
    children,
    ...rest
}) => (
  <StyledRow
    flexDirection={flexDirection}
    flexWrap={flexWrap}
    justifyContent={justifyContent}
    alignItems={alignItems}
    alignContent={alignContent}
    gutterSize={gutterSize}
    noGutters={noGutters}
    isFullHeight={isFullHeight}
    ref={forwardRef}
    {...rest}
  >
    {React.Children.map(children, child =>
      child ? React.cloneElement(child, { gutterSize: gutterSize }) : null,
    )}
  </StyledRow>
)

Row.propTypes = {
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]),
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch',
  ]),
  gutterSize: PropTypes.oneOf(getObjectValues(SIZE_VARIANT)),
  noGutters: PropTypes.bool,
  isFullHeight: PropTypes.bool,
};

Row.defaultProps = {
  flexWrap: 'wrap',
};

export default compose(withForwardRef, withThemeProvider, withGlobalProps)(Row);
