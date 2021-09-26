import {
  COLORS,
  PALETTE,
  FONT_SIZE,
  COLOR_VARIANT,
  LINE_HEIGHT,
} from '../constant';
import { hexToRgba } from '../utils';

// Breakpoints
const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1500,
};

// Font Sizes
const fontSizes = {
  [FONT_SIZE.EXTRA_SMALL]: 10, // xs
  [FONT_SIZE.SEMI_SMALL]: 11, // ss
  [FONT_SIZE.SMALL]: 12, // sm
  [FONT_SIZE.SEMI_MEDIUM]: 13, // semi-md
  [FONT_SIZE.MEDIUM]: 14, // md
  [FONT_SIZE.BASE]: 16, // base
  [FONT_SIZE.LARGE]: 18, // lg
  [FONT_SIZE.SEMI_EXTRA_LARGE]: 20, // semi-xl
  [FONT_SIZE.EXTRA_LARGE]: 24, // xl
  [FONT_SIZE.SEMI_DOUBLE_EXTRA_LARGE]: 28, // semi-xxl
  [FONT_SIZE.DOUBLE_EXTRA_LARGE]: 36, //xxl
};

// Color variants
const colorVariant = {
  [COLOR_VARIANT.DEFAULT]: PALETTE.GREY, // default
  [COLOR_VARIANT.PRIMARY]: COLORS.PRIMARY, // primary
  [COLOR_VARIANT.PRIMARY_LIGHT]: COLORS.PRIMARY_LIGHT, // primary
  [COLOR_VARIANT.PRIMARY_DARK]: COLORS.PRIMARY_DARK, // primary
  [COLOR_VARIANT.PRIMARY_DARKER]: COLORS.PRIMARY_DARKER, // primary
  [COLOR_VARIANT.SECONDARY]: COLORS.SECONDARY, // secondary
  [COLOR_VARIANT.GREY]: PALETTE.GREY_SOFT, // grey
  [COLOR_VARIANT.GREY_ABEY]: PALETTE.GREY_ABEY, // grey abey
  [COLOR_VARIANT.GREY_DARK]: PALETTE.GREY_DARK, // grey dark
  [COLOR_VARIANT.GREY_DARKER]: PALETTE.GREY_DARKER, // grey darker
  [COLOR_VARIANT.GREY_SOFT]: PALETTE.GREY_SOFT, // grey soft
  [COLOR_VARIANT.WHITE]: PALETTE.WHITE, // white
  [COLOR_VARIANT.EMPHASIS]: COLORS.ERROR, // emphasis
  [COLOR_VARIANT.SOFT]: PALETTE.GREY_SOFT, // soft
  [COLOR_VARIANT.BLUE_LOCHINVAR]: PALETTE.BLUE_LOCHINVAR, // blue lochinvar
  [COLOR_VARIANT.GREEN_PASTEL]: PALETTE.GREEN_PASTEL, // green pastel
  [COLOR_VARIANT.DANGER]: PALETTE.RED, // red
  [COLOR_VARIANT.RED_MONZA]: PALETTE.RED_MONZA, // red
  [COLOR_VARIANT.BLUE_DARK]: PALETTE.BLUE_DARK, // blue dark
  [COLOR_VARIANT.ORANGE_LIGHT]: PALETTE.ORANGE_LIGHT, // orange
  [COLOR_VARIANT.ORANGE_LIGHTER]: PALETTE.ORANGE_LIGHTER, // orange
  [COLOR_VARIANT.BLUE_PATTENS]: PALETTE.BLUE_PATTENS, // blue pattens
  [COLOR_VARIANT.BLUE_ICEBERG]: PALETTE.BLUE_ICEBERG, // blue iceberg
  [COLOR_VARIANT.BLUE]: PALETTE.BLUE, //blue
};

// line heights
const lineHeight = {
  [LINE_HEIGHT.NONE]: 1,
  [LINE_HEIGHT.TIGHT]: 1.25,
  [LINE_HEIGHT.SNUG]: 1.375,
  [LINE_HEIGHT.NORMAL]: 1.5,
  [LINE_HEIGHT.RELAXED]: 1.625,
  [LINE_HEIGHT.LOOSE]: 2,
};

// Typography
const typography = {
  fontSizes,
  baseFontSize: fontSizes[FONT_SIZE.BASE],
  baseLineHeight: lineHeight[LINE_HEIGHT.NORMAL],
};

