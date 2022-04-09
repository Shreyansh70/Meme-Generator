import React from 'react';
import ReactDOM from 'react-dom';

export default function Navbar()
{
    return (
      <nav className="navbar">
        <div className="container">
          <img src="./images/Troll-face.png" className="logo" />
          <h1 className="navbar--title">MemeGenerator</h1>
        </div>
        <h3 className="navbar--project">React-Project 4</h3>
      </nav>
    );
}