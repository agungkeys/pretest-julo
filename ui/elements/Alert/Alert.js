// lib
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
// style
import { StyledAlert } from './StyledAlert';
// component
import Button from '../Button';
import Image from '../Image';
import Text from '../Text';
import Absolute from '../Absolute';
//const
import { ALERT_STATUS, FONT_SIZE } from '../../constant';
//hoc
import { withForwardRef, withThemeProvider, withGlobalProps } from '../../hoc';
import { getObjectValues } from '../../utils';

class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidMount() {
    const { autoCloseDuration } = this.props;

    if (autoCloseDuration) {
      this.timeoutId = setTimeout(() => {
        this.onDismiss();
      }, autoCloseDuration);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.autoCloseDuration !== this.props.autoCloseDuration) {
      const { autoCloseDuration } = this.props;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      if (autoCloseDuration) {
        this.timeoutId = setTimeout(() => {
          this.onDismiss();
        }, autoCloseDuration);
      }
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  onDismiss() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    const {
      type,
      fontSizeVariant,
      children,
      isHideCloseButton,
      autoCloseDuration,
      onClose,
      ...rest
    } = this.props;

    return (
      <StyledAlert
        ref={el => (this.element = el)}
        type={type}
        isHideCloseButton={isHideCloseButton}
        role="alert"
        {...rest}
      >
        <Text fontSizeVariant={fontSizeVariant} customCSS="color: inherit;">
          {children}
        </Text>
        {!isHideCloseButton && (
          <Absolute
            as={Button}
            top={5}
            right={10}
            paddingRight={0}
            onClick={this.onDismiss}
          >
            <Image src="/times.svg" alt="close" width={10} height={10} />
          </Absolute>
        )}
      </StyledAlert>
    );
  }
}

Alert.propTypes = {
  type: PropTypes.oneOf(getObjectValues(ALERT_STATUS)),
  fontSizeVariant: PropTypes.oneOf(getObjectValues(FONT_SIZE)),
  autoCloseDuration: PropTypes.number
};

export default compose(
  withForwardRef,
  withThemeProvider,
  withGlobalProps
)(Alert);
