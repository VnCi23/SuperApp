import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-5">
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Chat</a>
          <a href="#" className="text-white hover:text-gray-300">Call</a>
          <a href="#" className="text-white hover:text-gray-300">Facetime</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
