import { useState } from "react"
import FilmDetails from "../components/FilmDetails"
import OurRaccomandation from "../components/Category/OurRaccomandation"
import OthersLittleList from "../components/Category/Others/OthersLittleList"
import AnimazioneLittleList from "../components/Category/Animazione/AnimazioneLittleList"
import AvventuraLittleList from "../components/Category/Avventura/AvventuraLittleList"
import ComicoLittleList from "../components/Category/Comico/ComicoLittleList"
import DrammaticoLittleList from "../components/Category/Drammatico/DrammaticoLittleList"
import AzioneLittleList from "../components/Category/Azione/AzioneLittleList"


const Categories = () => {
    const [detailsEditing, setDetailsEditing] = useState(false);
    const setDetailsEditingHandler = () => {
        if (detailsEditing === false){
            setDetailsEditing(true)
        } else {
            setDetailsEditing(false)
        }
      }
    return(
        <>
         { detailsEditing && <FilmDetails closeDetails={setDetailsEditingHandler}/> }
        <div className="flex item-center justify-center mt-10 py-[30px]">
            <div className="flex flex-col border border-black w-[870px] gap-8">
                <OurRaccomandation click={setDetailsEditingHandler}/>
                <OthersLittleList />      
                <AzioneLittleList/>
                <AnimazioneLittleList />
                <AvventuraLittleList />
                <ComicoLittleList />
                <DrammaticoLittleList />

            </div>
        </div>
        </>
    )
}

export default Categories
