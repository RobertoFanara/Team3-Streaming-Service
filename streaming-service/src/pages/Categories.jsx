import OurRaccomandation from "../items/OurRaccomandation"
import Others from "../items/Others"

const Categories = () => {
    return(
        <>
        <div className="flex align-center justify-center">
            <div className="border border-black h-screen w-96">
                <OurRaccomandation />
                <Others />               
            </div>
        </div>
        </>
    )
}

export default Categories