import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import App from "./App";
import Admin from "./pages/Admin";
import AlertsSettings from "./pages/AlertsSettings";
import GtaRelease from "./pages/GtaRelease";
import NotFound from "./pages/NotFound";
import "./index.css";
import GtaMap from "./pages/GtaMap";
import GtaCharacters from "./pages/GtaCharacters";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/alerts" element={<AlertsSettings />} />
        <Route path="/gta-6-release-date" element={<GtaRelease />} />
        <Route path="/gta-6-characters" element={<GtaCharacters />} />
        <Route path="/gta-6-map" element={<GtaMap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);