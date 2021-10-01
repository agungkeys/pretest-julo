import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../elements/Box';
import Row from '../../elements/Row';
import Col from '../../elements/Col';
import Text from '../../elements/Text';
import NextLink from '../../elements/NextLink';
import Image from '../../elements/Image';

const  MovieCard = ({id, title, image, category, release, link}) => (

    <Box isBlock marginBottom={3} borderColorVariant="grey" isRounded withBorder>
       <NextLink 
        link={link} 
        customCSS='width: 100%;'
      >
        <Row flexDirection='row' gutterSize='xs' customCSS="width: 100%;">
          <Col md={4}>
            <Image 
              src={image} 
              width={130}
              shapeVariant="rounded"
              alt={title}
            />
          </Col>
          <Col md={8}>
            {category && 
              <Box colorVariant='primary' marginTop={2} padding={1} paddingLeft={2} customCSS='border-bottom-left-radius: .5em;'>
                <Text fontSizeVariant='sm' fontWeightVariant='bold' colorVariant='white'>{`${category.toUpperCase()} CATEGORY`}</Text>
              </Box>
            }
            <Text isBlock paddingTop={3} paddingRight={2} fontSizeVariant='base' fontWeightVariant='semiBold'>{title}</Text>
            <Text isBlock paddingTop={1} fontSizeVariant='sm'>Release on: {release}</Text>
          </Col>
        </Row>
      </NextLink>
    </Box>
);

 MovieCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  release: PropTypes.string,
};

export default  MovieCard;
