import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Shape Gallery!</h1>
      <p>Choose a shape to view:</p>
      <nav>
        <ul>
        <div className="homeB">
          <li><Link to="/square">Square</Link></li>
          <li><Link to="/circle">Circle</Link></li>
          <li><Link to="/triangle">Triangle</Link></li>
          <li><Link to="/rhombus">Rhombus</Link></li>
        </div>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
