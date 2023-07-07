import { useState } from "react"
import { Link } from "react-router-dom"
import profileImg from '../assets/images/miles-profile.webp'

const friends = [
    {
        name: "Alfio Puglisi",
        imgprofile: "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/279222191_1904293366431839_7754633369684283708_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hhhkt3oCMXAAX8G13ML&_nc_ht=scontent-fco2-1.xx&oh=00_AfBxQEoXmAbdd8fI1_473LzK7k145xiVlkIBSl2F7z6Q0g&oe=64989F7B",
        online: true
    },
    {
        name: "Roberto Fanara",
        imgprofile: "https://media.licdn.com/dms/image/D4E35AQHAg8qygekrWg/profile-framedphoto-shrink_800_800/0/1684752485758?e=1688806800&v=beta&t=QwA1TF3drTtKUiusMZAYcdsyrVISdY3BVs-ADF8Kv4w",
        online: true
    },
    {
        name: "Paolo Gallitelli",
        imgprofile: "https://media.licdn.com/dms/image/D4D35AQFljUkQCI4c1w/profile-framedphoto-shrink_800_800/0/1684314304253?e=1688806800&v=beta&t=A8jF403AHGoGLjEkwyB1-Ezn9ZWxT3dHs3X0AG3HYoI",
        online: true
    },
    {
        name: "Gabrimarche_",
        imgprofile: profileImg,
        online: true
    },
    {
        name: "Danilo Carbone",
        imgprofile: "https://media.licdn.com/dms/image/D4D35AQHcBE88bLjjQg/profile-framedphoto-shrink_800_800/0/1685623380714?e=1688806800&v=beta&t=u3BYD_ta29L2pP_Y4qxz9znpGjiLSESbEIEOD6TOepk",
        online: true
    },
    {
        name: "Giuseppe Bianconi",
        imgprofile: "https://media.licdn.com/dms/image/D4D35AQGfJ4tSAxl5SA/profile-framedphoto-shrink_800_800/0/1684178170263?e=1688806800&v=beta&t=IUriOJZlKBakQn-_drCz0PteCJ9Tt5vAFWgAOaCD4WI",
        online: true
    },
    {
        name: "Giovanna Catalano",
        imgprofile: "https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726_1280.jpg",
        online: true
    },
    {
        name: "Giuseppe Verdi",
        imgprofile: "https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_1280.jpg",
        online: true
    },
    {
        name: "Ciccio Pasticcio",
        imgprofile: "https://media.licdn.com/dms/image/D4D35AQHOVzGYRFWj_A/profile-framedphoto-shrink_800_800/0/1684174471975?e=1688806800&v=beta&t=Z9ycmvVJeZmouv3YWuzgmryTQ3MeHXQdjbVXWOxsMpI",
        online: true
    },
    {
        name: "Terence Hill",
        imgprofile: "https://scontent.fcta2-2.fna.fbcdn.net/v/t39.30808-6/312201420_648262233331148_4420671089054634775_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=6Ek-1GC-WLcAX927szE&_nc_ht=scontent.fcta2-2.fna&oh=00_AfB4W-krv5-1evAiVzHjUALY7M6VcdrmywFL55v5fezF7w&oe=64A43E1F",
        online: true
    },
    {
        name: "Bud Spencer",
        imgprofile: "https://scontent.fcta2-1.fna.fbcdn.net/v/t39.30808-6/355644899_813959903428955_5923515167126643360_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=okh-inT8MxAAX-cmGZH&_nc_ht=scontent.fcta2-1.fna&oh=00_AfBdmVBJhUuh_yjh-JLTN7jprt11bwK2wbbTGQveQrT1Aw&oe=64A5AEED",
        online: true
    }
]


function Sidebar(){
    const [isEditing, setIsEditing] = useState(false)
    const [searchFriend, setSearchFriend] = useState('')

    const setEditingHandler = () => {
        if (isEditing === false){
            setIsEditing(true)
        } else {
            setIsEditing(false)
        }
    }

    return<>
            <div className={`fixed top-0 ${isEditing ? "z-30" : "z-0"}`}>
                <div className="absolute top-0 flex">
                <aside className={`flex w-72 flex-col space-y-2 border border-transparent bg-[#1c1c1c] p-2 h-[100vh] text-white ease-in-out duration-500 ${isEditing ? "translate-x-0" : "-translate-x-full"} overflow-auto scroll-m-0`}>
                    <div className="flex items-center mb-5">
                        <label className="mr-3">Cerca amici:</label>
                        <input type="search" className="bg-transparent p-1 rounded-lg border border-gray-400 w-[60%]" value={searchFriend}onChange={event => setSearchFriend(event.target.value)}/>
                    </div>
                    <div href="#" className="flex items-center space-x-1 px-2 py-3 text-white">
                        <span>Amici online - {friends.length}</span>
                    </div>
                        <div className="overflow-auto">
                            {friends.filter(post => {
                                if (searchFriend === '') {
                                return post;
                            } else if (post.name.toLowerCase().includes(searchFriend.toLowerCase())) {
                                return post;
                                }
                            }).map((item, key) => {
                                return (
                                    <>
                                    {item.online && <>
                                        <Link to={`${item.name === 'Gabrimarche_' ? "/profile" : ''}`}>
                                        <div className="flex flex-column-reverse h-20 items-center gap-5 text-slate-200 hover:bg-[#2a2a2a] cursor-pointer rounded-md" key={key} onClick={setEditingHandler}>
                                        <img src={item.imgprofile} className="rounded-full h-16 w-16 bg-cover bg-center"/>
                                            <h3 className="font-bold text-sm">{item.name}</h3>
                                        {item.online && <div className="ml-auto mr-5 rounded-full bg-green-500 h-3 w-3"></div>}
                                        </div>
                                        </Link>
                                    </> }
                                    </>)
                            })}
                        </div>
                </aside>
                <span className={`text-[#ffbb38] ease-in-out duration-500 ${isEditing ? "translate-x-0" : "-translate-x-[288px]"}`} onClick={setEditingHandler}>
                    {!isEditing && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-14 w-14 bg-[#1c1c1c] hover:bg-[#2a2a2a] cursor-pointer rounded-tr-md rounded-br-md p-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>}
                    {isEditing &&
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-14 w-14 bg-[#1c1c1c] hover:bg-[#2a2a2a] cursor-pointer rounded-tr-md rounded-br-md p-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    }
                </span>
            </div>
            </div>
            </>
}

export default Sidebar;