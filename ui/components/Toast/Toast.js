import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../elements/Box';
import Alert from '../../elements/Alert';
import { ALERT_STATUS } from '../../constant';
import { getObjectValues } from '../../utils';

const Toast = ({children, type, autoCloseDuration, onClose}) => (
  <Box customCSS="top: 2em; right: 1em; position: fixed; z-index: 1; max-width: 15em;">
    <Alert autoCloseDuration={autoCloseDuration} type={type} onClose={onClose}>
      {children}
    </Alert>
  </Box>
);

Toast.propTypes = {
  type: PropTypes.oneOf(getObjectValues(ALERT_STATUS)),
  autoCloseDuration: PropTypes.number
};

export default Toast;
