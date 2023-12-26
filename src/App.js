import React from 'react';
import Homepage from './mycomponents/homepage';
import Sorry from './mycomponents/sorry';
import Profile from './mycomponents/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Sorry />} />
      </Routes>
      </Router>
    
    </div>
  );
}


export default App;