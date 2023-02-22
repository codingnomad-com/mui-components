import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useMutation } from '@apollo/client';
import { ApolloError } from '@apollo/client/errors';

import InputControlled from '@basics/molecules/formElements/inputControlled/InputControlled';

import Headline from '@basics/atoms/typography/headline/Headline';
import Button from '@basics/atoms/formElements/button/Button';
import Checkbox from '@basics/atoms/formElements/checkbox/Checkbox';
import { CheckoutMutation } from '@basics/mutations/checkoutMutation';
import {
  CheckoutFormProps,
  CheckoutFormData,
  UserInfo,
  InputControlledProps,
} from '@/interfaces';
import {
  StyledInputsBlock,
  StyledCheckoutForm,
  StyledInputsWrapper,
  StyledCheckoutFormInput,
  StyledLabelWithCheckbox,
} from './CheckoutForm.styles';

import { formSchema, fieldsConfig } from './formConfig';

const copyUserDataToForm = (userInfo: UserInfo): CheckoutFormData => ({
  billingAddressTitle: userInfo?.salutation || '',
  billingAddressFirstName: userInfo?.firstName || '',
  billingAddressLastName: userInfo?.lastName || '',
  billingAddressStreet: userInfo?.street || '',
  billingAddressStreetNumber: userInfo?.houseNumber || '',
  billingAddressZipCode: userInfo?.zip || '',
  billingAddressCity: userInfo?.city || '',
  billingAddressBirthday: userInfo?.dateOfBirth || '',
  billingAddressPhone: userInfo?.phoneNumber || '',

  message: '',

  shippingAddressTitle: userInfo?.salutation || '',
  shippingAddressLastName: userInfo?.lastName || '',
  shippingAddressFirstName: userInfo?.firstName || '',
  shippingAddressStreet: userInfo?.street || '',
  shippingAddressStreetNumber: userInfo?.houseNumber || '',
  shippingAddressZipCode: userInfo?.zip || '',
  shippingAddressCity: userInfo?.city || '',
});

const copyBillingDataToShipping = (
  userInfo: CheckoutFormData,
): CheckoutFormData => ({
  ...userInfo,
  shippingAddressTitle: userInfo?.billingAddressTitle,
  shippingAddressFirstName: userInfo?.billingAddressFirstName,
  shippingAddressLastName: userInfo?.billingAddressLastName,
  shippingAddressStreet: userInfo?.billingAddressStreet,
  shippingAddressStreetNumber: userInfo?.billingAddressStreetNumber,
  shippingAddressZipCode: userInfo?.billingAddressZipCode,
  shippingAddressCity: userInfo?.billingAddressCity,
});

const leftFormElements = [
  'billingAddressTitle',
  'billingAddressFirstName',
  'billingAddressLastName',
  'billingAddressStreet',
  'billingAddressStreetNumber',
  'billingAddressZipCode',
  'billingAddressCity',
  'billingAddressBirthday',
  'billingAddressPhone',
  'message',
];

const rightFormElements = [
  'shippingAddressTitle',
  'shippingAddressFirstName',
  'shippingAddressLastName',
  'shippingAddressStreet',
  'shippingAddressStreetNumber',
  'shippingAddressZipCode',
  'shippingAddressCity',
];

