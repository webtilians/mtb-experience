import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Calendar, TrendingUp, Mountain, ArrowRight, CheckCircle, MapPin, ExternalLink } from 'lucide-react'
import Button from '../../components/ui/Button'
import CardStay from '../../components/cards/CardStay'
import TrailforksWidget from '../../components/ui/TrailforksWidget'

// Zone data with Trailforks region IDs
const zoneData: Record<string, {
  id: string
  title: string
  subtitle: string
  heroImage: string
  level: string
  type: string
  bestSeason: string
  runsPerDay: string
  description: string
  trailforksRegionId: string
  trailforksUrl: string
  includes: string[]
  requirements: string[]
  itinerary: { day: string; title: string; description: string }[]
}> = {
  'montes-de-malaga': {
    id: 'montes-de-malaga',
    title: 'Montes de Málaga',
    subtitle: 'Trails técnicos a 20 minutos de la ciudad',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920',
    level: 'Intermedio-Avanzado',
    type: 'Enduro',
    bestSeason: 'Octubre - Mayo',
    runsPerDay: '4-6',
    description: 'El Parque Natural Montes de Málaga ofrece una red de trails espectaculares a tan solo 20 minutos del centro de la ciudad. Con más de 40 senderos señalizados, la zona combina descensos técnicos entre pinares con tramos fluidos y vistas al Mediterráneo. Los trails varían desde pistas forestales accesibles hasta descensos técnicos con roca, raíces y secciones expuestas.',
    trailforksRegionId: '5303',
    trailforksUrl: 'https://www.trailforks.com/region/montes-de-malaga/',
    includes: [
      'Guía local experto en la zona',
      'Shuttle a los puntos de inicio',
      'Planificación de rutas según nivel',
      'Soporte mecánico básico',
      'Recomendaciones gastronómicas locales',
      'Seguro de actividad',
    ],
    requirements: [
      'Nivel intermedio mínimo',
      'Bici de trail o enduro (140-170mm)',
      'Casco obligatorio (integral recomendado)',
      'Protecciones rodilleras',
      'Hidratación y snacks',
    ],
    itinerary: [
      { day: 'Día 1', title: 'Llegada y reconocimiento', description: 'Recogida, check-in en alojamiento y trail suave de calentamiento para conocer el terreno.' },
      { day: 'Día 2', title: 'Los clásicos del parque', description: 'Rutas más emblemáticas de la zona. 1500m de descenso acumulado.' },
      { day: 'Día 3', title: 'Trails técnicos', description: 'Descensos más técnicos para los que buscan adrenalina. 1800m de descenso.' },
      { day: 'Día 4', title: 'Sesión final y despedida', description: 'Trail de cierre adaptado al nivel y traslado si es necesario.' },
    ],
  },
  'velez-malaga': {
    id: 'velez-malaga',
    title: 'Vélez-Málaga',
    subtitle: 'La Axarquía: mar, montaña y trails únicos',
    heroImage: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920',
    level: 'Intermedio',
    type: 'Enduro',
    bestSeason: 'Todo el año',
    runsPerDay: '3-5',
    description: 'La comarca de la Axarquía ofrece una combinación única de trails con vistas al Mediterráneo y a las montañas. Vélez-Málaga es el punto de partida perfecto para explorar senderos que serpentean entre cultivos de aguacates y mangos, pueblos blancos tradicionales y barrancos espectaculares. El clima suave permite rodar prácticamente todo el año.',
    trailforksRegionId: '55707',
    trailforksUrl: 'https://www.trailforks.com/region/velezmalaga-55707/',
    includes: [
      'Guía local experto en la zona',
      'Shuttle a los puntos de inicio',
      'Planificación de rutas según nivel',
      'Soporte mecánico básico',
      'Recomendaciones gastronómicas locales',
      'Seguro de actividad',
    ],
    requirements: [
      'Nivel intermedio recomendado',
      'Bici de trail o enduro (130-160mm)',
      'Casco obligatorio',
      'Protecciones recomendadas',
      'Hidratación y snacks',
    ],
    itinerary: [
      { day: 'Día 1', title: 'Llegada y bienvenida', description: 'Check-in, briefing y trail de calentamiento con vistas al mar.' },
      { day: 'Día 2', title: 'Ruta de los pueblos blancos', description: 'Trails entre Comares, El Borge y Almáchar. 1200m de descenso.' },
      { day: 'Día 3', title: 'Los barrancos', description: 'Descensos técnicos por los barrancos de la zona. 1500m de descenso.' },
      { day: 'Día 4', title: 'Trail final y playa', description: 'Último trail y opción de terminar con baño en el mar.' },
    ],
  },
  'archidona': {
    id: 'archidona',
    title: 'Archidona',
    subtitle: 'Comarca Nororiental: trails salvajes y auténticos',
    heroImage: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=1920',
    level: 'Intermedio-Avanzado',
    type: 'Enduro',
    bestSeason: 'Octubre - Mayo',
    runsPerDay: '4-6',
    description: 'La Comarca Nororiental de Málaga, con Archidona como base, ofrece trails salvajes y poco transitados. Terreno variado que combina sierras calizas, olivares centenarios y senderos históricos. Una zona perfecta para quienes buscan trails auténticos lejos de las masificaciones, con un paisaje que mezcla montaña interior y cultura rural andaluza.',
    trailforksRegionId: '55706',
    trailforksUrl: 'https://www.trailforks.com/region/comarca-nororiental-de-malaga-55706/',
    includes: [
      'Guía local experto en la zona',
      'Shuttle a los puntos de inicio',
      'Planificación de rutas según nivel',
      'Soporte mecánico básico',
      'Recomendaciones gastronómicas locales',
      'Seguro de actividad',
    ],
    requirements: [
      'Nivel intermedio-avanzado',
      'Bici de enduro (150-170mm)',
      'Casco obligatorio (integral recomendado)',
      'Protecciones rodilleras',
      'Hidratación y snacks',
    ],
    itinerary: [
      { day: 'Día 1', title: 'Llegada y exploración', description: 'Check-in, visita al pueblo y trail de reconocimiento.' },
      { day: 'Día 2', title: 'Sierra de Archidona', description: 'Trails por la sierra caliza con vistas espectaculares. 1400m de descenso.' },
      { day: 'Día 3', title: 'Senderos históricos', description: 'Rutas por caminos antiguos entre olivares. 1600m de descenso.' },
      { day: 'Día 4', title: 'Despedida', description: 'Trail final y opción de visitar Antequera.' },
    ],
  },
  'marbella': {
    id: 'marbella',
    title: 'Marbella',
    subtitle: 'Costa del Sol: trails con vistas al mar',
    heroImage: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=1920',
    level: 'Intermedio',
    type: 'Enduro',
    bestSeason: 'Todo el año',
    runsPerDay: '3-5',
    description: 'Marbella ofrece una experiencia única: trails que descienden desde las montañas de Sierra Blanca hasta prácticamente la costa. El clima privilegiado permite rodar todo el año. La zona combina senderos técnicos en alta montaña con trails más fluidos en las colinas cercanas al mar. Después de rodar, playa y gastronomía de primer nivel.',
    trailforksRegionId: '15715',
    trailforksUrl: 'https://www.trailforks.com/region/marbella/',
    includes: [
      'Guía local experto en la zona',
      'Shuttle a los puntos de inicio',
      'Planificación de rutas según nivel',
      'Soporte mecánico básico',
      'Recomendaciones gastronómicas locales',
      'Seguro de actividad',
    ],
    requirements: [
      'Nivel intermedio recomendado',
      'Bici de trail o enduro (130-160mm)',
      'Casco obligatorio',
      'Protecciones recomendadas',
      'Hidratación y snacks',
    ],
    itinerary: [
      { day: 'Día 1', title: 'Llegada y bienvenida', description: 'Check-in, briefing y trail de calentamiento con vistas al mar.' },
      { day: 'Día 2', title: 'Sierra Blanca', description: 'Descensos desde la sierra con vistas panorámicas. 1300m de descenso.' },
      { day: 'Día 3', title: 'Trails costeros', description: 'Rutas más técnicas en las colinas cercanas a la costa. 1100m de descenso.' },
      { day: 'Día 4', title: 'Trail final y playa', description: 'Último descenso y tarde libre en la playa o Puerto Banús.' },
    ],
  },
  'tarifa': {
    id: 'tarifa',
    title: 'Tarifa',
    subtitle: 'Donde el Atlántico y el Mediterráneo se encuentran',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920',
    level: 'Intermedio-Avanzado',
    type: 'Enduro',
    bestSeason: 'Septiembre - Junio',
    runsPerDay: '3-5',
    description: 'Tarifa ofrece una experiencia única en el punto más al sur de Europa continental. Los trails serpentean por las colinas del Parque Natural del Estrecho con vistas simultáneas a África, el Atlántico y el Mediterráneo. El terreno es variado con secciones técnicas de roca, senderos de tierra entre alcornoques y descensos con viento legendario. Una aventura MTB diferente.',
    trailforksRegionId: '17139',
    trailforksUrl: 'https://www.trailforks.com/region/tarifa-17139/',
    includes: [
      'Guía local experto en la zona',
      'Shuttle a los puntos de inicio',
      'Planificación de rutas según nivel',
      'Soporte mecánico básico',
      'Recomendaciones gastronómicas locales',
      'Seguro de actividad',
    ],
    requirements: [
      'Nivel intermedio-avanzado',
      'Bici de enduro (150-170mm)',
      'Casco obligatorio (integral recomendado)',
      'Protecciones rodilleras',
      'Gafas anti-viento recomendadas',
    ],
    itinerary: [
      { day: 'Día 1', title: 'Llegada y reconocimiento', description: 'Check-in, paseo por el pueblo y trail suave de calentamiento.' },
      { day: 'Día 2', title: 'Parque del Estrecho', description: 'Trails con vistas a África y al mar. 1200m de descenso.' },
      { day: 'Día 3', title: 'Los alcornocales', description: 'Descensos técnicos entre bosques de alcornoques. 1400m de descenso.' },
      { day: 'Día 4', title: 'Trail final', description: 'Último descenso con vistas al estrecho y tarde libre para kitesurf o playa.' },
    ],
  },
}

