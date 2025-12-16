import { useParams, Link } from 'react-router-dom'
import { MapPin, Users, Check, ArrowRight, ArrowLeft } from 'lucide-react'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'

// Mock data
const stayData = {
  'casa-1': {
    id: 'casa-1',
    title: 'Casa Rural El Molino',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    ],
    municipality: 'Ronda',
    zone: 'Serranía de Ronda',
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    priceRange: '120-150€',
    description: 'Antigua casa de molino restaurada con encanto. Ubicada a solo 10 minutos del centro de Ronda y a 5 minutos de los principales trailheads.',
    amenities: [
      'Parking privado para 3 coches',
      'Zona para guardar bicis',
      'Piscina privada',
      'Jardín con BBQ',
      'WiFi de alta velocidad',
      'Cocina totalmente equipada',
      'Lavadora y secadora',
      'Aire acondicionado',
    ],
    rules: [
      'Check-in: 15:00 - 20:00',
      'Check-out: antes de 11:00',
      'Se admiten grupos de hasta 8 personas',
      'Permitido lavar bicis en zona exterior',
    ],
    nearestTrails: '5 min en coche',
  },
}

export default function StayDetail() {
  const { stayId } = useParams()
  const stay = stayData[stayId as keyof typeof stayData] || stayData['casa-1']

  return (
    <div className="min-h-screen bg-background">
      {/* Back link */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4">
          <Link
            to="/alojamientos"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a alojamientos
          </Link>
        </div>
      </div>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] md:h-[500px]">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={stay.images[0]}
              alt={stay.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            {stay.images.slice(1, 5).map((img, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`${stay.title} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge type="verified" />
                <span className="text-sm text-text-secondary">
                  Trails a {stay.nearestTrails}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-text-primary mb-2">
                {stay.title}
              </h1>
              <div className="flex items-center gap-4 text-text-secondary">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {stay.municipality}, {stay.zone}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {stay.capacity} personas
                </span>
                <span>{stay.bedrooms} habitaciones</span>
                <span>{stay.bathrooms} baños</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                Sobre este alojamiento
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {stay.description}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Servicios
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {stay.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="text-text-secondary">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Normas de la casa
              </h2>
              <ul className="space-y-2">
                {stay.rules.map((rule, index) => (
                  <li key={index} className="text-text-secondary">
                    • {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-surface rounded-xl border border-border p-6">
              <div className="mb-4">
                <span className="text-2xl font-bold text-text-primary">
                  {stay.priceRange}
                </span>
                <span className="text-text-secondary"> /noche</span>
              </div>
              <p className="text-sm text-text-secondary mb-6">
                Precio orientativo. Puede variar por temporada. Confirmamos disponibilidad por email/WhatsApp.
              </p>

              <div className="mb-4 p-3 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-sm text-text-primary">
                  <strong>Disponible bajo confirmación</strong>
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  Confirmamos la disponibilidad en menos de 24h.
                </p>
              </div>

              <Link to={`/planificar?alojamiento=${stay.id}`}>
                <Button variant="primary" size="lg" className="w-full mb-3">
                  Seleccionar esta casa
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link to="/alojamiento-externo">
                <Button variant="ghost" size="md" className="w-full">
                  Prefiero reservar en Airbnb/Booking
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