export const CheckoutForm: FC<CheckoutFormProps> = (props) => {
  const { userInfo, submitProps } = props;

  const [formData, setFormData] = useState<CheckoutFormData>(
    copyUserDataToForm(userInfo),
  );

  useEffect(() => {
    setFormData(copyUserDataToForm({ ...userInfo, ...formData }));
  }, [userInfo]);

  const [checkedConfirmation, setCheckedConfirmation] = useState(false);
  const handleConfirmationClick = useCallback(() => {
    setCheckedConfirmation(!checkedConfirmation);
  }, [checkedConfirmation]);

  const [checkedDiffAddress, setCheckedDiffAddress] = useState(false);
  const handleSameAddressClick = useCallback(() => {
    if (checkedDiffAddress) {
      setFormData(copyBillingDataToShipping(formData));
    }
    setCheckedDiffAddress(!checkedDiffAddress);
  }, [checkedDiffAddress, formData]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let nextFormData = { ...formData, [e.target.name]: e.target.value };
      if (!checkedDiffAddress) {
        nextFormData = copyBillingDataToShipping(nextFormData);
      }
      setFormData(nextFormData);
    },
    [formData, checkedDiffAddress],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [submitForm, { loading }] = useMutation(CheckoutMutation, {
    onError: (loginError: ApolloError) => {
      console.log('====== submitForm  onError =======', loginError);
    },
    onCompleted: (loginData: any) => {
      console.log('====== submitForm  onCompleted =======', loginData);
    },
  });

  const onSubmit = useCallback(
    (fData) => {
      console.log('====== onSubmit formData =======', fData);

      submitForm({
        variables: { userInfo: formData },
      });
    },
    [formData],
  );

  return (
    <StyledCheckoutForm onSubmit={handleSubmit(onSubmit)}>
      <Headline headlineLevel="h2" fontWeight="bold">
        Bestellprozess
      </Headline>
      <Headline headlineLevel="h6">
        Wählen Sie die gewünschte Rechnungs- und Lieferadresse für Ihre
        Bestellung aus.
      </Headline>

      <StyledInputsBlock>
        <StyledInputsWrapper>
          <div>
            <Headline headlineLevel="h5" fontWeight="bold">
              Rechnungsadresse
            </Headline>

            {fieldsConfig
              .filter(({ name }) => leftFormElements.indexOf(name) !== -1)
              .map((item) => {
                const { name, label, type, required } = item;

                const registeredProps = register(name, {
                  required,
                });

                return (
                  <StyledCheckoutFormInput key={name}>
                    <InputControlled
                      errorMessage={errors[name]?.message}
                      labelProps={{ label: label ?? '' }}
                      type={type as InputControlledProps['type']}
                      inputProps={{
                        ...registeredProps,
                        value: formData[name],
                        name,
                        onChange: (e) => {
                          registeredProps.onChange(e);
                          onChange(e);
                        },
                      }}
                    />
                  </StyledCheckoutFormInput>
                );
              })}
            {/*
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Anrede:' }}
                inputProps={{
                  name: 'billingAddressTitle',
                  value: formData.billingAddressTitle,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Vorname:' }}
                inputProps={{
                  name: 'billingAddressFirstName',
                  value: formData.billingAddressFirstName,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Nachname:' }}
                inputProps={{
                  name: 'billingAddressLastName',
                  value: formData.billingAddressLastName,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Straße:' }}
                inputProps={{
                  name: 'billingAddressStreet',
                  value: formData.billingAddressStreet,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Hausnummer:' }}
                inputProps={{
                  name: 'billingAddressStreetNumber',
                  value: formData.billingAddressStreetNumber,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'PLZ:' }}
                inputProps={{
                  name: 'billingAddressZipCode',
                  value: formData.billingAddressZipCode,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Ort:' }}
                inputProps={{
                  name: 'billingAddressCity',
                  value: formData.billingAddressCity,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Geburtsdatum:' }}
                inputProps={{
                  name: 'billingAddressBirthday',
                  value: formData.billingAddressBirthday,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput>

            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Telefon:' }}
                inputProps={{
                  name: 'billingAddressPhone',
                  onChange,
                  value: formData.billingAddressPhone,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                type="textarea"
                labelProps={{ label: 'Nachricht:' }}
                inputProps={{
                  name: 'message',
                  onChange,
                  value: formData.message,
                }}
              />
            </StyledCheckoutFormInput>

            <StyledCheckoutFormInput>
              <InputControlled
                type="textarea"
                labelProps={{ label: 'Nachricht:' }}
                inputProps={{
                  name: 'message',
                  onChange,
                  value: formData.message,
                }}
              />
            </StyledCheckoutFormInput>
             */}
          </div>

          <div>
            <StyledLabelWithCheckbox>
              <Headline headlineLevel="h5" fontWeight="bold">
                Lieferadresse
              </Headline>

              <Checkbox
                options={[
                  {
                    label: 'Abweichende Lieferadresse',
                    value: 'acceptedPrivacy',
                    required: true,
                    selected: checkedDiffAddress || false,
                  },
                ]}
                handleClick={handleSameAddressClick}
              />
            </StyledLabelWithCheckbox>

            {fieldsConfig
              .filter(({ name }) => rightFormElements.indexOf(name) !== -1)
              .map((item) => {
                const { name, label, type, required } = item;

                const registeredProps = register(name, {
                  required,
                });

                return (
                  <StyledCheckoutFormInput key={name}>
                    <InputControlled
                      errorMessage={errors[name]?.message}
                      labelProps={{ label: label ?? '' }}
                      inputProps={{
                        ...registeredProps,
                        value: formData[name],
                        type,
                        name,
                        disabled: !checkedDiffAddress,
                        onChange: (e) => {
                          registeredProps.onChange(e);
                          onChange(e);
                        },
                      }}
                    />
                  </StyledCheckoutFormInput>
                );
              })}
            {/*
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Anrede:' }}
                inputProps={{
                  name: 'shippingAddressTitle',
                  value: formData.shippingAddressTitle,
                  onChange,
                  disabled: !checkedDiffAddress,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Vorname:' }}
                inputProps={{
                  name: 'shippingAddressFirstName',
                  value: formData.shippingAddressFirstName,
                  onChange,
                  disabled: !checkedDiffAddress,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Nachname:' }}
                inputProps={{
                  name: 'shippingAddressLastName',
                  value: formData.shippingAddressLastName,
                  disabled: !checkedDiffAddress,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Straße:' }}
                inputProps={{
                  name: 'shippingAddressStreet',
                  value: formData.shippingAddressStreet,
                  disabled: !checkedDiffAddress,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Hausnummer:' }}
                inputProps={{
                  name: 'shippingAddressStreetNumber',
                  value: formData.shippingAddressStreetNumber,
                  disabled: !checkedDiffAddress,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'PLZ:' }}
                inputProps={{
                  name: 'shippingAddressZipCode',
                  value: formData.shippingAddressZipCode,
                  disabled: !checkedDiffAddress,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput>
            <StyledCheckoutFormInput>
              <InputControlled
                labelProps={{ label: 'Ort:' }}
                inputProps={{
                  name: 'shippingAddressCity',
                  value: formData.shippingAddressCity,
                  disabled: !checkedDiffAddress,
                  onChange,
                }}
              />
            </StyledCheckoutFormInput> */}
          </div>
        </StyledInputsWrapper>
      </StyledInputsBlock>

      <StyledInputsBlock>
        <Headline headlineLevel="h6" fontWeight="bold">
          Bestellhinweis
        </Headline>

        <Checkbox
          options={[
            {
              label:
                'Hiermit bestätige ich die Richtigkeit meiner Angaben und nehme zur Kenntnis, dass nach Bestätigung der Bestellung keine Änderungen mehr vorgenommen werden können.',
              value: 'acceptedPrivacy',
              required: true,
              selected: checkedConfirmation || false,
            },
          ]}
          handleClick={handleConfirmationClick}
        />

        <Button
          type="submit"
          buttonLabel={submitProps?.label || 'Speichern'}
          iconName={submitProps?.icon}
          // onClick={onSubmit}
          buttonDisabled={loading}
        />
      </StyledInputsBlock>
    </StyledCheckoutForm>
  );
};

export default CheckoutForm;
