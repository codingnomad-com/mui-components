import { Wifi } from '@mui/icons-material';
import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Avatar } from '../../../atoms/image/Avatar/Avatar';
import { ListProps } from './interfaces/ListProps';
import { List as ListComponent } from './List';
import { ListItem } from './ListItem';
import { ListItemAvatar } from './ListItemAvatar';
import { ListItemButton } from './ListItemButton';
import { ListItemIcon } from './ListItemIcon';
import { ListItemText } from './ListItemText';

export default {
  title: 'Molecules/Data/List',
  component: ListComponent,
  argTypes: {},
} as Meta;

const ListTemplate: Story<ListProps> = (args: ListProps): ReactElement => {
  return (
    <ListComponent {...args}>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <Wifi />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemText>I am a ListItemText</ListItemText>
      </ListItem>
    </ListComponent>
  );
};

export const List = ListTemplate.bind({});
