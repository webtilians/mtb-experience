import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Stepper from '../../components/ui/Stepper'
import Button from '../../components/ui/Button'
import CardExtra from '../../components/cards/CardExtra'

// Extras con precios reales
const extras = [
  {
    id: 'shuttle-day',
    title: 'Shuttle Day (sin guía)',
    description: 'Servicio de shuttle para maximizar descensos. Incluye conductor y vehículo. Mínimo 4 personas.',
    price: '50€',
    priceUnit: '/persona/día',
    isPartner: true,
    hasQuantity: true,
    maxQuantity: 7,
    minPax: 4,
  },
  {
    id: 'trailbuilder-day',
    title: 'Trailbuilder Day 🌱',
    description: 'Jornada de construcción/mantenimiento de trails. Medio día con herramientas, guía experto, bebida y snack. Mínimo 6 personas.',
    price: '30€',
    priceUnit: '/persona',
    isPartner: false,
    hasQuantity: true,
    maxQuantity: 12,
    minPax: 6,
    highlight: true,
  },
  {
    id: 'food-pack',
    title: 'Welcome Food Pack',
    description: 'Pack de bienvenida con productos locales andaluces para el primer día. Mínimo 4 personas.',
    price: '12€',
    priceUnit: '/persona',
    isPartner: false,
    hasQuantity: true,
    maxQuantity: 12,
    minPax: 4,
  },
  {
    id: 'ebike-rental',
    title: 'Alquiler de eMTB',
    description: 'eBike de enduro de alta gama (Specialized, Trek o similar). Incluye cargador.',
    price: '65€',
    priceUnit: '/persona/día',
    isPartner: true,
    hasQuantity: true,
    maxQuantity: 8,
  },
  {
    id: 'dh-rental',
    title: 'Alquiler Bici DH',
    description: 'Bici de descenso para días de bike park o rutas DH puras.',
    price: '70€',
    priceUnit: '/persona/día',
    isPartner: true,
    hasQuantity: true,
    maxQuantity: 6,
  },
  {
    id: 'photo-video',
    title: 'Foto/Vídeo Action Day',
    description: 'Fotógrafo/videógrafo profesional durante una jornada. Vídeo editado + fotos. Mínimo 350€/grupo.',
    price: '70€',
    priceUnit: '/persona/día',
    isPartner: true,
    hasQuantity: true,
    maxQuantity: 10,
    minPax: 5,
  },
]

export default function Step4Extras() {
  const [selectedExtras, setSelectedExtras] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('mtb-extras')
    return saved ? JSON.parse(saved) : {}
  })

  // Save extras to localStorage whenever they change
  useEffect(() => {
    const extrasWithDetails = Object.entries(selectedExtras).map(([id, quantity]) => {
      const extra = extras.find(e => e.id === id)
      return extra ? { ...extra, quantity } : null
    }).filter(Boolean)
    localStorage.setItem('mtb-extras', JSON.stringify(selectedExtras))
    localStorage.setItem('mtb-extras-details', JSON.stringify(extrasWithDetails))
  }, [selectedExtras])

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) => {
      if (prev[id] !== undefined) {
        const { [id]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [id]: 1 }
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      const { [id]: _, ...rest } = selectedExtras
      setSelectedExtras(rest)
    } else {
      setSelectedExtras((prev) => ({ ...prev, [id]: quantity }))
    }
  }

  const selectedCount = Object.keys(selectedExtras).length

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Stepper */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Stepper currentStep={4} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Extras opcionales
          </h1>
          <p className="text-text-secondary">
            Añade los servicios adicionales que necesites para tu viaje.
          </p>
        </div>

        {/* Extras grid */}
        <div className="space-y-4 mb-8">
          {extras.map((extra) => (
            <CardExtra
              key={extra.id}
              id={extra.id}
              title={extra.title}
              description={extra.description}
              price={extra.price}
              priceUnit={extra.priceUnit}
              isPartner={extra.isPartner}
              isSelected={selectedExtras[extra.id] !== undefined}
              quantity={selectedExtras[extra.id] || 0}
              maxQuantity={extra.maxQuantity}
              onSelect={!extra.hasQuantity ? () => toggleExtra(extra.id) : undefined}
              onQuantityChange={
                extra.hasQuantity
                  ? (qty) => updateQuantity(extra.id, qty)
                  : undefined
              }
            />
          ))}
        </div>

        {/* Selected summary */}
        {selectedCount > 0 && (
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-8">
            <p className="text-sm text-text-primary">
              <strong>{selectedCount}</strong> extra{selectedCount > 1 ? 's' : ''} seleccionado{selectedCount > 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* Info note */}
        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <p className="text-sm text-text-secondary">
            <strong>Nota:</strong> Los servicios marcados como "Partner" son prestados por colaboradores externos.
            Los servicios "bajo confirmación" se confirmarán en menos de 24h.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link to="/planificar/guia">
            <Button variant="ghost" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Volver
            </Button>
          </Link>
          <Link to="/planificar/checkout">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Continuar al pago
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
