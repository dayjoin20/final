import React from 'react';
import videoBg from '../assets/video.mp4'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted/>
      <div className='content'>
        <h1>Welcome to Project</h1>
        <p>form React JS</p>
        <Link className='button-80' to ='/Profile'>About Me</Link>
      </div>
    </div>
  );
};

export default Homepage;