import React, { FC, ReactElement } from 'react';

import { NotificationBoxProps } from '@/interfaces';
import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';
import { StyledNotificationBox } from './NotificationBox.styles';

const NotificationBox: FC<NotificationBoxProps> = (props): ReactElement => {
  const { children, type, paragraphProps = {} } = props;

  return (
    <StyledNotificationBox type={type}>
      <Paragraph
        color={type}
        {...paragraphProps}
        style={!type || type === 'warning' ? { color: '#876D40' } : {}}
      >
        {children}
      </Paragraph>
    </StyledNotificationBox>
  );
};

export default NotificationBox;
