/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import ArticleView from './pages/ArticleView';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Marketing Automation & Tracking Initialization
function Tracking() {
  const location = useLocation();

  useEffect(() => {
    // 1. Google Analytics 4 (GA4) Page View
    if (window.gtag) {
      window.gtag('config', window.GA4_ID, {
        page_path: location.pathname + location.search,
      });
    }

    // 2. Meta Pixel Page View
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    // 3. simulated GTM / GAds Logic
    console.log(`[Tracking] Page view tracked for: ${location.pathname}`);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Tracking />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<ArticleView />} />
          {/* Blog Index Link can also go to Home or a separate list */}
          <Route path="/blog" element={<Home />} /> 
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

// Global window extensions for tracking scripts
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    GA4_ID: string;
    GTM_ID: string;
    FB_PIXEL_ID: string;
  }
}

