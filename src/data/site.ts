/**
 * Central SEO & internal linking: Location Bus Bruxelles – topical authority
 * All internal links use /path (no hash). Sitemap picks up routes automatically.
 */

export const site = {
  name: 'LocationBus',
  tagline: 'Location de Bus avec Chauffeur à Bruxelles',
  url: 'https://www.locationbus.be',
  phone: '+32 2 446 01 91',
  phoneTel: 'tel:+3224460191',
  email: 'info@locationbus.be',
  address: 'Pegasuslaan 5, 1831 Machelen, Belgique',
  /** Conversion signals – use in CTAs and footer */
  cta: {
    devis: 'Devis gratuit',
    devisLong: 'Demandez un devis gratuit',
    sansEngagement: 'Sans engagement',
    reponse24h: 'Réponse sous 24h',
    service247: 'Service client 7j/7',
  },
} as const;

/** Nav: only /path links, no hash */
export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Location Bus Bruxelles', href: '/location-bus-bruxelles/' },
  { label: 'Services', href: '/services/' },
  { label: 'Tarifs & Devis', href: '/prix/' },
  { label: 'À propos', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;

/** Footer: services + bruxelles communes + aéroports */
export const footerLinks = {
  services: [
    { label: 'Tarifs & Devis', href: '/prix/' },
    { label: 'Location bus avec chauffeur', href: '/services/' },
    { label: 'Transfert bus', href: '/services/transfert-bus/' },
    { label: 'Transfert aéroport', href: '/services/transfert-aeroport/' },
    { label: 'Voyage Europe', href: '/services/voyage-europe/' },
  ],
  bruxelles: [
    { label: 'Location bus Bruxelles', href: '/location-bus-bruxelles/' },
    { label: 'Location bus Ixelles', href: '/location-bus-bruxelles/ixelles/' },
    { label: 'Location bus Uccle', href: '/location-bus-bruxelles/uccle/' },
    { label: 'Location bus Schaerbeek', href: '/location-bus-bruxelles/schaerbeek/' },
    { label: 'Location bus Etterbeek', href: '/location-bus-bruxelles/etterbeek/' },
    { label: 'Location bus Woluwe-Saint-Lambert', href: '/location-bus-bruxelles/woluwe-saint-lambert/' },
    { label: 'Location bus Woluwe-Saint-Pierre', href: '/location-bus-bruxelles/woluwe-saint-pierre/' },
    { label: 'Location bus Anderlecht', href: '/location-bus-bruxelles/anderlecht/' },
    { label: 'Location bus Bruxelles-Ville', href: '/location-bus-bruxelles/bruxelles-ville/' },
  ],
  aeroports: [
    { label: 'Transfert aéroport Zaventem', href: '/services/transfert-aeroport/zaventem/' },
    { label: 'Transfert aéroport Charleroi', href: '/services/transfert-aeroport/charleroi/' },
  ],
  contact: { label: 'Contact / Devis', href: '/contact/' },
} as const;

/** Communes for hyperlocal pages – slug and title */
export const communes = [
  { slug: 'ixelles', title: 'Ixelles' },
  { slug: 'uccle', title: 'Uccle' },
  { slug: 'schaerbeek', title: 'Schaerbeek' },
  { slug: 'etterbeek', title: 'Etterbeek' },
  { slug: 'woluwe-saint-lambert', title: 'Woluwe-Saint-Lambert' },
  { slug: 'woluwe-saint-pierre', title: 'Woluwe-Saint-Pierre' },
  { slug: 'anderlecht', title: 'Anderlecht' },
  { slug: 'bruxelles-ville', title: 'Bruxelles-Ville' },
] as const;

export type CommuneSlug = (typeof communes)[number]['slug'];
