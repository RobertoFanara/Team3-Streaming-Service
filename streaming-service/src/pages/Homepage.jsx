import FilmDetails from "../components/FilmDetails";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Homepage() {

  const [detailsEditing, setDetailsEditing] = useState(false);

  const setDetailsEditingHandler = () => {
    if (detailsEditing === false){
        setDetailsEditing(true)
    } else {
        setDetailsEditing(false)
    }
  }

  return (
    <>
    <Sidebar/>
    <Navbar/>
      <div className="bg-black w-full h-full mt-10 mb-10">
      { detailsEditing && <FilmDetails closeDetails={setDetailsEditingHandler} img="bg-[url('https://images.tbs.com/tbs/$dyna_params/https%3A%2F%2Fi.cdn.tbs.com%2Fassets%2Fimages%2F2019%2F10%2FHangover-1600x900.jpg')]" title='Una Notte da Leoni'/> }
        <div className="flex flex-col items-center">
          <div className="flex border-2 border-[RGB(255,187,56)] rounded-[20px] w-[870px] h-[450px] m-5 overflow-hidden relative cursor-pointer" onClick={setDetailsEditingHandler}>
            <img className="w-full h-full z-0" src="https://images.tbs.com/tbs/$dyna_params/https%3A%2F%2Fi.cdn.tbs.com%2Fassets%2Fimages%2F2019%2F10%2FHangover-1600x900.jpg"></img>
            <div className="flex z-10 absolute w-full h-full">
              <p className="absolute text-[#ffbb38] text-[40px] bottom-[110px] left-[30px] bg-black/75 p-2 rounded-md">Una notte da leoni</p>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-[40px] right-[30px] w-[105px] h-[105px] stroke-[rgb(255,187,65)] z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-[37px] right-[25px] w-[110px] h-[110px] stroke-black z-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-[40px] right-[145px] w-[65px] h-[65px] stroke-[rgb(255,187,65)] z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-[37px] right-[140px] w-[70px] h-[70px] stroke-black z-10"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-[40px] right-[225px] w-[65px] h-[65px] stroke-[rgb(255,187,65)] z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-[37px] right-[220px] w-[70px] h-[70px] stroke-black z-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col w-full gap-10">
            <div className="flex flex-col justify-start w-[950px]">
              <p className="text-white text-[25px]">Trending</p>
              <div className="flex flex-wrap gap-5 mt-[15px] justify-center">
                <div className="relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] bg-[url('https://occ-0-395-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf2NpNhZsRSLwu3n0KhysCBpHNRlTQu86BLXuxSsleAMrjLNF6G0COGO2-s8YUywD64vHPiX5knGmTkMgF6A002TGi6eilpE329N.jpg?r=7c6')] bg-cover bg-center">

                  <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">Don't look up</p>
                </div>
                <div className="relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] bg-[url('https://static.sky.it/images_static/tg24/spettacolo/2019/08/14/James_Cameron/James_Cameron_Avatar.jpg.transform/hero-tablet/ffd5e21ae3ab3803fee4805ee5532d1bc3304f7a/img.jpeg')] bg-cover bg-center">
                  <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">James Cameron: Avatar</p>
                </div>
                <div className="relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] bg-[url('https://pad.mymovies.it/filmclub/2003/09/001/covermd_home.jpg')] bg-cover bg-center">
                  <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">Pirati dei caraibi</p>
                </div>
                <div className="relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] bg-[url('https://www.sorrisi.com/wp-content/uploads/2019/07/jumanji-the-next-level.jpg')] bg-cover bg-center">
                  <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">Jumanji: The next level</p>
                </div>
                <div className="relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlT9wIvFh5V9NIk024kJ4F_STBlsCCi1ilMQ0_Tu12D9M09pQ')] bg-cover bg-center">
                  <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">Avengers: End Game</p>
                </div>
                <div className="relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] bg-[url('https://www.focus.it/site_stored/imgs/0004/011/spider-man-2002.1020x680.jpg')] bg-cover bg-center">
                  <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">Spider-man</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start w-[950px]">
              <p className="text-white text-[25px]">Ultime Uscite</p>
              <div className="flex flex-wrap gap-5 mt-[15px] justify-center">
                <div className="relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] bg-[url('https://occ-0-395-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf2NpNhZsRSLwu3n0KhysCBpHNRlTQu86BLXuxSsleAMrjLNF6G0COGO2-s8YUywD64vHPiX5knGmTkMgF6A002TGi6eilpE329N.jpg?r=7c6')] bg-cover bg-center">
                  <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">Don't look up</p>
                </div>
                <div className="relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] bg-[url('https://static.sky.it/images_static/tg24/spettacolo/2019/08/14/James_Cameron/James_Cameron_Avatar.jpg.transform/hero-tablet/ffd5e21ae3ab3803fee4805ee5532d1bc3304f7a/img.jpeg')] bg-cover bg-center">
                  <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">James Cameron: Avatar</p>
                </div>
                <div className="relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] bg-[url('https://pad.mymovies.it/filmclub/2003/09/001/covermd_home.jpg')] bg-cover bg-center">
                  <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">Pirati dei caraibi</p>
                </div>
                <div className="relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] bg-[url('https://www.sorrisi.com/wp-content/uploads/2019/07/jumanji-the-next-level.jpg')] bg-cover bg-center">
                  <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">Jumanji: The next level</p>
                </div>
                <div className="relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlT9wIvFh5V9NIk024kJ4F_STBlsCCi1ilMQ0_Tu12D9M09pQ')] bg-cover bg-center">
                  <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">Avengers: End Game</p>
                </div>
                <div className="relative border-2 border-[RGB(255,187,56)] h-[250px] w-[300px] rounded-[20px] bg-[url('https://www.focus.it/site_stored/imgs/0004/011/spider-man-2002.1020x680.jpg')] bg-cover bg-center">
                  <p className="absolute bottom-5 left-2 z-10 text-[RGB(255,187,56)] text-[20px] bg-black/75 p-2 rounded-md">Spider-man</p>
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

