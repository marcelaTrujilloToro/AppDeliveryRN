import React, { useState } from 'react';
import { ApiDelivery } from '../../../Data/source/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    if (isValidForm()) {
      const apiResponse = await RegisterAuthUseCase(values);

      console.log('Result', JSON.stringify(apiResponse));
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
    return true;
  };

  return { ...values, onChange, register, errorMessage };
};

export default RegisterViewModel;
