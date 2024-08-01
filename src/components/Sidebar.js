import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-4 text-white bg-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      <div className={`h-screen w-64 bg-blue-600 text-white fixed flex flex-col justify-between overflow-y-auto ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <div>
          <div className="p-4 text-lg font-bold">Super App</div>
          <div className="p-4 flex items-center space-x-4 bg-blue-800 rounded-lg shadow-lg">
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <div>
              <Link to="/profile" className="hover:underline text-white text-lg font-semibold">Profile</Link>
            </div>
          </div>
          <nav className="mt-10">
            <Link to="/chat" className="block py-2.5 px-4 hover:bg-blue-700">Chat</Link>
            <Link to="/assistant" className="block py-2.5 px-4 hover:bg-blue-700">Assistant</Link>
            <Link to="/control" className="block py-2.5 px-4 hover:bg-blue-700">Control</Link>
            <Link to="/social-share" className="block py-2.5 px-4 hover:bg-blue-700">Social-share</Link>
            <Link to="/property" className="block py-2.5 px-4 hover:bg-blue-700">Property</Link>
            <Link to="/bank" className="block py-2.5 px-4 hover:bg-blue-700">Bank</Link>
            <Link to="/shop" className="block py-2.5 px-4 hover:bg-blue-700">Shop</Link>
            <Link to="/school" className="block py-2.5 px-4 hover:bg-blue-700">School</Link>
            <Link to="/job" className="block py-2.5 px-4 hover:bg-blue-700">Job</Link>
            <Link to="/maps" className="block py-2.5 px-4 hover:bg-blue-700">Maps</Link>
            <Link to="/others" className="block py-2.5 px-4 hover:bg-blue-700">Others</Link>
          </nav>
        </div>
        <div className="mt-auto">
        <Link to="/others" className="block py-2.5 px-4 bg-blue-800 hover:bg-blue-700">Contibution & History</Link>
        </div>
        <div className="p-4 mt-auto">
          <p className="text-sm">© 2025.</p>
          <p className="text-sm">All rights reserved.</p>
          <p className="text-sm">Made by: </p>
          <p className="text-sm">Vince Christian Gaurino</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
