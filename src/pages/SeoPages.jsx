import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaHome, FaSearch, FaWhatsapp } from "react-icons/fa";
import Seo from "../components/Seo";
import {
  pageMeta,
  personSchema,
  organizationSchema,
  professionalServiceSchema,
  SITE_URL,
} from "../seoConfig";

const services = [
  "Website Design",
  "React Development",
  "WordPress Development",
  "PHP Development",
  "Business Websites",
  "Landing Pages",
  "Portfolio Websites",
  "Local SEO Website Setup",
  "Mobile Responsive Web Design",
];

const projects = [
  "silverfalcon.in",
  "themosquitosolution.com",
  "solaimanhumamhair.com",
  "feesbook.co.in",
  "beldangasamachar.com",
  "dgps.co.in",
  "docfiling.in",
  "goumatatazf.com",
  "mdrajabiri.com",
  "novaplastpipe.com",
  "raingo.in",
  "righten.in",
  "tsfabricationandengineer.com",
];

const faqs = [
  {
    q: "Who is Ahsanur Rahaman?",
    a: "Ahsanur Rahaman is a web developer based in Beldanga, Murshidabad and founder of Ahsanur Web Solution.",
  },
  {
    q: "What is Ahsanur Web Solution?",
    a: "Ahsanur Web Solution is a website design and development service focused on modern business websites, React websites, WordPress websites and local SEO-ready website setup.",
  },
  {
    q: "Does Ahsanur Web Solution build WordPress websites?",
    a: "Yes. WordPress business websites, service websites and content-managed pages are part of the services offered.",
  },
  {
    q: "Can local businesses get SEO-ready websites?",
    a: "Yes. The website structure, page content, metadata and local relevance can be planned for Beldanga, Murshidabad and nearby business searches.",
  },
];

const PageShell = ({ children, meta, schema }) => (
  <>
    <Seo meta={meta} schema={schema} />
    <main className="site-page">
      {children}
    </main>
  </>
);

const Hero = ({ kicker, title, lead, children }) => (
  <section className="section page-hero">
    <div className="section-inner">
      <p className="section-kicker">{kicker}</p>
      <h1 className="section-title">{title}</h1>
      <p className="section-lead">{lead}</p>
      {children}
    </div>
  </section>
);

const Cta = () => (
  <div className="page-actions">
    <a className="btn btn-primary" href="https://wa.me/917866030833" target="_blank" rel="noreferrer">
      <FaWhatsapp /> Chat on WhatsApp
    </a>
    <a className="btn btn-ghost" href="mailto:ahsanurr292@gmail.com">
      <FaEnvelope /> Email Ahsanur
    </a>
  </div>
);

const ServiceGrid = () => (
  <div className="grid seo-card-grid">
    {services.map((service) => (
      <article className="glass-card seo-card" key={service}>
        <h2 className="card-title">{service}</h2>
        <p className="card-text">
          {service} for businesses that need a clean online presence, mobile-friendly layout and practical launch support.
        </p>
      </article>
    ))}
  </div>
);

