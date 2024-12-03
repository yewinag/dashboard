'use client';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { LoginForm } from '../../components/form/Login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your API call
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.token) {
      login(data.user);
    }
  };

  return <LoginForm />;
};

export default Login;
