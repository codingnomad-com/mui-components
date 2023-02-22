import React, {
  ChangeEvent,
  FC,
  MouseEvent,
  useCallback,
  useState,
} from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import InputControlled from '@basics/molecules/formElements/inputControlled/InputControlled';
import Button from '@/components/_basics/atoms/formElements/button/Button';
import { RegistrationFormProps, FormDataState } from '@/interfaces';
import Headline from '@/components/_basics/atoms/typography/headline/Headline';
import DatePicker from '@basics/atoms/formElements/datePicker/DatePicker';
import NotificationBox from '@basics/atoms/feedback/notificationBox/NotificationBox';
import { NotificationBoxType } from '@/types/NotificationBoxType';
import SimpleCheckbox from '@/components/_basics/atoms/formElements/simpleCheckbox/SimpleCheckbox';
import {
  StyledHeadlineWrapper,
  StyledNotificationWrapper,
  StyledRegistrationForm,
  StyledRegistrationFormCheckbox,
  StyledRegistrationFormCTAWrapper,
  StyledRegistrationFormInput,
} from './RegistrationForm.styles';
import { fieldsConfig, firstFormSchema, secondFormSchema } from './formConfig';

// eslint-disable-next-line @typescript-eslint/naming-convention
const FORM_ELEMENTS = [
  [
    'accountNumber',
    'firstName',
    'lastName',
    'birthday',
    'requiredMarkSeparator',
  ],
  [
    'email',
    'password',
    'passwordRepeat',
    'acceptGDPR',
    'acceptAGB',
    'updatesOptIn',
  ],
];

// eslint-disable-next-line @typescript-eslint/naming-convention
const FORM_SCHEMA_STEPS = [firstFormSchema, secondFormSchema];

const parseHeadlineText = (text: string, formData: FormDataState) => {
  const regExp = /{{([^)]+)}}/;
  const matches = regExp.exec(text);
  if (matches && formData) {
    return text.replace(regExp, formData[matches[1]]);
  }
  return text;
};

export const RegistrationForm: FC<RegistrationFormProps> = ({ stepsProps }) => {
  const [formStep, setFormStep] = useState(0);
  const [notification, setNotification] = useState<{
    type: NotificationBoxType;
    msg: string;
  }>({
    type: 'success',
    msg: '',
  });

  const [formData, setFormState] = useState<FormDataState>({
    accountNumber: '',
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(FORM_SCHEMA_STEPS[formStep]),
  });

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.type === 'checkbox') {
        setFormState({ ...formData, [e.target.name]: e.target.checked });
      } else {
        setFormState({ ...formData, [e.target.name]: e.target.value });
      }
    },
    [formData],
  );

  const onDateChange = useCallback(
    (newDate: Date, name: string) => {
      setValue(name, newDate);
      trigger(name); // manual validation
      setFormState({ ...formData, [name]: newDate });
    },
    [formData],
  );

  const onSubmit = useCallback(
    (e: MouseEvent) => {
      e?.preventDefault();
      e?.stopPropagation();

      // save first data
      if (formStep === 0) {
        setFormStep(1);
        setNotification({
          type: 'success',
          msg: 'Ihre Daten konnten erfolgreich validiert werden!',
        });
      }

      if (formStep === 1) {
        console.log('====== onSubmit =======', formData);

        setNotification({
          type: 'success',
          msg: 'Form submitted!',
        });
      }
    },
    [formData, formStep],
  );

  return (
    <StyledRegistrationForm onSubmit={handleSubmit(onSubmit)}>
      {stepsProps[formStep]?.headlineProps && (
        <StyledHeadlineWrapper>
          <Headline
            headlineLevel="h3"
            margin="0 0 32px"
            {...stepsProps[formStep]?.headlineProps}
          >
            {parseHeadlineText(
              stepsProps[formStep].headlineProps?.children,
              formData,
            )}
          </Headline>
        </StyledHeadlineWrapper>
      )}

      {notification?.msg && (
        <StyledNotificationWrapper>
          <NotificationBox type={notification.type || 'success'}>
            {notification.msg}
          </NotificationBox>
        </StyledNotificationWrapper>
      )}

      {fieldsConfig
        .filter(({ name }) => FORM_ELEMENTS[formStep].indexOf(name) !== -1)
        .map((item) => {
          const { name, label, type, required } = item;

          const registeredProps = register(name, {
            required,
            onChange,
            value: formData[name],
          });

          if (type === 'separator') {
            return (
              <StyledRegistrationFormInput key={name}>
                {label}
              </StyledRegistrationFormInput>
            );
          }

          if (type === 'checkbox') {
            return (
              <StyledRegistrationFormCheckbox key={name}>
                <SimpleCheckbox
                  errorMessage={errors[name]?.message}
                  labelProps={{ label: label || '' }}
                  inputProps={{
                    ...registeredProps,
                    required,
                    name,
                  }}
                />
              </StyledRegistrationFormCheckbox>
            );
          }

          if (type === 'date') {
            return (
              <StyledRegistrationFormInput key={name}>
                <DatePicker
                  value={formData[name]}
                  errorMessage={errors[name]?.message}
                  labelProps={{ label: label || '', required }}
                  handleChange={(newDate) => onDateChange(newDate, name)}
                />
              </StyledRegistrationFormInput>
            );
          }

          return (
            <StyledRegistrationFormInput key={name}>
              <InputControlled
                errorMessage={errors[name]?.message}
                labelProps={{ label: label ?? '' }}
                type="text"
                required={required}
                inputProps={{
                  type,
                  ...registeredProps,
                }}
              />
            </StyledRegistrationFormInput>
          );
        })}

      <StyledRegistrationFormCTAWrapper>
        <Button
          buttonLabel={stepsProps[formStep]?.submitLabel}
          onClick={onSubmit}
          buttonDisabled={!isValid}
        />
      </StyledRegistrationFormCTAWrapper>
    </StyledRegistrationForm>
  );
};

export default RegistrationForm;
