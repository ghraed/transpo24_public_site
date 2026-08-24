# Transpo24 public website

This is the public marketing website for `transpo24.com`. It is separate from:

- `api.transpo24.com` — NestJS API
- `admin.transpo24.com` — React TypeScript admin dashboard

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Upload the contents of the generated `dist/` folder to the web root for
`transpo24.com`. The project is static: it needs Nginx or another web server,
but no Node.js process in production.

## Legal pages

- Privacy Policy: `https://transpo24.com/privacy`
- Terms of Service: `https://transpo24.com/terms`

The legal copy in `src/legalContent.ts` matches the client application's legal
content. Keep both copies synchronized when the policy text changes.

## Before launch

Replace the placeholder `href="#"` values in the App Store and Google Play
buttons in `src/App.tsx` with the final store listing URLs.
