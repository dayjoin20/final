import React from 'react';
import videoBg from '../assets/video-profile.mp4'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Profile (){
    return (
        <div className="main">
      <video src={videoBg} autoPlay loop muted/>
      <div className='content'>
      <img className="logo" src={logo} />
        <h1 style={{ color: "#ffffff8a" }}>My name is : Dechopon Sinchai Student ID : 6102783 </h1>
        <br />
        <h1 style={{ color: "#ffffff8a" }}>Student ID : 6102783 </h1>
        <br />
        <h1 style={{ color: "#ffffff8a" }}>Computer Engineering From Rangsit University</h1>
        
        <Link className='button-80'  to ='/'>Home</Link>
      </div>
    </div>
    );
}

export default Profile;