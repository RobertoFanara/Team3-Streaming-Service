import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const SupportedDevices = () => {
  return (<>
    <Sidebar/>
    <Navbar/>
    <section className="bg-black text-black py-20">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#ffbb38] rounded-lg mx-28 pt-5 pb-7">
        <h2 className="text-3xl font-semibold text-black mb-4">
          Dispositivi supportati
        </h2>
        <p className="text-lg text-dark-gray-300 mb-8">
          Goditi i nostri film e TV show su una vasta gamma di dispositivi con la migliore qualità video 4K e audio HQ senza perdita di dati.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="flex items-center justify-center bg-white rounded-lg p-4">
            <img
              src="../src/assets/images/desktop.svg"
              alt="Desktop"
              className="h-12 w-12"
            />
            <span className="ml-2 text-gray-800">Desktop</span>
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg p-4">
            <img
              src="../src/assets/images/pc.svg"
              alt="Laptop"
              className="h-12 w-12"
            />
            <span className="ml-2 text-gray-800">Laptop</span>
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg p-4">
            <img
              src="../src/assets/images/tablet.svg"
              alt="Tablet"
              className="h-12 w-12"
            />
            <span className="ml-2 text-gray-800">Tablet</span>
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg p-4">
            <img
              src="../src/assets/images/mobile.svg"
              alt="Mobile"
              className="h-12 w-12"
            />
            <span className="ml-2 text-gray-800">Mobile</span>
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg p-4">
            <img
            src="../src/assets/images/tv.svg"
            alt="TV"
            className="h-12 w-12" />
            <span className="ml-2 text-gray-800">TV</span>
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg p-4">
            <img
              src="../src/assets/images/gameconsole.png"
              alt="Game Console"
              className="h-12 w-12"
            />
            <span className="ml-2 text-gray-800">Console da gioco</span>
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg p-4">
            <img
              src="../src/assets/images/smartwatch.png"
              alt="Smartwatch"
              className="h-12 w-12"
            />
            <span className="ml-2 text-gray-800">Smartwatch</span>
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg p-4">
            <img
              src="../src/assets/images/headphones.png"
              alt="Headphones"
              className="h-12 w-12"
            />
            <span className="ml-2 text-gray-800">Cuffie</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SupportedDevices;
