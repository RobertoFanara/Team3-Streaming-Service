import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
function Homepage() {
    return(
      <>
      <div className="bg-black">
        <Navbar />
        <Sidebar/>
        <div className="example">
        homepage
        </div>
      </div>
      </>
    )
  }

  export default Homepage