// Nearby stays for each zone
const staysByZone: Record<string, Array<{
  id: string
  title: string
  images: string[]
  municipality: string
  capacity: number
  priceRange: string
  amenities: string[]
}>> = {
  'montes-de-malaga': [
    {
      id: 'casa-malaga-1',
      title: 'Casa Rural Los Pinos',
      images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
      municipality: 'Colmenar',
      capacity: 6,
      priceRange: '110-140€',
      amenities: ['Parking', 'Jardín', 'BBQ'],
    },
    {
      id: 'casa-malaga-2',
      title: 'Cortijo El Mirador',
      images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
      municipality: 'Montes de Málaga',
      capacity: 8,
      priceRange: '140-170€',
      amenities: ['Parking', 'Piscina', 'Vistas al mar'],
    },
  ],
  'velez-malaga': [
    {
      id: 'casa-velez-1',
      title: 'Casa La Axarquía',
      images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'],
      municipality: 'Vélez-Málaga',
      capacity: 6,
      priceRange: '100-130€',
      amenities: ['Parking', 'Piscina', 'Vistas al mar'],
    },
    {
      id: 'casa-velez-2',
      title: 'Cortijo Los Almendros',
      images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800'],
      municipality: 'Benamocarra',
      capacity: 8,
      priceRange: '130-160€',
      amenities: ['Parking', 'BBQ', 'Jardín tropical'],
    },
  ],
  'archidona': [
    {
      id: 'casa-archidona-1',
      title: 'Casa Rural Sierra Norte',
      images: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800'],
      municipality: 'Archidona',
      capacity: 6,
      priceRange: '90-120€',
      amenities: ['Parking', 'Jardín', 'Chimenea'],
    },
    {
      id: 'casa-archidona-2',
      title: 'Cortijo El Olivo',
      images: ['https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800'],
      municipality: 'Villanueva del Trabuco',
      capacity: 10,
      priceRange: '150-190€',
      amenities: ['Parking', 'Piscina', 'Olivar privado'],
    },
  ],
  'marbella': [
    {
      id: 'casa-marbella-1',
      title: 'Villa Sierra Blanca',
      images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
      municipality: 'Marbella',
      capacity: 6,
      priceRange: '180-250€',
      amenities: ['Parking', 'Piscina', 'Vistas al mar'],
    },
    {
      id: 'casa-marbella-2',
      title: 'Casa Los Naranjos',
      images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
      municipality: 'Ojén',
      capacity: 8,
      priceRange: '150-200€',
      amenities: ['Parking', 'Jardín', 'BBQ'],
    },
  ],
  'tarifa': [
    {
      id: 'casa-tarifa-1',
      title: 'Casa El Estrecho',
      images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
      municipality: 'Tarifa',
      capacity: 6,
      priceRange: '120-160€',
      amenities: ['Parking', 'Terraza', 'Vistas a África'],
    },
    {
      id: 'casa-tarifa-2',
      title: 'Cortijo Los Alcornoques',
      images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'],
      municipality: 'Facinas',
      capacity: 8,
      priceRange: '140-180€',
      amenities: ['Parking', 'Piscina', 'Campo privado'],
    },
  ],
}

