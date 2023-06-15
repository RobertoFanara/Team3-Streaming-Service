import OurRaccomandation from "../components/OurRaccomandation"
import Others from "../components/Others"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Categories = () => {
    return(
        <>
        <Navbar />
        <Sidebar />
        <div className="flex item-center justify-center ">
            <div className="border border-black h-screen w-[870px]">
                <OurRaccomandation />
                <Others />
            </div>
        </div>
        </>
    )
}

export default Categories
