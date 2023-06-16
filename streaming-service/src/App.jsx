import "./index.css"
import Homepage from "./pages/Homepage"
import Categories from "./pages/Categories"
import Profile from "./pages/Profile"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {


  return(
    <>
    <BrowserRouter>
      <Sidebar/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="categories" element={<Categories />} />
      <Route path="profile" element={<Profile />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