// Spacing
const spacing = {
  basePadding: 15,
  multiplierFactor: 5,
};

// Elements
// Container
const maximumWidth = 650;
const container = {
  width: {
    sm: maximumWidth,
    md: maximumWidth,
    lg: maximumWidth,
    xl: maximumWidth,
    xxl: maximumWidth + maximumWidth * 0.1,
  },
  padding: {
    sm: 15,
    md: 30,
    lg: 30,
    xl: 30,
    xxl: 140,
  },
  gutterSizes: {
    sm: 5,
    md: 10,
    lg: 15,
    xl: 20,
    xxl: 20,
  },
};

// Box
const box = {
  borderRadius: 10,

  defaultBgColor: PALETTE.WHITE,
  defaultBorderColor: PALETTE.GREY,
  defaultShadow: `0 2px 4px 0 ${hexToRgba(PALETTE.BLACK, 0.1)}`,

  primaryBgColor: colorVariant.primary,
  primaryBorderColor: colorVariant.primary,
  primaryShadow: `0 2px 5px 1px ${hexToRgba(PALETTE.BLUE, 0.5)}`,

  secondaryBgColor: PALETTE.TANGERINE,
  secondaryBorderColor: PALETTE.TANGERINE,
  secondaryShadow: `0 2px 5px 1px ${hexToRgba(PALETTE.TANGERINE, 0.5)}`,

  greyBgColor: PALETTE.GREY_LIGHT,
  greyBorderColor: PALETTE.GREY_DARK,
  greyShadow: `0 2px 4px 0 ${hexToRgba(PALETTE.BLACK, 0.1)}`,

  blueBgColor: PALETTE.BLUE_PATTENS,
  blueBorderColor: PALETTE.BLUE_PATTENS,
  blueShadow: `0 2px 4px 0 ${hexToRgba(PALETTE.BLUE_PATTENS, 0.1)}`,

  dangerBgColor: PALETTE.WHITE,
  dangerBorderColor: PALETTE.RED,
  dangerShadow: `0 2px 4px 0 ${hexToRgba(PALETTE.RED, 0.1)}`,

  redBgColor: PALETTE.RED_LIGHT,
  redBorderColor: PALETTE.RED,
  redShadow: `0 2px 4px 0 ${hexToRgba(PALETTE.RED, 0.1)}`,
};

// Button
const button = {
  borderWidth: 1,
  borderRadius: 4,
  fontWeight: 600,

  defaultButtonColor: PALETTE.GREY,
  defaultButtonBgColor: PALETTE.TRANSPARENT,

  primaryButtonColor: COLORS.PRIMARY_TEXT,
  primaryButtonBgColor: COLORS.PRIMARY,
  primaryButtonBorderColor: COLORS.PRIMARY,

  primaryDarkerButtonColor: COLORS.PRIMARY_TEXT,
  primaryDarkerButtonBgColor: COLORS.PRIMARY_DARKER,
  primaryDarkerButtonBorderColor: COLORS.PRIMARY_DARKER,

  greyButtonColor: PALETTE.WHITE,
  greyButtonBgColor: PALETTE.GREY,
  greyButtonBorderColor: PALETTE.GREY_SOFT,
  greyButtonHoverColor: PALETTE.GREY,
  greyButtonHoverBgColor: PALETTE.WHITE,
  greyButtonHoverBorderColor: PALETTE.GREY_SOFT,

  cautionButtonColor: PALETTE.WHITE,
  cautionButtonBgColor: PALETTE.ORANGE_LIGHT,
  cautionButtonBorderColor: PALETTE.ORANGE_LIGHT,

  cautionLightButtonColor: COLORS.PRIMARY_TEXT,
  cautionLightButtonBgColor: PALETTE.ORANGE_LIGHTER,
  cautionLightButtonBorderColor: PALETTE.ORANGE_LIGHTER,

  dangerButtonColor: COLORS.PRIMARY_TEXT,
  dangerButtonBgColor: PALETTE.RED,
  dangerButtonBorderColor: PALETTE.RED,

  dangerLightButtonColor: PALETTE.RED,
  dangerLightButtonBgColor: PALETTE.RED_LIGHT,
  dangerLightButtonBorderColor: PALETTE.RED_LIGHT,

  whiteButtonColor: PALETTE.WHITE,
  whiteButtonBgColor: PALETTE.TRANSPARENT,
  whiteButtonBorderColor: PALETTE.WHITE,

  fontSize: {
    xs: 10,
    sm: 10,
    md: 12,
    lg: 16,
  },
  paddingY: {
    xs: 1.5,
    sm: 6,
    md: 7.5,
    lg: 5,
  },
  paddingX: {
    xs: 15,
    sm: 18,
    md: 18,
    lg: 18,
  },
};

