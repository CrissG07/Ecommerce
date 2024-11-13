import { Link } from 'react-router-dom';
import logo from '../../public/vite.svg';


function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
        <img src={logo} alt="Logo de la tienda" />
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h3>Enlaces</h3>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/products">Productos</Link>
              </li>
              <li>
                <Link to="/cart">Carrito</Link>
              </li>
              <li><a href="/contact">Contacto</a></li>
              <li><a href="/privacy">Política de Privacidad</a></li>
              <li><a href="/terms">Términos de Servicio</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h3>Redes Sociales</h3>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Mi Tienda - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
