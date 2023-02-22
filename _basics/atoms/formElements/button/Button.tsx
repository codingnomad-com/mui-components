import React, { FC, ReactElement } from 'react';
import Fontawesome from '@basics/atoms/icons/fontawesome/Fontawesome';
import { ButtonProps } from '@/interfaces';
import { StyledButtonLink, StyledButtonButton } from './Button.styles';

const Button: FC<ButtonProps> = (props): ReactElement => {
  const {
    buttonLabel,
    buttonHref,
    buttonDisabled,
    buttonTarget,
    iconName,
    iconStyle,
    buttonTextColor,
    iconCSSStyle,
  } = props;

  if (buttonHref) {
    return (
      <StyledButtonLink
        {...props}
        href={buttonHref}
        target={buttonTarget}
        data-disabled={buttonDisabled}
      >
        <span>
          {iconName && (
            <Fontawesome
              iconName={iconName}
              iconStyle={iconStyle}
              iconColor={buttonTextColor}
              style={iconCSSStyle}
            />
          )}

          <span>{buttonLabel}</span>
        </span>
      </StyledButtonLink>
    );
  }

  return (
    <StyledButtonButton {...props} disabled={buttonDisabled}>
      <span>
        {iconName && (
          <Fontawesome
            iconName={iconName}
            iconStyle={iconStyle}
            iconColor={buttonTextColor}
            style={iconCSSStyle}
          />
        )}

        <span>{buttonLabel}</span>
      </span>
    </StyledButtonButton>
  );
};

export default Button;
