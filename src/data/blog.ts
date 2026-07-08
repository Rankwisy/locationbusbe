/** Blog posts – SEO content targeting Belgian events, with a transport/coach-hire angle. */

export const posts = [
  {
    slug: 'tomorrowland-belgium-2026-navette-bus',
    title: 'Tomorrowland Belgium 2026 : comment organiser votre transport en bus vers Boom',
    description:
      "Tomorrowland Belgium 2026 approche : découvrez comment réserver une navette bus avec chauffeur pour rejoindre Boom en groupe, en toute sécurité et sans stress de parking.",
    date: '2026-07-08',
    image: '/images/blog/tomorrowland-belgium-2026-transport-bus.jpg',
    imageAlt:
      "Autocar de luxe garé près de l'entrée d'un festival de musique au crépuscule, scène principale illuminée en arrière-plan",
    excerpt:
      "Chaque année, des dizaines de milliers de festivaliers convergent vers Boom pour Tomorrowland. Voici comment organiser un transport en bus fiable, confortable et sans souci pour votre groupe.",
  },
  {
    slug: 'grand-prix-belgique-2026-transport-spa-francorchamps',
    title: 'Grand Prix de Belgique 2026 : le bus, meilleure option pour rejoindre Spa-Francorchamps',
    description:
      "Grand Prix de F1 à Spa-Francorchamps en 2026 : évitez les embouteillages et le casse-tête du parking en réservant un autocar avec chauffeur pour votre groupe.",
    date: '2026-07-08',
    image: '/images/blog/grand-prix-belgique-2026-transport-bus.jpg',
    imageAlt:
      "Autocar moderne garé dans une zone paddock verdoyante près d'un circuit de Formule 1, collines des Ardennes en arrière-plan",
    excerpt:
      "Le Grand Prix de Belgique attire chaque année une foule immense sur les routes sinueuses des Ardennes. Le bus avec chauffeur reste la solution la plus simple pour arriver à Spa-Francorchamps sans stress.",
  },
] as const;

export type BlogPost = (typeof posts)[number];
