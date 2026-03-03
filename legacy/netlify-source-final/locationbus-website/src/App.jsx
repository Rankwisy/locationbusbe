import React, { useState, useEffect } from 'react'
import { Bus, MapPin, Users, Shield, Euro, Clock, Phone, Mail, MapPin as Location, ChevronDown, Menu, X } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import SEOHead from './components/SEOHead'
import './App.css'
import logoImage from './assets/logos/original-logo.png'
import heroImage from './assets/images/hero-image.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('fr')
  const [openFaq, setOpenFaq] = useState(null)

  const content = {
    fr: {
      nav: {
        home: 'Accueil',
        services: 'Services',
        about: 'À Propos',
        blog: 'Blog',
        contact: 'Contact'
      },
      hero: {
        title: 'Location de Bus avec Chauffeur',
        subtitle: 'à Bruxelles',
        description: 'Service professionnel pour vos déplacements en Belgique et Europe',
        cta1: 'Demandez un Devis'
      },
      services: {
        title: 'Nos Services de Transport',
        items: [
          {
            title: 'Location Bus Transfert',
            description: 'Service de transfert professionnel pour tous vos déplacements en groupe.',
            icon: Bus
          },
          {
            title: 'Location Bus Aéroport',
            description: 'Transferts directs vers les aéroports de Bruxelles et environs.',
            icon: MapPin
          },
          {
            title: 'Voyage Longue Distance',
            description: 'Voyages confortables pour vos déplacements longue distance en Europe.',
            icon: Users
          },
          {
            title: 'Location Bus Europe',
            description: 'Service de transport pour vos voyages à travers toute l\'Europe.',
            icon: Shield
          }
        ]
      },
      fleet: {
        title: 'Notre Flotte de Véhicules',
        subtitle: 'Des véhicules modernes et confortables pour tous vos besoins',
        vehicles: [
          {
            name: 'Autocars Luxe',
            capacity: 'Jusqu\'à 60 places',
            features: ['Euro 6', 'Climatisation', 'Sièges confort', 'WiFi']
          },
          {
            name: 'Minibus VIP',
            capacity: 'Jusqu\'à 30 places',
            features: ['Confort premium', 'Équipement moderne', 'Service personnalisé']
          },
          {
            name: 'Minibus Standard',
            capacity: 'Jusqu\'à 20 places',
            features: ['Économique', 'Fiable', 'Idéal petits groupes']
          }
        ]
      },
      whyUs: {
        title: 'Pourquoi Nous Choisir',
        items: [
          {
            title: 'Prix Compétitifs',
            description: 'Prix fixe incluant taxes, péages et pourboires',
            icon: Euro
          },
          {
            title: 'Véhicules de Qualité',
            description: 'Bus spacieux avec sièges confortables pour tous',
            icon: Bus
          },
          {
            title: 'Service Sur-Mesure',
            description: 'Tous les détails convenus à l\'avance pour votre groupe',
            icon: Clock
          }
        ]
      },
      faq: {
        title: 'Questions Fréquentes',
        items: [
          {
            question: 'Quels sont vos tarifs pour une location de bus ?',
            answer: 'Nos tarifs varient selon la durée, la distance et le type de véhicule. Un bus standard de 50 places coûte entre 300 et 950 euros par jour. Contactez-nous pour un devis personnalisé.'
          },
          {
            question: 'Comment réserver un bus avec chauffeur ?',
            answer: 'Vous pouvez nous contacter par téléphone au +32 2 446 01 91 ou par email à info@locationbus.be. Nous vous fournirons un devis détaillé sous 24h.'
          },
          {
            question: 'Quelles sont vos zones de service ?',
            answer: 'Nous desservons Bruxelles, toute la Belgique et l\'Europe. Nos destinations populaires incluent Paris, Amsterdam, Frankfurt et Rotterdam.'
          },
          {
            question: 'Vos véhicules sont-ils assurés ?',
            answer: 'Oui, tous nos véhicules sont entièrement assurés et nos chauffeurs sont expérimentés et certifiés.'
          }
        ]
      },
      contact: {
        title: 'Contactez-Nous',
        subtitle: 'Louez un bus en 30 secondes',
        form: {
          title: 'Laissez-nous un message',
          name: 'Votre nom',
          email: 'Votre e-mail',
          subject: 'Objet',
          message: 'Votre message',
          send: 'Envoyer le Message'
        },
        info: {
          phone: 'Téléphone',
          email: 'Email',
          address: 'Adresse',
          phoneNumber: '+32 2 446 01 91',
          emailAddress: 'info@locationbus.be',
          fullAddress: 'Pegasuslaan 5, 1831 Machelen, Belgique',
          hours: 'Heures de Service',
          hoursText: 'Service client 7 jours sur 7',
          response: 'Réponse garantie sous 24h'
        }
      },
      footer: {
        company: 'Société de transport à Bruxelles',
        rights: '© 2025 LocationBus. Tous droits réservés.',
        services: 'Services',
        contact: 'Contact',
        quickLinks: 'Liens Rapides',
        servicesList: ['Location Bus', 'Transfert Aéroport', 'Voyage Europe', 'Service VIP']
      },
      about: {
        title: 'À Propos de LocationBus',
        subtitle: 'Votre partenaire de confiance pour le transport en groupe',
        content: 'Depuis plus de 15 ans, LocationBus est le leader du transport en autocar avec chauffeur en Belgique. Notre expertise et notre engagement envers l\'excellence nous permettent d\'offrir des services de transport de qualité supérieure pour tous vos besoins de déplacement en groupe.',
        mission: 'Notre Mission',
        missionText: 'Fournir des solutions de transport sûres, confortables et fiables pour tous vos voyages en groupe, que ce soit pour des événements d\'entreprise, des sorties scolaires, ou des voyages touristiques.',
        values: 'Nos Valeurs',
        valuesList: ['Sécurité et fiabilité', 'Service client exceptionnel', 'Respect de l\'environnement', 'Innovation continue']
      }
    },
    nl: {
      nav: {
        home: 'Home',
        services: 'Diensten',
        about: 'Over Ons',
        blog: 'Blog',
        contact: 'Contact'
      },
      hero: {
        title: 'Bus Huren met Chauffeur',
        subtitle: 'in Brussel',
        description: 'Professionele service voor uw verplaatsingen in België en Europa',
        cta1: 'Vraag Offerte'
      },
      services: {
        title: 'Onze Transport Diensten',
        items: [
          {
            title: 'Bus Transfer Service',
            description: 'Professionele transferservice voor al uw groepsverplaatsingen.',
            icon: Bus
          },
          {
            title: 'Luchthaven Transfer',
            description: 'Directe transfers naar de luchthavens van Brussel en omgeving.',
            icon: MapPin
          },
          {
            title: 'Lange Afstand Reizen',
            description: 'Comfortabele reizen voor uw lange afstand verplaatsingen in Europa.',
            icon: Users
          },
          {
            title: 'Bus Huren Europa',
            description: 'Transportservice voor uw reizen door heel Europa.',
            icon: Shield
          }
        ]
      },
      fleet: {
        title: 'Onze Voertuigvloot',
        subtitle: 'Moderne en comfortabele voertuigen voor al uw behoeften',
        vehicles: [
          {
            name: 'Luxe Autocars',
            capacity: 'Tot 60 plaatsen',
            features: ['Euro 6', 'Airconditioning', 'Comfort stoelen', 'WiFi']
          },
          {
            name: 'VIP Minibus',
            capacity: 'Tot 30 plaatsen',
            features: ['Premium comfort', 'Moderne uitrusting', 'Persoonlijke service']
          },
          {
            name: 'Standaard Minibus',
            capacity: 'Tot 20 plaatsen',
            features: ['Economisch', 'Betrouwbaar', 'Ideaal kleine groepen']
          }
        ]
      },
      whyUs: {
        title: 'Waarom Ons Kiezen',
        items: [
          {
            title: 'Concurrerende Prijzen',
            description: 'Vaste prijs inclusief belastingen, tol en fooien',
            icon: Euro
          },
          {
            title: 'Kwaliteitsvoertuigen',
            description: 'Ruime bussen met comfortabele stoelen voor iedereen',
            icon: Bus
          },
          {
            title: 'Service op Maat',
            description: 'Alle details vooraf afgesproken voor uw groep',
            icon: Clock
          }
        ]
      },
      faq: {
        title: 'Veelgestelde Vragen',
        items: [
          {
            question: 'Wat zijn uw tarieven voor bus huren?',
            answer: 'Onze tarieven variëren afhankelijk van de duur, afstand en type voertuig. Een standaard bus van 50 plaatsen kost tussen 300 en 950 euro per dag. Neem contact met ons op voor een persoonlijke offerte.'
          },
          {
            question: 'Hoe kan ik een bus met chauffeur reserveren?',
            answer: 'U kunt ons contacteren via telefoon +32 2 446 01 91 of email info@locationbus.be. Wij verstrekken u binnen 24u een gedetailleerde offerte.'
          },
          {
            question: 'Wat zijn uw servicegebieden?',
            answer: 'Wij bedienen Brussel, heel België en Europa. Onze populaire bestemmingen zijn Parijs, Amsterdam, Frankfurt en Rotterdam.'
          },
          {
            question: 'Zijn uw voertuigen verzekerd?',
            answer: 'Ja, al onze voertuigen zijn volledig verzekerd en onze chauffeurs zijn ervaren en gecertificeerd.'
          }
        ]
      },
      contact: {
        title: 'Contacteer Ons',
        subtitle: 'Huur een bus in 30 seconden',
        form: {
          title: 'Laat ons een bericht achter',
          name: 'Uw naam',
          email: 'Uw e-mail',
          subject: 'Onderwerp',
          message: 'Uw bericht',
          send: 'Verstuur Bericht'
        },
        info: {
          phone: 'Telefoon',
          email: 'Email',
          address: 'Adres',
          phoneNumber: '+32 2 446 01 91',
          emailAddress: 'info@locationbus.be',
          fullAddress: 'Pegasuslaan 5, 1831 Machelen, België',
          hours: 'Service Uren',
          hoursText: 'Klantenservice 7 dagen per week',
          response: 'Gegarandeerd antwoord binnen 24u'
        }
      },
      footer: {
        company: 'Transportbedrijf in Brussel',
        rights: '© 2025 LocationBus. Alle rechten voorbehouden.',
        services: 'Diensten',
        contact: 'Contact',
        quickLinks: 'Snelle Links',
        servicesList: ['Bus Huren', 'Luchthaven Transfer', 'Europa Reizen', 'VIP Service']
      },
      about: {
        title: 'Over LocationBus',
        subtitle: 'Uw betrouwbare partner voor groepsvervoer',
        content: 'Al meer dan 15 jaar is LocationBus de leider in autocar vervoer met chauffeur in België. Onze expertise en toewijding aan excellentie stellen ons in staat om superieure transportdiensten te bieden voor al uw groepsvervoer behoeften.',
        mission: 'Onze Missie',
        missionText: 'Het leveren van veilige, comfortabele en betrouwbare transportoplossingen voor al uw groepsreizen, of het nu gaat om bedrijfsevenementen, schooluitstapjes of toeristische reizen.',
        values: 'Onze Waarden',
        valuesList: ['Veiligheid en betrouwbaarheid', 'Uitzonderlijke klantenservice', 'Respect voor het milieu', 'Continue innovatie']
      }
    },
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        blog: 'Blog',
        contact: 'Contact'
      },
      hero: {
        title: 'Bus Rental with Driver',
        subtitle: 'in Brussels',
        description: 'Professional service for your travels in Belgium and Europe',
        cta1: 'Request Quote'
      },
      services: {
        title: 'Our Transport Services',
        items: [
          {
            title: 'Bus Transfer Service',
            description: 'Professional transfer service for all your group travels.',
            icon: Bus
          },
          {
            title: 'Airport Transfer',
            description: 'Direct transfers to Brussels airports and surroundings.',
            icon: MapPin
          },
          {
            title: 'Long Distance Travel',
            description: 'Comfortable journeys for your long-distance travels in Europe.',
            icon: Users
          },
          {
            title: 'Bus Rental Europe',
            description: 'Transport service for your travels throughout Europe.',
            icon: Shield
          }
        ]
      },
      fleet: {
        title: 'Our Vehicle Fleet',
        subtitle: 'Modern and comfortable vehicles for all your needs',
        vehicles: [
          {
            name: 'Luxury Coaches',
            capacity: 'Up to 60 seats',
            features: ['Euro 6', 'Air Conditioning', 'Comfort Seats', 'WiFi']
          },
          {
            name: 'VIP Minibus',
            capacity: 'Up to 30 seats',
            features: ['Premium comfort', 'Modern equipment', 'Personalized service']
          },
          {
            name: 'Standard Minibus',
            capacity: 'Up to 20 seats',
            features: ['Economical', 'Reliable', 'Ideal small groups']
          }
        ]
      },
      whyUs: {
        title: 'Why Choose Us',
        items: [
          {
            title: 'Competitive Prices',
            description: 'Fixed price including taxes, tolls and tips',
            icon: Euro
          },
          {
            title: 'Quality Vehicles',
            description: 'Spacious buses with comfortable seats for everyone',
            icon: Bus
          },
          {
            title: 'Tailored Service',
            description: 'All details agreed in advance for your group',
            icon: Clock
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'What are your rates for bus rental?',
            answer: 'Our rates vary according to duration, distance and vehicle type. A standard 50-seat bus costs between 300 and 950 euros per day. Contact us for a personalized quote.'
          },
          {
            question: 'How to book a bus with driver?',
            answer: 'You can contact us by phone +32 2 446 01 91 or email info@locationbus.be. We will provide you with a detailed quote within 24h.'
          },
          {
            question: 'What are your service areas?',
            answer: 'We serve Brussels, all of Belgium and Europe. Our popular destinations include Paris, Amsterdam, Frankfurt and Rotterdam.'
          },
          {
            question: 'Are your vehicles insured?',
            answer: 'Yes, all our vehicles are fully insured and our drivers are experienced and certified.'
          }
        ]
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Rent a bus in 30 seconds',
        form: {
          title: 'Leave us a message',
          name: 'Your name',
          email: 'Your email',
          subject: 'Subject',
          message: 'Your message',
          send: 'Send Message'
        },
        info: {
          phone: 'Phone',
          email: 'Email',
          address: 'Address',
          phoneNumber: '+32 2 446 01 91',
          emailAddress: 'info@locationbus.be',
          fullAddress: 'Pegasuslaan 5, 1831 Machelen, Belgium',
          hours: 'Service Hours',
          hoursText: 'Customer service 7 days a week',
          response: 'Guaranteed response within 24h'
        }
      },
      footer: {
        company: 'Transport company in Brussels',
        rights: '© 2025 LocationBus. All rights reserved.',
        services: 'Services',
        contact: 'Contact',
        quickLinks: 'Quick Links',
        servicesList: ['Bus Rental', 'Airport Transfer', 'Europe Travel', 'VIP Service']
      },
      about: {
        title: 'About LocationBus',
        subtitle: 'Your trusted partner for group transportation',
        content: 'For over 15 years, LocationBus has been the leader in coach transportation with driver in Belgium. Our expertise and commitment to excellence enable us to provide superior transport services for all your group travel needs.',
        mission: 'Our Mission',
        missionText: 'To provide safe, comfortable and reliable transport solutions for all your group travels, whether for corporate events, school trips, or tourist journeys.',
        values: 'Our Values',
        valuesList: ['Safety and reliability', 'Exceptional customer service', 'Environmental respect', 'Continuous innovation']
      }
    }
  }

  const currentContent = content[language]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead faqData={currentContent.faq.items} />
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logoImage} alt="Location Bus Bruxelles" className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                {currentContent.nav.home}
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                {currentContent.nav.services}
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                {currentContent.nav.about}
              </a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">
                {currentContent.nav.blog}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                {currentContent.nav.contact}
              </a>
            </nav>

            {/* Language Selector & Phone */}
            <div className="flex items-center space-x-4">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-24">
                  <SelectValue>
                    {language === 'fr' && '🇫🇷 FR'}
                    {language === 'nl' && '🇳🇱 NL'}
                    {language === 'en' && '🇬🇧 EN'}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fr">🇫🇷 FR</SelectItem>
                  <SelectItem value="nl">🇳🇱 NL</SelectItem>
                  <SelectItem value="en">🇬🇧 EN</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Phone className="h-4 w-4 mr-2" />
                {currentContent.contact.info.phoneNumber}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="text-foreground hover:text-primary transition-colors py-2">
                  {currentContent.nav.home}
                </a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors py-2">
                  {currentContent.nav.services}
                </a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
                  {currentContent.nav.about}
                </a>
                <a href="#blog" className="text-foreground hover:text-primary transition-colors py-2">
                  {currentContent.nav.blog}
                </a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
                  {currentContent.nav.contact}
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {currentContent.hero.title}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-yellow-400">
            {currentContent.hero.subtitle}
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {currentContent.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              {currentContent.hero.cta1}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentContent.services.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.services.items.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                    <Button variant="link" className="mt-4 p-0">
                      En savoir plus →
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentContent.fleet.title}</h2>
            <p className="text-xl text-muted-foreground">{currentContent.fleet.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.fleet.vehicles.map((vehicle, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <Bus className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{vehicle.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {vehicle.capacity}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {vehicle.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentContent.whyUs.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.whyUs.items.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                    <IconComponent className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentContent.about.title}</h2>
              <p className="text-xl text-muted-foreground mb-8">{currentContent.about.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-8 leading-relaxed">{currentContent.about.content}</p>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{currentContent.about.mission}</h3>
                  <p className="text-muted-foreground leading-relaxed">{currentContent.about.missionText}</p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{currentContent.about.values}</h3>
                  <ul className="space-y-3">
                    {currentContent.about.valuesList.map((value, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        <span className="text-muted-foreground">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="LocationBus Fleet" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentContent.faq.title}</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {currentContent.faq.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentContent.contact.title}</h2>
            <p className="text-xl text-muted-foreground">{currentContent.contact.subtitle}</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>{currentContent.contact.form.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{currentContent.contact.form.name}</Label>
                    <Input id="name" placeholder={currentContent.contact.form.name} />
                  </div>
                  <div>
                    <Label htmlFor="email">{currentContent.contact.form.email}</Label>
                    <Input id="email" type="email" placeholder={currentContent.contact.form.email} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">{currentContent.contact.form.subject}</Label>
                  <Input id="subject" placeholder={currentContent.contact.form.subject} />
                </div>
                <div>
                  <Label htmlFor="message">{currentContent.contact.form.message}</Label>
                  <Textarea id="message" placeholder={currentContent.contact.form.message} rows={5} />
                </div>
                <Button className="w-full">
                  {currentContent.contact.form.send}
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{currentContent.contact.info.phone}</h3>
                  <p className="text-muted-foreground">{currentContent.contact.info.phoneNumber}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{currentContent.contact.info.email}</h3>
                  <p className="text-muted-foreground">{currentContent.contact.info.emailAddress}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Location className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{currentContent.contact.info.address}</h3>
                  <p className="text-muted-foreground">{currentContent.contact.info.fullAddress}</p>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">{currentContent.contact.info.hours}</h3>
                <p className="text-muted-foreground mb-2">{currentContent.contact.info.hoursText}</p>
                <p className="text-sm text-primary font-medium">{currentContent.contact.info.response}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img src={logoImage} alt="Location Bus Bruxelles" className="h-12 w-auto mb-4" />
              <p className="text-muted-foreground mb-4">{currentContent.footer.company}</p>
              <p className="text-sm text-muted-foreground">{currentContent.footer.rights}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{currentContent.footer.services}</h3>
              <ul className="space-y-2">
                {currentContent.footer.servicesList.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{currentContent.footer.contact}</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>{currentContent.contact.info.phoneNumber}</p>
                <p>{currentContent.contact.info.emailAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

