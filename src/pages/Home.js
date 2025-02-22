import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Pet Heaven</h1>
        <p className="mb-4">
          Pet Heaven is a charity society dedicated to caring for abandoned pets (cats and dogs). Our mission is to find loving homes for these animals and support their welfare.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Facilities</h2>
        <ul className="list-disc pl-6">
          <li>Spacious kennels and catteries</li>
          <li>Veterinary care on-site</li>
          <li>Play areas for exercise</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;