import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const OthersLittleList = () => {
    const [filmsListAnimation, setFilmsListAnimation] = useState([]);
    const handleScrollRight = () => {
        useEffect(() => {
            const $slider = document.querySelector(".slider")
            const $afterArrow = document.querySelector(".after-arrow")
            $afterArrow.addEventListener("click", () => {
                $slider.scrollBy({
                    left: 350,
                    behavior: "smooth"
                })
            })
        })
    }

    const handleScrollLeft = () => {
        useEffect(() => {
            const $slider = document.querySelector(".slider")
            const $beforeArrow = document.querySelector(".before-arrow")
            $beforeArrow.addEventListener("click", () => {
                $slider.scrollBy({
                    left: -350,
                    behavior: "smooth"
                })
            })
        })
    }
    
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
              result.results.filter((item, index) => index < 6).map((arr) => arr)
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
            <div className="w-full text-white">
                <div>Altro</div>
                <div className= "relative">

                <div className="before-arrow absolute bg-trasparent w-[50px] h-full flex justify-center items-center z-10" onClick={handleScrollLeft()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>

                    <div className="slider flex gap-4 mt-2 overflow-auto overflow-x-hidden h-[225px]">
                    {filmsListAnimation.map((film, key) => {
                            return(
                                <a href="" className="w-[350px]">
                                <div 
                                    style={{
                                        background: `url('https://image.tmdb.org/t/p/original/${film.poster_path}')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                      }}
                                    className=" w-[350px] h-[100%] rounded-lg relative  bg-cover bg-center flex items-center justify-center"
                                    key={key}
                                    >
                                    
                                    <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col items-center">
                                    <div className="w-fit mx-auto">{film.title}</div>
                                    <div className="flex items-center justify-center">
                                        <div className="w-[20px] h-[20px]">
                                            <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
                                            C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
                                            c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                        </div>
                                        <div className="text-sm">{film.vote_average}</div>
                                    </div>
                                </div>
                            </div>
                                </a>
                            )
                        })}
                        <Link to={"/others"} onClick={topFunction} className="w-[100px] rounded-lg mr-8 flex items-center bg-[RGB(255,187,56)]  justify-center text-black hover:text-white transition duration-200 ease-in">    
                                <div className="w-[100px] flex items-center justify-center ">
                                    <div className="h-[20px] w-fit text-inherit">See Other</div>    
                                </div>
                        </Link>

                        

                    <div className="after-arrow absolute end-0 bg-trasparent w-[50px] h-full z-10 flex justify-center items-center" onClick={handleScrollRight()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}


export default OthersLittleList