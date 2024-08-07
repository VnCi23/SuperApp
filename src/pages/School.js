import React from 'react';

const Chat = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold bg-blue-600 text-center">School Page</h1>
        <div className="flex space-x-3 bg-blue-600 p-5 justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learning 
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Activities
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Assignment
          </button>

        </div>
    </div>
  );
};

export default Chat;
