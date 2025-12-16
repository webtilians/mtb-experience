import { Link } from 'react-router-dom'
import { CheckCircle, Calendar, MessageCircle, FileText } from 'lucide-react'
import Button from '../../components/ui/Button'
import WhatsAppButton from '../../components/ui/WhatsAppButton'

export default function BuilderSuccess() {
  const bookingCode = 'MTB-2025-0342'

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-accent" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-text-primary mb-4">
          ¡Reserva recibida!
        </h1>

        {/* Booking code */}
        <div className="bg-surface border border-border rounded-lg p-4 mb-6">
          <p className="text-sm text-text-secondary mb-1">Código de reserva</p>
          <p className="text-xl font-mono font-bold text-text-primary">
            {bookingCode}
          </p>
        </div>

        {/* Message */}
        <p className="text-text-secondary mb-8">
          Te confirmaremos disponibilidad y logística por email/WhatsApp.
          Recibirás el itinerario y checklist 72h antes de tu llegada.
        </p>

        {/* Next steps */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-semibold text-text-primary mb-4">
            Próximos pasos
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="font-medium text-text-primary">Confirmación</p>
                <p className="text-sm text-text-secondary">
                  Te contactamos en menos de 24h para confirmar disponibilidad.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="font-medium text-text-primary">Itinerario</p>
                <p className="text-sm text-text-secondary">
                  Recibirás el plan detallado 72h antes del viaje.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="font-medium text-text-primary">Checklist</p>
                <p className="text-sm text-text-secondary">
                  Te enviaremos todo lo que necesitas preparar.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <WhatsAppButton
            message={`Hola! Acabo de hacer una reserva con código ${bookingCode}`}
          />
          <Link to="/mi-reserva" className="block">
            <Button variant="secondary" size="lg" className="w-full">
              Ver mi reserva
            </Button>
          </Link>
          <Link to="/" className="block">
            <Button variant="ghost" size="md" className="w-full">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