const FaqSection = () => (
  <section className="section">
    <div className="section-inner">
      <p className="section-kicker">FAQ</p>
      <h2 className="section-title">Common questions</h2>
      <div className="grid faq-grid">
        {faqs.map((item) => (
          <article className="glass-card seo-card" key={item.q}>
            <h3 className="card-title">{item.q}</h3>
            <p className="card-text">{item.a}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export const AboutPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      personSchema,
      professionalServiceSchema,
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about#aboutpage`,
        url: `${SITE_URL}/about`,
        name: pageMeta.about.title,
        description: pageMeta.about.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: [{ "@id": `${SITE_URL}/#organization` }, { "@id": `${SITE_URL}/#ahsanur-rahaman` }],
      },
    ],
  };

  return (
    <PageShell meta={pageMeta.about} schema={schema}>
      <Hero
        kicker="About"
        title="About Ahsanur Web Solution"
        lead="Ahsanur Web Solution builds clean, modern and SEO-ready websites for local businesses, creators and service brands."
      >
        <div className="about-page-grid">
          <figure className="portfolio-profile-card profile-page-photo">
            <img
              src="/ahsanur-rahaman-web-developer-beldanga.png"
              width="416"
              height="520"
              alt="Ahsanur Rahaman, web developer and founder of Ahsanur Web Solution in Beldanga, Murshidabad"
              title="Ahsanur Rahaman - Web Developer in Beldanga"
            />
            <figcaption>Ahsanur Rahaman, Founder and Web Developer</figcaption>
          </figure>
          <div className="portfolio-content">
            <h2 className="card-title">A focused website development service from Beldanga.</h2>
            <p className="card-text">
              I help businesses create professional websites with strong layout,
              mobile responsive design, clear calls to action and search-friendly
              structure. The work covers React websites, WordPress websites,
              UI/UX design, portfolio websites, landing pages and business websites.
            </p>
            <div className="portfolio-stats">
              <div className="portfolio-stat"><span>Founder</span><strong>Ahsanur Rahaman</strong></div>
              <div className="portfolio-stat"><span>Location</span><strong>Beldanga, Murshidabad</strong></div>
              <div className="portfolio-stat"><span>Focus</span><strong>Modern business websites</strong></div>
              <div className="portfolio-stat"><span>Support</span><strong>Launch, SEO setup and updates</strong></div>
            </div>
            <Cta />
          </div>
        </div>
      </Hero>

      <section className="section">
        <div className="section-inner">
          <p className="section-kicker">What I Build</p>
          <h2 className="section-title">Websites made for real business use.</h2>
          <ServiceGrid />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="section-kicker">Portfolio</p>
          <h2 className="section-title">Selected website work</h2>
          <div className="grid seo-card-grid">
            {projects.map((project) => (
              <article className="glass-card seo-card" key={project}>
                <h3 className="card-title">{project}</h3>
                <p className="card-text">A real website project included in the Ahsanur Web Solution portfolio.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </PageShell>
  );
};

export const ProfilePage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/ahsanur-rahaman#profilepage`,
    url: `${SITE_URL}/ahsanur-rahaman`,
    name: pageMeta.profile.title,
    mainEntity: personSchema,
  };

  return (
    <PageShell meta={pageMeta.profile} schema={schema}>
      <Hero
        kicker="Personal Profile"
        title="Ahsanur Rahaman - Web Developer in Beldanga, Murshidabad"
        lead="Ahsanur Rahaman is a web developer from Beldanga, Murshidabad, West Bengal and founder of Ahsanur Web Solution."
      >
        <div className="profile-page-grid">
          <figure className="portfolio-profile-card profile-page-photo">
            <img
              src="/ahsanur-rahaman-web-developer-beldanga.png"
              width="416"
              height="520"
              alt="Ahsanur Rahaman, web developer and founder of Ahsanur Web Solution in Beldanga, Murshidabad"
              title="Ahsanur Rahaman - Web Developer in Beldanga"
            />
            <figcaption>Ahsanur Rahaman, Web Developer in Beldanga and Founder of Ahsanur Web Solution</figcaption>
          </figure>
          <div className="portfolio-content">
            <h2 className="card-title">About Ahsanur Rahaman</h2>
            <p className="card-text">
              I create modern portfolio websites, business websites, React websites,
              WordPress business websites, PHP website development, UI/UX design and
              local SEO-ready website setup for businesses in Beldanga, Murshidabad
              and online.
            </p>
            <div className="portfolio-stats">
              <div className="portfolio-stat"><span>Name</span><strong>Ahsanur Rahaman</strong></div>
              <div className="portfolio-stat"><span>Location</span><strong>Beldanga, Murshidabad</strong></div>
              <div className="portfolio-stat"><span>Brand</span><strong>Ahsanur Web Solution</strong></div>
            </div>
            <Cta />
          </div>
        </div>
      </Hero>

      <section className="section">
        <div className="section-inner">
          <p className="section-kicker">Website Development Services</p>
          <h2 className="section-title">Services by Ahsanur Rahaman</h2>
          <ServiceGrid />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="section-kicker">Selected Projects</p>
          <h2 className="section-title">Portfolio work</h2>
          <div className="grid seo-card-grid">
            {projects.map((project) => (
              <article className="glass-card seo-card" key={project}>
                <h3 className="card-title">{project}</h3>
                <p className="card-text">A real project included in the Ahsanur Web Solution portfolio showcase.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FaqSection />
    </PageShell>
  );
};

export const BeldangaPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      personSchema,
      professionalServiceSchema,
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/website-development-beldanga#webpage`,
        url: `${SITE_URL}/website-development-beldanga`,
        name: pageMeta.beldanga.title,
        description: pageMeta.beldanga.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#professional-service` },
      },
    ],
  };

  return (
    <PageShell meta={pageMeta.beldanga} schema={schema}>
      <Hero
        kicker="Website Development in Beldanga"
        title="Website Development Services in Beldanga"
        lead="Ahsanur Web Solution helps Beldanga businesses create modern, mobile responsive and SEO-ready websites with React, WordPress, landing page and business website development."
      >
        <Cta />
      </Hero>
      <section className="section">
        <div className="section-inner">
          <p className="section-kicker">Local Services</p>
          <h2 className="section-title">Websites for local businesses</h2>
          <ServiceGrid />
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <p className="section-kicker">Meet the developer</p>
          <h2 className="section-title">Ahsanur Rahaman builds websites for Beldanga businesses.</h2>
          <p className="section-lead">
            Learn more about <a href="/ahsanur-rahaman">Ahsanur Rahaman</a>,
            the web developer and founder of <a href="/">Ahsanur Web Solution</a>.
          </p>
        </div>
      </section>
      <FaqSection />
    </PageShell>
  );
};

