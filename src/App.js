import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import BlogList from "./blog/BlogList";
import BlogPost from "./blog/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import TrainingResources from "./pages/TrainingResources";
import BeginnerGuide from "./pages/BeginnerGuide";

import "./styles/main.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="/resources" element={<TrainingResources />} />
            <Route path="/beginner-guide" element={<BeginnerGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
