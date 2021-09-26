import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../elements/Row';
import Col from '../../elements/Col';
import Box from '../../elements/Box';
import Container from '../../elements/Container';
import Text from '../../elements/Text';
import NextLink from '../../elements/NextLink';
import Image from '../../elements/Image';

const BottomNavigation = ({data}) => (
  <Box  
    withBorder 
    borderSides={['top']}
    borderColorVariant="grey"
    customCSS='position: fixed; bottom:0; background: white; z-index: 1;'
  >
    <Container>
      <Row>
        {data && data.map((item) => {
          return(
            <Col key={item.id} textAlign='center' padding={2}>
              {/* <Box isRounded colorVariant='primary' padding={1} customCSS='max-width: fit-content; margin: auto;'> */}
              <NextLink link={item.link}>
                <Image src={item.image} width={15} alt={item.label} />
                <Text isBlock fontSizeVariant='sm' paddingTop={1}>{item.label}</Text>
              </NextLink>
              {/* </Box> */}
            </Col>
          )
        })}
      </Row>
    </Container>
  </Box>
);

BottomNavigation.propTypes = {
  /** Add list menu bottomnavigation component */
  data: PropTypes.array,
};

export default BottomNavigation;
