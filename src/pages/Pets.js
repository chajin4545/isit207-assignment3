import React from 'react';
import Navbar from '../components/Navbar';
import PetCard from '../components/PetCard';
import { pets } from '../petsData';

const Pets = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Pets Available for Adoption</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pets;