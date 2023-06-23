import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Catalogo = () => {
  const filmList = [
    {
      title: "Il Padrino",
      director: "Francis Ford Coppola",
      year: 1972,
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
    },
    {
      title: "Il Signore degli Anelli: La Compagnia dell'Anello",
      director: "Peter Jackson",
      year: 2001,
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
    },
    {
      title: "Il Cavaliere Oscuro",
      director: "Christopher Nolan",
      year: 2008,
    },
    {
      title: "Fight Club",
      director: "David Fincher",
      year: 1999,
    },
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
    },
    {
      title: "Quei Bravi Ragazzi",
      director: "Martin Scorsese",
      year: 1990,
    },
    {
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      year: 1999,
    },
    {
      title: "Schindler's List",
      director: "Steven Spielberg",
      year: 1993,
    },
    {
      title: "Titanic",
      director: "James Cameron",
      year: 1997,
    },
    {
      title: "Avatar",
      director: "James Cameron",
      year: 2009,
    },
    {
      title: "Il Re Leone",
      director: "Roger Allers, Rob Minkoff",
      year: 1994,
    },
    {
      title: "La vita è bella",
      director: "Roberto Benigni",
      year: 1997,
    },
    {
      title: "Pirati dei Caraibi: La maledizione della prima luna",
      director: "Gore Verbinski",
      year: 2003,
    },
    {
      title: "Harry Potter e la Pietra Filosofale",
      director: "Chris Columbus",
      year: 2001,
    },
    {
      title: "Jurassic Park",
      director: "Steven Spielberg",
      year: 1993,
    },
    {
      title: "Il Gladiatore",
      director: "Ridley Scott",
      year: 2000,
    },
    {
      title: "Il Signore degli Anelli: Il ritorno del re",
      director: "Peter Jackson",
      year: 2003,
    },
    {
      title: "La bella e la bestia",
      director: "Gary Trousdale, Kirk Wise",
      year: 1991,
    },
  ];

  return (<>
    <Sidebar/>
    <Navbar/>
    <section className="flex justify-center items-center bg-black text-black py-20">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#ffbb38] rounded-lg mx-4 sm:mx-8 md:mx-12 lg:mx-28 pt-5 pb-7">
        <h3 className="text-4xl font-bold mb-4 lg:text-center">
          Catalogo di film più visti dai nostri abbonati!
        </h3>
        <ul className="text-sm">
          {filmList.map((film, index) => (
            <li key={index} className="mb-4">
              <div className="flex items-center">
                {index === 0 && (
                  <span className="text-2xl font-bold mr-2" style={{ color: "gold" }}>
                    1
                  </span>
                )}
                {index === 1 && (
                  <span className="text-2xl font-bold mr-2" style={{ color: "silver" }}>
                    2
                  </span>
                )}
                {index === 2 && (
                  <span className="text-2xl font-bold mr-2" style={{ color: "saddlebrown" }}>
                    3
                  </span>
                )}
                {index > 2 && (
                  <span className="text-2xl font-bold mr-2">{index + 1}</span>
                )}
                <h4 className="text-xl font-bold">{film.title}</h4>
              </div>
              <p className="text-xs text-black-400">
                Regista: {film.director} ({film.year})
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
    </>
  );
};

export default Catalogo;
