import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MobileHeader from "./components/Header/MobileHeader";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import LoadingSpinner from "./components/common/LoadingSpinner";
import { AppShell } from "@mantine/core";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PricePage = lazy(() => import("./pages/PricePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const CalcPage = lazy(() => import("./pages/CalcPage"));
function App() {
  return (
    <AppShell>
      <ScrollProgress />
      <MobileHeader />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/prices" element={<PricePage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/calc" element={<CalcPage />} />
        </Routes>
      </Suspense>
    </AppShell>
  );
}

export default App;
