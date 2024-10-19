import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles/style';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface ICheckboxInputProps {
  title: string;
  isChecked: boolean;
  onPress: ((checked: boolean) => void) | undefined;
  fillColor: string;
}

export const CheckboxInput = ({
  title,
  isChecked,
  onPress,
  fillColor,
}: ICheckboxInputProps): JSX.Element => {
  return (
    <View style={styles.inputWrapper}>
      <View>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <View>
        <BouncyCheckbox
          isChecked={isChecked}
          onPress={onPress}
          fillColor={fillColor}
          size={30}
        />
      </View>
    </View>
  );
};
