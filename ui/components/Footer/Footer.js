import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../elements/Box';
import Text from '../../elements/Text';

const Footer = ({ title }) => (
  <Box padding={2} colorVariant='grey' customCSS='text-align: center; margin-bottom: 55px;'>
    <Text>
      {title || ``}
    </Text>
  </Box>
);

Footer.propTypes = {
  /** Add title to footer component */
  title: PropTypes.string
};

export default Footer;
