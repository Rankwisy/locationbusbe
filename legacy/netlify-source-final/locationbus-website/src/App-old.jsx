import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Bus, 
  Euro, 
  Clock, 
  Users, 
  Shield, 
  Star,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import SEOHead from './components/SEOHead.jsx'
import './App.css'

// Import assets
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
        cta1: 'Demandez un Devis',
        cta2: 'Nos Services'
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
          name: 'Votre nom',
          email: 'Votre e-mail',
          subject: 'Objet',
          message: 'Votre message',
          send: 'Envoyer le Message'
        },
        info: {
          phone: '+32 2 446 01 91',
          email: 'info@locationbus.be',
          address: 'Pegasuslaan 5, 1831 Machelen, Belgique'
        }
      },
      footer: {
        company: 'Société de transport à Bruxelles',
        rights: '© 2025 LocationBus. Tous droits réservés.',
        links: {
          legal: 'Mentions légales',
          privacy: 'Politique de confidentialité'
        }
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
            <div className="hidden md:flex items-center space-x-4">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border border-border rounded px-2 py-1"
              >
                <option value="fr">🇫🇷 FR</option>
                <option value="nl">🇳🇱 NL</option>
                <option value="en">🇬🇧 EN</option>
              </select>
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                +32 2 446 01 91
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-4 mt-4">
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
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {currentContent.hero.title}
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-secondary">
            {currentContent.hero.subtitle}
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {currentContent.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              {currentContent.hero.cta1}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
              {currentContent.hero.cta2}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {currentContent.services.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.services.items.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                  <Button variant="link" className="mt-4 text-primary">
                    En savoir plus →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {currentContent.fleet.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {currentContent.fleet.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.fleet.vehicles.map((vehicle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{vehicle.name}</CardTitle>
                  <CardDescription className="text-center text-lg font-semibold text-primary">
                    {vehicle.capacity}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {vehicle.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Star className="w-4 h-4 text-secondary mr-2" />
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {currentContent.whyUs.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.whyUs.items.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {currentContent.faq.title}
            </h2>
          </div>
          <div className="space-y-4">
            {currentContent.faq.items.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-left">{faq.question}</CardTitle>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {currentContent.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {currentContent.contact.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Laissez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">{currentContent.contact.form.name}</Label>
                  <Input id="name" placeholder={currentContent.contact.form.name} />
                </div>
                <div>
                  <Label htmlFor="email">{currentContent.contact.form.email}</Label>
                  <Input id="email" type="email" placeholder={currentContent.contact.form.email} />
                </div>
                <div>
                  <Label htmlFor="subject">{currentContent.contact.form.subject}</Label>
                  <Input id="subject" placeholder={currentContent.contact.form.subject} />
                </div>
                <div>
                  <Label htmlFor="message">{currentContent.contact.form.message}</Label>
                  <Textarea id="message" placeholder={currentContent.contact.form.message} rows={4} />
                </div>
                <Button className="w-full">
                  {currentContent.contact.form.send}
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <p className="text-muted-foreground">{currentContent.contact.info.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">{currentContent.contact.info.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-muted-foreground">{currentContent.contact.info.address}</p>
                </div>
              </div>
              
              {/* Service Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Heures de Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Service client 7 jours sur 7</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Réponse garantie sous 24h
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={logoImage} alt="Location Bus Bruxelles" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-sm opacity-80">
                {currentContent.footer.company}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Location Bus</li>
                <li>Transfert Aéroport</li>
                <li>Voyage Europe</li>
                <li>Service VIP</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>{currentContent.contact.info.phone}</li>
                <li>{currentContent.contact.info.email}</li>
                <li>Machelen, Belgique</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#home" className="hover:opacity-100 transition-opacity">Accueil</a></li>
                <li><a href="#services" className="hover:opacity-100 transition-opacity">Services</a></li>
                <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">
              {currentContent.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

