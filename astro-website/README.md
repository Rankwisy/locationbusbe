# LocationBus – Astro SSR Website

Site multi-pages SSR pour LocationBus, optimisé SEO et autorité topique « Location Bus Bruxelles ». URLs propres, maillage interne, hyperlocal (communes + aéroports).

## Features

- **Full SSR** – Toutes les pages en server-side ; pas de hash, pas de SPA
- **Structure hiérarchique** – Accueil → Location Bus Bruxelles (hub) → Communes / Services → Aéroports
- **Topical authority** – Cluster « Location bus Bruxelles » + pages par commune
- **Maillage interne** – Footer, nav et liens contextuels ; tout en `/path` (aucun `#`)
- **Conversion** – Devis gratuit, 7j/7, sans engagement sur toutes les pages
- **Hyperlocal** – Ixelles, Uccle, Schaerbeek, Etterbeek, Woluwe-Saint-Lambert/Pierre, Anderlecht, Bruxelles-Ville + Zaventem, Charleroi
- **SEO** – Meta uniques, H1 unique par page, JSON-LD, sitemap, llms.txt, robots.txt

## Development

```bash
pnpm install
pnpm dev
```

## Build & Preview

```bash
pnpm build
pnpm preview
```

## URL Structure (toutes avec trailing slash)

| Niveau | URL |
|--------|-----|
| Accueil | `/` |
| Hub Bruxelles | `/location-bus-bruxelles/` |
| Communes | `/location-bus-bruxelles/ixelles/`, `/location-bus-bruxelles/uccle/`, … |
| Services | `/services/`, `/services/transfert-bus/`, `/services/voyage-europe/` |
| Aéroports | `/services/transfert-aeroport/`, `/services/transfert-aeroport/zaventem/`, `/services/transfert-aeroport/charleroi/` |
| About / Contact | `/about/`, `/contact/` |

## SEO Files

- `/llms.txt` – Guide pour moteurs IA
- `/robots.txt` – Règles crawl
- `/sitemap-index.xml` – Sitemap (généré au build)

## Validation

- Aucune URL avec `#` (sauf skip-link `#main`)
- Chaque page charge directement (pas de SPA hash)
- Liens internes uniquement en `/path`
- Sitemap à jour avec toutes les URLs
- Meta title/description uniques par page
- Un seul H1 par page
