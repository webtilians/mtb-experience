import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, ExternalLink, Home } from 'lucide-react'
import Stepper from '../../components/ui/Stepper'
import Button from '../../components/ui/Button'
import CardStay from '../../components/cards/CardStay'
import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'

// Mock data
const stays = [
  {
    id: 'casa-1',
    title: 'Casa Rural El Molino',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    municipality: 'Ronda',
    capacity: 6,
    priceRange: '120-150€',
    amenities: ['Parking', 'Piscina', 'Jardín'],
  },
  {
    id: 'casa-2',
    title: 'Cortijo Los Olivos',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    municipality: 'Arriate',
    capacity: 8,
    priceRange: '150-180€',
    amenities: ['Parking', 'BBQ', 'Vistas'],
  },
]

type TabType = 'verified' | 'external' | 'skip'

export default function Step2Accommodation() {
  const [activeTab, setActiveTab] = useState<TabType>('verified')
  const [selectedStay, setSelectedStay] = useState<string | null>(null)
  const [externalForm, setExternalForm] = useState({
    link: '',
    municipality: '',
    arrivalTime: '',
    notes: '',
  })

  const canContinue =
    activeTab === 'skip' ||
    (activeTab === 'verified' && selectedStay) ||
    (activeTab === 'external' && externalForm.link)

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Stepper */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Stepper currentStep={2} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Alojamiento
          </h1>
          <p className="text-text-secondary">
            Elige una casa verificada o indica si ya has reservado por tu cuenta.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border mb-8">
          <button
            onClick={() => setActiveTab('verified')}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'verified'
                ? 'border-accent text-accent'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <Home className="w-4 h-4 inline-block mr-2" />
            Casas verificadas
          </button>
          <button
            onClick={() => setActiveTab('external')}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'external'
                ? 'border-accent text-accent'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <ExternalLink className="w-4 h-4 inline-block mr-2" />
            He reservado por mi cuenta
          </button>
          <button
            onClick={() => setActiveTab('skip')}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'skip'
                ? 'border-accent text-accent'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            Solo quiero guía
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'verified' && (
          <div>
            <div className="mb-4 p-3 bg-accent/5 border border-accent/20 rounded-lg">
              <p className="text-sm text-text-secondary">
                <strong>Disponible bajo confirmación.</strong> Confirmamos la disponibilidad por email/WhatsApp en menos de 24h.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stays.map((stay) => (
                <CardStay
                  key={stay.id}
                  {...stay}
                  isSelected={selectedStay === stay.id}
                  onSelect={() => setSelectedStay(stay.id)}
                />
              ))}
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://www.airbnb.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline text-sm inline-flex items-center gap-1"
              >
                Prefiero buscar en Airbnb/Booking
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {activeTab === 'external' && (
          <div className="bg-surface rounded-xl border border-border p-6 md:p-8">
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              Datos de tu reserva externa
            </h2>
            <p className="text-sm text-text-secondary mb-6">
              Puedes reservar en Airbnb/Booking y después indicarnos los datos aquí.
            </p>

            <div className="space-y-6">
              <Input
                label="Link del anuncio o confirmación"
                placeholder="https://www.airbnb.es/rooms/..."
                value={externalForm.link}
                onChange={(e) =>
                  setExternalForm({ ...externalForm, link: e.target.value })
                }
                helpText="Pega el enlace de tu reserva o del anuncio"
              />

              <Input
                label="Municipio / zona"
                placeholder="Ej: Ronda, Cómpeta..."
                value={externalForm.municipality}
                onChange={(e) =>
                  setExternalForm({ ...externalForm, municipality: e.target.value })
                }
              />

              <Input
                label="Hora de llegada (opcional)"
                placeholder="Ej: 15:00"
                value={externalForm.arrivalTime}
                onChange={(e) =>
                  setExternalForm({ ...externalForm, arrivalTime: e.target.value })
                }
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  Notas adicionales (opcional)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Cualquier información que debamos saber..."
                  value={externalForm.notes}
                  onChange={(e) =>
                    setExternalForm({ ...externalForm, notes: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skip' && (
          <div className="bg-surface rounded-xl border border-border p-8 text-center">
            <h2 className="text-lg font-semibold text-text-primary mb-2">
              Solo necesito guía y extras
            </h2>
            <p className="text-text-secondary mb-6">
              Perfecto. Ya tienes resuelto el alojamiento por tu cuenta.
              Continúa para seleccionar el pack de guía.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Link to="/planificar">
            <Button variant="ghost" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Volver
            </Button>
          </Link>
          <Link to="/planificar/guia">
            <Button
              variant="primary"
              size="lg"
              disabled={!canContinue}
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
