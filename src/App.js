import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-list">
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Nosotros</a></li>
            <li><a href="/">Viajes</a></li>
            <li><a href="/">Contacto</a></li>
            <button className="ingresar-button">Ingresar</button>
            <button className="acceder-button">Acceder</button>
          </ul>
        </nav> 
      </header>
      <body class="viajes-recomendados-body">
        <div className="img-viajes-recomendados">
          <h1>Viajes recomendados</h1>
        </div>
        <div class="card-destino">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaY8WVzmRiNUWeBpm9CzcPEG4pLSNTN7sSvMTV9809QwZyxp7PW6gDhfTH23s-bJ1GP6Y&usqp=CAU" alt="Oaxaca de Juárez" />
         <div className="card-destino-text">
          <h4>Oaxaca</h4>
          <p>Conoce Oaxaca, lugar turístico perfefcto para relajarse y disfrutar de sus hermosos paisajes y ambiente cálido.</p>
         </div>
        </div>
      </body>
      <footer class='viajes-recomendados-footer'>
        <div class="viajes-recomendados-footer-icons">
          <div>
            <i class="fa-brands fa-twitter icon-twitter"></i>
          </div>
          <div>
            <i class="fa-brands fa-instagram icon-instagram"></i>
          </div>
          <div>
            <i class="fa-brands fa-youtube icon-youtube"></i>
          </div>
          <div>
            <i class="fa-brands fa-linkedin icon-linkedin"></i>
          </div>
        </div>
        <div class="viajes-recomendados-footer-text">
          <h6>Experiencia</h6>
          <ul class="lista-footer">
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>
        <div class="viajes-recomendados-footer-text">
          <h6>Explore</h6>
          <ul class="lista-footer">
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>
        <div class="viajes-recomendados-footer-text">
          <h6>Resources</h6>
          <ul class="lista-footer">
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

export default App;
