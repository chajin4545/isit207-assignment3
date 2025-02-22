import React from 'react';
import Navbar from '../components/Navbar';
import ReleaseForm from '../components/ReleaseForm';

const Release = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <ReleaseForm />
      </div>
    </div>
  );
};

export default Release;