import React from 'react';
import { View, Image, TextInput, StyleSheet, KeyboardType } from 'react-native';

interface CustomTextInput {
  icon: any;
  value: string;
  placeholder: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChange: (property: string, value: any) => void;
}

export const CustomTextInput = ({
  icon,
  value,
  placeholder,
  keyboardType,
  secureTextEntry = false,
  property,
  onChange,
}: CustomTextInput) => {
  return (
    <View style={styles.formInput}>
      <Image source={icon} style={styles.formIcon} />
      <TextInput
        autoCapitalize='none'
        placeholder={placeholder}
        style={styles.formTextInput}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => onChange(property, text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#AAAAAA',
    marginLeft: 15,
  },
});
