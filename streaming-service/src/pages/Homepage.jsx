import { useEffect, useState } from "react";
import FilmDetails from "../components/FilmDetails";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Homepage() {
  const [filmsListUU, setFilmsListUU] = useState([]);
  const [filmsListP, setFilmsListP] = useState([]);
  const [detailsEditing, setDetailsEditing] = useState(false);
  const [smallFilmEditing, setSmallFilmEditing] = useState(null);

  const setDetailsEditingHandler = (film) => {
    setSmallFilmEditing(film);
    setDetailsEditing(true);
  };

  const closeDetails = () => {
    setDetailsEditing(false);
    setSmallFilmEditing(null);
  };

  const urlUU =
    "https://api.themoviedb.org/3/movie/now_playing?language=it-IT&page=1&region=IT";

  const urlP =
    "https://api.themoviedb.org/3/movie/popular?language=it-IT&page=1&region=IT";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzY2NTljNWIxZDBiNzU5ZjNmOGZhOWIxOWY5M2YxMCIsInN1YiI6IjY0OTllYTFlZWI3OWMyMDBjNTZlYmZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v3wbOTjVH2pMXzwC51-uSLuFRn9bT6l3tu5KZNXIDiA",
    },
  };

  const fetchDataP = async () => {
    try {
      const response = await fetch(urlP, options);
      const result = await response.json();
      console.log(result.results);
      setFilmsListP(
        result.results.filter((item, index) => index < 6).map((arr) => arr)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataUU = async () => {
    try {
      const response = await fetch(urlUU, options);
      const result = await response.json();
      console.log(result.results);
      setFilmsListUU(
        result.results.filter((item, index) => index < 6).map((arr) => arr)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataP();
    fetchDataUU();
  }, []);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="bg-black w-full h-full mt-20 mb-10">
        {smallFilmEditing && (
          <FilmDetails
            closeDetails={closeDetails}
            img={smallFilmEditing.poster_path}
            title={smallFilmEditing.title}
            trama={smallFilmEditing.overview}
          />
        )}
        <div className="flex flex-col items-center">
          <div
            className="flex border-2 border-[RGB(255,187,56)] rounded-[20px] w-[870px] h-[450px] m-5 overflow-hidden relative cursor-pointer"
            onClick={setDetailsEditingHandler}
          >
            <div
              className="w-full h-full z-0"
              style={{
                background: `url('https://image.tmdb.org/t/p/original/${filmsListP
                  .filter((item, index) => index === 0)
                  .map((film) => film.poster_path)}')`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
            ></div>
            <div className="flex z-10 absolute w-full h-full">
              <p className="absolute text-[#ffbb38] text-[40px] bottom-[110px] left-[30px] bg-black/75 p-2 rounded-md">
                {filmsListP
                  .filter((item, index) => index === 0)
                  .map((film) => film.title)}
              </p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute bottom-[40px] right-[30px] w-[105px] h-[105px] stroke-[rgb(255,187,65)] z-20 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute bottom-[37px] right-[25px] w-[110px] h-[110px] stroke-black z-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute bottom-[40px] right-[145px] w-[65px] h-[65px] stroke-[rgb(255,187,65)] z-20 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute bottom-[37px] right-[140px] w-[70px] h-[70px] stroke-black z-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute bottom-[40px] right-[225px] w-[65px] h-[65px] stroke-[rgb(255,187,65)] z-20 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute bottom-[37px] right-[220px] w-[70px] h-[70px] stroke-black z-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col w-full gap-10">
            <div className="flex flex-col justify-start w-[950px] m-10 border-t border-[#ffbb38] pt-10">
              <p className="text-white text-[40px] font-bold mb-5">Trending</p>
              <div className="flex flex-wrap gap-5 mt-[15px] justify-center">
                {filmsListP.map((film, key) => {
                  return (
                    <div
                      style={{
                        background: `url('https://image.tmdb.org/t/p/original/${film.poster_path}')`,
                        backgroundSize: "cover",
                      }}
                      className={`relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] cursor-pointer`}
                      key={key}
                      onClick={() => setDetailsEditingHandler(film)}
                    >
                      <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">
                        {film.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="m-10 border-t border-[#ffbb38] pt-10">
              <div className="flex flex-col justify-start w-[950px] ">
                <p className="text-white text-[40px] font-bold mb-5">
                  Ultime Uscite
                </p>
                <div className="flex flex-wrap gap-5 mt-[15px] justify-center">
                  {filmsListUU.map((film, key) => {
                    return (
                      <div
                        style={{
                          background: `url('https://image.tmdb.org/t/p/original/${film.poster_path}')`,
                          backgroundSize: "cover",
                        }}
                        className={`relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] cursor-pointer`}
                        key={key}
                        onClick={() => setDetailsEditingHandler(film)}
                      >
                        <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">
                          {film.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
