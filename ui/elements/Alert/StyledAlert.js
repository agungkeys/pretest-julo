import styled from '@emotion/styled';
import { ALERT_STATUS } from '../../constant';
import { spacing, customCSS } from '../../helpers';
import { rem } from '../../utils';

const backgroundColorStyle = ({ type, theme }) => {
  const { success, danger, info, warning, transparent } = theme.alert;
  const bgColorConfig = {
    [ALERT_STATUS.SUCCESS]: `color: ${success.color};
      background-color: ${success.bgColor};
      border-color: ${success.borderColor};`,
    [ALERT_STATUS.DANGER]: `color: ${danger.color};
      background-color: ${danger.bgColor};
      border-color: ${danger.borderColor};`,
    [ALERT_STATUS.INFO]: `color: ${info.color};
      background-color: ${info.bgColor};
      border-color: ${info.borderColor};
      `,
    [ALERT_STATUS.WARNING]: `color: ${warning.color};
      background-color: ${warning.bgColor};
      border-color: ${warning.borderColor};
      `,
    [ALERT_STATUS.TRANSPARENT]: `color: ${transparent.color};
      background-color: ${transparent.bgColor};
      border-color: ${transparent.borderColor};
      `
  };

  return bgColorConfig[type] && bgColorConfig[type];
};

const StyledAlert = styled.div`
  position: relative;
  padding: ${props =>
    props.isHideCloseButton
      ? `${rem(10)} ${rem(10)} ${rem(10)} ${rem(10)}`
      : `${rem(10)} ${rem(30)} ${rem(10)} ${rem(10)}`};
  border: 1px solid transparent;
  border-radius: ${props => rem(props.theme.alert.borderRadius)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: ${rem(200)};
  ${props => props.type && backgroundColorStyle}
  ${spacing}
  ${customCSS}
`;

export { StyledAlert };
