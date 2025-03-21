import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Eligibility from "./components/Eligibility";
import ContactComponent from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorksSection";
import FAQ from "./components/FAQ";

// Color palette
const colors = {
  primary: "orange-500",
  primaryLight: "orange-200",
  primaryDark: "orange-700",
  secondary: "gray-600",
  accent: "orange-600",
  white: "white",
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading resources
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src="/logo.svg"
            alt="KamChei"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar colors={colors} />

        {/* Main Content with Padding */}
        <Routes>
          <Route
            path="/"
            element={
              <main className="w-full">
                <Home colors={colors} />
                <HowItWorks />
                <Eligibility colors={colors} />
              </main>
            }
          />

          {/* Routes for all other pages with flexbox centering */}
          <Route
            path="/faq"
            element={
              <main className="flex flex-grow w-full items-center justify-center bg-gray-50">
                <FAQ colors={colors} />
              </main>
            }
          />
          <Route
            path="/how-it-works"
            element={
              <main className="flex flex-grow w-full items-center justify-center bg-gray-50">
                <HowItWorks />
              </main>
            }
          />
          <Route
            path="/eligibility"
            element={
              <main className="flex flex-grow w-full items-center justify-center bg-gray-50">
                <Eligibility colors={colors} />
              </main>
            }
          />
          <Route
            path="/contact"
            element={
              <main className="flex flex-grow w-full items-center justify-center bg-gray-50">
                <ContactComponent colors={colors} />
              </main>
            }
          />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
