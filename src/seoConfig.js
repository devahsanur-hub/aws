export const SITE_URL = "https://ashupro.in";
export const PROFILE_IMAGE = `${SITE_URL}/ahsanur-rahaman-web-developer-beldanga.png`;
export const LOGO_IMAGE = `${SITE_URL}/logo192.png`;

export const realSocialLinks = [
  "https://github.com/ahsanurrahaman",
  "https://www.facebook.com/share/1AYxZkYnBi/",
  "https://www.instagram.com/_.ashhh_05",
];

export const pageMeta = {
  home: {
    path: "/",
    title: "Ahsanur Web Solution | Website Development in Beldanga, Murshidabad",
    description:
      "Ahsanur Web Solution provides website design, React development, WordPress websites, UI/UX design and local SEO services in Beldanga, Murshidabad.",
    image: PROFILE_IMAGE,
  },
  about: {
    path: "/about",
    title: "About Ahsanur Web Solution | Web Developer in Beldanga",
    description:
      "Learn about Ahsanur Web Solution, a Beldanga based website development service by Ahsanur Rahaman for React, WordPress, UI/UX and SEO-ready business websites.",
    image: PROFILE_IMAGE,
  },
  profile: {
    path: "/ahsanur-rahaman",
    title: "Ahsanur Rahaman - Web Developer in Beldanga, Murshidabad",
    description:
      "Meet Ahsanur Rahaman, web developer in Beldanga, Murshidabad and founder of Ahsanur Web Solution. React, WordPress, PHP, business website and local SEO services.",
    image: PROFILE_IMAGE,
  },
  beldanga: {
    path: "/website-development-beldanga",
    title: "Website Development in Beldanga | Ahsanur Web Solution",
    description:
      "Professional website development in Beldanga, Murshidabad. Modern React, WordPress and business websites by Ahsanur Web Solution.",
    image: PROFILE_IMAGE,
  },
  murshidabad: {
    path: "/website-development-murshidabad",
    title: "Website Development in Murshidabad | Ahsanur Web Solution",
    description:
      "Website development services for Murshidabad businesses, including React websites, WordPress websites, landing pages and local SEO-ready website setup.",
    image: PROFILE_IMAGE,
  },
  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy | Ahsanur Web Solution",
    description:
      "Privacy Policy for Ahsanur Web Solution, explaining contact form, email and WhatsApp enquiry data use.",
    image: PROFILE_IMAGE,
  },
  refund: {
    path: "/refund-policy",
    title: "Refund Policy | Ahsanur Web Solution",
    description:
      "Refund Policy for Ahsanur Web Solution website design, development, WordPress, React and SEO-ready website services.",
    image: PROFILE_IMAGE,
  },
  terms: {
    path: "/terms-and-conditions",
    title: "Terms and Conditions | Ahsanur Web Solution",
    description:
      "Service terms for website design, development, WordPress, React and SEO-ready website projects by Ahsanur Web Solution.",
    image: PROFILE_IMAGE,
  },
  notFound: {
    path: "/404",
    title: "Page Not Found | Ahsanur Web Solution",
    description:
      "The requested page could not be found. Return to Ahsanur Web Solution for website design, React, WordPress and SEO-ready website services.",
    image: PROFILE_IMAGE,
    robots: "noindex, follow",
  },
};

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Ahsanur Web Solution",
  url: `${SITE_URL}/`,
  logo: LOGO_IMAGE,
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/#ahsanur-rahaman`,
    name: "Ahsanur Rahaman",
  },
  areaServed: ["Beldanga", "Murshidabad", "West Bengal", "India"],
};

export const personSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}/#ahsanur-rahaman`,
  name: "Ahsanur Rahaman",
  url: `${SITE_URL}/ahsanur-rahaman`,
  image: {
    "@type": "ImageObject",
    url: PROFILE_IMAGE,
  },
  jobTitle: "Web Developer",
  description:
    "Ahsanur Rahaman is a web developer in Beldanga, Murshidabad and founder of Ahsanur Web Solution.",
  worksFor: {
    "@id": `${SITE_URL}/#organization`,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beldanga",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Website Design",
    "React Development",
    "WordPress Development",
    "PHP Website Development",
    "UI/UX Design",
    "Local SEO",
  ],
  sameAs: realSocialLinks,
};

export const professionalServiceSchema = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#professional-service`,
  name: "Ahsanur Web Solution",
  url: `${SITE_URL}/`,
  image: PROFILE_IMAGE,
  logo: LOGO_IMAGE,
  description:
    "Website design, React development, WordPress websites, UI/UX design and local SEO services in Beldanga, Murshidabad, West Bengal.",
  founder: {
    "@id": `${SITE_URL}/#ahsanur-rahaman`,
  },
  email: "mailto:ahsanurr292@gmail.com",
  telephone: "+91 7866030833",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beldanga",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  areaServed: ["Beldanga", "Murshidabad", "Berhampore", "West Bengal", "India"],
  priceRange: "Rs. 7500+",
  makesOffer: [
    { "@type": "Offer", name: "Website Design" },
    { "@type": "Offer", name: "React Development" },
    { "@type": "Offer", name: "WordPress Website Development" },
    { "@type": "Offer", name: "Local SEO Website Setup" },
  ],
};
