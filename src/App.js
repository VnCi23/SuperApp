// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Chat from './pages/Chat';
import Assistant from './pages/Assistant';
import Control from './pages/Control';
import SocialShare from './pages/SocialShare';
import Property from './pages/Property';
import Bank from './pages/Bank';
import Shop from './pages/Shop';
import School from './pages/School';
import Job from './pages/Job';
import Maps from './pages/Maps';
import Others from './pages/Others';
import Profile from './pages/Profile';


function App() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Router>
      {isSmallScreen ? (
        <div className="flex items-center justify-center h-screen bg-red-500 text-white text-2xl">
          This website is not working on small display.
        </div>
      ) : (
        <div className="flex">
          <Sidebar />
          <div className="ml-64 pt-0 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/assistant" element={<Assistant />} />
              <Route path="/control" element={<Control />} />
              <Route path="/social-share" element={<SocialShare />} />
              <Route path="/property" element={<Property />} />
              <Route path="/bank" element={<Bank />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/school" element={<School />} />
              <Route path="/job" element={<Job />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/others" element={<Others />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
