/* Web Pages Kyonax*/
import HomePage from "./pages/Kyonax/HomePage";
import AcercaDePage from "./pages/Kyonax/AcercaDePage";
import DependenciasPage from "./pages/Kyonax/DependenciasPage";
import TermsPage from "./pages/Kyonax/TermsPage";
import PrivacidadPage from "./pages/Kyonax/PrivacidadPage";
import RoadmapPage from "./pages/Kyonax/RoadmapPage";
/* Web Pages DotKyo*/
import HomePageDotKyo from "./pages/DotKyo/HomePage";
/* Web Pages Lost In The Multiverse*/
import HomePageLostInTheMultiverse from "./pages/LostInTheMultiverse/HomePage"
/* Web Pages KyoNFT*/
import HomePageKyoNFT from "./pages/KyoNFT/HomePage"
/*Locale and Libraries*/
import { HashRouter ,BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (    
    
    <HashRouter>
      <Routes>
        {/* Kyonax */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/roadmap" element={<RoadmapPage/>} ></Route>
        {/*<Route path="/acerca_de_kyonax" element={<AcercaDePage/>} />*/}
        <Route path="/dependencias" element={<DependenciasPage/>} />
        <Route path="/terms" element={<TermsPage/>} />
        <Route path="/privacidad" element={<PrivacidadPage/>} />
        {/* Dot Kyo */}
        <Route path="/dot_kyo" element={<HomePageDotKyo/>} />
        {/* Lost In the Multiverse */}
        <Route path="/kyonax_lost_in_the_multiverse" element={<HomePageLostInTheMultiverse/>} />
        {/* KyoNFT */}
        <Route path="/kyo_nft" element={<HomePageKyoNFT/>} />
      </Routes>
    </HashRouter>
  
  );
}

export default App;
