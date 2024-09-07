import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaInicial from '../routes/PaginaInicial/Inicio'; // Importa o componente principal da página inicial
import PaginaLogin from '../routes/PaginaLogin/Login'; // Importa o componente principal da página de login
import PaginaCriarConta from '../routes/PaginaCirarConta/CriarConta'; // Importa o componente principal da página de criar conta

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/criar-conta" element={<PaginaCriarConta />} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
