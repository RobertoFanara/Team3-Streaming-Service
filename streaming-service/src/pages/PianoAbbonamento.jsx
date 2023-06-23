import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const PianoAbbonamento = () => {
  return (<>
    <Sidebar/>
    <Navbar/>
    <section className="bg-black text-black py-20">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#ffbb38] rounded-lg mx-4 sm:mx-8 md:mx-12 lg:mx-28 pt-5 pb-7">
        <h2 className="text-3xl font-bold mb-4">Piani di abbonamento</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Piano Base</h3>
            <p className="text-gray-600 mb-6">Guarda film e serie TV.</p>
            <p className="text-2xl font-bold mb-4">€ 9.99/mese</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">
              Scegli
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Piano Premium</h3>
            <p className="text-gray-600 mb-6">
              Guarda film e serie TV in qualità HD.
            </p>
            <p className="text-2xl font-bold mb-4">€ 14.99/mese</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">
              Scegli
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Piano Ultra</h3>
            <p className="text-gray-600 mb-6">
              Guarda film e serie TV in qualità 4K.
            </p>
            <p className="text-2xl font-bold mb-4">€ 19.99/mese</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">
              Scegli
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PianoAbbonamento;
