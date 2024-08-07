import React from 'react';

const Chat = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold bg-blue-600 text-center">SocialShare Page</h1>
        <div className="flex space-x-3 bg-blue-600 p-5 justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Text
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Music 
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Photo  
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Video 
          </button>
        </div>
    </div>
  );
};

export default Chat;
