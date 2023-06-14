import "./index.css"
import Homepage from "./pages/Homepage"
import Categories from "./pages/Categories"
import Profile from "./pages/Profile"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ChiSiamo from './pages/ChiSiamo';
import Contattaci from './pages/Contattaci';
import Footer from './components/Footer'

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="categories" element={<Categories />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/chi-siamo" element={<ChiSiamo />} />
      <Route path="/contattaci" element={<Contattaci />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
