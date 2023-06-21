import { useEffect } from "react"
import { Link } from "react-router-dom"

const ComicoLittleList = () => {

    const handleScrollRight = () => {
        useEffect(() => {
            const $slider = document.querySelector(".slider3")
            const $afterArrow = document.querySelector(".after-arrow3")
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
            const $slider = document.querySelector(".slider3")
            const $beforeArrow = document.querySelector(".before-arrow3")
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


    return(
        <>
            <div className="w-full text-white">
                <div>Comico</div>
                <div className= "relative">

                <div className="before-arrow3 absolute bg-trasparent w-[50px] h-full flex justify-center items-center z-50" onClick={handleScrollLeft()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>

                    <div className="slider3 flex gap-4 mt-2 overflow-auto overflow-x-hidden h-[225px]">
                        <a href="" className="w-[350px]">
                        <div className=" w-[350px] h-[100%] rounded-lg relative bg-[url('https://pad.mymovies.it/filmclub/2003/09/001/covermd_home.jpg')] bg-cover flex items-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col items-center">
                            <div className="w-fit mx-auto">Pirati dei Caraibi</div>
                            <div className="flex items-center justify-center">
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
                    <div className="w-[350px] h-[100%] rounded-lg relative bg-[url('https://occ-0-395-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf2NpNhZsRSLwu3n0KhysCBpHNRlTQu86BLXuxSsleAMrjLNF6G0COGO2-s8YUywD64vHPiX5knGmTkMgF6A002TGi6eilpE329N.jpg?r=7c6')] bg-cover flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Don't Look Up</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">7.1</div>
                            </div>
                        </div>
                    </div>
                        </a>
                        
                        <a href="" className="w-[350px]">
                    <div className="w-[350px] h-[100%] rounded-lg relative bg-[url('https://www.sorrisi.com/wp-content/uploads/2019/07/jumanji-the-next-level.jpg')] bg-cover flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Jumanji</div>
                            <div className="flex align-center justify-center">
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
                    <div className="w-[350px] h-[100%] rounded-lg relative bg-[url('https://www.focus.it/site_stored/imgs/0004/011/spider-man-2002.1020x680.jpg')] bg-cover flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Spiderman</div>
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
                    <div className="w-[350px] h-[100%] rounded-lg relative bg-[url('https://media-assets.wired.it/photos/615c4917be48be4873e7de03/master/w_1600%2Cc_limit/wired_placeholder_dummy.png')] bg-cover flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Interstellar</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">9.8</div>
                            </div>
                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[350px]">
                    <div className="w-[350px] h-[100%] rounded-lg relative bg-[url('https://pad.mymovies.it/filmclub/2017/10/059/coverlg_home.jpg')] bg-cover flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Fast & Furious 9</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">6.8</div>
                            </div>
                        </div>
                    </div>
                        </a>
                    
                        <Link to={"/comico"} onClick={topFunction} className="w-[100px] rounded-lg mr-8 flex items-center bg-[RGB(255,187,56)]  justify-center text-black hover:text-white transition duration-200 ease-in">    
                                <div className="w-[100px] flex items-center justify-center ">
                                    <div className="h-[20px] w-fit text-inherit">See Other</div>    
                                </div>
                        </Link>

                        

                    <div className="after-arrow3 absolute end-0 bg-trasparent w-[50px] h-full z-10 flex justify-center items-center" onClick={handleScrollRight()}>
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


export default ComicoLittleList