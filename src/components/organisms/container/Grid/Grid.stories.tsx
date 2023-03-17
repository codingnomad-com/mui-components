import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Grid as GridComponent } from './Grid';
import GridItem from './GridItem';
import { GridProps } from './interfaces/GridProps';

export default {
  title: 'Organisms/Container/Grid',
  component: GridComponent,
  argTypes: {},
} as Meta;

const GridTemplate: Story<GridProps> = (args: GridProps): ReactElement => {
  return (
    <GridComponent {...args}>
      <GridItem>Column 1</GridItem>

      <GridItem lg={3} md={6}>
        Column 2
      </GridItem>

      <GridItem>Column 3</GridItem>
    </GridComponent>
  );
};

export const Grid = GridTemplate.bind({});

Grid.args = {
  columns: 12,
  direction: 'row',
  columnSpacing: 2,
  rowSpacing: 2,
};
