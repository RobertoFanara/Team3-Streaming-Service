import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
function Homepage() {
    return(
      <>
      <div className="bg-black h-[100vh]">
        <Navbar />
        <Sidebar/>
      </div>
      </>
    )
  }

  export default Homepage