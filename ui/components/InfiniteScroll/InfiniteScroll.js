import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../elements/Spinner';
import { InfiniteContainer } from './StyledInfiniteScroll';

import { isElementInViewport } from '../../utils';

class InfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInViewport: false
    };
    this.onScrollHandler = this.onScrollHandler.bind(this);
  }

  onScrollHandler() {
    const { status, parentRef } = this.props;
    const { isInViewport } = this.state;
    if (this.element !== null && isElementInViewport(this.element, parentRef.current) && !isInViewport && status !== 'loading') {
      this.setState({ isInViewport: true });
    }
  }

  componentDidMount() {
    this.onScrollHandler();
    document.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScrollHandler);
  }
 
  componentDidUpdate() {
    if (this.state.isInViewport) {
      const { triggerFunction } = this.props;
      triggerFunction();
      this.setState({ isInViewport: false });
    }
  }

  render() {
    return (
      <InfiniteContainer ref={el => (this.element = el)}>
        {this.props.status === 'loading' ? (
          <Spinner size={this.props.spinnerSize} />
        ) : (
          null
        )}
      </InfiniteContainer>
    );
  }
}

InfiniteScroll.propTypes = {
  isAmp: PropTypes.bool.isRequired,
  spinnerSize: PropTypes.number.isRequired,
  triggerFunction: PropTypes.func.isRequired,
  status: PropTypes.oneOf(['init', 'loading', 'success', 'error']),
  parentRef: PropTypes.shape({ current: PropTypes.instanceOf(typeof Element === 'undefined' ? function(){} : Element) }),
};

InfiniteScroll.defaultProps = {
  status: 'init',
  spinnerSize: 48,
  isMobile: false,
  isAmp: false,
  parentRef: {
    current: null,
  },
};

export default InfiniteScroll;
