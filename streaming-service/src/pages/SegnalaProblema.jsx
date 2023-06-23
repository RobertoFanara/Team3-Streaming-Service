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

  return (<>
    <Sidebar/>
    <Navbar/>
    <div className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
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
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg"
          >
            Invia segnalazione
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default SegnalaProblema;
