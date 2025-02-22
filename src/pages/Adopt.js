import React from 'react';
import Navbar from '../components/Navbar';
import AdoptForm from '../components/AdoptForm';

const Adopt = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <AdoptForm />
      </div>
    </div>
  );
};

export default Adopt;