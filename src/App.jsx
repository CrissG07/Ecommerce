import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import DetallesProducto from './pages/DetallesProducto'; // Asegúrate de que la ruta es correcta
import Carrito from './pages/Carrito';
import './styles/header.css';
import './styles/footer.css';
import './App.css';

function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<Productos />} />
        <Route path="/products/:id" element={<DetallesProducto />} />
        <Route path="/cart" element={<Carrito />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta para 404 */}
      </Routes>
      <Footer />
    </Router>
  );
}

function NotFound() {
  return <h1>404 - Página no encontrada</h1>;
}

export default App;
