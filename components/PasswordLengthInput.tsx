import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles/style';
import {type FormikErrors, type FormikTouched, FormikValues} from 'formik';

interface IPasswordLengthInputProps {
  touched: FormikTouched<{passwordLength: string}>;
  errors: FormikErrors<{passwordLength: string}>;
  values: FormikValues;
  handleChange: (e: string) => (value: string) => void; // TODO improve this type
}
export const PasswordLengthInput = ({
  touched,
  errors,
  values,
  handleChange,
}: IPasswordLengthInputProps): JSX.Element => {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.inputColumn}>
        <Text style={styles.heading}>Password Length</Text>
        {touched.passwordLength && errors.passwordLength && (
          <Text style={styles.errorText}>{errors.passwordLength}</Text>
        )}
      </View>
      <TextInput
        style={styles.inputStyle}
        value={values.passwordLength}
        onChangeText={handleChange('passwordLength')}
        placeholder="EX. 8"
        keyboardType="numeric"
      />
    </View>
  );
};
