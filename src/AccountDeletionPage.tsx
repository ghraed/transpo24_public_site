export default function AccountDeletionPage() {
  const deletionEmail =
    "mailto:info@transpo24.ch?subject=Transpo24%20account%20deletion%20request&body=Phone%20number%20used%20to%20sign%20in%3A%20%0AAccount%20type%20(customer%20or%20driver)%3A%20";

  return (
    <main className="legal-page">
      <header className="legal-header">
        <a href="/" aria-label="Transpo24 home">
          <img src="/images/transpo24-logo.png" alt="Transpo24" />
        </a>
        <nav aria-label="Legal navigation">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a className="active" href="/account-deletion">Delete</a>
        </nav>
      </header>

      <article className="legal-document deletion-document">
        <div className="legal-kicker">TRANSPO24 ACCOUNT CONTROL</div>
        <h1>Delete your account</h1>
        <div className="legal-copy deletion-copy">
          <h2>Request deletion without reinstalling the app</h2>
          <p>
            To delete a Transpo24 customer or driver account, email our support team from any email
            address you can access. Include the phone number used to sign in and whether the account
            is a customer or driver account.
          </p>
          <a className="deletion-button" href={deletionEmail}>Email an account deletion request</a>
          <p>
            If you still have the app, you can also use Profile → Delete account. We may ask for
            limited information to verify that the request belongs to you before acting on it.
          </p>

          <h2>What happens to your data</h2>
          <div className="legal-bullet"><span>•</span><p>Profile, authentication, device-token and active-session data is deleted or irreversibly de-identified after verification.</p></div>
          <div className="legal-bullet"><span>•</span><p>Uploaded identity or driver documents are deleted when they are no longer legally required.</p></div>
          <div className="legal-bullet"><span>•</span><p>Transaction, payment, tax, accounting, fraud-prevention, safety and dispute records may be retained for up to seven years where required or permitted by law.</p></div>
          <div className="legal-bullet"><span>•</span><p>When a required retention period ends, the retained personal data is deleted or irreversibly anonymised.</p></div>

          <h2>Timing and contact</h2>
          <p>
            We aim to acknowledge requests promptly and complete verified requests within 30 days,
            unless applicable law permits or requires more time. Questions can be sent to
            {" "}<a href="mailto:info@transpo24.ch">info@transpo24.ch</a>.
          </p>
        </div>
      </article>

      <footer className="legal-footer">
        <span>© 2026 Transpo24. All rights reserved.</span>
        <div>
          <a href="/privacy">Privacy policy</a>
          <a href="mailto:info@transpo24.ch">info@transpo24.ch</a>
        </div>
      </footer>
    </main>
  );
}
