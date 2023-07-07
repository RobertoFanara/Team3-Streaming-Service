import { Link } from "react-router-dom"
import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";
import { useState, useEffect } from "react";
import FilmDetails from "../../FilmDetails";

const Drammatico = () => {
    const [filmsListAnimation, setFilmsListAnimation] = useState([]);
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
    const topFunction = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }


      const api = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18`;

      const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzY2NTljNWIxZDBiNzU5ZjNmOGZhOWIxOWY5M2YxMCIsInN1YiI6IjY0OTllYTFlZWI3OWMyMDBjNTZlYmZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v3wbOTjVH2pMXzwC51-uSLuFRn9bT6l3tu5KZNXIDiA",
          },
        };

      const fetchDataAnimazione = async () => {
          try {
            const response = await fetch(api, options);
            const result = await response.json();
            console.log(result.results);
            setFilmsListAnimation(
              result.results.filter((item, index) => index < 16).map((arr) => arr)
            );
          } catch (error) {
            console.log(error);
          }
        };

      useEffect(() => {
              fetchDataAnimazione()
          },[]
      )


    return(
        <>
        <Sidebar/>
        <Navbar/>
            <div className="flex item-center justify-center mt-10 text-[RGB(255,187,56)] pt-[50px] pb-[30px]">
            {smallFilmEditing && (
          <FilmDetails
            detailsEditing={smallFilmEditing}
            closeDetails={closeDetails}
            img={smallFilmEditing.poster_path}
            title={smallFilmEditing.title}
            trama={smallFilmEditing.overview}
            vote={smallFilmEditing.vote_average == 0 ? 'Ancora nessuna valutazione' : smallFilmEditing.vote_average}
            releaseDate={smallFilmEditing.release_date}
          />
        )}
                <div className="flex border border-black w-[870px] gap-5 flex-wrap">

                <div className="w-[100%] flex flex-wrap gap-5">

                {filmsListAnimation.map((film, key) => {
                    return(
                        <div className="mb-4 w-[23.25%] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                        <div
                            className="w-[100%] h-[250px] rounded-lg relative  flex align-center justify-center border border-[RGB(255,187,56)]"
                            style={{
                                background: `url('https://image.tmdb.org/t/p/original/${film.poster_path}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                              key={key}
                              onClick={() => setDetailsEditingHandler(film)}>

                            <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                            </div>
                        </div>
                        <div className="bottom-[10px] w-[100%] h-[45px] flex flex-col align-center text-center">
                                <div className="w-fit mx-auto">{film.title}</div>
                                <div className="flex align-center justify-center">
                                    <div className="w-[20px] h-[20px]">
                                        <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
                                        C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
                                        c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                    </div>
                                    <div className="text-sm">{film.vote_average}</div>
                                </div>
                            </div>
                            </div>

                    )
                })}

                </div>

                     <div className="w-[100%] flex items-center justify-center text-2xl space-x-2">
                        <div>1</div>
                        <Link to={"/drammaticoSecondPage"} onClick={topFunction} >
                            <div>»</div>
                        </Link>
                     </div>

                </div>
            </div>
        </>
    )
}

export default Drammatico