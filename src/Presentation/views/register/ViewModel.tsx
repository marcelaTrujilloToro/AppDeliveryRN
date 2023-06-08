import React, { useState } from 'react';

const RegisterViewModel = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = () => {
    console.log(JSON.stringify(values));
  };

  return { ...values, onChange, register };
};

export default RegisterViewModel;
