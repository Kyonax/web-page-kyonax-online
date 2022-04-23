/* Web Pages Kyonax*/
import HomePage from "./pages/Kyonax/HomePage";
import AcercaDePage from "./pages/Kyonax/AcercaDePage";
import ServiciosPage from "./pages/Kyonax/ServiciosPage";
import TermsPage from "./pages/Kyonax/TermsPage";
import PrivacidadPage from "./pages/Kyonax/PrivacidadPage";
import RoadmapPage from "./pages/Kyonax/RoadmapPage";
/* Web Pages DotKyo*/
import HomePageDotKyo from "./pages/DotKyo/HomePage";
/*Locale and Libraries*/
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Kyonax */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/roadmap" element={<RoadmapPage/>} ></Route>
        <Route path="/acerca_de_kyonax" element={<AcercaDePage/>} />
        <Route path="/servicios" element={<ServiciosPage/>} />
        <Route path="/terms" element={<TermsPage/>} />
        <Route path="/privacidad" element={<PrivacidadPage/>} />
        {/* Dot Kyo */}
        <Route path="/dot_kyo" element={HomePageDotKyo()} />
        {/* Lost In the Multiverse */}
        {/* KyoNFT */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
