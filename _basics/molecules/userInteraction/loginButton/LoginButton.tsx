import React, { FC, ReactElement, useCallback } from 'react';

import Button from '@basics/atoms/formElements/button/Button';
import { LoginButtonProps } from '@/interfaces';
import { StyledLoginButton } from './LoginButton.styles';

const LoginButton: FC<LoginButtonProps> = (props): ReactElement => {
  const { isLoggedIn, styles, onClick } = props;

  const {
    loginButtonBorderColor,
    loginButtonColor,
    loginButtonLabel,
    loginButtonSize,
    loginButtonTextColor,
    loginIconName,
    loginIconPosition,
    loginIconSpacing,
    loginIconStyle,
    logoutButtonBorderColor,
    logoutButtonColor,
    logoutButtonLabel,
    logoutButtonTextColor,
    logoutIconName,
    logoutIconPosition,
    logoutIconSpacing,
    logoutIconStyle,
  } = styles || {};

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(isLoggedIn);
    }
  }, [isLoggedIn, onClick]);

  return (
    <StyledLoginButton>
      {isLoggedIn && (
        <Button
          buttonBorderColor={logoutButtonBorderColor || 'secondary'}
          buttonColor={logoutButtonColor || 'secondary'}
          buttonLabel={logoutButtonLabel || ''}
          buttonSize={loginButtonSize || 'medium'}
          buttonTextColor={logoutButtonTextColor || 'white'}
          iconName={logoutIconName || 'lock-alt'}
          iconPosition={logoutIconPosition || 'right'}
          iconSpacing={logoutIconSpacing || '10px'}
          iconStyle={logoutIconStyle || 'light'}
          onClick={handleClick}
        />
      )}

      {!isLoggedIn && (
        <Button
          buttonBorderColor={loginButtonBorderColor || 'primary'}
          buttonColor={loginButtonColor || 'primary'}
          buttonLabel={loginButtonLabel || ''}
          buttonSize={loginButtonSize || 'medium'}
          buttonTextColor={loginButtonTextColor || 'white'}
          iconName={loginIconName || 'lock-open-alt'}
          iconPosition={loginIconPosition || 'right'}
          iconSpacing={loginIconSpacing || '10px'}
          iconStyle={loginIconStyle || 'light'}
          onClick={handleClick}
        />
      )}
    </StyledLoginButton>
  );
};

export default LoginButton;
