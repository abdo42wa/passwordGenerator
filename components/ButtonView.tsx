import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles/style';

interface IButtonViewProps {
  isValid: boolean;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (e?: React.SyntheticEvent<any>) => void;
  restPassword: () => void;
}

export const ButtonView = ({
  isValid,
  handleReset,
  handleSubmit,
  restPassword,
}: IButtonViewProps) => {
  return (
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
  );
};
