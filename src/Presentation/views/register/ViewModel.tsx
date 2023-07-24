import React, { useState } from 'react';
import { ApiDelivery } from '../../../Data/source/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import { RegisterWithImageAuthUseCase } from '../../../Domain/useCases/auth/RegisterWithImageAuth';
import * as ImagePicker from 'expo-image-picker';

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    image: '',
  });

  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    if (isValidForm()) {
      // const response = await RegisterAuthUseCase(values);
      const response = await RegisterWithImageAuthUseCase(values, file!);

      console.log('Result', JSON.stringify(response));
    }
  };

  const isValidForm = (): boolean => {
    if (values.name === '') {
      setErrorMessage('Enter your name');
      return false;
    }
    if (values.lastName === '') {
      setErrorMessage('Enter your last name');
      return false;
    }
    if (values.email === '') {
      setErrorMessage('Enter your email');
      return false;
    }
    if (values.phone === '') {
      setErrorMessage('Enter your phone');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('Enter your password');
      return false;
    }
    if (values.confirmPassword === '') {
      setErrorMessage('Confirm your password');
      return false;
    }
    if (values.confirmPassword !== values.password) {
      setErrorMessage('Passwords do not match');
      return false;
    }
    if (values.image === '') {
      setErrorMessage('Select an image');
      return false;
    }
    return true;
  };

  return { ...values, onChange, register, errorMessage, pickImage, takePhoto };
};

export default RegisterViewModel;
