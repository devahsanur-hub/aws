import { useEffect } from "react";
import { SITE_URL } from "../seoConfig";

const setMeta = (selector, attr, value) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
};

const setLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const Seo = ({ meta, schema }) => {
  useEffect(() => {
    const canonical = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
    document.title = meta.title;
    setMeta('meta[name="description"]', "name", meta.description);
    setMeta('meta[name="robots"]', "name", meta.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setLink("canonical", canonical);
    setMeta('meta[property="og:type"]', "property", meta.path === "/ahsanur-rahaman" ? "profile" : "website");
    setMeta('meta[property="og:title"]', "property", meta.title);
    setMeta('meta[property="og:description"]', "property", meta.description);
    setMeta('meta[property="og:url"]', "property", canonical);
    setMeta('meta[property="og:image"]', "property", meta.image);
    setMeta('meta[property="og:image:alt"]', "property", "Ahsanur Rahaman, web developer in Beldanga, Murshidabad");
    setMeta('meta[property="og:site_name"]', "property", "Ahsanur Web Solution");
    setMeta('meta[name="twitter:card"]', "name", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", meta.title);
    setMeta('meta[name="twitter:description"]', "name", meta.description);
    setMeta('meta[name="twitter:image"]', "name", meta.image);

    document.querySelectorAll("script[data-route-schema]").forEach((node) => node.remove());
    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.routeSchema = "true";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [meta, schema]);

  return null;
};

export default Seo;
