import { useEffect, useState } from "react";

import LegalPage from "./LegalPage";
import AccountDeletionPage from "./AccountDeletionPage";

const services = [
  { number: "01", title: "Vehicle Transport", copy: "Safe and reliable car transportation across cities. We handle your vehicle with utmost care.", image: "/images/vehicle-bg.jpg", tone: "amber" },
  { number: "02", title: "Motorcycle & Bicycle", copy: "Quick delivery for two-wheelers. From scooters to bicycles, we move them all.", image: "/images/motorcycle-bg.jpg", tone: "blue" },
  { number: "03", title: "Goods Delivery", copy: "From small parcels to large packages. Fast, secure, and on-time delivery guaranteed.", image: "/images/goods-bg.jpg", tone: "green" },
  { number: "04", title: "Home Moving", copy: "Complete home and furniture moving service. We pack, move, and unpack for you.", image: "/images/furniture-bg.jpg", tone: "orange" },
];

const steps = [
  { number: "01", title: "Book Online", copy: "Choose your service and fill in the details through our easy-to-use app or website." },
  { number: "02", title: "Get Matched", copy: "We connect you with the nearest available driver for your transport needs." },
  { number: "03", title: "Track & Relax", copy: "Track your delivery in real-time and receive notifications at every step." },
];

const features = [
  { icon: "24", title: "24/7 Available", copy: "Round the clock service, any day, any time." },
  { icon: "◇", title: "Insured Transport", copy: "Your items are fully insured during transit." },
  { icon: "⌖", title: "Live Tracking", copy: "Real-time GPS tracking of your delivery." },
  { icon: "★", title: "Rated Drivers", copy: "Verified and rated professional drivers." },
  { icon: "↗", title: "Easy Booking", copy: "Book in seconds through our mobile app." },
  { icon: "◎", title: "Multi-City", copy: "Operating across multiple cities and regions." },
];

const testimonials = [
  { quote: "Transpo24 saved my business! Fast delivery and professional drivers. Highly recommended!", initial: "A", name: "Ahmed Hassan", role: "Business Owner" },
  { quote: "Moving our entire home was stress-free. The team handled everything with care.", initial: "M", name: "Maria Schmidt", role: "Home Mover" },
  { quote: "I use Transpo24 weekly for vehicle transport. Always reliable and on time.", initial: "L", name: "Luca Rossi", role: "Car Dealer" },
];

const heroRoads = [
  "M44 225 L96 225 Q110 225 120 213 L175 160 Q184 150 198 155 L250 176 Q260 180 270 170 L330 112 Q340 102 352 110 L420 136",
  "M-25 70 L55 104 Q66 109 76 102 L138 60 Q149 52 161 59 L222 92 Q234 99 246 91 L312 49 Q323 42 336 48 L405 78 Q417 84 430 76 L505 28",
  "M-25 157 L50 171 Q61 174 70 167 L127 128 Q138 121 150 127 L205 151 Q217 157 228 148 L288 103 Q299 95 312 101 L370 122 Q382 127 393 119 L505 70",
  "M90 -30 L101 39 Q103 50 96 61 L76 102 L70 167 L44 225 L20 330",
  "M255 -30 L259 29 Q260 41 253 52 L246 91 L228 148 L198 155 L164 244 L172 330",
  "M425 -30 L431 26 Q433 38 426 50 L405 78 L393 119 L352 110 L315 221 L340 330",
];

const heroRoute = heroRoads[0];

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

