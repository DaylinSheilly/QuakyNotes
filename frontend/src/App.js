import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';

import Home from './components/Home'
import Notas from './components/Notas'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="notas" element={<Notas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
