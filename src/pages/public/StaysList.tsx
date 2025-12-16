import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Filter, ExternalLink } from 'lucide-react'
import CardStay from '../../components/cards/CardStay'
import Button from '../../components/ui/Button'

// Mock data
const stays = [
  {
    id: 'casa-1',
    title: 'Casa Rural El Molino',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    municipality: 'Ronda',
    capacity: 6,
    priceRange: '120-150€',
    amenities: ['Parking', 'Piscina', 'Jardín', 'WiFi', 'Lavadora'],
  },
  {
    id: 'casa-2',
    title: 'Cortijo Los Olivos',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    municipality: 'Arriate',
    capacity: 8,
    priceRange: '150-180€',
    amenities: ['Parking', 'BBQ', 'Vistas', 'Pet-friendly'],
  },
  {
    id: 'casa-3',
    title: 'Villa Axarquía',
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'],
    municipality: 'Cómpeta',
    capacity: 6,
    priceRange: '100-130€',
    amenities: ['Piscina', 'Vistas al mar', 'Terraza'],
  },
  {
    id: 'casa-4',
    title: 'Finca Sierra Nevada',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
    municipality: 'Capileira',
    capacity: 10,
    priceRange: '200-250€',
    amenities: ['Parking', 'Chimenea', 'Montaña', 'Spa'],
  },
]

export default function StaysList() {
  const [filterCapacity, setFilterCapacity] = useState<string>('all')
  const [filterAmenity, setFilterAmenity] = useState<string>('all')

  const filteredStays = stays.filter((stay) => {
    if (filterCapacity !== 'all') {
      const [min, max] = filterCapacity.split('-').map(Number)
      if (stay.capacity < min || stay.capacity > max) return false
    }
    if (filterAmenity !== 'all') {
      if (!stay.amenities.includes(filterAmenity)) return false
    }
    return true
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Casas verificadas para riders
          </h1>
          <p className="text-text-secondary">
            Alojamientos seleccionados pensando en grupos de MTB.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-surface border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-text-secondary" />
              <span className="text-sm text-text-secondary">Filtrar:</span>
            </div>
            <select
              value={filterCapacity}
              onChange={(e) => setFilterCapacity(e.target.value)}
              className="px-3 py-1.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="all">Capacidad: Todas</option>
              <option value="4-6">4-6 personas</option>
              <option value="6-8">6-8 personas</option>
              <option value="8-12">8-12 personas</option>
            </select>
            <select
              value={filterAmenity}
              onChange={(e) => setFilterAmenity(e.target.value)}
              className="px-3 py-1.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="all">Servicios: Todos</option>
              <option value="Piscina">Piscina</option>
              <option value="Parking">Parking</option>
              <option value="Pet-friendly">Pet-friendly</option>
            </select>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
        {/* External option banner */}
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-text-primary mb-1">
                ¿Prefieres reservar por tu cuenta?
              </h3>
              <p className="text-sm text-text-secondary">
                Puedes reservar en Airbnb/Booking y después volver para cerrar guía y extras.
              </p>
            </div>
            <Link to="/alojamiento-externo">
              <Button variant="secondary" rightIcon={<ExternalLink className="w-4 h-4" />}>
                Reservar en Airbnb/Booking
              </Button>
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStays.map((stay) => (
            <CardStay key={stay.id} {...stay} />
          ))}
        </div>

        {filteredStays.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">
              No hay alojamientos que coincidan con los filtros.
            </p>
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => {
                setFilterCapacity('all')
                setFilterAmenity('all')
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
