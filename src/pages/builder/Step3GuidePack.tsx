import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Check, Users, Map, Wrench, Coffee } from 'lucide-react'
import Stepper from '../../components/ui/Stepper'
import Button from '../../components/ui/Button'

// Precio real: 75€/persona/día (mín. 4 pax) - Incluye Guía + Shuttle
const guidePacks = [
  {
    id: 'pack-2',
    title: 'Weekend (2 días)',
    pricePerPersonPerDay: 75,
    days: 2,
    popular: false,
    minPax: 4,
  },
  {
    id: 'pack-3',
    title: 'Pack 3 días',
    pricePerPersonPerDay: 75,
    days: 3,
    popular: false,
    minPax: 4,
  },
  {
    id: 'pack-4',
    title: 'Pack 4 días',
    pricePerPersonPerDay: 75,
    days: 4,
    popular: true,
    minPax: 4,
  },
  {
    id: 'pack-5',
    title: 'Pack 5 días',
    pricePerPersonPerDay: 75,
    days: 5,
    popular: false,
    minPax: 4,
  },
  {
    id: 'pack-week',
    title: 'Pack Semana (7 días)',
    pricePerPersonPerDay: 70, // Descuento por semana completa
    days: 7,
    popular: false,
    minPax: 4,
  },
]

const includes = [
  { icon: Users, text: 'Guía MTB experto local' },
  { icon: Map, text: 'Shuttle incluido en cada jornada' },
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
            Guía + Shuttle
          </h1>
          <p className="text-text-secondary">
            Selecciona la duración de tu experiencia. Todos los packs incluyen guía MTB experto y servicio de shuttle.
          </p>
        </div>

        {/* Packs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {guidePacks.map((pack) => {
            const totalPerPerson = pack.pricePerPersonPerDay * pack.days
            return (
              <div
                key={pack.id}
                onClick={() => setSelectedPack(pack.id)}
                className={`relative bg-surface rounded-xl border p-5 cursor-pointer transition-all ${
                  selectedPack === pack.id
                    ? 'border-accent ring-2 ring-accent/20'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                {pack.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full whitespace-nowrap">
                    Más popular
                  </span>
                )}

                <div className="text-center">
                  <h3 className="text-base font-semibold text-text-primary mb-1">
                    {pack.title}
                  </h3>
                  <p className="text-xs text-text-secondary mb-3">
                    {pack.days} días · Guía + Shuttle
                  </p>
                  <div className="text-2xl font-bold text-accent mb-1">
                    {pack.pricePerPersonPerDay}€
                  </div>
                  <p className="text-xs text-text-secondary">
                    /persona/día
                  </p>
                  <p className="text-xs text-text-secondary mt-2 pt-2 border-t border-border">
                    Total: {totalPerPerson}€/persona
                  </p>
                  <p className="text-xs text-text-muted">
                    (mín. {pack.minPax} pax)
                  </p>
                </div>

                {selectedPack === pack.id && (
                  <div className="absolute top-3 right-3 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            )
          })}
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
