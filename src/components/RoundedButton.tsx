import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme/AppTheme';

interface RoundedButtonProps {
  buttonLabel: string;
  onPress: () => void;
}

export const RoundedButton = ({ buttonLabel, onPress }: RoundedButtonProps) => {
  return (
    <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
      <Text style={styles.textButton}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
