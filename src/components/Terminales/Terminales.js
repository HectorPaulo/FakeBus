import React from 'react';
import './Terminales.css';
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
      <div>
        <div className="img-terminales">
          <h1>Terminales</h1>
        </div>
        <h4 className="terminales-text">Terminales a lo largo del país</h4>
        <div className="terminales-card">
          <div className="card-destino">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaY8WVzmRiNUWeBpm9CzcPEG4pLSNTN7sSvMTV9809QwZyxp7PW6gDhfTH23s-bJ1GP6Y&usqp=CAU" alt="Oaxaca de Juárez" />
            <div className="card-destino-text">
              <h4>Oaxaca</h4>
              <p>Conoce Oaxaca, lugar turístico perfecto para relajarse y disfrutar de sus hermosos paisajes y ambiente cálido.</p>
            </div>
          </div>
          <div className="card-destino">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaY8WVzmRiNUWeBpm9CzcPEG4pLSNTN7sSvMTV9809QwZyxp7PW6gDhfTH23s-bJ1GP6Y&usqp=CAU" alt="CDMX" />
            <div className="card-destino-text">
              <h4>CDMX</h4>
              <p>Explora la Ciudad de México, una metrópolis vibrante llena de historia, cultura y gastronomía. Desde sus museos de clase mundial hasta sus mercados tradicionales, CDMX ofrece una experiencia única para todos los visitantes.</p>
            </div>
          </div>
          <div className="card-destino">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaY8WVzmRiNUWeBpm9CzcPEG4pLSNTN7sSvMTV9809QwZyxp7PW6gDhfTH23s-bJ1GP6Y&usqp=CAU" alt="Puebla" />
            <div className="card-destino-text">
              <h4>Puebla</h4>
              <p>Descubre Puebla, una ciudad colonial conocida por su arquitectura barroca, su deliciosa cocina y sus coloridos talavera. Un destino ideal para sumergirse en la historia y la cultura mexicana.</p>
            </div>
          </div>
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