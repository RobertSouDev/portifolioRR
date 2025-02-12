import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Portifolio from "./pages/Portifolio";
import Sobre from "./pages/Sobre";
import NoPage from "./pages/NoPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


export default function App() {
  return (

    <BrowserRouter>
    <NavBar/>
      <Routes>


          <Route index element={<Home />} />
          <Route path="portifolio" element={<Portifolio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="*" element={<NoPage />} />
   
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
