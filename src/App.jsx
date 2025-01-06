import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./Pages/Gallery";

// Lazy loading for components
const Layout = React.lazy(() => import("./Components/Layout"));
const Home = React.lazy(() => import("./Pages/Home"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
const Clients = React.lazy(() => import("./Pages/Clients"));
const Products = React.lazy(() => import("./Pages/Products"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/our-clients" element={<Clients />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
