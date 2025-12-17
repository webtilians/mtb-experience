import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Map, CheckCircle, MapPin } from 'lucide-react'
import Button from '../../components/ui/Button'
import CardZone from '../../components/cards/CardZone'
import { useTranslation } from '../../i18n'

// Featured zones - real data
const featuredZones = [
  {
    id: 'montes-de-malaga',
    title: 'Montes de Málaga',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    tags: ['Técnico', 'Flow', 'Vistas'],
    level: 'Intermedio' as const,
    type: 'Enduro' as const,
    description: 'Trails técnicos a 20 minutos de la ciudad con vistas al Mediterráneo.',
  },
  {
    id: 'velez-malaga',
    title: 'Vélez-Málaga',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800',
    tags: ['Mar', 'Montaña', 'Flow'],
    level: 'Intermedio' as const,
    type: 'Enduro' as const,
    description: 'La Axarquía: trails únicos entre el mar y la montaña.',
  },
  {
    id: 'archidona',
    title: 'Archidona',
    image: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800',
    tags: ['Salvaje', 'Auténtico', 'Técnico'],
    level: 'Avanzado' as const,
    type: 'Enduro' as const,
    description: 'Comarca Nororiental: trails salvajes y poco transitados.',
  },
  {
    id: 'marbella',
    title: 'Marbella',
    image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800',
    tags: ['Costa', 'Vistas', 'Premium'],
    level: 'Intermedio' as const,
    type: 'Enduro' as const,
    description: 'Costa del Sol: trails con vistas al mar y clima perfecto.',
  },
  {
    id: 'tarifa',
    title: 'Tarifa',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    tags: ['África', 'Viento', 'Aventura'],
    level: 'Avanzado' as const,
    type: 'Enduro' as const,
    description: 'El punto más al sur de Europa: trails con vistas a África.',
  },
  {
    id: 'granada',
    title: 'Granada',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    tags: ['Sierra Nevada', 'Alta montaña', 'Épico'],
    level: 'Avanzado' as const,
    type: 'Enduro' as const,
    description: 'Descensos épicos desde Sierra Nevada con la Alhambra de fondo.',
  },
]

export default function Home() {
  const { t } = useTranslation()

  const steps = [
    {
      icon: Map,
      title: t('home.steps.step1.title'),
      description: t('home.steps.step1.description'),
    },
    {
      icon: MapPin,
      title: t('home.steps.step2.title'),
      description: t('home.steps.step2.description'),
    },
    {
      icon: CheckCircle,
      title: t('home.steps.step3.title'),
      description: t('home.steps.step3.description'),
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=1920"
            alt="MTB en Andalucía"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t('home.hero.subtitle')}
            </p>

            {/* CTA Button */}
            <Link to="/planificar">
              <Button variant="primary" size="lg" className="text-lg px-8 py-4">
                {t('home.hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-accent/5 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4">
          <div className="flex items-center justify-center gap-8 text-sm">
            <span className="flex items-center gap-2 text-text-secondary">
              <Shield className="w-4 h-4 text-accent" />
              {t('home.trustBanner.certifiedGuides')}
            </span>
            <span className="hidden md:flex items-center gap-2 text-text-secondary">
              <Shield className="w-4 h-4 text-accent" />
              {t('home.trustBanner.fullLogistics')}
            </span>
            <span className="flex items-center gap-2 text-text-secondary">
              <Shield className="w-4 h-4 text-accent" />
              {t('home.trustBanner.verifiedPartners')}
            </span>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {t('home.steps.title')}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t('home.steps.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-sm text-accent font-semibold mb-2">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Zones */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                {t('home.featuredZones.title')}
              </h2>
              <p className="text-text-secondary">
                {t('home.featuredZones.subtitle')}
              </p>
            </div>
            <Link to="/zonas">
              <Button variant="ghost">
                {t('home.featuredZones.viewAll')}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredZones.map((zone) => (
              <CardZone key={zone.id} {...zone} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="bg-accent rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <Link to="/planificar">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-accent hover:bg-gray-100"
              >
                {t('home.cta.button')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
