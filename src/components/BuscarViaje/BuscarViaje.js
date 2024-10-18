import React from 'react';
import './BuscarViaje.css';
import { Link } from 'react-router-dom';

function BuscarViaje() {
    return(
        <div className="BuscarViaje">
          <header className="BuscarViaje-header">
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
          <div className="viajes-recomendados-body">
            <div className="img-viajes-recomendados-presentacion">
              <h1>Fake Bus</h1>
              <p>Lo mejor en viajes</p>
            </div>
          </div>
          <div class="formulario">
            <form>
                <div>
                    <label htmlFor="origen">Origen:</label>
                        <select id="origen" name="origen">
                            <option value="ciudad1">Oaxaca</option>
                            <option value="ciudad2">Puebla</option>
                            <option value="ciudad3">Chiapas</option>
                        </select>
                </div>
                <div>
                    <label htmlFor="destino">Destino:</label>
                        <select id="destino" name="destino">
                            <option value="ciudad1">Ciudad de México</option>
                            <option value="ciudad2">Guerrero</option>
                            <option value="ciudad3">Puebla</option>
                        </select>
                </div>
                <div>
                    <label htmlFor="fecha">Fecha y Hora:</label>
                    <input type="datetime-local" id="fecha" name="fecha"></input>
                </div>
            </form>
            <button className="buscar-button">Buscar Viaje</button>
          </div>
          <div class="contenedor-img-buscar-viajes">
            <div>
                <img class="img-buscar-viajes" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaY8WVzmRiNUWeBpm9CzcPEG4pLSNTN7sSvMTV9809QwZyxp7PW6gDhfTH23s-bJ1GP6Y&usqp=CAU" alt="Viajes Recomendados" />
                <p class="p-buscar-viajes">Viajes Recomendados</p>
            </div>
            <div>
                <img class="img-buscar-viajes2" src="https://images.pexels.com/photos/10752181/pexels-photo-10752181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Viajes Recomendados" />
                <p class="p-buscar-viajes"s>Adicionales</p>
            </div>
          </div>
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
        </div>
    );
}

export default BuscarViaje;