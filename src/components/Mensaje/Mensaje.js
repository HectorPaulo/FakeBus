import React from 'react';
import './Mensaje.css';
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
      <h1>Mándanos un mensaje</h1>
        <p>¿Tienes alguna duda o sugerencia? Escríbenos y te responderemos lo antes posible.</p>
      <div>
        <form className="form">
          <div className="input-container">
            <p>Nombre</p>
            <input placeholder="Ingresa tu nombre" type="name" />
            <span>
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
            </span>
          </div>
          <div className="input-container">
            <p>Apellido</p>
            <input placeholder="Ingresa tu apellido" type="password" />
            <span>
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
            </span>
          </div>
          <div className="input-container">
            <p>Correo Electrónico</p>
            <input placeholder="Ingresa tu correo electrónico" type="email" />
            <span>
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
            </span>
          </div>
          <div className="input-container">
            <p>Mensaje</p>
            <input placeholder="Ingresa tu mensaje" type="text" />
            <span>
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
            </span>
          </div>
          <button className="submit" type="submit">
            Enviar
          </button>
        </form>
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
