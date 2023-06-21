import { Link } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {

  const topFunction = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const handleScrollSearchRight = () => {
    useEffect(() => {
        const $sliderSearch = document.querySelector(".slider-search")
        const $afterArrowSearch = document.querySelector(".after-arrow-search")
        $afterArrowSearch.addEventListener("click", () => {
            $sliderSearch.scrollBy({
                left: 100,
                behavior: "smooth"
            })
        })
    })
}

const handleScrollSearchLeft = () => {
    useEffect(() => {
        const $sliderSearch = document.querySelector(".slider-search")
        const $beforeArrowSearch = document.querySelector(".before-arrow-search")
        $beforeArrowSearch.addEventListener("click", () => {
            $sliderSearch.scrollBy({
                left: -100,
                behavior: "smooth"
            })
        })
    })
}

const handleCategoriesAppear = () => {
  useEffect(() => {
    const $category = document.querySelector(".category");
    const $categoryList = document.querySelector(".category-list");
    
    $category.addEventListener("click", () => {
        let clicked = true
        if(clicked === true){
          $category.style.display = "none"
          $categoryList.style.display = "flex"
          clicked = false
        }
      }
    )
  }
  )
}

const handleCategoriesDisappear = () => {
  useEffect(() => {
    const $category = document.querySelector(".category");
    const $home = document.querySelector(".home");
    const $categoryList = document.querySelector(".category-list");
    const $profile = document.querySelector(".profile");
    
    $home.addEventListener("click", () => {
        let clicked = true
        if(clicked === true){
          $categoryList.style.display = "none"
          $category.style.display = "block"
          clicked = false
        }
      }

      )
      $profile.addEventListener("click", () => {
        let clicked = true
        if(clicked === true){
          $categoryList.style.display = "none"
          $category.style.display = "block"
          clicked = false
        }
      })
  }
  )
}


  return (
    <>
      <div className="flex items-center justify-center bg-transparent">
        <div className="fixed top-0 z-50">
        <div className="flex item-center justify-center absolute top-0 bg-[rgb(28,28,28)] w-fit rounded-br-[10px] rounded-bl-[10px] space-x-12 -translate-x-1/2 pl-[30px] pr-[30px] h-[60px]">
          <Link to="/" onClick={topFunction}>
            <div className="home w-[70px] h-[100%] mt-[5px] hover:invert-[94%] hover:sepia-[94%] hover:saturate-[0%] hover:hue-rotate-[226deg] hover:brightness-[105%] hover:contrast-[105%]" onClick={handleCategoriesDisappear()}>
              <img
                src="/src/assets/images/home.svg"
                className="w-6/12 invert-[37%] sepia-[0%] saturate-[1649%] hue-rotate-[338deg] brightness-[96%] contrast-[93%] mt-px mx-auto"
              />
              <p className="text-center text-[8px] text-[rgb(93,93,93)]">
                Home
              </p>
            </div>
          </Link>

          <div className="category-nav mt-[5px]">
            <div className="category w-[60px] h-[100%] bg-[rgb(255,187,56)] mx-auto rounded-[3px] hover:invert-[94%] hover:sepia-[94%] hover:saturate-[0%] hover:hue-rotate-[226deg] hover:brightness-[105%] hover:contrast-[105%]" onClick={handleCategoriesAppear()}>
              <Link to="/categories">
                <img
                  src="/src/assets/images/category.svg"
                  className="w-[30px] h-[35px] invert-[37%] sepia-[0%] saturate-[1649%] hue-rotate-[338deg] brightness-[96%] contrast-[93%] mt-px mx-auto"
                />
                <p className="text-center text-[8px] text-[rgb(93,93,93)]">
                  Categories
                </p>
              </Link>
            </div>
                <div className="relative category-list hidden h-[100%]">
                  
                  <div className="before-arrow-search absolute bg-trasparent w-[30px] h-full flex justify-center items-center z-50" onClick={handleScrollSearchRight()} >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                  </div>

                  <div className="after-arrow-search absolute end-0 bg-trasparent w-[30px] h-full z-10 flex justify-center items-center" onClick={handleScrollSearchLeft()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>


                  <div className="slider-search h[100%] flex w-[300px] gap-[1rem] overflow-hidden px-[28px] bg-[rgb(255,187,56)] rounded-[3px]" >
                  <Link to={"/others"} onClick={topFunction} className="py-[10px] flex items-center hover:text-white transition duration-200 ease-in-out"><div >Altro</div></Link>
                  <Link to={"/azione"} onClick={topFunction}  className="py-[10px] flex items-center hover:text-white transition duration-200 ease-in-out"><div >Azione</div></Link>
                  <Link to={"/avventura"} onClick={topFunction}  className="py-[10px] flex items-center hover:text-white transition duration-200 ease-in-out"><div >Avventura</div></Link>
                  <Link to={"/animazione"} onClick={topFunction}  className="py-[10px] flex items-center hover:text-white transition duration-200 ease-in-out"><div >Animazione</div></Link>
                  <Link to={"/comico"} onClick={topFunction}  className="py-[10px] flex items-center hover:text-white transition duration-200 ease-in-out"><div >Comico</div></Link>
                  <Link to={"/drammatico"} onClick={topFunction}  className="py-[10px] flex items-center hover:text-white transition duration-200 ease-in-out"><div >Drammatico</div></Link> 
                  </div>
                </div>
          </div>

          <Link to="/profile" onClick={topFunction}>
            <div className="profile w-[70px] mt-[5px] hover:invert-[94%] hover:sepia-[94%] hover:saturate-[0%] hover:hue-rotate-[226deg] hover:brightness-[105%] hover:contrast-[105%]" onClick={handleCategoriesDisappear()}>
              <img
                src="/src/assets/images/user.svg"
                className=" w-6/12 invert-[37%] sepia-[0%] saturate-[1649%] hue-rotate-[338deg] brightness-[96%] contrast-[93%] mt-px mx-auto"
              />
              <p className="text-center text-[8px] text-[rgb(93,93,93)]">
                Profile
              </p>
            </div>
          </Link>
        </div>
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
