import { Link } from "react-router-dom";


function Navbar() {

    

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex justify-center bg-[rgb(28,28,28)] w-[490px] rounded-br-[10px] rounded-bl-[10px] space-x-28">
          <Link to="/">
            <div className="w-[70px] mt-[5px] hover:invert-[94%] hover:sepia-[94%] hover:saturate-[0%] hover:hue-rotate-[226deg] hover:brightness-[105%] hover:contrast-[105%]">
              <img
                src="/src/assets/images/home.svg"
                className="h-[25px] w-6/12 invert-[37%] sepia-[0%] saturate-[1649%] hue-rotate-[338deg] brightness-[96%] contrast-[93%] mt-px mx-auto"
              />
              <p className="text-center text-[8px] text-[rgb(93,93,93)]">
                Home
              </p>
            </div>
          </Link>

          <div className="category-nav mt-[5px]">
            <div className="w-[50px] bg-[rgb(255,187,56)] mx-auto rounded-[3px] hover:invert-[94%] hover:sepia-[94%] hover:saturate-[0%] hover:hue-rotate-[226deg] hover:brightness-[105%] hover:contrast-[105%]">
              <Link to="/categories">
                <img
                  src="/src/assets/images/category.svg"
                  className="w-[25px] h-[25px] invert-[37%] sepia-[0%] saturate-[1649%] hue-rotate-[338deg] brightness-[96%] contrast-[93%] mt-px mx-auto"
                />
                <p className="text-center text-[8px] text-[rgb(93,93,93)]">
                  Categories
                </p>
              </Link>
            </div>
          </div>

          <Link to="/profile">
            <div className="w-[70px] mt-[5px] hover:invert-[94%] hover:sepia-[94%] hover:saturate-[0%] hover:hue-rotate-[226deg] hover:brightness-[105%] hover:contrast-[105%]">
              <img
                src="/src/assets/images/user.svg"
                className="h-[25px] w-6/12 invert-[37%] sepia-[0%] saturate-[1649%] hue-rotate-[338deg] brightness-[96%] contrast-[93%] mt-px mx-auto"
              />
              <p className="text-center text-[8px] text-[rgb(93,93,93)]">
                Profile
              </p>
            </div>
          </Link>
        </div>

        <div className="flex top-1 right-[30px] items-center absolute gap-5">
          <div className="w-[200px]">
            <button className="bg-[rgb(28,28,28)] ml-[15px] rounded-tl-[5px] rounded-bl-[5px]">
              🔍︎
            </button>
            <input
              type="text"
              className="bg-[rgb(28,28,28)] w-[150px] text-base mt-[5px] rounded-tr-[5px] rounded-br-[5px] text-white"
              placeholder=" Search"
            />
          </div>

          <div className="flex justify-center items-center gap-2">
            <img
              src="/src/assets/images/bell.svg"
              className="w-[20px] h-[20px] invert-[37%] sepia-[0%] saturate-[1649%] hue-rotate-[338deg] brightness-[96%] contrast-[93%] mt-2.5"
            />
            <img
              src="/src/assets/images/profile.svg"
              className="w-[40px] h-[40px] invert-[37%] sepia-[0%] saturate-[1649%] hue-rotate-[338deg] brightness-[96%] contrast-[93%] mt-[5px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
