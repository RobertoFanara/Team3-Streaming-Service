import { Link } from "react-router-dom"
import { useEffect } from "react"

const AnimazioneLittleList = () => {
   
    const handleScrollRight = () => {
        useEffect(() => {
            const $slider1 = document.querySelector(".slider1")
            const $afterArrow = document.querySelector(".after-arrow1")
            $afterArrow.addEventListener("click", () => {
                $slider1.scrollBy({
                    left: 350,
                    behavior: "smooth"
                })
            })
        })
    }

    const handleScrollLeft = () => {
        useEffect(() => {
            const $slider1 = document.querySelector(".slider1")
            const $beforeArrow = document.querySelector(".before-arrow1")
            $beforeArrow.addEventListener("click", () => {
                $slider1.scrollBy({
                    left: -350,
                    behavior: "smooth"
                })
            })
        })
    }
    

    const topFunction = () => {
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }


    return(
        <>
            <div className="w-full text-white">
                <div>Animazione</div>
                <div className= "relative">

                <div className="before-arrow1 absolute bg-trasparent w-[50px] h-full flex justify-center items-center z-50" onClick={handleScrollLeft()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>

                    <div className="slider1 flex gap-4 mt-2 overflow-auto overflow-x-hidden h-[225px]">
                        <a href="" className="w-[350px]">
                        <div className=" w-[350px] h-[100%] rounded-lg relative bg-[url('https://metropolitanmagazine.it/wp-content/uploads/2020/10/Gli-Incredibili-2.jpg')] bg-cover bg-center flex items-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col items-center">
                            <div className="w-fit mx-auto">Gli Incredibili</div>
                            <div className="flex items-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">7.8</div>
                            </div>
                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[350px]">
                    <div className="w-[350px] h-[100%] rounded-lg relative bg-[url('https://darumaview.it/wp-content/uploads/2017/05/SING-recensione-bluray-copertina-.jpg')] bg-cover bg-center flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Sing</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">7.7</div>
                            </div>
                        </div>
                    </div>
                        </a>
                        
                        <a href="" className="w-[350px]">
                    <div className="w-[350px] h-[100%] rounded-lg relative bg-[url('https://pad.mymovies.it/filmclub/2010/09/095/locandinapg1.jpg')] bg-cover bg-center flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Ribelle: The Brave</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">6.9</div>
                            </div>
                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[350px]">
                    <div className="w-[350px] h-[100%] rounded-lg relative bg-[url('https://images1.resources.foxtel.com.au/store2/mount1/16/4/9hoql.jpg')] bg-center bg-cover flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Spider-man: Into the Spider-Verse</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">9.1</div>
                            </div>
                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[350px]">
                    <div className="w-[350px] h-[100%] rounded-lg relative bg-[url('https://www.animeclick.it/immagini/anime/Up/cover/Up-cover.jpg')] bg-center bg-cover flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Up</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">8.1</div>
                            </div>
                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[350px]">
                    <div className="w-[350px] h-[100%] rounded-lg relative bg-[url('https://m.media-amazon.com/images/S/aplus-media/vc/f3c73362-9605-46df-a964-c0f87ea15084.__CR0,0,300,300_PT0_SX300_V1___.jpg')] bg-center bg-cover flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Toy Story 4</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">7.7</div>
                            </div>
                        </div>
                    </div>
                        </a>
                    
                        <Link to={"/animazione"} onClick={topFunction} className="w-[100px] rounded-lg mr-8 flex items-center bg-[RGB(255,187,56)]  justify-center text-black hover:text-white transition duration-200 ease-in">    
                                <div className="w-[100px] flex items-center justify-center ">
                                    <div className="h-[20px] w-fit text-inherit">See Other</div>    
                                </div>
                        </Link>

                        

                    <div className="after-arrow1 absolute end-0 bg-trasparent w-[50px] h-full z-10 flex justify-center items-center" onClick={handleScrollRight()}>
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


export default AnimazioneLittleList