import React from 'react';
import { compose } from 'recompose';

import { StyledImage } from './StyledImage';
import NextLink from '../NextLink';

import { withThemeProvider, withGlobalProps } from '../../hoc';
import { isElementInViewport } from '../../utils';

class BaseImage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
    this.isImageInViewport = this.isImageInViewport.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  observeIntersection() {
    const { src } = this.props;
    const element = this.element;

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.src = src;
          this.setState({
            isLoaded: true
          });
          this.observer.disconnect();
        }
      });
    });

    this.observer.observe(element);
  }

  isImageInViewport() {
    const { src } = this.props;
    const { isLoaded } = this.state;
    const element = this.element;

    if (!isLoaded && isElementInViewport(element)) {
      element.src = src;
      this.setState({
        isLoaded: true
      });
    }
  }

  handleError() {
    this.element.src = this.props.theme.image.fallbackImage;
  }

  handleSrc() {
    const { src } = this.props;

    if (src) {
      this.element.src = src;
    } else {
      this.handleError();
    }

    this.setState({
      isLoaded: true
    });
  }

  onScrollHandler() {
    document.addEventListener('scroll', this.isImageInViewport);
  }

  componentDidMount() {
    const { isLazy } = this.props;

    if (isLazy) {
      'IntersectionObserver' in window
        ? this.observeIntersection()
        : this.onScrollHandler();
    } else {
      this.handleSrc();
    }
  }

  componentDidUpdate() {
    this.handleSrc();
  }

  componentWillUnmount() {
    this.observer && this.observer.unobserve(this.element);
    document.removeEventListener('scroll', this.isImageInViewport);
  }

  render() {
    const {
      alt,
      linkTo,
      fit,
      height,
      isFullWidth,
      isFluid,
      isLazy,
      shapeVariant,
      dataSrc,
      src,
      srcset,
      width,
      onError,
      theme,
      ...rest
    } = this.props;

    const { isLoaded } = this.state;

    const attrs = {
      ...this.props,
      ...rest,
      src,
      srcSet: srcset,
      ref: el => (this.element = el),
      isLoaded,
      onError: onError || this.handleError
    };

    return linkTo ? (
      <NextLink link={linkTo}>
        <StyledImage {...attrs} />
      </NextLink>
    ) : (
      <StyledImage {...attrs} />
    );
  }
}

export default compose(withThemeProvider, withGlobalProps)(BaseImage);
