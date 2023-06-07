
const OurRaccomandation = () => {
    return(
        <>
            <div className="w-full h-72 mt-10 flex flex-col align-center justify-center">
                <div className="text-white">Our Raccomandation</div>
                <div className="w-full h-[210px] relative mt-2 bg-[url('https://static.sky.it/images_static/tg24/spettacolo/2019/08/14/James_Cameron/James_Cameron_Avatar.jpg.transform/hero-tablet/ffd5e21ae3ab3803fee4805ee5532d1bc3304f7a/img.jpeg')] bg-center bg-cover bg-no-repeat border-2 rounded-lg border-yellow-400">
                    <div className="flex absolute w-[50px] h-[50px] bottom-[10px] left-[10px] hover:fill-yellow-400 hover:text-yellow-400">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	                    C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	                    c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>

                        <div className="text-sm ">8,8</div>
                    </div>
                    <div className="flex absolute w-[140px] h-[40px] bottom-[10px] right-[10px] fill-yellow-400">
                        <div className="w-1/3 h-full flex align-center justify-center">
                            <button className="w-full h-full">
                                <svg height="100%" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 26h-12v12h-4v-12h-12v-4h12v-12h4v12h12v4z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
                            </button>
                        </div>
                        <div className="w-1/3 h-full">
                            <button className="w-full h-full">
                                <svg className="text-yellow-400 fill-yellow-400" class="feather feather-users" fill="none" height="100%" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </button>
                        </div>
                        <div className="w-1/3 h-full">
                            <button className="w-full h-full">
                                <svg className="text-yellow-400" fill="none" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5Z" fill="currentColor" fill-rule="evenodd"/><path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurRaccomandation