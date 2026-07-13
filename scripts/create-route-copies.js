const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");

const siteUrl = "https://ashupro.in";
const image = `${siteUrl}/ahsanur-rahaman-web-developer-beldanga.png`;
const routes = [
  {
    path: "about",
    title: "About Ahsanur Web Solution | Web Developer in Beldanga",
    description:
      "Learn about Ahsanur Web Solution, a Beldanga based website development service by Ahsanur Rahaman for React, WordPress, UI/UX and SEO-ready business websites.",
  },
  {
    path: "ahsanur-rahaman",
    title: "Ahsanur Rahaman - Web Developer in Beldanga, Murshidabad",
    description:
      "Meet Ahsanur Rahaman, web developer in Beldanga, Murshidabad and founder of Ahsanur Web Solution. React, WordPress, PHP, business website and local SEO services.",
  },
  {
    path: "website-development-beldanga",
    title: "Website Development in Beldanga | Ahsanur Web Solution",
    description:
      "Professional website development in Beldanga, Murshidabad. Modern React, WordPress and business websites by Ahsanur Web Solution.",
  },
  {
    path: "website-development-murshidabad",
    title: "Website Development in Murshidabad | Ahsanur Web Solution",
    description:
      "Website development services for Murshidabad businesses, including React websites, WordPress websites, landing pages and local SEO-ready website setup.",
  },
  {
    path: "privacy-policy",
    title: "Privacy Policy | Ahsanur Web Solution",
    description:
      "Privacy Policy for Ahsanur Web Solution, explaining contact form, email and WhatsApp enquiry data use.",
  },
  {
    path: "refund-policy",
    title: "Refund Policy | Ahsanur Web Solution",
    description:
      "Refund Policy for Ahsanur Web Solution website design, development, WordPress, React and SEO-ready website services.",
  },
  {
    path: "terms-and-conditions",
    title: "Terms and Conditions | Ahsanur Web Solution",
    description:
      "Service terms for website design, development, WordPress, React and SEO-ready website projects by Ahsanur Web Solution.",
  },
];

const notFoundRoute = {
  path: "404",
  title: "Page Not Found | Ahsanur Web Solution",
  description:
    "The requested page could not be found. Return to Ahsanur Web Solution for website design, React, WordPress and SEO-ready website services.",
  robots: "noindex, follow",
};

if (!fs.existsSync(indexPath)) {
  throw new Error("build/index.html was not found. Run this script after react-scripts build.");
}

const html = fs.readFileSync(indexPath, "utf8");

const replaceTag = (source, pattern, replacement) =>
  pattern.test(source) ? source.replace(pattern, replacement) : source.replace("</head>", `${replacement}\n</head>`);

const withMeta = (source, route) => {
  const url = `${siteUrl}/${route.path}`;
  let output = source;
  output = output.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  output = replaceTag(output, /<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${route.description}" />`);
  output = replaceTag(output, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`);
  output = replaceTag(output, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${route.title}" />`);
  output = replaceTag(output, /<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${route.description}" />`);
  output = replaceTag(output, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`);
  output = replaceTag(output, /<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${image}" />`);
  output = replaceTag(output, /<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${route.title}" />`);
  output = replaceTag(output, /<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${route.description}" />`);
  output = replaceTag(output, /<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${image}" />`);
  if (route.robots) {
    output = replaceTag(output, /<meta name="robots" content="[^"]*"\s*\/>/, `<meta name="robots" content="${route.robots}" />`);
  }
  return output;
};

for (const route of routes) {
  const routeDir = path.join(buildDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), withMeta(html, route));
}

fs.writeFileSync(path.join(buildDir, "404.html"), withMeta(html, notFoundRoute));

console.log(`Created static route entry files for ${routes.length} SEO routes and a 404 fallback page.`);
