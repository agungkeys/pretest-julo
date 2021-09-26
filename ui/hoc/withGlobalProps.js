/* eslint-disable react/display-name */
import React from 'react';

const withGlobalProps = Component => props => {
  const {
    ariaLabel,
    ariaLabelledBy,
    id,
    customCSS,
    dataCustom,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    marginX,
    marginY,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    paddingX,
    paddingY,
    tabIndex,
    theme,
    ...rest
  } = props;

  return (
    <Component
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      id={id}
      customCSS={customCSS}
      data-custom={dataCustom}
      margin={margin}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginX={marginX}
      marginY={marginY}
      padding={padding}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingX={paddingX}
      paddingY={paddingY}
      tabIndex={tabIndex}
      theme={theme}
      {...rest}
    />
  );
};

export default withGlobalProps;
