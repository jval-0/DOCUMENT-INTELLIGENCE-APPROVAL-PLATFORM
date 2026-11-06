import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <main>
      <p className="eyebrow">MERIDIAN CORPORATE SERVICES</p>
      <h1>Document Intelligence &amp; Approval Platform</h1>
      <p className="intro">
        The project foundation is in place. Document workflows and account access
        will appear here as their modules are implemented.
      </p>
      <section aria-labelledby="principle-title">
        <h2 id="principle-title">Operational principle</h2>
        <p>AI assists the organization; authorized people and application rules control decisions.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