export const MurshidabadPage = () => (
  <PageShell
    meta={pageMeta.murshidabad}
    schema={{
      "@context": "https://schema.org",
      "@graph": [organizationSchema, personSchema, professionalServiceSchema],
    }}
  >
    <Hero
      kicker="Murshidabad Website Services"
      title="Website Development for Murshidabad Businesses"
      lead="Ahsanur Web Solution works with businesses across Murshidabad that need clear websites, mobile responsive pages, WordPress websites, React frontends and local SEO-ready website setup."
    >
      <Cta />
    </Hero>
    <section className="section">
      <div className="section-inner">
        <p className="section-kicker">Service Structure</p>
        <h2 className="section-title">Useful website support across Murshidabad</h2>
        <ServiceGrid />
      </div>
    </section>
    <FaqSection />
  </PageShell>
);

export const PrivacyPolicyPage = () => (
  <PageShell meta={pageMeta.privacy} schema={null}>
    <Hero
      kicker="Privacy Policy"
      title="Privacy Policy"
      lead="This Privacy Policy explains how Ahsanur Web Solution handles enquiry information submitted through email, phone or WhatsApp."
    />
    <section className="section">
      <div className="section-inner legal-copy glass-card">
        <h2>Information collected</h2>
        <p>When you contact Ahsanur Web Solution, you may share your name, email address, phone number, business details, website requirements, budget and project message.</p>
        <h2>How information is used</h2>
        <p>This information is used to reply to your enquiry, discuss project requirements, prepare estimates and provide website design or development support.</p>
        <h2>Data sharing</h2>
        <p>Ahsanur Web Solution does not sell personal enquiry information. Information may be shared only when required to deliver the requested service or comply with applicable law.</p>
        <h2>Contact</h2>
        <p>For privacy questions, email <a href="mailto:ahsanurr292@gmail.com">ahsanurr292@gmail.com</a>.</p>
      </div>
    </section>
  </PageShell>
);

