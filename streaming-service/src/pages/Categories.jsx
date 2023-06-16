import OurRaccomandation from "../components/OurRaccomandation"
import Others from "../components/Others"


const Categories = () => {
    return(
        <>
        <div className="flex item-center justify-center ">
            <div className="flex flex-col border border-black w-[870px] gap-8">
                <OurRaccomandation />
                <Others />               
            </div>
        </div>
        </>
    )
}

export default Categories
