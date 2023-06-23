import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const CentroAssistenza = () => {
  return (<>
    <Sidebar/>
    <Navbar/>
    <section className="flex justify-center items-center bg-black text-black py-20">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#ffbb38] rounded-lg mx-28 pt-5 pb-7">
        <h2 className="text-2xl font-bold mb-6">Centro assistenza</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Contatti</h3>
            <p className="text-slate-600">Telefono: 123-456-7890</p>
            <p className="text-slate-600">Email: supporto@nome-sito.com</p>
            <p className="text-slate-600">Indirizzo: Via Libertà 58, Palermo (PA), Italia</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Domande frequenti</h3>
            <ul>
              <li className="text-slate-600 hover:text-white">Come posso creare un account?</li>
              <li className="text-slate-600 hover:text-white">Quali sono le opzioni di pagamento?</li>
              <li className="text-slate-600 hover:text-white">Come posso riprodurre un film?</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Assistenza online</h3>
            <p className="text-slate-600">Visita la nostra sezione di assistenza online per ulteriori informazioni e risposte alle domande comuni.</p>
            <Link to="/contattaci" className="text-slate-600 hover:text-white">Assistenza online</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CentroAssistenza;
