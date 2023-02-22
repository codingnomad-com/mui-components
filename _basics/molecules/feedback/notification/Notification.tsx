import React, { FC, ReactElement } from 'react';

import Fontawesome from '@basics/atoms/icons/fontawesome/Fontawesome';
import NotificationBox from '@basics/atoms/feedback/notificationBox/NotificationBox';
import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';
import { NotificationProps } from '@/interfaces';
import { DefaultColor } from '@/types';

const Notification: FC<NotificationProps> = (props): ReactElement => {
  const {
    type = 'warning',
    iconStyle = 'solid',
    iconName = 'exclamation-triangle',
    headline = '',
    fontWeight = 'bold',
    description = '',
    descriptionFontWeight = 'normal',
  } = props;

  const color = `notification.${type}.text` as DefaultColor;

  return (
    <NotificationBox type={type}>
      <Fontawesome
        iconStyle={iconStyle}
        iconColor={color as DefaultColor}
        iconName={iconName}
      />

      <div>
        {headline && (
          <Paragraph {...props} fontWeight={fontWeight} color={color}>
            {headline}
          </Paragraph>
        )}

        {description && (
          <Paragraph
            {...props}
            fontWeight={descriptionFontWeight}
            color={color}
          >
            {description}
          </Paragraph>
        )}
      </div>
    </NotificationBox>
  );
};

export default Notification;
