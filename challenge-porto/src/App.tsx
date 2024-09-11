import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/PaginaInicial/Inicio';  // Verifique o caminho correto
import CriarConta from './components/PaginaCirarConta/CriarConta';
import Login from './components/PaginaLogin/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Defina sua página inicial */}
        <Route path="/home" element={<Home />} /> {/* Defina a rota /home */}
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> Rota para páginas não encontradas */}
      </Routes>
    </Router>
  );
}

export default App;
