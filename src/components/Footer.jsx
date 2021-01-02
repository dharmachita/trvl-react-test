import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Únase al boletín de Aventuras para recibir nuestras mejores ofertas de
          vacaciones
        </p>
        <p className="footer-subscription-text">
          Puede darse de baja en cualquier momento.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Tu e-mail"
            />
            <Button buttonStyle="btn--outline">Suscribirse</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Sobre nosotros</h2>
            <Link to="/sign-up">Como funciona</Link>
            <Link to="/">Testimonios</Link>
            <Link to="/">Carrera</Link>
            <Link to="/">Inversiones</Link>
            <Link to="/">Términos y Condiciones</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contáctenos</h2>
            <Link to="/">Contacto</Link>
            <Link to="/">Soporte</Link>
            <Link to="/">Destinos</Link>
            <Link to="/">Patrocinios</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Enviar video</Link>
            <Link to="/">Embajadores</Link>
            <Link to="/">Agencia</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Redes Sociales</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">TRVL © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
