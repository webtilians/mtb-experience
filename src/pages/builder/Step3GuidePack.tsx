import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Check, Users, Map, Wrench, Coffee } from 'lucide-react'
import Stepper from '../../components/ui/Stepper'
import Button from '../../components/ui/Button'

const guidePacks = [
  {
    id: 'pack-3',
    title: 'Pack 3 días',
    price: '450€',
    pricePerPerson: '~75€/persona (6 riders)',
    days: 3,
    popular: false,
  },
  {
    id: 'pack-4',
    title: 'Pack 4 días',
    price: '550€',
    pricePerPerson: '~92€/persona (6 riders)',
    days: 4,
    popular: true,
  },
  {
    id: 'pack-week',
    title: 'Pack Semana',
    price: '900€',
    pricePerPerson: '~150€/persona (6 riders)',
    days: 7,
    popular: false,
  },
]

const includes = [
  { icon: Users, text: 'Guía MTB experto local' },
  { icon: Map, text: 'Briefing diario y planificación de rutas' },
  { icon: Users, text: 'Acompañamiento y seguridad' },
  { icon: Wrench, text: 'Soporte mecánico básico' },
  { icon: Coffee, text: 'Recomendaciones locales' },
]

export default function Step3GuidePack() {
  const [selectedPack, setSelectedPack] = useState<string | null>('pack-4')

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Stepper */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Stepper currentStep={3} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Guía MTB
          </h1>
          <p className="text-text-secondary">
            Selecciona el pack de guía para tu viaje.
          </p>
        </div>

        {/* Packs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {guidePacks.map((pack) => (
            <div
              key={pack.id}
              onClick={() => setSelectedPack(pack.id)}
              className={`relative bg-surface rounded-xl border p-6 cursor-pointer transition-all ${
                selectedPack === pack.id
                  ? 'border-accent ring-2 ring-accent/20'
                  : 'border-border hover:border-accent/50'
              }`}
            >
              {pack.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                  Más popular
                </span>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold text-text-primary mb-1">
                  {pack.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  {pack.days} días de guía
                </p>
                <div className="text-3xl font-bold text-accent mb-1">
                  {pack.price}
                </div>
                <p className="text-xs text-text-secondary">
                  {pack.pricePerPerson}
                </p>
              </div>

              {selectedPack === pack.id && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="bg-surface rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            ¿Qué incluye el pack de guía?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-text-secondary">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Link to="/planificar/alojamiento">
            <Button variant="ghost" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Volver
            </Button>
          </Link>
          <Link to="/planificar/extras">
            <Button
              variant="primary"
              size="lg"
              disabled={!selectedPack}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Continuar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
