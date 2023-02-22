import { ModalProps } from '@/interfaces';
import Button from '@basics/atoms/formElements/button/Button';
import React, { FC, ReactElement } from 'react';
import { StyledModalOverlay, StyledModalWrapper } from './Modal.styles';

const Modal: FC<ModalProps> = (props): ReactElement | null => {
  const { children, handleCloseModal, isOpen, options } = props;

  const { closeIconColor = 'black' } = options;

  if (isOpen) {
    return (
      <>
        <StyledModalOverlay onClick={handleCloseModal} />

        <StyledModalWrapper>
          <Button
            onClick={() => handleCloseModal()}
            iconName="times"
            iconPosition="right"
            buttonLabel=""
            style={{
              margin: 0,
              position: 'absolute',
              top: 15,
              right: 15,
              zIndex: 200,
              padding: 5,
            }}
            buttonTextColor={closeIconColor}
            buttonBorderColor="transparent"
            buttonColor="transparent"
          />

          {children}
        </StyledModalWrapper>
      </>
    );
  }

  return null;
};

export default Modal;