// CheckBox
const checkbox = {
  bgColor: PALETTE.WHITE,
  bgColorChecked: COLORS.PRIMARY,
  borderColor: PALETTE.GREY_DUSTY,
  borderRadius: 2,
  dimension: 14,
  checkMarkColor: PALETTE.WHITE,
  disabledBgColor: PALETTE.GREY_DARK,
};

// Radio
const radio = {
  bgColor: PALETTE.TRANSPARENT,
  bgColorChecked: PALETTE.WHITE,
  borderColor: COLORS.PRIMARY,
  dimension: 14,
  checkMarkColor: COLORS.PRIMARY,
  disabledBgColor: PALETTE.GREY_DARK,
};

// Anchor & NextLink
const link = {
  ...colorVariant,
  defaultHover: COLORS.PRIMARY,
  primaryHover: PALETTE.GREY,
  greyHover: COLORS.PRIMARY,
};

// TextField
const textField = {
  containerBackgroundColor: PALETTE.TRANSPARENT,
  backgroundColor: PALETTE.WHITE,
  borderColor: PALETTE.GREY_DARK,
  borderRadius: 10,
  boxShadow: `box-shadow: 0 1px 4px 0 ${PALETTE.GREY_DARK};`,
  color: PALETTE.GREY,
  colorInvalid: COLORS.ERROR,
  fontSize: 12,
  hintColor: PALETTE.GREY_SOFT,
  lineHeight: 1.5,
  paddingY: {
    sm: 7.5,
    md: 10,
    lg: 12.5,
  },
  paddingX: {
    sm: 15,
    md: 15,
    lg: 15,
  },
  paddingYRetina: {
    sm: 3.5,
    md: 7,
    lg: 12.5,
  },
  paddingXRetina: {
    sm: 15,
    md: 15,
    lg: 15,
  },
  plainBorderColor: PALETTE.GREY_DARK,
  plainBorderColorFocus: COLORS.PRIMARY,
  placeholderColor: PALETTE.GREY_SOFT,
  disabledBgColor: PALETTE.WHITE_DARK,
  disabledColor: PALETTE.GREY_SOFT,
};

// Badge
const badge = {
  ...button,
  emphasisButtonColor: PALETTE.RED,
  emphasisButtonBgColor: hexToRgba(PALETTE.RED, 0.1),

  successButtonColor: PALETTE.WHITE,
  successButtonBgColor: PALETTE.GREEN,

  warningButtonColor: PALETTE.WHITE,
  warningButtonBgColor: PALETTE.TANGERINE,

  warningLighterButtonColor: PALETTE.ORANGE_LIGHTER,
  warningLighterButtonBgColor: PALETTE.YELLOW_LIGHT,

  cautionButtonColor: PALETTE.WHITE,
  cautionButtonBgColor: PALETTE.ORANGE_LIGHT,

  dangerButtonColor: PALETTE.WHITE,
  dangerButtonBgColor: PALETTE.RED,

  blueButtonColor: PALETTE.BLUE_LOCHINVAR,
  blueButtonBgColor: PALETTE.BLUE_PATTENS,

  blueLightButtonColor: PALETTE.WHITE,
  blueLightButtonBgColor: PALETTE.BLUE_LIGHT,
};

// Modal
const modal = {
  background: PALETTE.WHITE,
  borderRadius: 10,
  padding: 0,
  border: 'none',
  maxWidth: 1080,
  sizeVariant: {
    sm: 318,
    md: 500,
    lg: 618,
  },
};

// Picture
const picture = {};

// Image
const image = {
  roundedBorderRadius: 10,
  fallbackImage: `https://i.stack.imgur.com/GNhxO.png`,
};

