import React from 'react';
import './HorariosPrecios.css';
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
      <h3 className="text-horarios-precios">Horario y precios de ida</h3>
      <div className="card-destino">
        <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSF64B5T6RKyO3xGmMW8PhmvtKitNfNxM82BIXCOhO4FkTkHkBviTBIkhJXl_AiQQriizCMBgP4wWN5dPz4xaoTFvQX1KesD3wfX3Zenw" alt="Oaxaca de Juárez" />
        <div className="card-destino-text">
          <h4>00:10 h Central México Norte - 07:20 h Oaxaca</h4>
          <div className="precio-ida">$540 MXN</div>
        </div>
      </div>
      <div className="card-destino">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrGMHTmWpyNks6sPt2QqtFliZUCaWD-7_Dw&s" alt="Oaxaca de Juárez" />
        <div className="card-destino-text">
          <h4>00:25 h Santa Marta Acatitla - 07:35 h Cristobal Colon</h4>
          <div className="precio-ida">$400 MXN</div>
        </div>
      </div>
      <div className="card-destino">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaY8WVzmRiNUWeBpm9CzcPEG4pLSNTN7sSvMTV9809QwZyxp7PW6gDhfTH23s-bJ1GP6Y&usqp=CAU" alt="Oaxaca de Juárez" />
        <div className="card-destino-text">
          <h4>01:00 h México TAPO - 08:15 h Oaxaca periféricp</h4>
          <div className="precio-ida">$300 MXN</div>
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
