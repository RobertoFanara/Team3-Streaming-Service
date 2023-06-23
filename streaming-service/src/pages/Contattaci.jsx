import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Contattaci = () => {
  return (<>
    <Sidebar/>
    <Navbar/>
    <section className="flex items-center justify-center bg-black text-black py-20">
      <div className=" max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#ffbb38] rounded-lg mx-4 sm:mx-8 md:mx-12 lg:mx-28 pt-5 pb-7">
        <div className="text-center lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contattaci</h2>
          <p className="mt-2 leading-6 text-black">Hai domande o suggerimenti? Contattaci utilizzando il modulo sottostante.</p>
        </div>
        <div className="mt-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Assistenza clienti</h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">Hai bisogno di assistenza? Contattaci tramite il seguente indirizzo email:</p>
                <p className="mt-3 text-sm leading-5 font-medium text-indigo-600 truncate">supporto@nome-sito.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Richieste di partnership</h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">Se sei interessato a una partnership, contattaci al seguente indirizzo email:</p>
                <p className="mt-3 text-sm leading-5 font-medium text-indigo-600 truncate">partnership@nome-sito.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Assistenza tecnica</h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">Per domande tecniche, invia un'email a:</p>
                <p className="mt-3 text-sm leading-5 font-medium text-indigo-600 truncate">techsupport@nome-sito.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contattaci;
