import { Link } from "react-router-dom"
import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";

const Drammatico = () => {
    const topFunction = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }

    return(
        <>
        <Sidebar/>
        <Navbar/>
            <div className="flex item-center justify-center mt-10 text-[RGB(255,187,56)] pt-[50px] pb-[30px]">
                <div className="flex border border-black w-[870px] gap-5 flex-wrap">

                <div className="w-[100%] flex flex-wrap gap-5">

                <a href="" className="w-[23.25%] hover:text-white transition duration-300 ease-in-out">
                    <div className="w-[100%] h-[250px] rounded-lg relative bg-[url('https://pad.mymovies.it/filmclub/2003/09/001/covermd_home.jpg')] bg-cover bg-center flex align-center justify-center border border-[RGB(255,187,56)]">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Pirati dei Caraibi</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">8.1</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="w-[100%] h-[250px] border border-[RGB(255,187,56)] rounded-lg relative bg-[url('https://occ-0-395-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf2NpNhZsRSLwu3n0KhysCBpHNRlTQu86BLXuxSsleAMrjLNF6G0COGO2-s8YUywD64vHPiX5knGmTkMgF6A002TGi6eilpE329N.jpg?r=7c6')] bg-cover bg-center flex align-center justify-center">
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
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="w-[100%] border border-[RGB(255,187,56)] h-[250px] rounded-lg relative bg-[url('https://www.sorrisi.com/wp-content/uploads/2019/07/jumanji-the-next-level.jpg')] bg-cover bg-center flex align-center justify-center">
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
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="w-[100%] border border-[RGB(255,187,56)] h-[250px] rounded-lg relative bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlT9wIvFh5V9NIk024kJ4F_STBlsCCi1ilMQ0_Tu12D9M09pQ')] bg-cover bg-center flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Avengers: END GAME</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">8.7</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="border border-[RGB(255,187,56)] w-[100%] h-[250px] rounded-lg relative bg-[url('https://www.focus.it/site_stored/imgs/0004/011/spider-man-2002.1020x680.jpg')] bg-cover flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Spider-man</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">9.1</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="border border-[RGB(255,187,56)] w-[100%] h-[250px] rounded-lg relative bg-[url('https://media-assets.wired.it/photos/615c4917be48be4873e7de03/master/w_1600%2Cc_limit/wired_placeholder_dummy.png')] bg-cover bg-center flex align-center justify-center">
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
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="border border-[RGB(255,187,56)] w-[100%] h-[250px] rounded-lg relative bg-[url('https://pad.mymovies.it/filmclub/2017/10/059/coverlg_home.jpg')] bg-cover bg-right flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Fast & Furious</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">6.8</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out" >
                    <div className="border border-[RGB(255,187,56)] w-[100%] h-[250px] rounded-lg relative bg-[url('https://mr.comingsoon.it/imgdb/locandine/big/61641.jpg')] bg-cover bg-center flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Memory</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">7.2</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="border border-[RGB(255,187,56)] w-[100%] h-[250px] rounded-lg relative bg-[url('https://www.lascimmiapensa.com/wp-content/uploads/2020/03/5VvepiOtW4aJYRnGfPP7IyA58lv-2-scaled.jpg')] bg-cover bg-center flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Herry Potter</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">7.7</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="border border-[RGB(255,187,56)] w-[100%] h-[250px] rounded-lg relative bg-[url('https://pad.mymovies.it/filmclub/2004/06/506/locandinapg9.jpg')] bg-cover bg-center flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Titanic</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">8.0</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="border border-[RGB(255,187,56)] w-[100%] h-[250px] rounded-lg relative bg-[url('https://pad.mymovies.it/filmclub/2017/10/025/locandina.jpg')] bg-cover bg-center flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Halloween</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">7.6</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="border border-[RGB(255,187,56)] w-[100%] h-[250px] rounded-lg relative bg-[url('https://mr.comingsoon.it/imgdb/locandine/big/57933.jpg')] bg-cover bg-center flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Batman</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">8.1</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="border border-[RGB(255,187,56)] w-[100%] h-[250px] rounded-lg relative bg-[url('https://sm.ign.com/t/ign_it/screenshot/default/thor-1-1_z8u5.1280.jpg')] bg-cover bg-center flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Thor: Love and Thunder</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">7.6</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="border border-[RGB(255,187,56)] w-[100%] h-[250px] rounded-lg relative bg-[url('https://cdn.bestmovie.it/wp-content/uploads/2023/01/star-wars.jpg')] bg-cover bg-center flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto text-sm">Star Wars: L'ascesa di Skywalker</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">8.2</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="border border-[RGB(255,187,56)] w-[100%] h-[250px] rounded-lg relative bg-[url('https://api.superguidatv.it/v1/movies/10785/cover?width=240')] bg-cover bg-center flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Iron Man</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">8.5</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                        <a href="" className="w-[23.25%]  hover:text-white transition duration-300 ease-in-out">
                    <div className="border border-[RGB(255,187,56)] w-[100%] h-[250px] rounded-lg relative bg-[url('https://www.stardust.it/uploads/img/movie/poster/84a60b3a20d20ec90cacca62641848591555193011.jpeg')] bg-cover bg-center flex align-center justify-center">
                        <div className="absolute  bottom-[10px] w-fit h-[45px] flex flex-col align-center">
                            <div className="w-fit mx-auto">Ritorno al Futuro</div>
                            <div className="flex align-center justify-center">
                                <div className="w-[20px] h-[20px]">
                                    <svg className="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                                C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                                c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>
                                </div>
                                <div className="text-sm">7.1</div>
                            </div>
                        </div>
                        <div className="absolute hover:stroke-white stroke-[rgb(255,187,65)] transition duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[210px] left-[60px] w-[35px] h-[35px] stroke-inherit z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>

                        </div>
                    </div>
                        </a>

                </div>

                     <div className="w-[100%] flex items-center justify-center text-2xl space-x-2">
                        <div>1</div>
                        <Link to={"/OthersSecondPage"} onClick={topFunction} >
                            <div>»</div>
                        </Link>
                     </div>

                </div>
            </div>
        </>
    )
}

export default Drammatico