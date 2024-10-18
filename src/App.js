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
      </body>
      <footer class='viajes-recomendados-footer'>
        <div className="viajes-recomendados-footer">
        <i class="fa-brands fa-twitter icon-twitter"></i>
        </div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>

      </footer>
    </div>
  );
}

export default App;
