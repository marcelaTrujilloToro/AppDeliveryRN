import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../../theme/AppTheme';
import { RoundedButton } from '../../components/RoundedButton';

export const RegisterScreen = () => {
  const onPress = () => {
    console.log('hola');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../assets/chef.jpg')}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/user_image.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>CHOOSE AN IMAGE</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>REGISTER</Text>
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/user.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='First name'
            style={styles.formTextInput}
            keyboardType='default'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/my_user.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='Last name'
            style={styles.formTextInput}
            keyboardType='default'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/email.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='Email address'
            style={styles.formTextInput}
            keyboardType='email-address'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/phone.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='Phone number'
            style={styles.formTextInput}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/password.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='Password'
            style={styles.formTextInput}
            keyboardType='default'
            secureTextEntry
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/confirm_password.png')}
            style={styles.formIcon}
          />
          <TextInput
            placeholder='Confirm password'
            style={styles.formTextInput}
            keyboardType='default'
            secureTextEntry
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton buttonLabel='CONFIRM' onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  form: {
    width: '100%',
    height: '70%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#AAAAAA',
    marginLeft: 15,
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '5%',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
