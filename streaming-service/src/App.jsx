import "./index.css"
import Homepage from "./pages/Homepage"
import Categories from "./pages/Categories"
import Profile from "./pages/Profile"
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {


  return(
    <>
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Homepage/>} />
      <Route path="categories" element={<Categories />} />
      <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
