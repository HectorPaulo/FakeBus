import React from 'react';
import './InformacionViaje.css';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="Home">
      {!hideHeaderFooter && (
        <>
          <header className="Home-header">
            <nav>
              <ul className="nav-list">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/">Nosotros</Link></li>
                <li><Link to="/">Viajes</Link></li>
                <li><Link to="/">Contacto</Link></li>
                <Link to="/signup"><button className="ingresar-button">Ingresar</button></Link>
                <Link to="/login"><button className="acceder-button">Acceder</button></Link>
              </ul>
            </nav>
          </header>
        </>
      )}
      <div className="contenedor-img">
        <div className="img-informacion-viaje"></div>
        <div className="informacion-viaje">
          <h3>Oaxaca - CDMX</h3>
          <div className="promocion-box">
            <p>Promoción</p>
          </div>
          <h2 className="precio">$350</h2>
          <p className="descripcion">Viaje de solo ida de Oaxaca a CDMX por tiempo limitado</p>
          <div>
            <p class="fecha-hora">Fecha y Hora</p>
            <input class="fecha-input" type="datetime-local" id="fecha" name="fecha"></input>
          </div>
          <button className="comprar-button">Pagar</button>
        </div>
      </div>
      {!hideHeaderFooter && (
        <footer className="viajes-recomendados-footer">
          <div className="viajes-recomendados-footer-icons">
            <div><i className="fa-brands fa-twitter icon-twitter"></i></div>
            <div><i className="fa-brands fa-instagram icon-instagram"></i></div>
            <div><i className="fa-brands fa-youtube icon-youtube"></i></div>
            <div><i className="fa-brands fa-linkedin icon-linkedin"></i></div>
          </div>
          <div className="viajes-recomendados-footer-text">
            <h6>Experiencia</h6>
            <ul className="lista-footer">
              <li>UI design</li>
              <li>UX design</li>
              <li>Wireframing</li>
              <li>Diagramming</li>
              <li>Brainstorming</li>
              <li>Online whiteboard</li>
              <li>Team collaboration</li>
            </ul>
          </div>
          <div className="viajes-recomendados-footer-text">
            <h6>Explore</h6>
            <ul className="lista-footer">
              <li>Design</li>
              <li>Prototyping</li>
              <li>Development features</li>
              <li>Design systems</li>
              <li>Collaboration features</li>
              <li>Design process</li>
              <li>FigJam</li>
            </ul>
          </div>
          <div className="viajes-recomendados-footer-text">
            <h6>Resources</h6>
            <ul className="lista-footer">
              <li>Blog</li>
              <li>Best Practices</li>
              <li>Colors</li>
              <li>Color wheel</li>
              <li>Support</li>
              <li>Developers</li>
              <li>Resource library</li>
            </ul>
          </div>
        </footer>
      )}
    </div>
  );
}

export default Home;
