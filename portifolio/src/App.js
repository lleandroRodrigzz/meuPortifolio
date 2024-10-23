import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cabecalho from './Componentes/Cabecalho';
import Home from './Componentes/Home';
import Sobre from './Componentes/Sobre';
import Habilidades from './Componentes/Habilidades';
import Contato from './Componentes/Contato';
import Rodape from './Componentes/Rodape';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default App;