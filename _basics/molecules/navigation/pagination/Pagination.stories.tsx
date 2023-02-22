/* eslint-disable no-console */
import { Meta, Story } from '@storybook/react';
import React, { ReactElement, MouseEvent } from 'react';
import { PaginationProps } from '@/interfaces';

import PaginationComponent from './Pagination';

export default {
  title: 'Basic Components/Molecules/Navigation/Pagination',
  component: PaginationComponent,
  argTypes: {},
} as Meta;

const PaginationTemplate: Story<PaginationProps> = (
  args: PaginationProps
): ReactElement => <PaginationComponent {...args} />;

export const Pagination = PaginationTemplate.bind({});

Pagination.args = {
  currentPage: 6,
  numberOfPages: 23,
  paginationAlignment: 'left',
  buttonSize: 'small',
  buttonBorderRadius: undefined,
  buttonSpacing: undefined,
  buttonColor: 'secondary',
  buttonBorderColor: 'secondary',
  buttonTextColor: 'white',
  activeButtonColor: 'primary',
  activeButtonBorderColor: 'primary',
  activeButtonTextColor: 'white',
  iconStyle: 'regular',
  prevIconName: 'arrow-left',
  nextIconName: 'arrow-right',
  handlePageChange: (event: MouseEvent, page: number) => {
    console.log('event', event);
    console.log('page', page);
  },
};
