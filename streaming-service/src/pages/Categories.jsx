import OurRaccomandation from "../components/OurRaccomandation"
import Others from "../components/Others"

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
