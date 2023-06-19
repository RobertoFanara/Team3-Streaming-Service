import Homepage from "./pages/Homepage"
import Categories from "./pages/Categories"
import Profile from "./pages/Profile"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Others from "./components/Category/Others/Others"
import OtherSecondPage from "./components/Category/Others/OtherSecondPage"
import ChiSiamo from './pages/ChiSiamo';
import Contattaci from './pages/Contattaci';
import TerminiDiServizio from './pages/TerminiDiServizio';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Catalogo from './pages/Catalogo';
import "./index.css"
import "./components/scrollbar.css"
import Animazione from "./components/Category/Animazione/Animazione"
import Avventura from "./components/Category/Avventura/Avventura"
import Comico from "./components/Category/Comico/Comico"
import Drammatico from "./components/Category/Drammatico/Drammatico"

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
      <Route path="animazione" element={<Animazione />} />
      <Route path="avventura" element={<Avventura />}/>
      <Route path="drammatico" element={<Drammatico />}/>
      <Route path="comico" element={<Comico />}/>
      <Route path="/chi-siamo" element={<ChiSiamo />} />
      <Route path="/contattaci" element={<Contattaci />} />
      <Route path="/termini-servizio" element={<TerminiDiServizio />} />
      <Route path="/policy" element={<PrivacyPolicy />} />
      <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
