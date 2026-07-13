import React, { useEffect, useState } from "react";
import { FaEnvelope, FaTimes, FaWhatsapp } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const FloatingMessage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 60000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <aside className={`floating-message ${open ? "open" : ""}`} aria-label="Quick website enquiry">
      {open && (
        <div className="floating-panel" role="dialog" aria-label="Website project enquiry">
          <button
            className="floating-close"
            type="button"
            aria-label="Close enquiry message"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>
          <span className="floating-kicker"><HiSparkles /> Limited slots open</span>
          <strong>Need a professional website?</strong>
          <p>
            Get a modern business website with clean design, mobile layout and SEO-ready setup.
          </p>
          <div className="floating-actions">
            <a href="https://wa.me/917866030833" target="_blank" rel="noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="mailto:ahsanurr292@gmail.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      )}

      <button
        className="floating-trigger"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Hide website enquiry message" : "Open website enquiry message"}
        onClick={() => setOpen((value) => !value)}
      >
        <span><HiSparkles /></span>
        <strong>Start Website</strong>
      </button>
    </aside>
  );
};

export default FloatingMessage;
