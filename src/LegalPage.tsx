import type { ReactNode } from "react";

import { PRIVACY_POLICY, TERMS_OF_SERVICE } from "./legalContent";

type LegalPageProps = {
  document: "privacy" | "terms";
};

function formatInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function renderLegalContent(content: string): ReactNode[] {
  return content.split("\n").map((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) return <div className="legal-space" key={`space-${index}`} />;
    if (trimmed === "---") return <hr key={`rule-${index}`} />;
    if (trimmed.startsWith("# ")) return <h2 key={`heading-${index}`}>{trimmed.slice(2)}</h2>;
    if (trimmed.startsWith("## ")) return <h3 key={`heading-${index}`}>{trimmed.slice(3)}</h3>;
    if (trimmed.startsWith("* ")) {
      return <div className="legal-bullet" key={`bullet-${index}`}><span>•</span><p>{formatInline(trimmed.slice(2))}</p></div>;
    }

    return <p key={`paragraph-${index}`}>{formatInline(trimmed)}</p>;
  });
}

export default function LegalPage({ document }: LegalPageProps) {
  const isPrivacy = document === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
  const content = isPrivacy ? PRIVACY_POLICY : TERMS_OF_SERVICE;

  return (
    <main className="legal-page">
      <header className="legal-header">
        <a href="/" aria-label="Transpo24 home">
          <img src="/images/transpo24-logo.png" alt="Transpo24" />
        </a>
        <nav aria-label="Legal navigation">
          <a className={isPrivacy ? "active" : ""} href="/privacy">Privacy</a>
          <a className={!isPrivacy ? "active" : ""} href="/terms">Terms</a>
        </nav>
      </header>

      <article className="legal-document">
        <div className="legal-kicker">TRANSPO24 LEGAL</div>
        <h1>{title}</h1>
        <div className="legal-copy">{renderLegalContent(content)}</div>
      </article>

      <footer className="legal-footer">
        <span>© 2026 Transpo24. All rights reserved.</span>
        <div>
          <a href="mailto:support@transpo24.com">support@transpo24.com</a>
          <a href="mailto:info@transpo24.com">info@transpo24.com</a>
        </div>
      </footer>
    </main>
  );
}
