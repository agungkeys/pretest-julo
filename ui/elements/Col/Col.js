import React from 'react';
import PropTypes from 'prop-types';
import StyledCol from './StyledCol';
import { compose } from 'recompose';
import { withForwardRef, withThemeProvider, withGlobalProps } from '../../hoc';
import textAlignVariant from '../../common/variants';
import { columnWidth } from '../../helpers/customPropTypes';

const Col = ({
  alignSelf,
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  flexBasis,
  flexGrow,
  flexOrder,
  flexShrink,
  forwardRef,
  isAutoWidth,
  range,
  ...rest
}) => (
  <StyledCol
    alignSelf={alignSelf}
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    flexBasis={flexBasis}
    flexGrow={flexGrow}
    flexOrder={flexOrder}
    flexShrink={flexShrink}
    isAutoWidth={isAutoWidth}
    range={range}
    ref={forwardRef}
    {...rest}
  >
    {children}
  </StyledCol>
);

Col.propTypes = {
  /**
   * Small devices (landscape phones, default: less than 576px)
   *
   * Should be a number between 1 - 12 */
  xs: columnWidth,
  /**
   * Small devices (landscape phones, default: 576px and up)
   *
   * Should be a number between 1 - 12 */
  sm: columnWidth,
  /**
   * Medium devices (tablets, default: 768px and up)
   *
   * Should be a number between 1 - 12 */
  md: columnWidth,
  /**
   * Large devices (desktops, default: 992px and up)
   *
   *  Should be a number between 1 - 12 */
  lg: columnWidth,
  /**
   * Extra large devices (large desktops, default: 1200px and up)
   *
   * Should be a number between 1 - 12 */
  xl: columnWidth,
  /**
   * Specifies the order of a flexible item relative to the rest of the flexible items inside the same container.
   *
   * Any integer */
  flexOrder: PropTypes.number,
  /** Specifies how much the item will grow relative to the rest of the flexible items inside the same container.
   *
   * Positive integer
   * */
  flexGrow: PropTypes.number,
  /**
   * Specifies how the item will shrink relative to the rest of the flexible items inside the same container.
   *
   * Positive integer */
  flexShrink: PropTypes.number,
  /** Specifies the initial length of a flexible item. */
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Specifies the alignment for the selected item inside the flexible container. */
  alignSelf: PropTypes.oneOf([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch'
  ]),
  /** Text align variant */
  textAlign: PropTypes.oneOf(textAlignVariant),
  /** Size the column based on the natural width of its content */
  isAutoWidth: PropTypes.bool,
  /**
   * Apply column width.
   *
   * Should be a number between 1 - 12
   * */
  range: columnWidth
};

export default compose(withForwardRef, withThemeProvider, withGlobalProps)(Col);
