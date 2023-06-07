import { useState } from "react"


function Sidebar(){
    const [isEditing, setIsEditing] = useState(false)

    const setEditingHandler = () => {
        if (isEditing === false){
            setIsEditing(true)
        } else {
            setIsEditing(false)
        }
    }
    return<>
            <div className="absolute top-0 flex">
                {isEditing &&
                    <aside className="flex w-72 flex-col space-y-2 border border-transparent ease-in-out duration-500 bg-[#1c1c1c] p-2 h-[100vh] text-white">
                        <div className="flex items-center mb-5">
                            <label className="mr-3">Cerca amici:</label>
                            <input type="search" className="bg-transparent p-1 rounded-lg border border-gray-400 w-[60%]"/>
                        </div>
                        <div href="#" className="flex items-center space-x-1 px-2 py-3 text-white">
                            <span>Amici online:</span>
                        </div>
                        <div className="flex h-20 items-center gap-5 text-white">
                            <div className="rounded-full bg-white h-14 w-14"></div>
                            <h3 className="font-bold">Ciccio Pasticcio</h3>
                            <div className="rounded-full bg-green-500 h-3 w-3"></div>
                        </div>
                    </aside>
                }
                <span className="text-[#ffbb38]" onClick={setEditingHandler}>
                    {!isEditing && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-14 w-14 bg-[#1c1c1c] hover:bg-gray-800 cursor-pointer rounded-tr-md rounded-br-md p-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>}
                    {isEditing &&
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-14 w-14 bg-[#1c1c1c] hover:bg-gray-800 cursor-pointer rounded-tr-md rounded-br-md p-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    }
                </span>
            </div>
            </>
}

export default Sidebar