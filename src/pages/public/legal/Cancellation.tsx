import { Link } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import Button from '../../../components/ui/Button'

export default function Cancellation() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-text-primary mb-8">
          Política de cancelación
        </h1>

        {/* Summary box */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-warning flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-text-primary mb-2">
                Resumen
              </h3>
              <ul className="text-text-secondary space-y-1">
                <li>• <strong>+30 días antes:</strong> Cancelación gratuita, reembolso completo</li>
                <li>• <strong>30-14 días antes:</strong> Retención del 50%</li>
                <li>• <strong>-14 días:</strong> Sin reembolso</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            1. Cancelaciones por parte del cliente
          </h2>

          <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">
            Más de 30 días antes de la fecha de inicio
          </h3>
          <p className="text-text-secondary mb-4">
            Reembolso del 100% del importe pagado, sin penalización.
          </p>

          <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">
            Entre 30 y 14 días antes de la fecha de inicio
          </h3>
          <p className="text-text-secondary mb-4">
            Retención del 50% del importe total. Se reembolsará el 50% restante.
          </p>

          <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">
            Menos de 14 días antes de la fecha de inicio
          </h3>
          <p className="text-text-secondary mb-4">
            No se realizará reembolso. El importe pagado se perderá en su totalidad.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            2. Modificaciones de reserva
          </h2>
          <p className="text-text-secondary mb-4">
            Las modificaciones de fecha están sujetas a disponibilidad y pueden conllevar costes adicionales si hay diferencia de precio por temporada.
          </p>
          <p className="text-text-secondary mb-4">
            Cambios menores (número de participantes, extras) pueden realizarse hasta 7 días antes sin coste, sujeto a disponibilidad.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            3. Cancelaciones por parte de MTB Experience
          </h2>
          <p className="text-text-secondary mb-4">
            En caso de que MTB Experience deba cancelar el viaje por causas justificadas (condiciones meteorológicas extremas, fuerza mayor, etc.), se ofrecerá:
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>Cambio de fechas sin coste adicional, o</li>
            <li>Reembolso completo del importe pagado</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            4. Servicios de terceros
          </h2>
          <p className="text-text-secondary mb-4">
            Los servicios prestados por terceros (alojamientos externos, transporte, etc.) pueden tener políticas de cancelación propias. Consulta las condiciones específicas de cada proveedor.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            5. Cómo cancelar
          </h2>
          <p className="text-text-secondary mb-4">
            Para cancelar o modificar tu reserva, contacta con nosotros a través de:
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>Email: info@mtbexperience.com</li>
            <li>WhatsApp: +34 600 000 000</li>
          </ul>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-text-secondary mb-4">
            ¿Tienes dudas sobre cancelaciones?
          </p>
          <Link to="/contacto">
            <Button variant="secondary">
              Contactar con nosotros
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
