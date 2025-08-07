import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ImpactSection } from "./components/ImpactSection";
import { MVPInteractiveSection } from "./components/MVPInteractiveSection";
import { UserStorySection } from "./components/UserStorySection";
import { CTASection } from "./components/CTASection";
import Footer from "./components/Footer";

// Lazy load the CV Builder for better performance
const CVBuilder = lazy(() => import("./components/cv-builder/CVBuilder").then(module => ({ default: module.CVBuilder })));

function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <MVPInteractiveSection />
      <UserStorySection />
      <CTASection />
    </>
  );
}

export default function App() {
  console.log('App rendered');
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv-builder" element={
          <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading CV Builder...</p>
              </div>
            </div>
          }>
            <CVBuilder />
          </Suspense>
        } />
      </Routes>
      <Footer />
    </div>
  );
}