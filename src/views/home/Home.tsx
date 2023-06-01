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
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../App';

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

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
          source={require('../../../assets/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>LOGIN</Text>
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

        <View style={{ marginTop: 30 }}>
          <RoundedButton buttonLabel='LOGIN' onPress={onPress} />
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
    height: '40%',
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
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: COLORS.primary,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
    marginLeft: 10,
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
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
