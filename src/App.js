import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Developer from "./components/Developer";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingMessage from "./components/FloatingMessage";
import Seo from "./components/Seo";
import {
  AboutPage,
  BeldangaPage,
  MurshidabadPage,
  NotFoundPage,
  PrivacyPolicyPage,
  ProfilePage,
  RefundPolicyPage,
  TermsPage,
} from "./pages/SeoPages";
import { organizationSchema, pageMeta, personSchema, professionalServiceSchema, SITE_URL } from "./seoConfig";
import "./App.css";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Ahsanur Web Solution",
      description:
        "Ahsanur Web Solution is a website development service based in Beldanga, Murshidabad.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    organizationSchema,
    personSchema,
    professionalServiceSchema,
  ],
};

const routes = {
  "/about": <AboutPage />,
  "/ahsanur-rahaman": <ProfilePage />,
  "/website-development-beldanga": <BeldangaPage />,
  "/website-development-murshidabad": <MurshidabadPage />,
  "/privacy-policy": <PrivacyPolicyPage />,
  "/refund-policy": <RefundPolicyPage />,
  "/terms-and-conditions": <TermsPage />,
};

function App() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const routedPage = routes[pathname];

  useEffect(() => {
    if (pathname !== "/" || !window.location.hash) {
      return undefined;
    }

    const targetId = window.location.hash.slice(1);
    const timer = window.setTimeout(() => {
      const target = document.getElementById(targetId);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (routedPage) {
    return (
      <div className="site-shell">
        <Navbar />
        {routedPage}
        <Footer />
        <FloatingMessage />
      </div>
    );
  }

  if (pathname !== "/") {
    return (
      <div className="site-shell">
        <Navbar />
        <NotFoundPage />
        <Footer />
        <FloatingMessage />
      </div>
    );
  }

  return (
    <div className="site-shell">
      <Seo meta={pageMeta.home} schema={homeSchema} />
      <Navbar />
      <Home />
      <Developer />
      <Pricing />
      <Services />
      <Projects />
      <Skills />
      <Qualification />
      <Contact />
      <Footer />
      <FloatingMessage />
    </div>
  );
}

export default App;
