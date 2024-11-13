import '../styles/inicio.css';
import { Link } from 'react-router-dom';


function Inicio() {
  return (
    <div className="inicio">
      <section className="hero">
        <h1>Bienvenido a la tienda de Benito</h1>
        <p>Encuentra los mejores productos aquí</p>
        <Link className="cta-button" to="/products">Ver Productos</Link>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Calidad</h2>
          <p>Solo los mejores productos seleccionados con cuidado.</p>
        </div>
        <div className="feature">
          <h2>Precios Justos</h2>
          <p>Precios competitivos para todos nuestros productos.</p>
        </div>
        <div className="feature">
          <h2>Envío Rápido</h2>
          <p>Recibe tus productos rápidamente en la puerta de tu casa.</p>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
