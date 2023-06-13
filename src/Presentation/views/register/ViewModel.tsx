import React, { useState } from 'react';
import { ApiDelivery } from '../../../Data/source/remote/api/ApiDelivery';

const RegisterViewModel = () => {
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
    try {
      const response = await ApiDelivery.post('/users/create', values);
      console.log('Response: ', JSON.stringify(response));
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return { ...values, onChange, register };
};

export default RegisterViewModel;
