import React, { useState } from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';

const HomeViewModel = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log('Response: ', JSON.stringify(response));
      if (!response.success) {
        setErrorMessage(response.message);
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.email === '') {
      setErrorMessage('Enter your email');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('Enter your password');
      return false;
    }
    return true;
  };

  return { ...values, onChange, login, errorMessage };
};

export default HomeViewModel;
