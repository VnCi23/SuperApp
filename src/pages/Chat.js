import React from 'react';

const Chat = () => {
  return (
    <div className="w-full flex justify-center min-h-screen bg-gray-100">
      <iframe
        src="https://vnci23.github.io/chat/"
        width="100%"
        height="900px"
        title="Embedded Website"
        className="border-none shadow-lg rounded-lg"
      ></iframe>
    </div>
  );
};

export default Chat;
