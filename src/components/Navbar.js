import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-6 justify-center">
        <li><NavLink to="/" className="hover:underline" activeClassName="font-bold">Home</NavLink></li>
        <li><NavLink to="/pets" className="hover:underline" activeClassName="font-bold">Pets</NavLink></li>
        <li><NavLink to="/register" className="hover:underline" activeClassName="font-bold">Register</NavLink></li>
        <li><NavLink to="/release" className="hover:underline" activeClassName="font-bold">Release a Pet</NavLink></li>
        <li><NavLink to="/adopt" className="hover:underline" activeClassName="font-bold">Adopt a Pet</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;