import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cabecalho from './Componentes/Cabecalho';
import QuemSouEu from './Componentes/QuemSouEu';
import Habilidades from './Componentes/Habilidades';
import Contato from './Componentes/Contato';
import Rodape from './Componentes/Rodape';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path="/quemSouEu" element={<QuemSouEu />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default App;