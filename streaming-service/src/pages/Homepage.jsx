import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Homepage() {
  return (
    <>
      <div className="bg-black w-full h-full">
          <Sidebar />
        <div className="flex flex-col justify-center items-center gap-5">
          <Navbar />
          <div className="flex border border-2 border-[RGB(255,187,56)] rounded-[20px] w-[870px] h-[450px] m-5 overflow-hidden relative ">
            <img className="w-full h-full z-0" src="https://images.tbs.com/tbs/$dyna_params/https%3A%2F%2Fi.cdn.tbs.com%2Fassets%2Fimages%2F2019%2F10%2FHangover-1600x900.jpg"></img>
            <div className="flex z-10 absolute w-full h-full">
              <p className="absolute text-white text-[40px] bottom-[110px] left-[30px]">Una notte da leoni</p>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-[40px] right-[30px] w-[105px] h-[105px] stroke-[rgb(255,187,65)] z-20"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-[37px] right-[25px] w-[110px] h-[110px] stroke-black z-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-[40px] right-[145px] w-[65px] h-[65px] stroke-[rgb(255,187,65)] z-20"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-[37px] right-[140px] w-[70px] h-[70px] stroke-black z-10"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-[40px] right-[225px] w-[65px] h-[65px] stroke-[rgb(255,187,65)] z-20"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-[37px] right-[220px] w-[70px] h-[70px] stroke-black z-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center flex-col w-full gap-10">
            <div className="flex flex-col justify-start w-[860px] h-[650]">
              <p className="text-white text-[25px]">Trending</p>
              <div className="flex flex-wrap gap-5 mt-[15px] justify-between">
                <div className="border border-2 border-[RGB(255,187,56)] h-[290px] w-[270px] rounded-[20px] bg-[rgb(45,45,45)]"></div>
                <div className="border border-2 border-[RGB(255,187,56)] h-[290px] w-[270px] rounded-[20px] bg-[rgb(45,45,45)]"></div>
                <div className="border border-2 border-[RGB(255,187,56)] h-[290px] w-[270px] rounded-[20px] bg-[rgb(45,45,45)]"></div>
                <div className="border border-2 border-[RGB(255,187,56)] h-[290px] w-[270px] rounded-[20px] bg-[rgb(45,45,45)]"></div>
                <div className="border border-2 border-[RGB(255,187,56)] h-[290px] w-[270px] rounded-[20px] bg-[rgb(45,45,45)]"></div>
                <div className="border border-2 border-[RGB(255,187,56)] h-[290px] w-[270px] rounded-[20px] bg-[rgb(45,45,45)]"></div>
              </div>
            </div>
            <div className="flex flex-col justify-start w-[860px] h-[650]">
              <p className="text-white text-[25px]">Ultime Uscite</p>
              <div className="flex flex-wrap gap-5 mt-[15px] justify-between">
                <div className="border border-2 border-[RGB(255,187,56)] h-[290px] w-[270px] rounded-[20px] bg-[rgb(45,45,45)]"></div>
                <div className="border border-2 border-[RGB(255,187,56)] h-[290px] w-[270px] rounded-[20px] bg-[rgb(45,45,45)]"></div>
                <div className="border border-2 border-[RGB(255,187,56)] h-[290px] w-[270px] rounded-[20px] bg-[rgb(45,45,45)]"></div>
                <div className="border border-2 border-[RGB(255,187,56)] h-[290px] w-[270px] rounded-[20px] bg-[rgb(45,45,45)]"></div>
                <div className="border border-2 border-[RGB(255,187,56)] h-[290px] w-[270px] rounded-[20px] bg-[rgb(45,45,45)]"></div>
                <div className="border border-2 border-[RGB(255,187,56)] h-[290px] w-[270px] rounded-[20px] bg-[rgb(45,45,45)]"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;

