import React, {
  FC,
  FocusEvent,
  InputHTMLAttributes,
  ReactElement,
  useState,
} from 'react';

import Errormessage from '@basics/atoms/formElements/errormessage/Errormessage';
import Label from '@basics/atoms/formElements/label/Label';
import Inputfield from '@basics/atoms/formElements/inputfield/Inputfield';
import Textfield from '@basics/atoms/formElements/textfield/Textfield';

import { InputControlledProps } from '@/interfaces';

const InputControlled: FC<InputControlledProps> = (props): ReactElement => {
  const {
    type = 'text',
    errorMessage,
    icon,
    required,
    labelProps,
    inputProps,
  } = props;

  const isValid = !errorMessage;

  const [state, setState] = useState<{ focused?: boolean; touched?: boolean }>({
    focused: false,
    touched: false,
  });

  const handleFocus = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (inputProps?.onFocus) {
      inputProps.onFocus(e);
    }

    setState({
      focused: true,
    });
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    if (inputProps?.onBlur) {
      inputProps.onBlur(e);
    }

    setState({
      touched: true,
      focused: false,
    });
  };

  return (
    <div>
      {labelProps && (
        <Label
          {...labelProps}
          focused={state.focused}
          isTouched={state.touched}
          isValid={isValid}
          required={required}
        />
      )}

      {type === 'text' && (
        <Inputfield
          isTouched={state.touched}
          isValid={isValid}
          icon={icon}
          hasValidation={isValid !== undefined}
          inputProps={{
            ...inputProps,
            onFocus: handleFocus,
            onBlur: handleBlur,
          }}
        />
      )}

      {type === 'textarea' && (
        <Textfield
          {...(inputProps as InputHTMLAttributes<HTMLTextAreaElement>)}
          isValid={isValid}
          isTouched={state.touched}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}

      <div
        style={{
          height: '22px',
          visibility: errorMessage && state.touched ? 'visible' : 'hidden',
        }}
      >
        <Errormessage message={errorMessage || ''} />
      </div>
    </div>
  );
};

export default InputControlled;
