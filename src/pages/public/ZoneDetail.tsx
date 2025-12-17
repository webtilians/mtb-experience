import { useParams, Link } from 'react-router-dom'
import { Calendar, TrendingUp, Mountain, ArrowRight, CheckCircle, MapPin } from 'lucide-react'
import Button from '../../components/ui/Button'
import CardStay from '../../components/cards/CardStay'
import CardTrail from '../../components/cards/CardTrail'

// Trail data for each zone
const trailsData = {
  ronda: [
    {
      name: 'El Tajo Descent',
      difficulty: 'Rojo' as const,
      distance: '8.2 km',
      descent: '650m',
      rating: 4.7,
      description: 'Trail técnico con vistas al famoso puente de Ronda. Secciones de roca natural y switchbacks.',
      trailforksUrl: 'https://www.trailforks.com/region/ronda/',
      stravaUrl: 'https://www.strava.com/segments/explore#702,2/36.7,-5.17,36.75,-5.1',
    },
    {
      name: 'Sierra de las Nieves',
      difficulty: 'Negro' as const,
      distance: '12.5 km',
      descent: '1200m',
      rating: 4.9,
      description: 'Descenso épico desde el pico más alto. Trail alpino con terreno variado.',
      trailforksUrl: 'https://www.trailforks.com/region/sierra-de-las-nieves/',
    },
    {
      name: 'Encinas Flow',
      difficulty: 'Azul' as const,
      distance: '5.8 km',
      descent: '420m',
      rating: 4.5,
      description: 'Trail fluido entre bosques de encinas. Perfecto para calentar.',
      trailforksUrl: 'https://www.trailforks.com/region/ronda/',
    },
    {
      name: 'Cueva del Gato',
      difficulty: 'Rojo' as const,
      distance: '6.3 km',
      descent: '580m',
      rating: 4.6,
      description: 'Trail técnico que termina cerca de la famosa cueva. Rocas y roots.',
      stravaUrl: 'https://www.strava.com/segments/explore#702,2/36.7,-5.2,36.8,-5.1',
    },
  ],
  malaga: [
    {
      name: 'Montes de Málaga DH',
      difficulty: 'Rojo' as const,
      distance: '7.1 km',
      descent: '720m',
      rating: 4.6,
      description: 'Descenso clásico desde los Montes de Málaga hasta la costa.',
      trailforksUrl: 'https://www.trailforks.com/region/montes-de-malaga/',
    },
    {
      name: 'El Torcal Express',
      difficulty: 'Negro' as const,
      distance: '9.4 km',
      descent: '890m',
      rating: 4.8,
      description: 'Trail entre formaciones kársticas únicas. Terreno técnico.',
      trailforksUrl: 'https://www.trailforks.com/region/el-torcal/',
    },
  ],
  cadiz: [
    {
      name: 'Grazalema Flow',
      difficulty: 'Azul' as const,
      distance: '6.2 km',
      descent: '480m',
      rating: 4.4,
      description: 'Trail fluido en la Sierra de Grazalema. Vistas espectaculares.',
      trailforksUrl: 'https://www.trailforks.com/region/grazalema/',
    },
    {
      name: 'Pinsapar Descent',
      difficulty: 'Rojo' as const,
      distance: '8.8 km',
      descent: '750m',
      rating: 4.7,
      description: 'Descenso a través del bosque de pinsapos. Terreno natural.',
      trailforksUrl: 'https://www.trailforks.com/region/grazalema/',
    },
  ],
}

// Mock data
const zoneData = {
  ronda: {
    id: 'ronda',
    title: 'Ronda / Serranía',
    subtitle: 'Trails técnicos con vistas espectaculares',
    heroImage: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=1920',
    images: [
      'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800',
    ],
    level: 'Avanzado',
    type: 'Enduro',
    bestSeason: 'Octubre - Mayo',
    runsPerDay: '4-6',
    description: 'La Serranía de Ronda ofrece algunos de los trails más técnicos y espectaculares de Andalucía. Con el impresionante Tajo como telón de fondo, los senderos combinan secciones técnicas de roca con tramos fluidos entre bosques de encinas.',
    includes: [
      'Guía local experto en la zona',
      'Planificación de rutas según nivel',
      'Transporte a puntos de inicio',
      'Soporte mecánico básico',
      'Recomendaciones de restaurantes locales',
    ],
    requirements: [
      'Nivel intermedio-avanzado',
      'Bici de enduro (150-170mm)',
      'Casco integral recomendado',
      'Protecciones rodilleras',
    ],
    itinerary: [
      { day: 'Día 1', title: 'Llegada y trail de bienvenida', description: 'Recogida, briefing y trail suave de calentamiento.' },
      { day: 'Día 2', title: 'Los Caminos del Rey', description: 'Trail técnico con vistas al Tajo. 1200m de descenso.' },
      { day: 'Día 3', title: 'Sierra de las Nieves', description: 'Trails en alta montaña. 1800m de descenso acumulado.' },
      { day: 'Día 4', title: 'Despedida', description: 'Trail de cierre y traslado al aeropuerto.' },
    ],
  },
}

