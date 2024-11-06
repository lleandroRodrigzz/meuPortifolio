import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cabecalho from './Componentes/Cabecalho';
import QuemSouEu from './Componentes/QuemSouEu';
import Habilidades from './Componentes/Habilidades';
import Contato from './Componentes/Contato';
import Rodape from './Componentes/Rodape';

//https://uiverse.io/elements para Elementos especiais
//https://icons8.com.br/icons para icones
//https://www.remove.bg/pt-br remover BG de uma foto qualquer

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