import React, { FC, ChangeEvent, ReactElement, useReducer } from 'react';
import validator from 'validator';

import Errormessage from '@basics/atoms/formElements/errormessage/Errormessage';
import Label from '@basics/atoms/formElements/label/Label';
import Inputfield from '@basics/atoms/formElements/inputfield/Inputfield';
import { InputProps, InputState } from '@/interfaces';

const Input: FC<InputProps> = (props): ReactElement => {
  const {
    errorMessage,
    handleValueChange,
    icon,
    minLength,
    minLowercase,
    minNumbers,
    minSymbols,
    minUppercase,
    returnScore,
    validation = 'none',
    value: initialValue = '',
    valueToCompare,
  } = props;

  const [state, setState] = useReducer(
    (currentState: InputState, newState: InputState) => ({
      ...currentState,
      ...newState,
    }),
    {
      value: initialValue,
      focused: false,
      isTouched: false,
      isValid: false,
      isStrongPassword: false,
    },
  );

  const validateField = (): {
    isValid: boolean;
    isStrongPassword: number | boolean;
  } => {
    let isValid = false;
    let isStrongPassword: number | boolean = false;

    switch (validation) {
      case 'isAlpha':
        isValid = validator.isAlpha(state.value);
        break;

      case 'isAlphanumeric':
        isValid = validator.isAlphanumeric(state.value);
        break;

      case 'isBIC':
        isValid = validator.isBIC(state.value);
        break;

      case 'isBtcAddress':
        isValid = validator.isBtcAddress(state.value);
        break;

      case 'isCreditCard':
        isValid = validator.isCreditCard(state.value);
        break;

      case 'isDate':
        isValid = validator.isDate(state.value);
        break;

      case 'isDecimal':
        isValid = validator.isDecimal(state.value, {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          decimal_digits: '2',
          locale: 'de-DE',
        });
        break;

      case 'isEmail':
        isValid = validator.isEmail(state.value);
        break;

      case 'isEthereumAddress':
        isValid = validator.isEthereumAddress(state.value);
        break;

      case 'isFloat':
        isValid = validator.isFloat(state.value);
        break;

      case 'isIBAN':
        isValid = validator.isIBAN(state.value);
        break;

      case 'isInt':
        isValid = validator.isInt(state.value);
        break;

      case 'isMobilePhone':
        isValid = validator.isMobilePhone(state.value, 'de-DE');
        break;

      case 'isNumeric':
        isValid = validator.isNumeric(state.value);
        break;

      case 'isPassportNumber':
        isValid = validator.isPassportNumber(state.value);
        break;

      case 'isPostalCode':
        isValid = validator.isPostalCode(state.value, 'DE');
        break;

      case 'isStrongPassword':
        isStrongPassword = validator.isStrongPassword(state.value, {
          minLength: minLength || 8,
          minLowercase: minLowercase || 1,
          minUppercase: minUppercase || 1,
          minNumbers: minNumbers || 1,
          minSymbols: minSymbols || 1,
          returnScore: returnScore || true,
          pointsPerUnique: 1,
          pointsPerRepeat: 0.5,
          pointsForContainingLower: 10,
          pointsForContainingUpper: 10,
          pointsForContainingNumber: 10,
          pointsForContainingSymbol: 10,
        });

        if (typeof isStrongPassword === 'number') {
          isValid = isStrongPassword >= 40;
        } else {
          isValid = isStrongPassword;
        }

        break;

      case 'isSameAs':
        isValid = state.value === valueToCompare;
        break;

      default:
        isValid = true;
        break;
    }

    return {
      isValid,
      isStrongPassword,
    };
  };

  const handleFocus = (): void => {
    setState({
      ...state,
      focused: true,
    });
  };

  const handleChange = (event: ChangeEvent): void => {
    const { value } = event.target as HTMLInputElement;

    handleValueChange(value);

    setState({
      ...state,
      value,
    });
  };

  const handleBlur = (): void => {
    const validationResult = validateField();

    setState({
      ...state,
      isValid: validationResult.isValid,
      errorMessage,
      isStrongPassword: validationResult.isStrongPassword,
      isTouched: true,
      focused: false,
    });
  };

  return (
    <div>
      <Label
        {...props}
        onClick={props?.onClick}
        focused={state.focused}
        isTouched={state.isTouched}
        isValid={state.isValid}
      />

      <Inputfield
        isTouched={state.isTouched}
        isValid={state.isValid}
        icon={icon}
        hasValidation={validation === 'none'}
        inputProps={{
          ...props,
          minLength,
          onChange: handleChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
          value: state.value,
        }}
      />

      {/* TODO: make this awesome */}
      {/* {validation === 'isStrongPassword' && <p>{state.isStrongPassword}</p>} */}

      {errorMessage && state.isTouched && !state.isValid && (
        <Errormessage {...props} message={errorMessage} />
      )}
    </div>
  );
};

export default Input;
