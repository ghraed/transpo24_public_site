const SITE_ORIGIN = "https://transpo24.com";

type SeoConfig = {
  canonicalPath: string;
  description: string;
  index: boolean;
  title: string;
};

const routeSeo: Record<string, SeoConfig> = {
  "/cookies": {
    canonicalPath: "/cookies",
    description: "Understand cookies, app permissions and tracking choices at Transpo24.",
    index: true,
    title: "Cookies & Tracking — Transpo24",
  },
  "/": {
    canonicalPath: "/",
    description: "Fast, safe, and reliable transport for vehicles, motorcycles, goods, and furniture across Switzerland.",
    index: true,
    title: "Transpo24 — Transport Services",
  },
  "/privacy": {
    canonicalPath: "/privacy",
    description: "Read the Transpo24 privacy policy.",
    index: true,
    title: "Privacy Policy — Transpo24",
  },
  "/privacy-policy": {
    canonicalPath: "/privacy",
    description: "Read the Transpo24 privacy policy.",
    index: true,
    title: "Privacy Policy — Transpo24",
  },
  "/terms": {
    canonicalPath: "/terms",
    description: "Read the Transpo24 terms and conditions.",
    index: true,
    title: "Terms & Conditions — Transpo24",
  },
  "/terms-of-service": {
    canonicalPath: "/terms",
    description: "Read the Transpo24 terms and conditions.",
    index: true,
    title: "Terms & Conditions — Transpo24",
  },
  "/account-deletion": {
    canonicalPath: "/account-deletion",
    description: "Learn how to request deletion of your Transpo24 account and associated personal data.",
    index: true,
    title: "Delete Your Account — Transpo24",
  },
  "/delete-account": {
    canonicalPath: "/account-deletion",
    description: "Learn how to request deletion of your Transpo24 account and associated personal data.",
    index: true,
    title: "Delete Your Account — Transpo24",
  },
};

export function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, "") || "/";
}

export function isKnownRoute(pathname: string) {
  return Boolean(routeSeo[normalizePath(pathname)]);
}

function upsertMeta(name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }

  element.content = content;
}

export function applyRouteSeo(pathname: string) {
  const path = normalizePath(pathname);
  const seo = routeSeo[path] ?? {
    canonicalPath: path,
    description: "The requested page could not be found.",
    index: false,
    title: "Page Not Found — Transpo24",
  };

  document.title = seo.title;
  upsertMeta("description", seo.description);
  upsertMeta("robots", seo.index ? "index, follow" : "noindex, nofollow");

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = `${SITE_ORIGIN}${seo.canonicalPath}`;
}
