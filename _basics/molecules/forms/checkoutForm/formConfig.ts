import { FormConfigItem } from '@/interfaces';
import * as yup from 'yup';

export const fieldsConfig: FormConfigItem[] = [
  {
    type: 'text',
    name: 'billingAddressTitle',
    required: true,
    label: 'Anrede:',
    placeholder: '',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'billingAddressFirstName',
    required: true,
    label: 'Vorname:',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'billingAddressLastName',
    required: true,
    label: 'Nachname:',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'billingAddressStreet',
    required: true,
    label: 'Straße:',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'billingAddressStreetNumber',
    required: true,
    label: 'Hausnummer:',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'billingAddressZipCode',
    required: true,
    label: 'Ort:',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'billingAddressCity',
    required: true,
    label: 'Ort:',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'billingAddressBirthday',
    required: false,
    label: 'Geburtsdatum:',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'billingAddressPhone',
    required: false,
    label: 'Telefon:',
    isYupField: true,
  },
  {
    type: 'textarea',
    name: 'message',
    required: false,
    label: 'Nachricht:',
    isYupField: true,
  },
  // shipping
  {
    type: 'text',
    name: 'shippingAddressTitle',
    required: true,
    label: 'Anrede:',
    placeholder: '',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'shippingAddressFirstName',
    required: true,
    label: 'Vorname:',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'shippingAddressLastName',
    required: true,
    label: 'Nachname:',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'shippingAddressStreet',
    required: true,
    label: 'Straße:',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'shippingAddressStreetNumber',
    required: true,
    label: 'Hausnummer:',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'shippingAddressZipCode',
    required: true,
    label: 'PLZ:',
    isYupField: true,
  },
  {
    type: 'text',
    name: 'shippingAddressCity',
    required: true,
    label: 'Ort:',
    isYupField: true,
  },
];

const schema = {
  billingAddressTitle: yup.string().trim().required(),
  billingAddressFirstName: yup.string().trim().required(),
  billingAddressLastName: yup.string().trim().required(),
  billingAddressStreet: yup.string().trim().required(),
  billingAddressStreetNumber: yup.string().trim().required(),
  billingAddressZipCode: yup.string().trim().required(),
  billingAddressCity: yup.string().trim().required(),
  billingAddressBirthday: yup.string().trim(),
  billingAddressPhone: yup.string().trim(),
  message: yup.string().trim(),

  shippingAddressTitle: yup.string().trim().required(),
  shippingAddressFirstName: yup.string().trim().required(),
  shippingAddressLastName: yup.string().trim().required(),
  shippingAddressStreet: yup.string().trim().required(),
  shippingAddressStreetNumber: yup.string().trim().required(),
  shippingAddressZipCode: yup.string().trim().required(),
  shippingAddressCity: yup.string().trim().required(),
};

export const formSchema = yup.object().shape(schema);

export default fieldsConfig;
