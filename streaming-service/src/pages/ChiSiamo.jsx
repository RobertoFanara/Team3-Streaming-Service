import React from "react";

function ChiSiamo() {
  const team = [
    {
      role: "Team Lead",
      name: "Roberto Pio Fanara",
      linkedin: "https://www.linkedin.com/in/roberto-pio-fanara-a2a413276/",
    },
    {
      role: "Membro",
      name: "Danilo Innocente Carbone",
      linkedin: "https://www.linkedin.com/in/danilo-innocente-carbone-a06513220/",
    },
    {
      role: "Membro",
      name: "Paolo Gallitelli",
      linkedin: "https://www.linkedin.com/in/paolo-gallitelli-925475253/",
    },
    {
      role: "Membro",
      name: "Alfio Puglisi",
      linkedin: "https://www.linkedin.com/in/alfio-puglisi-38761922a/",
    },
    {
      role: "Membro",
      name: "Gabriel Marchegiani",
      linkedin: "https://www.linkedin.com/in/gabriel-marchegiani/",
    },
    {
      role: "Membro",
      name: "Giuseppe Bianconi",
      linkedin: "https://www.linkedin.com/in/giuseppe-bianconi-934b97144/",
    },
  ];

  return (
    <section className="bg-black text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-yellow-300 rounded-lg mx-28 pt-5 pb-7">
        <h1 className="text-3xl text-center font-bold mb-4">Chi c'è dietro le quinte ?</h1>
        <div className="grid grid-cols-2 text-center gap-4">
          <div className="col-span-2 text-center">
            <h2 className="text-xl font-thin">{team[0].role}</h2>
            <p>{team[0].name}</p>
            <a
              href={team[0].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-gray-400"
            >
              Profilo LinkedIn
            </a>
          </div>
          {team.slice(1).map((member, index) => (
            <div key={index}>
              {/* <h2 className="text-xl font-thin">{member.role}</h2> */}
              <p>{member.name}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-gray-400"
              >
                Profilo LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChiSiamo;
