import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Triangle = () => {

    const navigate = useNavigate();

  return (
    <div className="triangleB">
    <div className="triangle">
        <h1>Triangle</h1>
    </div>
    <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default Triangle;
