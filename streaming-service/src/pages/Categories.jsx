import OurRaccomandation from "../components/OurRaccomandation"
import Others from "../components/Others"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

const Categories = () => {
    return(
        <>
        <Navbar />
        <Sidebar />
        <div className="flex item-center justify-center ">
            <div className="flex flex-col border border-black w-[870px] gap-8">
                <OurRaccomandation />
                <Others />               
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Categories
