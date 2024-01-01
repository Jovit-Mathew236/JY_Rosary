

import Home from './pages/Home';
import './App.css';


import {
  Routes,
  Route,
} from "react-router-dom";
import Section2 from './pages/Section2';
import Rosary from './pages/Rosary';

function App() {
  

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/map" element={<Section2 />} />
      <Route exact path="/rosary/:token" element={<Rosary />} />
    </Routes>
  )
}

export default App
