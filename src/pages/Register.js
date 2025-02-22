import React from 'react';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;