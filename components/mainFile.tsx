import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import {object, number} from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {GeneratedPasswordCard} from './GeneratedPasswordCard';
import {styles} from './styles/style';

const passwordSchema = object().shape({
  passwordLength: number()
    .min(4, 'Should be min of 4 characters')
    .max(32, 'Should be max of 32 characters')
    .required('Number must be added'),
});

export const MainFile = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';

    for (let index = 0; index < passwordLength; index++) {
      const characterIndex = Math.round(Math.random() * characters.length);

      result += characters.charAt(characterIndex);
    }

    return result;
  };

  const generatePassword = (passwordLength: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '+-*./?_#@!%^&*()';

    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    if (characterList === '') {
      characterList = lowerCaseChars; // Fallback to lowercase by default
    }
    const generatedPassword = createPassword(characterList, passwordLength);

    if (generatedPassword) {
      setPassword(generatedPassword);
      setIsPasswordGenerated(true);
    }
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
              generatePassword(+values.passwordLength);
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
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
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
                <View style={styles.inputWrapper}>
                  <View>
                    <Text style={styles.heading}>Include lowercase</Text>
                  </View>
                  <View>
                    <BouncyCheckbox
                      isChecked={lowerCase}
                      onPress={() => setLowerCase(!lowerCase)}
                      fillColor="#29ABB7"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <View>
                    <Text style={styles.heading}>Include Uppercase</Text>
                  </View>
                  <View>
                    <BouncyCheckbox
                      isChecked={upperCase}
                      onPress={() => setUpperCase(!upperCase)}
                      fillColor="#D2FF72"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <View>
                    <Text style={styles.heading}>Include Numbers</Text>
                  </View>
                  <View>
                    <BouncyCheckbox
                      isChecked={numbers}
                      onPress={() => setNumbers(!numbers)}
                      fillColor="#87A2FF"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <View>
                    <Text style={styles.heading}>Include Symbols</Text>
                  </View>
                  <View>
                    <BouncyCheckbox
                      isChecked={symbols}
                      onPress={() => setSymbols(!symbols)}
                      fillColor="#FAF7F0"
                    />
                  </View>
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={() => {
                      handleSubmit();
                    }}>
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      restPassword();
                    }}>
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
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
