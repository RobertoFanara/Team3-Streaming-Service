function FilmDetails(props){

    return <>
        <div className={`fixed top-0 z-30 h-screen w-full ${props.detailsEditing ? 'opacity-100 duration-500 ease-in-out' : 'opacity-0 duration-500 ease-in-out' } transition-opacity`}>
            <div className="absolute top-0 z-30 bg-black/75 h-full w-full flex justify-center items-center rounded-md">
                <div className="h-2/3 w-2/3 border-2 border-yellow-600 flex rounded-lg relative z-10">
                    <div className='text-[#ffbb38] absolute top-0 right-0' onClick={() => props.closeDetails()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 hover:bg-gray-800 cursor-pointer rounded-md p-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>
                    <div className={`bg-black z-30 h-full w-3/5 rounded-l-md`} style={{background: `url('https://image.tmdb.org/t/p/original/${props.img}')`, backgroundSize: 'cover'}}></div>
                    <div className='p-5 flex flex-col w-2/5 justify-between bg-black rounded-tr-md rounded-br-md'>
                        <div className='overflow-auto'>
                            <h3 className="text-[#ffbb38] font-semibold text-lg">{props.title}</h3>
                            <div className='mt-4'>
                                <h5 className='text-white'>Trama:</h5>
                                <p className='text-white text-[14px] mt-2'>{props.trama}</p>
                            </div>
                        </div>
                        <div className="flex text-[#ffbb38] justify-between">
                            <div>
                            <p>Voto - {props.vote} </p>
                            <p>Data d'uscita: {props.releaseDate}</p>
                           </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[50px] h-[50px] stroke-[rgb(255,187,65)] z-20 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
}

export default FilmDetails