export const RefundPolicyPage = () => (
  <PageShell meta={pageMeta.refund} schema={null}>
    <Hero
      kicker="Refund Policy"
      title="Refund Policy"
      lead="This policy explains the payment and refund terms for custom website design, development and SEO-ready website setup services by Ahsanur Web Solution."
    />
    <section className="section">
      <div className="section-inner legal-copy glass-card">
        <h2>Custom service payment policy</h2>
        <p>Ahsanur Web Solution provides custom website design, development, planning, setup, content placement, SEO-ready structure and support services. After a project starts or work time has been reserved, payments are treated as non-refundable because the service work is already planned, scheduled or started for the client.</p>

        <h2>Advance payments and deposits</h2>
        <p>Advance payments, booking amounts and project deposits are used to reserve project time, planning and development resources. These amounts are not refundable once the project is confirmed.</p>

        <h2>Custom service work</h2>
        <p>Each project may include custom design, development, revisions, domain or hosting guidance, WordPress setup, React development, content placement, SEO-ready structure and launch support. Once work begins, the service effort cannot be returned like a physical product.</p>

        <h2>Client delays or cancellation</h2>
        <p>If a client delays, pauses or cancels a project after work has started, paid amounts will not be refunded. Ahsanur Web Solution may continue the remaining agreed work when the client provides the required content, access and approvals.</p>

        <h2>Changes and revisions</h2>
        <p>Reasonable changes may be handled according to the agreed project scope. Extra features, additional pages, new design requests or work outside the original scope may require additional cost.</p>

        <h2>Service issue support</h2>
        <p>If there is a genuine issue with delivered work within the agreed scope, Ahsanur Web Solution will review the issue and provide correction support where applicable. This does not create a refund right.</p>

        <h2>Third-party payments</h2>
        <p>Domain, hosting, plugin, theme, software, payment gateway or other third-party charges are controlled by the third-party provider and are not refundable by Ahsanur Web Solution.</p>

        <h2>Agreement</h2>
        <p>By making a payment, the client confirms that they have read and accepted this Refund Policy along with the Terms and Conditions.</p>

        <h2>Contact</h2>
        <p>For questions about this policy, email <a href="mailto:ahsanurr292@gmail.com">ahsanurr292@gmail.com</a> or contact Ahsanur Web Solution on WhatsApp.</p>
      </div>
    </section>
  </PageShell>
);

export const TermsPage = () => (
  <PageShell meta={pageMeta.terms} schema={null}>
    <Hero
      kicker="Terms and Conditions"
      title="Terms and Conditions"
      lead="These terms describe the general service expectations for website design, website development and SEO-ready website setup by Ahsanur Web Solution."
    />
    <section className="section">
      <div className="section-inner legal-copy glass-card">
        <h2>Project scope</h2>
        <p>Project scope, pages, features, content, delivery timeline and pricing should be agreed before work begins.</p>
        <h2>Content and approvals</h2>
        <p>Clients are responsible for providing accurate business content, images, domain access, hosting access and approvals needed to complete the website.</p>
        <h2>Payments</h2>
        <p>Payment terms may vary by project size and should be confirmed before starting work. Additional changes outside the agreed scope may require additional cost.</p>
        <h2>SEO expectations</h2>
        <p>SEO setup improves technical clarity and local relevance, but search rankings cannot be guaranteed because rankings depend on many external factors.</p>
        <h2>Contact</h2>
        <p>For service questions, email <a href="mailto:ahsanurr292@gmail.com">ahsanurr292@gmail.com</a> or message on WhatsApp.</p>
      </div>
    </section>
  </PageShell>
);

export const NotFoundPage = () => {
  const currentPath = window.location.pathname;

  return (
    <PageShell meta={pageMeta.notFound} schema={null}>
      <section className="section not-found-page">
        <div className="section-inner not-found-grid">
          <motion.div
            className="not-found-visual glass-card"
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="not-found-orbit">
              <span />
              <span />
              <span />
            </div>
            <motion.strong
              className="not-found-code"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              404
            </motion.strong>
            <div className="not-found-chip">Page missing</div>
          </motion.div>

          <motion.div
            className="not-found-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p className="section-kicker">Page Not Found</p>
            <h1 className="section-title">This page moved or does not exist.</h1>
            <p className="section-lead">
              The link may be wrong, old or typed incorrectly. You can go back
              to the main website, explore services, or message Ahsanur Web
              Solution for help.
            </p>
            <div className="not-found-path">
              <FaSearch />
              <span>{currentPath}</span>
            </div>
            <div className="page-actions">
              <a className="btn btn-primary" href="/">
                <FaHome /> Back to Home
              </a>
              <a className="btn btn-ghost" href="/#services">
                View Services
              </a>
              <a className="btn btn-ghost" href="https://wa.me/917866030833" target="_blank" rel="noreferrer">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};
