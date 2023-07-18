import React from 'react';
import { Button, Text, View } from 'react-native';
import useViewModel from './ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../../../App';

interface Props
  extends StackScreenProps<RootStackParamsList, 'ProfileInfoScreen'> {}

export const ProfileInfoScreen = ({ navigation }: Props) => {
  const { removeSession } = useViewModel();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title='Log Out'
        onPress={() => {
          removeSession();
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
};
