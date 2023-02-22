import React, {
  ChangeEvent,
  FC,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { useMutation } from '@apollo/client';
import { ApolloError } from '@apollo/client/errors';

import InputControlled from '@basics/molecules/formElements/inputControlled/InputControlled';
import Headline from '@basics/atoms/typography/headline/Headline';
import Button from '@basics/atoms/formElements/button/Button';
import { SetIamUserMutation } from '@basics/mutations/setIamUserMutation';
import { MyDataFormProps, UserInfo } from '@/interfaces';
import {
  StyledFormInputRight,
  StyledInputsBlock,
  StyledInputsWrapper,
  StyledMyDataForm,
  StyledMyDataFormInput,
} from './MyDataForm.styles';

export const MyDataForm: FC<MyDataFormProps> = (props) => {
  const { data, submitProps } = props;

  const [formData, setFormData] = useState<
    UserInfo & { password?: string; passwordRepeat?: string }
  >(
    data || {
      userName: '',
      firstName: '',
      lastName: '',
      salutation: '',
      dateOfBirth: '',
      street: '',
      houseNumber: '',
      zip: '',
      city: '',
      password: '',
      passwordRepeat: '',
    },
  );

  useEffect(() => {
    setFormData({ ...formData, ...data });
  }, [data]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData],
  );

  const [submitForm, { loading }] = useMutation(SetIamUserMutation, {
    onError: (loginError: ApolloError) => {
      console.log('====== submitForm  onError =======', loginError);
    },
    onCompleted: (loginData: any) => {
      console.log('====== submitForm  onCompleted =======', loginData);
    },
  });

  const onSubmit = useCallback(
    (e: MouseEvent) => {
      e?.preventDefault();
      e?.stopPropagation();

      submitForm({
        variables: { data: formData },
      });
    },
    [formData],
  );

  return (
    <StyledMyDataForm>
      <StyledInputsBlock>
        <Headline headlineLevel="h6" fontWeight="bold">
          Ihre Zugangsdaten
        </Headline>
        <StyledInputsWrapper>
          <div>
            <StyledMyDataFormInput>
              <InputControlled
                labelProps={{ label: 'Benutzername / E-Mail Adresse:' }}
                inputProps={{
                  name: 'userName',
                  onChange,
                  value: formData.userName,
                }}
              />
            </StyledMyDataFormInput>

            <StyledMyDataFormInput>
              <InputControlled
                labelProps={{ label: 'Neues Passwort:' }}
                inputProps={{
                  name: 'password',
                  type: 'password',
                  value: formData.password,
                  onChange,
                }}
              />
            </StyledMyDataFormInput>
          </div>

          <StyledFormInputRight>
            <InputControlled
              labelProps={{ label: 'Neues Passwort wiederholen:' }}
              inputProps={{
                name: 'passwordRepeat',
                type: 'password',
                value: formData.passwordRepeat,
                onChange,
              }}
            />
          </StyledFormInputRight>
        </StyledInputsWrapper>
      </StyledInputsBlock>

      <StyledInputsBlock>
        <StyledInputsWrapper>
          <div>
            <Headline headlineLevel="h6" fontWeight="bold">
              Persönliche Daten
            </Headline>
            <StyledMyDataFormInput>
              <InputControlled
                labelProps={{ label: 'Anrede:' }}
                inputProps={{
                  name: 'salutation',
                  value: formData.salutation,
                  onChange,
                }}
              />
            </StyledMyDataFormInput>
            <StyledMyDataFormInput>
              <InputControlled
                labelProps={{ label: 'Vorname:' }}
                inputProps={{
                  name: 'firstName',
                  value: formData.firstName,
                  onChange,
                }}
              />
            </StyledMyDataFormInput>
            <StyledMyDataFormInput>
              <InputControlled
                labelProps={{ label: 'Nachname:' }}
                inputProps={{
                  name: 'lastName',
                  value: formData.lastName,
                  onChange,
                }}
              />
            </StyledMyDataFormInput>
            <StyledMyDataFormInput>
              <InputControlled
                labelProps={{ label: 'Geburtsdatum:' }}
                inputProps={{
                  name: 'dateOfBirth',
                  value: formData.dateOfBirth,
                  onChange,
                }}
              />
            </StyledMyDataFormInput>
          </div>
          <div>
            <Headline headlineLevel="h6" fontWeight="bold">
              Adresse
            </Headline>
            <StyledMyDataFormInput>
              <InputControlled
                labelProps={{ label: 'Straße:' }}
                inputProps={{
                  name: 'street',
                  value: formData.street,
                  onChange,
                }}
              />
            </StyledMyDataFormInput>
            <StyledMyDataFormInput>
              <InputControlled
                labelProps={{ label: 'Hausnummer:' }}
                inputProps={{
                  name: 'houseNumber',
                  value: formData.houseNumber,
                  onChange,
                }}
              />
            </StyledMyDataFormInput>
            <StyledMyDataFormInput>
              <InputControlled
                labelProps={{ label: 'PLZ:' }}
                inputProps={{
                  name: 'zip',
                  value: formData.zip,
                  onChange,
                }}
              />
            </StyledMyDataFormInput>
            <StyledMyDataFormInput>
              <InputControlled
                labelProps={{ label: 'Ort:' }}
                inputProps={{
                  name: 'city',
                  value: formData.city,
                  onChange,
                }}
              />
            </StyledMyDataFormInput>
          </div>
        </StyledInputsWrapper>
        <Button
          buttonLabel={submitProps?.label || 'Speichern'}
          iconName={submitProps?.icon}
          onClick={onSubmit}
          buttonDisabled={loading}
        />
      </StyledInputsBlock>
    </StyledMyDataForm>
  );
};

export default MyDataForm;
