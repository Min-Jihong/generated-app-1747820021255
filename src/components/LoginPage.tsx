import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => { /* Implement login logic here */ };

  return (
    <form onSubmit={handleLogin}>
      <Input label='Email' onChange={(e) => setEmail(e.target.value)} />
      <Input label='Password' onChange={(e) => setPassword(e.target.value)} type='password' />
      <Button type='primary' onClick={handleLogin}>Log In</Button>
    </form>
  );
}

export default LoginPage;