import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Square = () => {

    const navigate = useNavigate();

  return (
    <div className="squareB">
    <div className="square">
        <h1>Square</h1>
    </div>
    <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default Square;
