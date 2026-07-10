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
  {
    slug: 'dour-festival-2026-location-autocar',
    title: 'Dour Festival 2026 : Louez votre Autocar avec Chauffeur (15-19 juillet)',
    description:
      "Dour Festival 2026 se déroule du 15 au 19 juillet en Belgique. Découvrez comment organiser votre transport en groupe avec une location d'autocar avec chauffeur, sans stress ni casse-tête de parking.",
    date: '2026-07-10',
    image: '/images/blog/dour-festival-2026-transport-autocar.jpg',
    imageAlt:
      "Autocar de luxe moderne garé sur le site d'un festival de musique en Belgique, jeunes festivaliers montant à bord avec leurs sacs à dos, lumière dorée de fin d'après-midi",
    excerpt:
      "Du 15 au 19 juillet 2026, Dour Festival réunit des dizaines de milliers de festivaliers en Belgique. Voici comment organiser une location autocar avec chauffeur pour voyager en groupe, en toute sérénité.",
  },
] as const;

export type BlogPost = (typeof posts)[number];
