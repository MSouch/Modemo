import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import LandingPage from "./components/pages/LandingPage";
import SolutionsPage from "./components/pages/SolutionsPage";
import HowItWorksPage from "./components/pages/HowItWorksPage";
import IndustriesPage from "./components/pages/IndustriesPage";
import ResourcesPage from "./components/pages/ResourcesPage";
import PricingPage from "./components/pages/PricingPage";

export default function App() {
  console.log("App component is rendering!");
  
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