const nearbyStays = [
  {
    id: 'casa-ronda-1',
    title: 'Casa Rural El Molino',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    municipality: 'Ronda',
    capacity: 6,
    priceRange: '120-150€',
    amenities: ['Parking', 'Piscina', 'Jardín'],
  },
  {
    id: 'casa-ronda-2',
    title: 'Cortijo Los Olivos',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    municipality: 'Arriate',
    capacity: 8,
    priceRange: '150-180€',
    amenities: ['Parking', 'BBQ', 'Vistas'],
  },
]

export default function ZoneDetail() {
  const { zoneId } = useParams()
  const zone = zoneData[zoneId as keyof typeof zoneData] || zoneData.ronda
  const trails = trailsData[zoneId as keyof typeof trailsData] || trailsData.ronda

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={zone.heroImage}
          alt={zone.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-medium rounded-full mb-4">
              {zone.type}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {zone.title}
            </h1>
            <p className="text-xl text-gray-200">{zone.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-6">
          <div className="flex flex-wrap items-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <div>
                <span className="text-sm text-text-secondary">Nivel</span>
                <p className="font-semibold text-text-primary">{zone.level}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <div>
                <span className="text-sm text-text-secondary">Mejor época</span>
                <p className="font-semibold text-text-primary">{zone.bestSeason}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mountain className="w-5 h-5 text-accent" />
              <div>
                <span className="text-sm text-text-secondary">Runs por día</span>
                <p className="font-semibold text-text-primary">{zone.runsPerDay}</p>
              </div>
            </div>
            <div className="ml-auto">
              <Link to={`/planificar?zona=${zone.id}`}>
                <Button variant="primary" size="lg">
                  Reservar en esta zona
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Sobre esta zona
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {zone.description}
                </p>
              </div>

              {/* What's included */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Qué incluye
                </h2>
                <ul className="space-y-3">
                  {zone.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Qué necesitas
                </h2>
                <ul className="space-y-3">
                  {zone.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Mountain className="w-5 h-5 text-text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Ejemplo de itinerario (4 días)
                </h2>
                <div className="space-y-4">
                  {zone.itinerary.map((day, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-bold">{day.day}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary">
                          {day.title}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trails Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-text-primary">
                    Trails de la zona
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <MapPin className="w-4 h-4" />
                    <span>{trails.length} trails disponibles</span>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-6">
                  Estos son algunos de los trails que rodaremos durante tu viaje. 
                  Los enlaces te llevan a Trailforks y Strava para que puedas ver los tracks, 
                  fotos y reseñas de otros riders.
                </p>

                <div className="space-y-3">
                  {trails.map((trail, index) => (
                    <CardTrail key={index} {...trail} />
                  ))}
                </div>

                <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img 
                        src="https://www.trailforks.com/favicon.ico" 
                        alt="Trailforks" 
                        className="w-4 h-4"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary text-sm">
                        Explora más en Trailforks
                      </h4>
                      <p className="text-sm text-text-secondary mt-1">
                        Descubre todos los trails de la zona con mapas detallados, 
                        condiciones actualizadas y fotos de la comunidad.
                      </p>
                      <a 
                        href={`https://www.trailforks.com/region/andalusia/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 mt-2"
                      >
                        Ver región completa
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                  <h3 className="font-semibold text-text-primary mb-2">
                    ¿Listo para rodar en {zone.title}?
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Configura tu viaje a medida con alojamiento, guía y extras.
                  </p>
                  <Link to={`/planificar?zona=${zone.id}`}>
                    <Button variant="primary" size="lg" className="w-full">
                      Planificar viaje
                    </Button>
                  </Link>
                </div>

                {/* Nearby Stays */}
                <div>
                  <h3 className="font-semibold text-text-primary mb-4">
                    Alojamientos en la zona
                  </h3>
                  <div className="space-y-4">
                    {nearbyStays.map((stay) => (
                      <CardStay key={stay.id} {...stay} />
                    ))}
                  </div>
                  <Link to="/alojamientos" className="block mt-4">
                    <Button variant="ghost" size="sm" className="w-full">
                      Ver todos los alojamientos
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