// Accordion
const accordion = {
  parentPrimaryColor: COLORS.PRIMARY,
  parentSecondaryColor: PALETTE.ORANGE_LIGHT,
  parentBgColor: PALETTE.GREY_LIGHT,
  parentBorderColor: PALETTE.GREY_DARK,
  childrenBgColor: PALETTE.GREY_LIGHT,
  childrenBorderColor: PALETTE.GREY_DARK,
};

// ToggleSwitch
const toggleSwitch = {
  inactiveColor: PALETTE.GREY_DARK,
  activeColor: COLORS.PRIMARY,
};

// ListGroup
const listGroup = {
  backgroundColor: PALETTE.WHITE,
  activeBackgroundColor: PALETTE.WHITE,
  color: colorVariant.default,
  activeColor: colorVariant.primary,
  activeLineColor: colorVariant.primary,
  borderColor: PALETTE.GREY_DARK,
  fontSizeVariant: fontSizes,
};

//Collapse
const collapse = {
  arrowColors: {
    ...colorVariant,
  },
};

// Pagination
const pagination = {
  itemDimension: 32,
  radiusLevel: 32,
  backgroundColor: PALETTE.WHITE,
  borderColor: PALETTE.TRANSPARENT,
  activeBackgroundColor: PALETTE.TRANSPARENT,
  activeColor: colorVariant.primary,
};

// Thumbnail
const thumbnail = {
  borderColor: colorVariant.primary,
  borderWidth: 1,
};

// TextArea
const textarea = {
  ...textField,
  paddingX: 18,
  paddingY: 7.5,
};

// Drawer
const drawer = {
  sizeVariant: {
    xs: 60,
    sm: 150,
    md: 220,
    lg: 350,
    xl: 420,
  },
};

// Alert
const alert = {
  borderRadius: 10,
  success: {
    color: PALETTE.GREY,
    bgColor: '#f0f9fa',
    borderColor: PALETTE.BLUE_DARK,
  },
  danger: {
    color: PALETTE.GREY,
    bgColor: '#fbe5e8',
    borderColor: PALETTE.RED,
  },
  warning: {
    color: '#856404',
    bgColor: '#fff3cd',
    borderColor: '#fff3cd',
  },
  info: {
    color: '#0c5460',
    bgColor: '#d1ecf1',
    borderColor: '#bee5eb',
  },
  transparent: {
    color: '#fff',
    bgColor: 'rgb(54 69 79 / 0.8)',
    borderColor: 'rgb(54 69 79 / 0.8)',
  },
};

// Table
const table = {
  headBgColor: hexToRgba(PALETTE.GREY_DARK, 0.3),
  tdBorderColor: hexToRgba(PALETTE.GREY_DARK, 0.3),
};

// Icon
const icon = {
  badgeFontSize: fontSizes[FONT_SIZE.SMALL],
  badgeBackgroundColor: PALETTE.RED,
  badgeColor: PALETTE.WHITE,
};

// Star
const star = {
  activeColor: PALETTE.TANGERINE,
  inactiveColor: PALETTE.GREY_DARK,
};

// Tag
const tagInput = {
  borderRadius: button.borderRadius,

  color: colorVariant.primary,
  borderColor: colorVariant.primary,
  backgroundColor: PALETTE.WHITE,

  checkedColor: PALETTE.WHITE,
  checkedBorderColor: colorVariant.primary,
  checkedBackgroundColor: colorVariant.primary,

  disabledColor: PALETTE.GREY_DARK,
  disabledBorderColor: PALETTE.GREY_DARK,
  disabledBackgroundColor: PALETTE.WHITE,
};

// Step
const step = {
  lineColor: PALETTE.GREY_DARK,
  dotColorActive: colorVariant.primary,
  dotColorInactive: PALETTE.GREY_DARK,
};

const circle = {
  colorVariant,
};

const skeleton = {
  backgroundColor: PALETTE.GREY_DARK,
};

// Combine all elements together
const elements = {
  badge,
  collapse,
  container,
  box,
  button,
  checkbox,
  radio,
  link,
  textField,
  modal,
  picture,
  image,
  accordion,
  toggleSwitch,
  listGroup,
  pagination,
  thumbnail,
  textarea,
  drawer,
  alert,
  table,
  icon,
  star,
  tagInput,
  step,
  circle,
  skeleton,
};

const julo = {
  breakpoints,
  colorVariant,
  ...spacing,
  ...typography,
  ...elements,
};

export default julo;
