import OurRaccomandation from "../components/Category/OurRaccomandation"
import OthersLittleList from "../components/Category/Others/OthersLittleList"
import AnimazioneLittleList from "../components/Category/Animazione/AnimazioneLittleList"
import AvventuraLittleList from "../components/Category/Avventura/AvventuraLittleList"
import ComicoLittleList from "../components/Category/Comico/ComicoLittleList"
import DrammaticoLittleList from "../components/Category/Drammatico/DrammaticoLittleList"


const Categories = () => {
    return(
        <>
        <div className="flex item-center justify-center mt-10 ">
            <div className="flex flex-col border border-black w-[870px] gap-8">
                <OurRaccomandation />
                <OthersLittleList />      
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
