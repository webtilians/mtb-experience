import { Link } from 'react-router-dom'
import { MapPin, Calendar, Users, ArrowRight, Shield, Map, CheckCircle } from 'lucide-react'
import Button from '../../components/ui/Button'
import CardZone from '../../components/cards/CardZone'

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
]

const steps = [
  {
    icon: Map,
    title: 'Elige zona y fechas',
    description: 'Explora el mapa y selecciona la zona que más te atraiga.',
  },
  {
    icon: MapPin,
    title: 'Selecciona alojamiento',
    description: 'Elige una casa verificada o reserva por tu cuenta en Airbnb/Booking.',
  },
  {
    icon: CheckCircle,
    title: 'Cierra guía y extras',
    description: 'Añade el pack de guía y los extras que necesites en un checkout sencillo.',
  },
]

export default function Home() {
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
              MTB Enduro & DH en Andalucía
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Guía local + logística + casas verificadas + extras a medida.
            </p>

            {/* Quick Form */}
            <div className="bg-surface/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Zona
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2.5 border border-border rounded-lg">
                    <MapPin className="w-4 h-4 text-text-secondary" />
                    <select className="flex-1 bg-transparent text-text-primary focus:outline-none">
                      <option>Todas las zonas</option>
                      <option>Ronda</option>
                      <option>Axarquía</option>
                      <option>Sierra Nevada</option>
                    </select>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Fechas
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2.5 border border-border rounded-lg">
                    <Calendar className="w-4 h-4 text-text-secondary" />
                    <input
                      type="text"
                      placeholder="Seleccionar"
                      className="flex-1 bg-transparent text-text-primary focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Riders
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2.5 border border-border rounded-lg">
                    <Users className="w-4 h-4 text-text-secondary" />
                    <select className="flex-1 bg-transparent text-text-primary focus:outline-none">
                      <option>4 riders</option>
                      <option>5 riders</option>
                      <option>6 riders</option>
                      <option>7 riders</option>
                      <option>8 riders</option>
                    </select>
                  </div>
                </div>
                <div className="md:col-span-1 flex items-end">
                  <Link to="/planificar" className="w-full">
                    <Button variant="primary" size="lg" className="w-full">
                      Continuar
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-accent/5 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4">
          <div className="flex items-center justify-center gap-8 text-sm">
            <span className="flex items-center gap-2 text-text-secondary">
              <Shield className="w-4 h-4 text-accent" />
              Guías locales certificados
            </span>
            <span className="hidden md:flex items-center gap-2 text-text-secondary">
              <Shield className="w-4 h-4 text-accent" />
              Logística completa
            </span>
            <span className="flex items-center gap-2 text-text-secondary">
              <Shield className="w-4 h-4 text-accent" />
              Partners verificados
            </span>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              En tres simples pasos, organiza tu viaje MTB perfecto en el sur de España.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-sm text-accent font-semibold mb-2">
                  Paso {index + 1}
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
                Zonas destacadas
              </h2>
              <p className="text-text-secondary">
                Rutas y logística adaptadas a tu nivel.
              </p>
            </div>
            <Link to="/zonas">
              <Button variant="ghost">
                Ver todas
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
              ¿Listo para tu aventura?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Reserva donde quieras. Nosotros organizamos el resto.
            </p>
            <Link to="/planificar">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-accent hover:bg-gray-100"
              >
                Planifica tu viaje
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
