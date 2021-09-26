import React from 'react';

const withForwardRef = Component => {
  const Wrapper = ({ forwardedRef, ...rest }) => {
    return <Component ref={forwardedRef} {...rest} />;
  };

  return React.forwardRef((props, ref) => (
    <Wrapper {...props} forwardRef={ref} />
  ));
};

export default withForwardRef;
