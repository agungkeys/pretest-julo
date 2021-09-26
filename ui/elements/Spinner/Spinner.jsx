import React from 'react';
import PropTypes from 'prop-types';
import StyledSpinner from './StyledSpinner';
import { compose } from 'recompose';
import { withForwardRef, withThemeProvider, withGlobalProps } from '../../hoc';

const Spinner = ({ size, ...rest }) => (
  <StyledSpinner {...rest}>
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="lds-rolling"
      style={{ background: '0 0' }}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#a7a7a7"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(162.055 50 50)"
      />
    </svg>
  </StyledSpinner>
);

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.defaultProps = {
  size: 25,
};

export default compose(
  withForwardRef,
  withThemeProvider,
  withGlobalProps,
)(Spinner);
