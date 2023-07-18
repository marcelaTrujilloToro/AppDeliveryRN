import React, { useEffect } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

interface Props extends StackScreenProps<RootStackParamsList, 'HomeScreen'> {}

export const HomeScreen = ({ navigation }: Props) => {
  const { email, password, onChange, login, errorMessage, user } =
    useViewModel();

  useEffect(() => {
    if (errorMessage !== '') {
      Alert.alert(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      navigation.replace('ProfileInfoScreen');
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../assets/chef.jpg')}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>LOGIN</Text>

        <CustomTextInput
          icon={require('../../../../assets/email.png')}
          value={email}
          placeholder={'Email'}
          keyboardType={'email-address'}
          property={'email'}
          onChange={onChange}
        />

        <CustomTextInput
          icon={require('../../../../assets/password.png')}
          value={password}
          placeholder={'Password'}
          keyboardType={'default'}
          property={'password'}
          secureTextEntry
          onChange={onChange}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton buttonLabel='LOGIN' onPress={login} />
        </View>

        <View style={styles.formRegister}>
          <Text>New to Food app?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}
          >
            <Text style={styles.formRegisterText}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
