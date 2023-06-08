import React from "react";
import "./Footer.css"
// import facebook from "./src/assets/images/facebook.svg";
// import instagram from "./src/assets/images/instagram.svg";
// import twitter from "./src/assets/images/twitter.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_content">
          <div className="footer_logo">
            {/* <img src="/logo.png" alt="Logo del servizio streaming" /> */}
          </div>
          <div className="footer_link_left">
            <h3>Informazioni</h3>
            <ul>
              <li>
                <a href="#">Chi siamo</a>
              </li>
              <li>
                <a href="#">Termini di servizio</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contattaci</a>
              </li>
            </ul>
          </div>
          <div className="footer_link_right">
            <h3>Servizi</h3>
            <ul>
              <li>
                <a href="#">Catalogo</a>
              </li>
              <li>
                <a href="#">Piani di abbonamento</a>
              </li>
              <li>
                <a href="#">Dispositivi supportati</a>
              </li>
              <li>
                <a href="#">Guida e supporto</a>
              </li>
            </ul>
          </div>
          <div className="footer_social_media">
            <ul className="footer_social_media_list">
              <li>
                <a
                  href="https://www.facebook.com/">
                  {/* <img src={facebook} alt="Facebook" /> */}
                  <i className="facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/">
                    {/* <img src={instagram} alt="Instagram" /> */}
                  <i className="twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/">
                    {/* <img src={twitter} alt="Twitter" /> */}
                  <i className="instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_copyright">
          <p>
            &copy; {new Date().getFullYear()} (Nome sito di streaming).
            Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
