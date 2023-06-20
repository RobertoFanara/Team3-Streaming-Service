import React from "react";

const GuidaESupporto = () => {
  return (
    <section className="bg-black text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-yellow-300 rounded-lg mx-28 pt-5 pb-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Guida e supporto</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-600 hover:text-white">
                  Contattaci
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-white">
                  Termini di servizio
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-white">
                  Privacy e cookie
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Social</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-600 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Assistenza</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-600 hover:text-white">
                  Centro assistenza
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-white">
                  Segnala un problema
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Scarica l'app</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-600 hover:text-white">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-white">
                  iOS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidaESupporto;
