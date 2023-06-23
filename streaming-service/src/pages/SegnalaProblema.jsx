import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const SegnalaProblema = () => {
  const [problema, setProblema] = useState('');
  const [segnalazioneInviata, setSegnalazioneInviata] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Segnalazione inviata:', problema);
    setProblema('');
    setSegnalazioneInviata(true);
  };

  return (
    <section className="bg-black text-black py-20">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#ffbb38] rounded-lg mx-4 sm:mx-8 md:mx-12 lg:mx-28 pt-14 pb-14">
        <h2 className="text-xl font-bold mb-4">Segnala un problema</h2>
        {segnalazioneInviata ? ( <p className="mb-4 text-green-500">Segnalazione inviata!</p>) : null}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="problema">
              Descrivi il problema:
            </label>
            <textarea
              className="w-full text-black px-4 py-2 rounded-lg"
              id="problema"
              name="problema"
              rows="4"
              placeholder="Inserisci qui la descrizione del problema..."
              value={problema}
              onChange={(e) => setProblema(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-white hover:bg-yellow-600 text-black px-6 py-2 rounded-lg"
          >
            Invia segnalazione
          </button>
        </form>
      </div>
    </section>
  );
};

export default SegnalaProblema;
