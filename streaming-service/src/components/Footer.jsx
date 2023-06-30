import { Link } from 'react-router-dom';
import facebook from "../assets/images/facebook.svg"
import instagram from "../assets/images/instagram.svg"
import twitter from "../assets/images/twitter.svg"
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Footer() {
  return (
<<<<<<< HEAD
    
    <footer className="bg-[#ffbb38] p-6 ">
=======

    <footer className="bg-[#ffbb38] p-6">
>>>>>>> 47ea6bbb16acd9a2fe34b6df767a1b5ba879da43
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="flex justify-center items-center ml-10 footer_logo w-[150px] h-[150px]">
            <img src="./src/assets/images/logoSS.png" alt="Logo del servizio streaming" />
          </div>
          <div className="w-full sm:w-48 md:w-auto mt-4 sm:mt-0">
            <h3 className="mb-4">Informazioni</h3>
            <ul className="list-none p-0 m-0">
              <li>
                <Link to="/chi-siamo" className="text-gray-800 hover:text-gray-200">Chi siamo</Link>
              </li>
              <li>
                <Link to="/termini-servizio" className="text-gray-800 hover:text-gray-200">Termini di Servizio</Link>
              </li>
              <li>
                <Link to="/policy" className="text-gray-800 hover:text-gray-200">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contattaci" className="text-gray-800 hover:text-gray-200">Contattaci</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-48 md:w-auto mt-4 sm:mt-0">
            <h3 className="mb-4">Servizi</h3>
            <ul className="list-none p-0 m-0">
              <li>
                <Link to="/catalogo" className="text-gray-800 hover:text-gray-200">Catalogo</Link>
              </li>
              <li>
                <Link to="/piani-abbonamento" className="text-gray-800 hover:text-gray-200">Piani di abbonamento</Link>
              </li>
              <li>
                <Link to="/dispositivi" className="text-gray-800 hover:text-gray-200">Dispositivi supportati</Link>
              </li>
              <li>
                <Link to="/guida" className="text-gray-800 hover:text-gray-200">Guida e supporto</Link>
              </li>
            </ul>
          </div>
          <div className="mt-4 sm:mt-0">
            <ul className="list-none p-0 m-0 flex flex-wrap">
              <li className="mr-4">
                <a href="https://www.facebook.com/" className="text-gray-800 hover:text-gray-200">
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.twitter.com/" className="text-gray-800 hover:text-gray-200">
                  <img src={twitter} alt="Twitter" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.instagram.com/" className="text-gray-800 hover:text-gray-200">
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6 text-gray-700 text-sm">
          <p>
            &copy; {new Date().getFullYear()} sTrEAM-3.
            Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
