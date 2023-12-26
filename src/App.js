import React from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
import Homepage from './mycomponents/Homepage';
import Sorry from './mycomponents/sorry';
import Profile from './mycomponents/profile';



function App(){
  return (
    
    
      <div>
      
        
            <Routes>
            <Route path='/' element = {<Homepage />} />
            <Route path='/Profile' element = {<Profile />} />
            <Route path='/*' element = {<Sorry />} />
            </Routes>

      </div>
    
  );
}

export default App;