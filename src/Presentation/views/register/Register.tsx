import React from 'react';
import { Image, Text, View } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import useViewModel from './ViewModel';
import styles from './Styles';

export const RegisterScreen = () => {
  const {
    name,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    onChange,
    register,
  } = useViewModel();

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../assets/chef.jpg')}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/user_image.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>CHOOSE AN IMAGE</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>REGISTER</Text>

        <CustomTextInput
          icon={require('../../../../assets/user.png')}
          value={name}
          placeholder={'First name'}
          keyboardType={'default'}
          property={'name'}
          onChange={onChange}
        />

        <CustomTextInput
          icon={require('../../../../assets/my_user.png')}
          value={lastName}
          placeholder={'Last name'}
          keyboardType={'default'}
          property={'lastName'}
          onChange={onChange}
        />

        <CustomTextInput
          icon={require('../../../../assets/email.png')}
          value={email}
          placeholder={'Email adress'}
          keyboardType={'email-address'}
          property={'email'}
          onChange={onChange}
        />

        <CustomTextInput
          icon={require('../../../../assets/phone.png')}
          value={phone}
          placeholder={'Phon number'}
          keyboardType={'default'}
          property={'phone'}
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
        <CustomTextInput
          icon={require('../../../../assets/confirm_password.png')}
          value={confirmPassword}
          placeholder={'Confirm password'}
          keyboardType={'default'}
          property={'confirmPassword'}
          secureTextEntry
          onChange={onChange}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton buttonLabel='CONFIRM' onPress={register} />
        </View>
      </View>
    </View>
  );
};
