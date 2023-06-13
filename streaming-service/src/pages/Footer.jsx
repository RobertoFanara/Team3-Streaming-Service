import React from "react";
import { Link } from 'react-router-dom';
import facebook from "../assets/images/facebook.svg"
import instagram from "../assets/images/instagram.svg"
import twitter from "../assets/images/twitter.svg"

function Footer() {
  return (
    <footer className="bg-yellow-300 p-6 rounded-lg">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="footer_logo">
            {/* <img src="/logo.png" alt="Logo del servizio streaming" /> */}
          </div>
          <div className="w-48">
            <h3 className="mb-4">Informazioni</h3>
            <ul className="list-none p-0 m-0">
              <li>
                <Link to="/chi-siamo" target="_blank" className="text-gray-800 hover:text-gray-200">Chi siamo</Link>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-200">Termini di servizio</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-200">Privacy Policy</a>
              </li>
              <li>
                <Link to="/contattaci" target="_blank" className="text-gray-800 hover:text-gray-200">Contattaci</Link>
              </li>
            </ul>
          </div>
          <div className="w-48">
            <h3 className="mb-4">Servizi</h3>
            <ul className="list-none p-0 m-0">
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-200">Catalogo</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-200">Piani di abbonamento</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-200">Dispositivi supportati</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-200">Guida e supporto</a>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <ul className="list-none p-0 m-0 flex-column">
              <li className="mr-4">
                <a href="https://www.facebook.com/" className="text-gray-800 hover:text-gray-200">
                  <img src={facebook} alt="Facebook" />
                  <i className="facebook"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.twitter.com/" className="text-gray-800 hover:text-gray-200">
                  <img src={twitter} alt="Twitter" />
                  <i className="twitter"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.instagram.com/" className="text-gray-800 hover:text-gray-200">
                  <img src={instagram} alt="Instagram" />
                  <i className="instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6 text-gray-700 text-sm">
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
