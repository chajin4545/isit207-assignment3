import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AdoptForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const petId = queryParams.get('petId') || '';
  const [formData, setFormData] = useState({ petId, name: '', email: '' });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, petId }));
  }, [petId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Adoption request submitted: ${JSON.stringify(formData)}`); // Simulate email to admin
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Adopt a Pet</h2>
      <div className="mb-4">
        <label className="block mb-1">Pet ID</label>
        <input
          type="text"
          value={formData.petId}
          onChange={(e) => setFormData({ ...formData, petId: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="Enter Pet ID or select from Pets page"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Your Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Your Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit Adoption Request
      </button>
    </form>
  );
};

export default AdoptForm;