import React from "react";
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const GuidaESupporto = () => {
  return (<>
    <Sidebar/>
    <Navbar/>
    <section className="flex justify-center items-center bg-black text-black py-20" style={{minHeight: 'calc(100vh - 242px)'}}>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#ffbb38] rounded-lg mx-4 sm:mx-8 md:mx-12 lg:mx-28 pt-14 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
        <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Guida e supporto</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/contattaci" className="text-slate-600 hover:text-white">Contattaci</Link>
              </li>
              <li>
                  <Link to="/termini-servizio" className="text-slate-600 hover:text-white">Termini di Servizio</Link>
              </li>
              <li>
                <Link to="/policy" className="text-slate-600 hover:text-white">Privacy e Cookie</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Seguici sui nostri social!</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://www.facebook.com/" className="text-slate-600 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" className="text-slate-600 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" className="text-slate-600 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Assistenza</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/centro-assistenza" className="text-slate-600 hover:text-white">Centro assistenza</Link>
              </li>
              <li>
                <Link to="/segnala-problema" className="text-slate-600 hover:text-white">Segnala un problema</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Scarica l'app</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://play.google.com/store/games?hl=it&gl=US&pli=1" className="text-slate-600 hover:text-white">
                  Android
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/it/app-store/" className="text-slate-600 hover:text-white">
                  iOS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default GuidaESupporto;
