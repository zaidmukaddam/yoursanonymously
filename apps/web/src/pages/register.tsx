import React from 'react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';

import { createUser } from '@/api';
import { UserForm } from '@/components';

const Register = () => {
  const { mutate, isLoading } = useMutation(createUser);

  const handleRegister = (
    username: string,
    password: string,
    login: () => void
  ) => {
    mutate(
      { username, password },
      {
        onSuccess: () => {
          login();
          toast.success('Link created!');
        },
      }
    );
  };

  return (
    <UserForm type='register' onRegister={handleRegister} loading={isLoading} />
  );
};

export default Register;
