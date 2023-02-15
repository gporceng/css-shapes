import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Square from './assets/pages/Square';
import Circle from './assets/pages/Circle';
import Triangle from './assets/pages/Triangle';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/square" element={<Square />} />
          <Route path="/circle" element={<Circle />} />
          <Route path="/triangle" element={<Triangle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
