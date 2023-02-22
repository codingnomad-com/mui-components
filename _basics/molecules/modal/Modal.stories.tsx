import React, { ReactElement } from 'react';
import { Meta, Story } from '@storybook/react';
import { ModalProps } from '@/interfaces';

import ModalComponent from './Modal';
import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';

export default {
  title: 'Basic Components/Molecules/Modal',
  component: ModalComponent,
  argTypes: {},
} as Meta;

const ModalTemplate: Story<ModalProps> = (args: ModalProps): ReactElement => {
  return (
    <div>
      <ModalComponent {...args}>
        <Paragraph>Ich bin ein Test</Paragraph>
      </ModalComponent>
    </div>
  );
};

export const Modal = ModalTemplate.bind({});

Modal.args = {
  handleCloseModal: () => {
    console.log('closed');
  },
  isOpen: true,
  options: {
    closeIconColor: 'primary',
  },
};
