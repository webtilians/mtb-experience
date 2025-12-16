import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight, Check } from 'lucide-react'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'

export default function ExternalStays() {
  const [showForm, setShowForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            ¡Perfecto!
          </h1>
          <p className="text-text-secondary mb-8">
            Ahora elige tu pack de guía y los extras que necesites.
          </p>
          <Link to="/planificar/guia">
            <Button variant="primary" size="lg">
              Continuar con guía y extras
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Reserva el alojamiento donde quieras
          </h1>
          <p className="text-text-secondary">
            Puedes reservar en Airbnb/Booking. Después vuelve aquí para cerrar guía y extras.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!showForm ? (
          <div className="space-y-6">
            {/* Platform buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.airbnb.es/s/Andalucia--Spain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-6 bg-surface border border-border rounded-xl hover:shadow-md transition-shadow"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                  alt="Airbnb"
                  className="h-8"
                />
                <ExternalLink className="w-5 h-5 text-text-secondary" />
              </a>
              <a
                href="https://www.booking.com/region/es/andalucia.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-6 bg-surface border border-border rounded-xl hover:shadow-md transition-shadow"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg"
                  alt="Booking.com"
                  className="h-6"
                />
                <ExternalLink className="w-5 h-5 text-text-secondary" />
              </a>
            </div>

            <div className="text-center py-8">
              <div className="w-12 h-px bg-border mx-auto mb-4" />
              <p className="text-text-secondary mb-6">
                ¿Ya has reservado tu alojamiento?
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => setShowForm(true)}
              >
                Ya he reservado alojamiento
              </Button>
            </div>
          </div>
        ) : (
          /* Form */
          <div className="bg-surface rounded-xl border border-border p-6 md:p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              Datos de tu reserva externa
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Link del anuncio o confirmación"
                placeholder="https://www.airbnb.es/rooms/..."
                helpText="Pega el enlace de tu reserva o del anuncio"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Fecha de llegada"
                  type="date"
                />
                <Input
                  label="Fecha de salida"
                  type="date"
                />
              </div>

              <Select
                label="Número de riders"
                options={[
                  { value: '4', label: '4 riders' },
                  { value: '5', label: '5 riders' },
                  { value: '6', label: '6 riders' },
                  { value: '7', label: '7 riders' },
                  { value: '8', label: '8 riders' },
                ]}
              />

              <Input
                label="Municipio / zona"
                placeholder="Ej: Ronda, Cómpeta, Capileira..."
              />

              <Input
                label="Hora de llegada (opcional)"
                placeholder="Ej: 15:00"
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  Notas adicionales (opcional)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Cualquier información adicional que debamos saber..."
                />
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Continuar con guía y extras
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Info note */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-text-secondary">
            <strong>Nota:</strong> La reserva del alojamiento se hace en la plataforma externa.
            Nosotros nos encargamos de coordinar guía, transporte y extras para que tu viaje sea perfecto.
          </p>
        </div>
      </div>
    </div>
  )
}
