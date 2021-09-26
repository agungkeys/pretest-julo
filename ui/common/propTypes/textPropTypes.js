import PropTypes from 'prop-types';

import {
  TEXT_CASE,
  COLOR_VARIANT,
  FONT_SIZE,
  FONT_WEIGHT,
  TEXT_ALIGN,
  FONT_STYLE,
  LINE_HEIGHT
} from '../../constant';

import { getObjectValues } from '../../utils';

const textPropTypes = {
  /** Render element in different HTML tags. */
  as: PropTypes.oneOf([
    'div',
    'p',
    'span',
    'small',
    'strong',
    'b',
    'i',
    'em',
    'label',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6'
  ]),
  /** Variants of letter case  */
  caseVariant: PropTypes.oneOf(getObjectValues(TEXT_CASE)),
  /** Variations of colors. */
  colorVariant: PropTypes.oneOf(getObjectValues(COLOR_VARIANT)),
  /** Variations of font sizes.
   *
   * By using the default theme (which use 16px as the base font size), each of the property has the following value:
   *
   * 'xs' = 10px (0.625rem)
   *
   * 'sm' = 12px (0.75rem)
   *
   * 'md' = 14px (0.875rem)
   *
   * 'base' = 16px (1rem),
   *
   * 'lg' = 18px (1.125rem),
   *
   * 'xl' = 24px (1.5rem)
   *
   * xxl = 36px (2.25rem)
   */
  fontSizeVariant: PropTypes.oneOf(getObjectValues(FONT_SIZE)),
  /** Adjust text alignment */
  textAlign: PropTypes.oneOf(getObjectValues(TEXT_ALIGN)),
  /** Adjust font weight */
  fontWeightVariant: PropTypes.oneOf(getObjectValues(FONT_WEIGHT)),
  /** Adjust font style */
  fontStyleVariant: PropTypes.oneOf(getObjectValues(FONT_STYLE)),
  /** Line heights */
  lineHeightVariant: PropTypes.oneOf(getObjectValues(LINE_HEIGHT)),
  /** Make text take all remaining space */
  isBlock: PropTypes.bool,
  /** word-break */
  wordBreak: PropTypes.oneOf([
    'normal',
    'break-all',
    'keep-all',
    'break-word',
    'initial',
    'inherit'
  ])
};

export default textPropTypes;
