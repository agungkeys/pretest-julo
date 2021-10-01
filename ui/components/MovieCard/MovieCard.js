import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../elements/Box';
import Button from '../../elements/Button';
import Row from '../../elements/Row';
import Col from '../../elements/Col';
import Text from '../../elements/Text';
import NextLink from '../../elements/NextLink';
import Image from '../../elements/Image';

function MovieCard(props) {
  const {id, title, image, category, release, link, isFavorite, onRemoveFavorite} = props;

  function handleOnRemoveFavorite(e, id) {
    e.preventDefault();
    onRemoveFavorite(id)
  }

  return(
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
            <Box customCSS="flex-direction: column; display: flex; flex-wrap: wrap; justify-content: space-between; height: 100%;">
              <Box>
                {category && 
                  <Box isBlock colorVariant={isFavorite ? 'red' : 'primary'} marginTop={2} padding={1} paddingLeft={2} customCSS='border-bottom-left-radius: .5em;'>
                    {isFavorite && <Image src="/favorite.svg" alt="favorite" width={14} height={14} marginRight={1} /> || null }
                    <Text fontSizeVariant='sm' fontWeightVariant='bold' colorVariant={isFavorite ? 'default' : 'white'}>{`${category.toUpperCase()} CATEGORY`}</Text>
                  </Box>
                }
                <Text isBlock paddingTop={3} paddingRight={2} fontSizeVariant='base' fontWeightVariant='semiBold'>{title}</Text>
                <Text isBlock paddingTop={1} fontSizeVariant='sm'>Release on: {release}</Text>
              </Box>
              {isFavorite && 
                <Box isBlock paddingY={2} paddingRight={2} customCSS="text-align: right;">
                  <Button colorVariant='grey-soft' isOutlined onClick={(e) => handleOnRemoveFavorite(e, id)}>
                    <Image src="/trash.svg" alt="trash" width={15} height={15} />
                  </Button>
                </Box>
              ||null}
            </Box>
          </Col>
        </Row>
      </NextLink>
    </Box>
  );
};

MovieCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  release: PropTypes.string,
  isFavorite: PropTypes.bool,
  onRemoveFavorite: PropTypes.func,
};

MovieCard.defaultProps = {
  isFavorite: false
};

export default  MovieCard;
