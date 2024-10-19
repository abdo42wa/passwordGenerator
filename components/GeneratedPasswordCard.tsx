import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles/style';

interface IGeneratedPasswordCardProps {
  isPasswordGenerated: boolean;
  password: string;
}

export const GeneratedPasswordCard = ({
  isPasswordGenerated,
  password,
}: IGeneratedPasswordCardProps): JSX.Element => {
  return (
    <View>
      {isPasswordGenerated && password && (
        <View style={[styles.card, styles.cardElevated]}>
          <Text selectable style={styles.generatedPassword}>
            {password}
          </Text>
        </View>
      )}
    </View>
  );
};
