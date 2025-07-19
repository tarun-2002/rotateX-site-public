import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SmartSection from "./components/SmartSection";
import ControlSection from "./components/ControlSection";
import StatsSection from "./components/StatsSection";
import SaveBigSection from "./components/SaveBigSection";
import GuaranteeSection from "./components/GuaranteeSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import QuestionSection from "./components/QuestionSection";
import FooterSection from "./components/FooterSection";
import WaitlistPage from "./components/WaitlistPage";

import Steps from "./components/stepsComponents/Steps";
import Resources from "./components/resourcesAndToolsComponents/Home";
import { Routes, Route } from "react-router-dom";
import CompareReturns from "./components/CompareReturns";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <SmartSection />
              <ControlSection />
              <StatsSection />
              <CompareReturns />
              <SaveBigSection />
              <GuaranteeSection />
              <TestimonialsSection />
              <CTASection />
              <FAQSection />
              <QuestionSection />
              <FooterSection />
            </>
          }
        />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path='/steps' element={<Steps />} />
        <Route path='/resources-tools' element={<Resources />} />
      </Routes>
    </div>
  );
}