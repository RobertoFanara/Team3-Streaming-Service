import Homepage from "./pages/Homepage"
import Categories from "./pages/Categories"
import Profile from "./pages/Profile"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Others from "./components/Category/Others/Others"
import OtherSecondPage from "./components/Category/Others/OtherSecondPage"
import "./index.css"
import "./components/scrollbar.css"


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
      <Route path="others" element={<Others />} />
      <Route path="othersSecondPage" element={<OtherSecondPage />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
