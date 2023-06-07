import Navbar from "../components/Navbar";
function Homepage() {
  return (
    <>
      <div className="bg-black w-full h-[100vw]">
        <div className="flex flex-col justify-center items-center gap-5">
          <Navbar />

          <div className="flex border border-2 border-[RGB(255,187,56)] rounded-[20px] w-[870px] h-[450px] m-5 "></div>
          
          <div className="flex flex-col w-full ">
            <p>Trending</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
