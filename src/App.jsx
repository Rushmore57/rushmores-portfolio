import Nav from "./components/Nav";
import Services from "./components/Services";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Description from "./components/Description";
import ResumeContainer from "./components/ResumeContainer";
import HireMeSection from "./components/HireMeSection";
import Footer from "./components/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";                                 

const App =() => {
    return (
        <main data-theme ="lemonade">
            <Header/>
            <Nav/>
            <Description/>
            <ResumeContainer/>
            <Stats/>
            <Services/>
            <HireMeSection/>
            <Footer/>
        </main>

    )
}

export default App;