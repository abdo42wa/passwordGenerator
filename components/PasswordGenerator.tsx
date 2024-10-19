import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

import {Formik} from 'formik';
import {styles} from './styles/style';
import {
  PasswordLengthInput,
  CheckboxInput,
  GeneratedPasswordCard,
  ButtonView,
} from '.';
import {passwordSchema, generatePassword} from './utils';

export const PasswordGenerator = () => {
  const [password, setPassword] = useState<string>('');
  const [isPasswordGenerated, setIsPasswordGenerated] =
    useState<boolean>(false);
  const [lowerCase, setLowerCase] = useState<boolean>(false);
  const [upperCase, setUpperCase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);

  const generatedPasswordResult = (passwordLength: number) => {
    generatePassword({
      passwordLength,
      lowerCase,
      upperCase,
      numbers,
      symbols,
      setPassword,
      setIsPasswordGenerated,
    });
  };
  const restPassword = () => {
    setPassword('');
    setLowerCase(false);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>

          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={values => {
              console.log(values);
              generatedPasswordResult(+values.passwordLength);
            }}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isValid,
              handleReset,
            }) => (
              <>
                <PasswordLengthInput
                  errors={errors}
                  touched={touched}
                  values={values}
                  handleChange={() => handleChange('passwordLength')}
                />
                <CheckboxInput
                  title="Include lowercase"
                  isChecked={lowerCase}
                  onPress={() => setLowerCase(!lowerCase)}
                  fillColor="#29ABB7"
                />
                <CheckboxInput
                  title="Include Uppercase"
                  isChecked={upperCase}
                  onPress={() => setUpperCase(!upperCase)}
                  fillColor="#D2FF72"
                />
                <CheckboxInput
                  title="Include Numbers"
                  isChecked={numbers}
                  onPress={() => setNumbers(!numbers)}
                  fillColor="#87A2FF"
                />
                <CheckboxInput
                  title="Include Symbols"
                  isChecked={symbols}
                  onPress={() => setSymbols(!symbols)}
                  fillColor="#FAF7F0"
                />

                <ButtonView
                  handleReset={handleReset}
                  handleSubmit={handleSubmit}
                  isValid={isValid}
                  restPassword={restPassword}
                />
              </>
            )}
          </Formik>
        </View>
        <GeneratedPasswordCard
          isPasswordGenerated={isPasswordGenerated}
          password={password}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
