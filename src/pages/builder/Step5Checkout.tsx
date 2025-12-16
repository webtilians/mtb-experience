import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Shield, CreditCard } from 'lucide-react'
import Stepper from '../../components/ui/Stepper'
import Button from '../../components/ui/Button'
import PriceSummary from '../../components/ui/PriceSummary'
import Input from '../../components/ui/Input'

export default function Step5Checkout() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)

  // Mock data - would come from state/context
  const bookingSummary = {
    zone: 'Ronda / Serranía',
    dates: '15-19 Marzo 2025',
    riders: 6,
    stay: 'Casa Rural El Molino',
    guidePack: 'Pack 4 días',
  }

  const priceItems = [
    { label: 'Pack guía 4 días', amount: '550€' },
    { label: 'Tarifa de gestión alojamiento', amount: '90€' },
    { label: 'Tarifa de gestión extras', amount: '45€' },
  ]

  const partnerItems = [
    { label: 'Alojamiento (4 noches)', amount: '560€' },
    { label: 'Shuttles (3 días)', amount: '240€' },
  ]

  const handlePayment = async () => {
    if (!acceptTerms) return

    setIsLoading(true)
    setPaymentError(null)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulate success (would integrate with Stripe)
    setIsLoading(false)
    navigate('/planificar/confirmacion')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Stepper */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Stepper currentStep={5} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Resumen y pago
          </h1>
          <p className="text-text-secondary">
            Revisa los detalles de tu reserva antes de confirmar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Summary */}
            <div className="bg-surface rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold text-text-primary mb-4">
                Tu viaje
              </h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-secondary">Zona</span>
                  <p className="font-medium text-text-primary">{bookingSummary.zone}</p>
                </div>
                <div>
                  <span className="text-text-secondary">Fechas</span>
                  <p className="font-medium text-text-primary">{bookingSummary.dates}</p>
                </div>
                <div>
                  <span className="text-text-secondary">Riders</span>
                  <p className="font-medium text-text-primary">{bookingSummary.riders} personas</p>
                </div>
                <div>
                  <span className="text-text-secondary">Guía</span>
                  <p className="font-medium text-text-primary">{bookingSummary.guidePack}</p>
                </div>
                <div className="col-span-2">
                  <span className="text-text-secondary">Alojamiento</span>
                  <p className="font-medium text-text-primary">{bookingSummary.stay}</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-surface rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold text-text-primary mb-4">
                Datos de contacto
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Nombre completo" placeholder="Tu nombre" />
                <Input label="Email" type="email" placeholder="tu@email.com" />
                <Input label="Teléfono" type="tel" placeholder="+34 600 000 000" />
              </div>
            </div>

            {/* Payment */}
            <div className="bg-surface rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Pago seguro
              </h2>

              <div className="space-y-4">
                <Input label="Número de tarjeta" placeholder="1234 5678 9012 3456" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Fecha de expiración" placeholder="MM/YY" />
                  <Input label="CVC" placeholder="123" />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-text-secondary">
                <Shield className="w-4 h-4" />
                Pago seguro cifrado con SSL
              </div>
            </div>

            {/* Terms */}
            <div className="bg-surface rounded-xl border border-border p-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-accent rounded border-border focus:ring-accent"
                />
                <span className="text-sm text-text-secondary">
                  He leído y acepto las{' '}
                  <Link to="/terminos" className="text-accent hover:underline">
                    condiciones generales
                  </Link>{' '}
                  y la{' '}
                  <Link to="/cancelacion" className="text-accent hover:underline">
                    política de cancelación
                  </Link>
                  .
                </span>
              </label>
            </div>

            {/* Error message */}
            {paymentError && (
              <div className="bg-danger/10 border border-danger/20 rounded-lg p-4">
                <p className="text-sm text-danger">{paymentError}</p>
              </div>
            )}
          </div>

          {/* Sidebar - Price Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PriceSummary
                items={priceItems}
                partnerItems={partnerItems}
                riders={bookingSummary.riders}
                totalPerPerson="~248€"
                hasPendingConfirmations={true}
              />

              <Button
                variant="primary"
                size="lg"
                className="w-full mt-6"
                onClick={handlePayment}
                disabled={!acceptTerms}
                isLoading={isLoading}
              >
                Confirmar reserva
              </Button>

              <p className="text-xs text-text-secondary text-center mt-4">
                Al confirmar, aceptas que algunos servicios están bajo confirmación.
              </p>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="mt-8">
          <Link to="/planificar/extras">
            <Button variant="ghost" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Volver
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
