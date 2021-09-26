import React from 'react';
import PropTypes from 'prop-types';

import BaseImage from './BaseImage';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { src, srcset, isPreload } = this.props;
    if (isPreload) {
      const newImage = new Image();
      newImage.src = src;
      window[src] = newImage;

      const imags = (srcset && srcset.split(', ')) || [];
      imags.forEach(img => {
        const imageArr = img.split(' ');
        const newImage = new Image();
        newImage.src = imageArr[0];
        window[imageArr[0]] = newImage;
      });
    }
  }
  render() {
    return <BaseImage {...this.props} />;
  }
}

Image.propTypes = {
  /** Specifies an alternate text for the image */
  alt: PropTypes.string.isRequired,
  /** How the image fills its container. */
  fit: PropTypes.oneOf(['contain', 'cover']),
  /** Specifies the height of the image */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Variants of image shape */
  shapeVariant: PropTypes.oneOf([
    'rounded',
    'circle',
    'roundTop',
    'roundBottom',
  ]),
  /** Specifies the URL of the image */
  src: PropTypes.string,
  /** Apply the image so that it scales with the parent element. */
  isFluid: PropTypes.bool,
  /** Fill entire space of parent element. */
  isFullWidth: PropTypes.bool,
  /** Wrap the image with link */
  linkTo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.object,
      asPath: PropTypes.string,
    }),
  ]),
  /** Load the image only when it's on the viewport. */
  isLazy: PropTypes.bool,
  /** Specifies the width of the image */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Controls image display */
  display: PropTypes.oneOf(['block', 'inline-block']),
};

export default Image;
