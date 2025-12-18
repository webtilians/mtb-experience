import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Shovel, 
  Heart, 
  Users, 
  TreePine, 
  ArrowRight, 
  CheckCircle, 
  Calendar,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Button from '../../components/ui/Button'
import { useTranslation } from '../../i18n'

// Gallery images - trail building and maintenance
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    alt: 'Trail building in the forest',
    caption: 'Construcción de nuevos senderos'
  },
  {
    src: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800',
    alt: 'Volunteers working on trail',
    caption: 'Voluntarios trabajando en el trail'
  },
  {
    src: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800',
    alt: 'Trail maintenance tools',
    caption: 'Herramientas de mantenimiento'
  },
  {
    src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800',
    alt: 'Mountain bike trail',
    caption: 'Sendero terminado y listo'
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    alt: 'Community trail day',
    caption: 'Jornada comunitaria de limpieza'
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    alt: 'Trail after maintenance',
    caption: 'Trail tras el mantenimiento'
  },
]

// Benefits of trail building
const benefits = [
  {
    icon: TreePine,
    title: 'Conservación del entorno',
    description: 'Mantener los senderos en buen estado protege el ecosistema y evita la erosión descontrolada.'
  },
  {
    icon: Users,
    title: 'Comunidad unida',
    description: 'Las jornadas de trail building unen a riders locales y visitantes en un objetivo común.'
  },
  {
    icon: Heart,
    title: 'Devolver al trail',
    description: 'Contribuir al mantenimiento es una forma de agradecer a la naturaleza y a quienes construyeron los senderos.'
  },
  {
    icon: Shovel,
    title: 'Trails sostenibles',
    description: 'Un sendero bien mantenido dura más tiempo y ofrece una mejor experiencia para todos.'
  },
]

// What's included in the trail building experience
const included = [
  'Herramientas proporcionadas (palas, azadas, rastrillos)',
  'Guía experto en construcción de trails',
  'Formación en técnicas de trail building',
  'Almuerzo y bebidas incluidos',
  'Camiseta conmemorativa del evento',
  'Certificado de participación',
  'Sesión de riding por la tarde',
]

// Upcoming trail building events
const upcomingEvents = [
  {
    date: '15 Enero 2025',
    zone: 'Montes de Málaga',
    trail: 'Kawasaki Trail - Mantenimiento',
    spots: 8,
  },
  {
    date: '22 Febrero 2025',
    zone: 'Archidona',
    trail: 'Nuevo sendero Sierra Norte',
    spots: 12,
  },
  {
    date: '15 Marzo 2025',
    zone: 'Vélez-Málaga',
    trail: 'Limpieza post-lluvias',
    spots: 10,
  },
]

export default function Trailbuilders() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const prevImage = () => setSelectedImage(prev => prev !== null ? (prev === 0 ? galleryImages.length - 1 : prev - 1) : null)
  const nextImage = () => setSelectedImage(prev => prev !== null ? (prev === galleryImages.length - 1 ? 0 : prev + 1) : null)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shovel className="w-10 h-10 text-green-300" />
              <span className="text-green-300 font-semibold text-lg">Trailbuilders</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construimos y cuidamos los trails que amamos
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Los senderos que disfrutamos no aparecen solos. Detrás de cada trail hay horas de 
              trabajo voluntario, dedicación y amor por el MTB. Únete a nuestra comunidad de 
              trailbuilders y contribuye a mantener vivos los senderos del sur de Andalucía.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/planificar">
                <Button variant="primary" size="lg" className="bg-white text-green-800 hover:bg-green-50">
                  Añadir a mi viaje
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="#eventos">
                <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
                  Ver próximos eventos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trail Building Matters */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              ¿Por qué es importante el trail building?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Mantener los senderos no es solo cuestión de comodidad. Es una responsabilidad 
              que tenemos como comunidad ciclista con el medio ambiente y con los futuros riders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-surface rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Galería de jornadas
            </h2>
            <p className="text-text-secondary">
              Imágenes de nuestras jornadas de construcción y mantenimiento de trails.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div 
            className="max-w-4xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[selectedImage].src.replace('w=800', 'w=1600')}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {galleryImages[selectedImage].caption}
            </p>
          </div>
        </div>
      )}

      {/* Add to Your Trip */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                Extra disponible
              </span>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Añade una jornada de trail building a tu viaje
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                ¿Quieres que tu viaje MTB tenga un impacto positivo? Dedica una mañana a 
                contribuir al mantenimiento de los trails que vas a disfrutar. Es una experiencia 
                única que te conectará con la comunidad local y con la esencia del MTB.
              </p>
              
              <div className="bg-surface rounded-xl border border-border p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-text-primary">Jornada Trailbuilder</h3>
                  <span className="text-2xl font-bold text-accent">25€<span className="text-sm font-normal text-text-secondary">/persona</span></span>
                </div>
                <ul className="space-y-2">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/planificar">
                <Button variant="primary" size="lg">
                  Añadir a mi viaje
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800"
                alt="Trail building team"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">+500 voluntarios</p>
                    <p className="text-sm text-text-secondary">desde 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="eventos" className="py-16 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Próximas jornadas
            </h2>
            <p className="text-text-secondary">
              Eventos de trail building abiertos a toda la comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{event.trail}</h3>
                <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
                  <MapPin className="w-4 h-4" />
                  {event.zone}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    {event.spots} plazas disponibles
                  </span>
                  <Button variant="secondary" size="sm">
                    Apuntarse
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-text-secondary mb-4">
              ¿Quieres organizar una jornada en tu zona?
            </p>
            <Link to="/contacto">
              <Button variant="secondary">
                Contactar con nosotros
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Quote */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-text-primary italic mb-6">
            "Cuando cuidas un trail, no solo estás moviendo tierra. Estás dejando un legado 
            para los riders que vendrán después de ti."
          </blockquote>
          <cite className="text-text-secondary not-italic">
            — Comunidad MTB Andalucía
          </cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <Shovel className="w-12 h-12 mx-auto mb-6 text-green-300" />
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para dejar tu huella?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de trailbuilders y ayuda a mantener vivos los 
            mejores senderos de Andalucía. Tu contribución marca la diferencia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/planificar">
              <Button variant="primary" size="lg" className="bg-white text-green-700 hover:bg-green-50">
                Planificar viaje con trail building
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
