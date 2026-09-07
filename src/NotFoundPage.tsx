export default function NotFoundPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <a href="/" aria-label="Transpo24 home">
          <img src="/images/transpo24-logo.png" alt="Transpo24" />
        </a>
      </header>

      <article className="legal-document deletion-document">
        <div className="legal-kicker">ERROR 404</div>
        <h1>Page not found</h1>
        <div className="legal-copy deletion-copy">
          <p>The page you requested does not exist or may have moved.</p>
          <a className="deletion-button" href="/">Return to the homepage</a>
        </div>
      </article>
    </main>
  );
}
