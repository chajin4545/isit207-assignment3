import React from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ pet }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img src={pet.image} alt={pet.name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age} years</p>
      <Link to={`/adopt?petId=${pet.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Adopt Me
      </Link>
    </div>
  );
};

export default PetCard;