function Mark({ compact = false }: { compact?: boolean }) {
  return <img className={`brand-logo${compact ? " compact-logo" : ""}`} src="/images/transpo24-logo.png" alt="Transpo24" />;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  return (
    <main>
      <div className="noise" />
      <header className={`topbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-shell">
          <a className="brand" href="#home" aria-label="Transpo24 home"><Mark /></a>
          <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <div className="nav-actions">
            <a className="button button-primary nav-cta" href="#download">Book Now</a>
            <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}><span /><span /></button>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" /><div className="hero-route route-one" /><div className="hero-route route-two" />
        <div className="container hero-grid">
          <div className="hero-copy-block">
            <div className="eyebrow hero-enter"><span className="pulse" />Available 24/7 across Switzerland</div>
            <h1 className="hero-enter">We run, so you <span>don&apos;t have to.</span></h1>
            <p className="hero-lede hero-enter">From a single box to an entire home — our delivery heroes move it all. Fast, safe, and always on time.</p>
            <div className="hero-actions hero-enter"><a className="button button-primary" href="#download">Download App <ArrowIcon /></a><a className="button button-ghost" href="#services">Learn More</a></div>
            <div className="hero-proof hero-enter"><div className="proof-avatars"><span>AH</span><span>MS</span><span>LR</span></div><div><strong>★★★★★</strong><p>Trusted by thousands of customers</p></div></div>
          </div>
          <div className="hero-visual hero-enter" aria-label="Live Transpo24 delivery preview">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="live-card">
              <div className="card-topline"><span>LIVE DELIVERY</span><span className="live-status"><i /> ON THE WAY</span></div>
              <div className="map-panel">
                <svg className="map-network" viewBox="0 0 480 300" preserveAspectRatio="none" aria-hidden="true">
                  <g className="map-road-casings">{heroRoads.map((road, index) => <path key={`hero-casing-${index}`} d={road} />)}</g>
                  <g className="map-road-surfaces">{heroRoads.map((road, index) => <path key={`hero-road-${index}`} d={road} />)}</g>
                  <path className="map-route" d={heroRoute} />
                </svg>
                <span className="pin start-pin" /><span className="pin end-pin" /><span className="truck-chip">↗</span><span className="city city-a">BASEL</span><span className="city city-b">ZURICH</span>
              </div>
              <div className="delivery-row"><div><small>ARRIVES IN</small><strong>24 min</strong></div><div><small>DRIVER</small><strong>Marco R. <span>★ 4.9</span></strong></div></div>
            </div>
            <div className="float-card parcel-card"><span>✓</span><div><small>PICKED UP</small><strong>Parcel secured</strong></div></div>
            <div className="float-card distance-card"><small>DISTANCE</small><strong>12.4 km</strong></div>
            <div className="visual-label"><span>01</span> SMART MATCHING</div>
          </div>
        </div>
        <div className="scroll-hint"><span /> SCROLL TO MOVE</div>
      </section>

      <section className="marquee" aria-label="Transpo24 benefits"><div className="marquee-track">
        {["FAST DELIVERY", "LIVE TRACKING", "INSURED TRANSPORT", "VERIFIED DRIVERS", "24/7 AVAILABLE", "FAST DELIVERY", "LIVE TRACKING", "INSURED TRANSPORT"].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}
      </div></section>

      <section className="section services" id="services"><div className="container">
        <div className="section-heading reveal"><div><span className="kicker">OUR SERVICES</span><h2>Transport <em>solutions.</em></h2></div><p>From small packages to entire homes, we have the right solution for every transport need.</p></div>
        <div className="services-grid">
          {services.map((service, index) => <article className={`service-card reveal ${service.tone}`} key={service.title} style={{ transitionDelay: `${index * 90}ms` }}>
            <div className="service-image"><img src={service.image} alt={service.title} /><span className="service-number">{service.number}</span></div>
            <div className="service-content"><h3>{service.title}</h3><p>{service.copy}</p><a href="#how-it-works">Learn more <ArrowIcon /></a></div>
          </article>)}
        </div>
      </div></section>

      <section className="section process-section" id="how-it-works"><div className="container">
        <div className="process-head reveal"><span className="kicker light-kicker">PROCESS</span><h2>Three simple steps.<br /><em>Zero stress.</em></h2><p>Three simple steps to get your items moving.</p></div>
        <div className="steps-grid">
          {steps.map((step, index) => <article className="process-step reveal" key={step.title} style={{ transitionDelay: `${index * 110}ms` }}>
            <div className="step-line"><span>{step.number}</span><i /></div>
            <h3>{step.title}</h3><p>{step.copy}</p>
          </article>)}
        </div>
      </div></section>

      <section className="section features-section" id="features"><div className="container">
        <div className="section-heading reveal"><div><span className="kicker">WHY US</span><h2>Built for <em>confidence.</em></h2></div><p>We combine technology with reliable service to give you the best transport experience.</p></div>
        <div className="features-grid">
          {features.map((feature, index) => <article className="feature-card reveal" key={feature.title} style={{ transitionDelay: `${index * 70}ms` }}><span className="feature-icon">{feature.icon}</span><div><h3>{feature.title}</h3><p>{feature.copy}</p></div><span className="feature-index">0{index + 1}</span></article>)}
        </div>
      </div></section>

      <section className="stats-band"><div className="container stats-grid">
        {[ ["50K+","Deliveries"], ["10K+","Happy Customers"], ["500+","Drivers"], ["99%","Satisfaction"] ].map(([value,label]) => <div className="stat reveal" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div></section>

      <section className="section testimonials-section"><div className="container">
        <div className="testimonial-title reveal"><span className="kicker">TESTIMONIALS</span><h2>What our customers <em>say.</em></h2></div>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => <article className="quote-card reveal" key={item.name} style={{ transitionDelay: `${index * 90}ms` }}><div className="quote-mark">“</div><p>{item.quote}</p><div className="person"><span>{item.initial}</span><div><strong>{item.name}</strong><small>{item.role}</small></div></div></article>)}
        </div>
      </div></section>

      <section className="download-section" id="download"><div className="container download-shell reveal">
        <div className="download-copy"><span className="kicker light-kicker">TRANSPORT IN YOUR POCKET</span><h2>Download<br />the <em>app.</em></h2><p>Available on iOS and Android. Book, track, and manage all your deliveries from your phone.</p><div className="store-buttons"><a href="#">● <span><small>Download on the</small>App Store</span></a><a href="#">▶ <span><small>GET IT ON</small>Google Play</span></a></div></div>
        <div className="phone-stage"><div className="phone-orbit" /><div className="phone"><div className="phone-notch" /><div className="phone-screen"><div className="app-head"><Mark compact /><span>Hi, Ahmed<br /><strong>What are we moving?</strong></span></div><div className="app-services"><span>🚗<small>Vehicle</small></span><span>🏍<small>Bike</small></span><span>📦<small>Goods</small></span><span>🛋<small>Home</small></span></div><div className="app-route"><small>PICKUP</small><strong>Basel, Switzerland</strong><i /><small>DESTINATION</small><strong>Zurich, Switzerland</strong></div><button>Find a driver →</button></div></div><div className="app-float top-float"><small>DRIVER FOUND</small><strong>12 sec</strong></div><div className="app-float bottom-float"><span>✓</span> Fully insured</div></div>
      </div></section>

      <footer id="contact"><div className="container">
        <div className="footer-grid">
          <div className="footer-brand"><a className="brand" href="#home"><Mark /></a><p>Your trusted partner for all transport needs. Fast, reliable, and available 24/7.</p></div>
          <div><h4>Services</h4><a href="#services">Vehicle Transport</a><a href="#services">Motorcycle Delivery</a><a href="#services">Goods Shipping</a><a href="#services">Home Moving</a></div>
          <div><h4>Company</h4><a href="#">About Us</a><a href="#">Careers</a><a href="#">Blog</a><a href="#">Press</a></div>
          <div><h4>Contact</h4><a href="mailto:support@transpo24.com">support@transpo24.com</a><a href="mailto:info@transpo24.com">info@transpo24.com</a><span>Basel, Switzerland</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Transpo24. All rights reserved.</span><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/account-deletion">Delete account</a><a href="#">Cookies</a></div></div>
      </div></footer>
    </main>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/privacy" || path === "/privacy-policy") {
    return <LegalPage document="privacy" />;
  }

  if (path === "/terms" || path === "/terms-of-service") {
    return <LegalPage document="terms" />;
  }

  if (path === "/account-deletion" || path === "/delete-account") {
    return <AccountDeletionPage />;
  }

  return <Home />;
}
