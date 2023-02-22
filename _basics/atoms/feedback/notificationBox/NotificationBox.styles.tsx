import styled from 'styled-components';
import { NotificationBoxProps } from '@/interfaces';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'notificationBox';

const { padding, color } = getHelpers(compName);

export const StyledNotificationBox = styled.div.attrs(
  (props: NotificationBoxProps) => ({
    type: props.type || 'warning',
  }),
)`
  background-color: ${(p) => `${color(p, '', p.type)}3f`};
  padding: ${(p) => padding(p, 'padding', 'sm')};

  ${(p) => p.theme.components?.[compName]?.style};
`;
