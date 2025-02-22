import React, { useState } from 'react';

const ReleaseForm = () => {
  const [formData, setFormData] = useState({ name: '', type: '', reason: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Release request submitted: ${JSON.stringify(formData)}`); // Simulate email to admin
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Release a Pet</h2>
      <div className="mb-4">
        <label className="block mb-1">Pet Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Pet Type</label>
        <input
          type="text"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Reason for Release</label>
        <textarea
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit Release Request
      </button>
    </form>
  );
};

export default ReleaseForm;