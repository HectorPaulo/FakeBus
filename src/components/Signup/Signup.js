import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="wrapper-register">
      <div className="card-switch-register">
        <label className="switch-register">
          <input type="checkbox" className="toggle-register" />
          <span className="slider-register"></span>
          <span className="card-side-register"></span>
          <div className="flip-card__inner-register">
            <div className="flip-card__front-register">
              <div className="title-register">Iniciar Sesión</div>
              <form className="flip-card__form-register" action="">
                <input className="flip-card__input-register" name="email" placeholder="Correo Electrónico" type="email" />
                <input className="flip-card__input-register" name="password" placeholder="Contraseña" type="password" />
                <button className="flip-card__btn-register">Entrar</button>
              </form>
            </div>
            <div className="flip-card__back-register">
              <div className="title-register">Acceder</div>
              <form className="flip-card__form-register" action="">
                <input className="flip-card__input-register" placeholder="Nombre" type="name" />
                <input className="flip-card__input-register" name="email" placeholder="Correo Electrónico" type="email" />
                <input className="flip-card__input-register" name="password" placeholder="Contraseña" type="password" />
                <button className="flip-card__btn-register">Confirmar</button>
              </form>
            </div>
          </div>
        </label>
      </div>   
    </div>
  );
}

export default Signup;