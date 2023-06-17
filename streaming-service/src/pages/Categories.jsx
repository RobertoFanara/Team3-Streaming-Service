import OurRaccomandation from "../components/Category/OurRaccomandation"
import OthersLittleList from "../components/Category/Others/OthersLittleList"


const Categories = () => {
    return(
        <>
        <div className="flex item-center justify-center mt-10 ">
            <div className="flex flex-col border border-black w-[870px] gap-8">
                <OurRaccomandation />
                <OthersLittleList />               
            </div>
        </div>
        </>
    )
}

export default Categories
