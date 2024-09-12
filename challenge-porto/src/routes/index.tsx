import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaInicial from '../routes/PaginaInicial/Inicio';
import PaginaLogin from '../routes/PaginaLogin/Login'; 
import PaginaCriarConta from '../routes/PaginaCirarConta/CriarConta'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/criar-conta" element={<PaginaCriarConta />} />
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
