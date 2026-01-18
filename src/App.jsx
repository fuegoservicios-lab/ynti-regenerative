import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import BlogPost from './pages/BlogPost';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ExperienceDetailPage from './pages/ExperienceDetailPage';


// Component to handle scroll to top on route change (Force Update)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/historias-de-exito" element={<SuccessStoriesPage />} />
            <Route path="/experiencia/:id" element={<ExperienceDetailPage />} />
            <Route path="/privacidad" element={<PrivacyPage />} />
            <Route path="/terminos" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
