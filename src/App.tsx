import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PricePage = lazy(() => import("./pages/PricePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const CalcPage = lazy(() => import("./pages/Calculator/CalcPage"));
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/prices" element={<PricePage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/calc" element={<CalcPage />} />
      </Routes>
      {/* </Suspense> */}
    </Layout>
  );
}

export default App;
