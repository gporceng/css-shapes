import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Circle = () => {

    
    const navigate = useNavigate();

  return (
    <div className="circleB">
    <div className="circle">
        <h1>Circle</h1>
    </div>
    <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default Circle;
