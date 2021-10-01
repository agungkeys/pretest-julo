import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../elements/Box';
import Button from '../../elements/Button';
import Text from '../../elements/Text';
import NextLink from '../../elements/NextLink';
import Image from '../../elements/Image';

const EmptyState = ({image, title, btnLabel, btnLink}) => (
  <Box padding={3} customCSS='text-align: center;'>
    <Image src={image} width={100} alt={title} />
    <Text paddingTop={1} isBlock fontSizeVariant="md" colorVariant="grey">{title}</Text>
    <Button as={NextLink} colorVariant="grey-soft" size='sm' marginTop={1} link={btnLink}>{btnLabel}</Button>
  </Box>
);

EmptyState.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  btnLabel: PropTypes.string,
  btnLink: PropTypes.string,
};

export default EmptyState;
