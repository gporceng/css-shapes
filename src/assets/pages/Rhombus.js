import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Rhombus = () => {
    
    const navigate = useNavigate();
  return (
    <div className="rhombusB">
        <div className="rhombus">
            <h1>Rhombus</h1>
        </div>
        <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default Rhombus;
