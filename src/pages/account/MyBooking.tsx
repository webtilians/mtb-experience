import { useState } from 'react'
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Badge from '../../components/ui/Badge'
import WhatsAppButton from '../../components/ui/WhatsAppButton'

// Mock booking data
const mockBooking = {
  code: 'MTB-2025-0342',
  status: 'confirmed',
  zone: 'Ronda / Serranía',
  dates: '15-19 Marzo 2025',
  riders: 6,
  stay: 'Casa Rural El Molino',
  guidePack: 'Pack 4 días',
  extras: [
    { name: 'Shuttles (3 días)', status: 'confirmed' },
    { name: 'Alquiler eMTB', status: 'pending' },
  ],
  totalPaid: '685€',
  pendingPayment: '560€',
}

export default function MyBooking() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && code) {
      setIsAuthenticated(true)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 w-full">
          <div className="bg-surface rounded-xl border border-border p-8">
            <h1 className="text-2xl font-bold text-text-primary mb-2 text-center">
              Ver mi reserva
            </h1>
            <p className="text-text-secondary text-center mb-6">
              Introduce tu email y código de reserva para acceder.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Código de reserva"
                placeholder="MTB-2025-XXXX"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Acceder
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-text-secondary mb-3">
                ¿No encuentras tu código?
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">
              Mi reserva
            </h1>
            <p className="text-text-secondary">
              Código: <span className="font-mono">{mockBooking.code}</span>
            </p>
          </div>
          <Badge type={mockBooking.status === 'confirmed' ? 'confirmed' : 'pending'} />
        </div>

        {/* Booking Details */}
        <div className="bg-surface rounded-xl border border-border p-6 mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Detalles del viaje
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-text-secondary">Zona</p>
                <p className="font-medium text-text-primary">{mockBooking.zone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-text-secondary">Fechas</p>
                <p className="font-medium text-text-primary">{mockBooking.dates}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-text-secondary">Riders</p>
                <p className="font-medium text-text-primary">{mockBooking.riders} personas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-text-secondary">Guía</p>
                <p className="font-medium text-text-primary">{mockBooking.guidePack}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accommodation */}
        <div className="bg-surface rounded-xl border border-border p-6 mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Alojamiento
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">{mockBooking.stay}</p>
              <p className="text-sm text-text-secondary">Ronda, Málaga</p>
            </div>
            <Badge type="verified" />
          </div>
        </div>

        {/* Extras */}
        <div className="bg-surface rounded-xl border border-border p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-text-primary">
              Extras
            </h2>
            <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Añadir más
            </Button>
          </div>
          <div className="space-y-3">
            {mockBooking.extras.map((extra, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <span className="text-text-primary">{extra.name}</span>
                <Badge type={extra.status === 'confirmed' ? 'confirmed' : 'pending'} />
              </div>
            ))}
          </div>
        </div>

        {/* Payment Status */}
        <div className="bg-surface rounded-xl border border-border p-6 mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Pagos
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Pagado a MTB Experience</span>
              <span className="font-semibold text-accent">{mockBooking.totalPaid}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Pendiente (proveedores)</span>
              <span className="font-medium text-text-primary">{mockBooking.pendingPayment}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-text-primary mb-4">
            ¿Necesitas ayuda?
          </h3>
          <div className="flex flex-wrap gap-3">
            <WhatsAppButton message={`Hola, tengo una consulta sobre mi reserva ${mockBooking.code}`} />
            <Button variant="secondary">
              Modificar reserva
            </Button>
            <Button variant="ghost" className="text-danger">
              Cancelar reserva
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