// Default zone if not found
const defaultZoneId = 'montes-de-malaga'

export default function ZoneDetail() {
  const { zoneId } = useParams()
  const currentZoneId = zoneId && zoneData[zoneId] ? zoneId : defaultZoneId
  const zone = zoneData[currentZoneId]
  const nearbyStays = staysByZone[currentZoneId] || []

  // Scroll to top on zone change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentZoneId])

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

              {/* Trailforks Map Widget */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-text-primary">
                    Mapa de trails
                  </h2>
                  <a 
                    href={zone.trailforksUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700"
                  >
                    Ver en Trailforks
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-text-secondary mb-4">
                  Explora todos los trails de la zona en el mapa interactivo. 
                  Haz clic en cualquier trail para ver detalles, fotos y reseñas.
                </p>
                <TrailforksWidget 
                  regionId={zone.trailforksRegionId} 
                  height="500px"
                />
                <p className="text-xs text-text-secondary mt-2 text-center">
                  Mapa proporcionado por{' '}
                  <a 
                    href="https://www.trailforks.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline"
                  >
                    Trailforks.com
                  </a>
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
                        <span className="text-accent font-bold text-sm">{day.day}</span>
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

                {/* Zone stats */}
                <div className="bg-surface rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Info de la zona
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Tipo</span>
                      <span className="font-medium text-text-primary">{zone.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Nivel</span>
                      <span className="font-medium text-text-primary">{zone.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Mejor época</span>
                      <span className="font-medium text-text-primary">{zone.bestSeason}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Runs/día</span>
                      <span className="font-medium text-text-primary">{zone.runsPerDay}</span>
                    </div>
                  </div>
                </div>

                {/* Nearby Stays */}
                {nearbyStays.length > 0 && (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
