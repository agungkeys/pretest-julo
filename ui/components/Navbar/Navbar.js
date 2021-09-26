import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../elements/Box';
import Container from '../../elements/Container';
import Text from '../../elements/Text';
import Image from '../../elements/Image';

const Navbar = ({ image, title }) => (
  <Box 
    paddingY={3} 
    withBorder 
    borderSides={['bottom']}
    borderColorVariant="grey"
    customCSS='position: sticky; top:0; background: white; z-index: 1;'
  >
    <Container>
      <Box customCSS='display: flex; align-items: center;'>
        {image && 
          <Image
            src={image}
            width={60}
            alt={title}
          />
        }
        {title && <Text colorVariant='primary-dark' fontSizeVariant='xs' paddingLeft={1} fontWeightVariant='semiBold'>{title}</Text>}
      </Box>
    </Container>
  </Box>
);

Navbar.propTypes = {
  /** Add image to navbar component */
  image: PropTypes.string,
  /** Add title to navbar component */
  title: PropTypes.string
};

export default Navbar;
