import "./App.css";
import Header1 from "./components/Header/Header";
import HeaderENG from "./components/Header/HeaderENG";
import NavBar from "./components/NavBar/NavBar";
import { useSelector } from "react-redux";
import About from "./components/About/About";
import AboutENG from "./components/About/AboutENG";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SkillsESP from "./components/Skills/skills";
import SkillsENG from "./components/Skills/SkillsENG";
import Proyectos from "./components/Projects/Proyectos";
import ProyectosENG from "./components/Projects/ProyectoaENG";
import { Box } from "@mui/material";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/Footer";
import ContactENG from "./components/contact/contactENG";
function App() {
  const StateButton = useSelector((state) => state.traduction);
  return (
    <BrowserRouter>
      <Box className="App" sx={{ display: "block" }}>
        <NavBar className="Nav" />
        {!StateButton ? <Header1 /> : <HeaderENG />}
        {!StateButton ? <About /> : <AboutENG />}
        {!StateButton ? <SkillsESP /> : <SkillsENG />}
        {!StateButton ? <Proyectos /> : <ProyectosENG />}
        {!StateButton ? <Contact /> : <ContactENG />}
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
