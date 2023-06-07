import Navbar from "../components/Navbar";
function Homepage() {
  return (
    <>
      <div className="bg-black w-full h-[100vh]">
        <div className="flex flex-col justify-center items-center gap-5">
          <Navbar />

          <div className="border border-2 border-[RGB(255,187,56)] rounded-[20px] w-[870px] h-[450px] m-5 ">
            <img/>
            <p></p>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
