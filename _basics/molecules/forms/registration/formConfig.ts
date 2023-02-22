import { FormConfigItem } from '@/interfaces';
import * as yup from 'yup';

export const fieldsConfig: FormConfigItem[] = [
  {
    type: 'text',
    name: 'accountNumber',
    required: true,
    label: 'Kontonummer',
    placeholder: '',
  },
  {
    type: 'text',
    name: 'firstName',
    required: true,
    label: 'Vorname',
  },
  {
    type: 'text',
    name: 'lastName',
    required: true,
    label: 'Nachname',
  },
  {
    type: 'date',
    name: 'birthday',
    required: true,
    label: 'Geburtsdatum',
  },
  {
    type: 'separator',
    name: 'requiredMarkSeparator',
    required: true,
    label: '* Pflichtfeld',
  },
  {
    type: 'email',
    name: 'email',
    required: true,
    label: 'E-Mail Adresse / Benutzername',
  },
  {
    type: 'password',
    name: 'password',
    required: true,
    label: 'Passwort',
  },
  {
    type: 'password',
    name: 'passwordRepeat',
    required: true,
    label: 'Passwort wiederholen',
  },
  {
    type: 'checkbox',
    name: 'acceptGDPR',
    required: true,
    label:
      'Ich habe die Datenschutzinformationen gelesen und akzeptiere diese.',
  },
  {
    type: 'checkbox',
    name: 'acceptAGB',
    required: true,
    label: 'Ich habe die AGB gelesen und akzeptiere diese.',
  },
  {
    type: 'checkbox',
    name: 'updatesOptIn',
    required: false,
    label:
      'Gern dürfen Sie mir in regelmäßigen Abständen Informationen zum Vorteilsportal und Produkten',
  },
];

const firstSchema = {
  accountNumber: yup.string().trim().required('Kontonummer ist Pflichtfeld'),
  firstName: yup.string().trim().required('Vorname ist Pflichtfeld'),
  lastName: yup.string().trim().required('Nachname ist Pflichtfeld'),
  birthday: yup.string().required('Geburtsdatum ist Pflichtfeld'),
};

const secondSchema = {
  email: yup.string().email().trim().required(),
  password: yup
    .string()
    .trim()
    .required()
    .min(8, 'Bitte wählen Sie ein Passwort mit mind. 8 Zeichen aus'),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  acceptGDPR: yup
    .boolean()
    .oneOf([true], 'Bitte wählen Sie das Pflichtfeld aus'),
  acceptAGB: yup
    .boolean()
    .oneOf([true], 'Bitte wählen Sie das Pflichtfeld aus'),
};

export const firstFormSchema = yup.object().shape(firstSchema);
export const secondFormSchema = yup.object().shape(secondSchema);
