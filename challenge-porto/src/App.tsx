import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/PaginaInicial/Inicio';
import CriarConta from './components/PaginaCirarConta/CriarConta';
import Login from './components/PaginaLogin/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/criar-conta" element={<CriarConta />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
