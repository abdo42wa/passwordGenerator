import {object, number} from 'yup';

export const passwordSchema = object().shape({
  passwordLength: number()
    .min(4, 'Should be min of 4 characters')
    .max(32, 'Should be max of 32 characters')
    .required('Number must be added'),
});
