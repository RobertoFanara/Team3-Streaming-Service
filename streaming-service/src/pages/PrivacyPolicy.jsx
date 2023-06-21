import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="bg-black text-black py-20">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-yellow-300 rounded-lg mx-28 pt-5 pb-7">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold mb-4">Privacy e Policy</h2>
        </div>
        <div className="mt-8">
          <p className="text-lg leading-7">
          La tua privacy è importante per noi e ci impegniamo a proteggere le tue informazioni personali. Questa politica sulla privacy descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali durante l'utilizzo del nostro sito web.
          </p>
          <h3 className="text-xl font-bold mt-8">1. Raccolta delle Informazioni</h3>
          <p className="text-lg leading-7 mt-4">
          Raccogliamo informazioni personali come il tuo nome, indirizzo email e preferenze di visualizzazione dei film al momento della registrazione. Questi dati vengono utilizzati per fornire un servizio personalizzato e migliorare l'esperienza dell'utente.
          </p>
          <h3 className="text-xl font-bold mt-8">2. Utilizzo delle Informazioni</h3>
          <p className="text-lg leading-7 mt-4">
          Utilizziamo le informazioni raccolte per offrirti un servizio di streaming di film personalizzato, per gestire il tuo account utente e per migliorare il nostro sito web e la selezione dei contenuti. Non condividiamo le tue informazioni personali con terze parti senza il tuo consenso.
          </p>
          <h3 className="text-xl font-bold mt-8">3. Protezione dei Dati</h3>
          <p className="text-lg leading-7 mt-4">
          Adottiamo misure di sicurezza adeguate per proteggere i tuoi dati personali da accessi non autorizzati, perdite o utilizzi impropri. Tuttavia, ricorda che nessun metodo di trasmissione dati su Internet è completamente sicuro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
