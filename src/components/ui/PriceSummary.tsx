import { HelpCircle } from 'lucide-react'

interface PriceSummaryProps {
  items: {
    label: string
    amount: string
    isPartner?: boolean
  }[]
  partnerItems?: {
    label: string
    amount: string
  }[]
  totalPerPerson?: string
  riders?: number
  hasPendingConfirmations?: boolean
}

export default function PriceSummary({
  items,
  partnerItems = [],
  totalPerPerson,
  riders = 1,
  hasPendingConfirmations = false,
}: PriceSummaryProps) {
  const payNowTotal = items.reduce((acc, item) => {
    const amount = parseFloat(item.amount.replace(/[^0-9.-]+/g, ''))
    return acc + (isNaN(amount) ? 0 : amount)
  }, 0)

  const partnerTotal = partnerItems.reduce((acc, item) => {
    const amount = parseFloat(item.amount.replace(/[^0-9.-]+/g, ''))
    return acc + (isNaN(amount) ? 0 : amount)
  }, 0)

  return (
    <div className="bg-surface rounded-xl border border-border overflow-hidden">
      {/* Pay Now Section */}
      <div className="p-4 border-b border-border">
        <h4 className="font-semibold text-text-primary mb-3">
          Pagas ahora a MTB Experience
        </h4>
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-text-secondary flex items-center gap-1">
                {item.label}
                {item.label.includes('gestión') && (
                  <span className="group relative">
                    <HelpCircle className="w-4 h-4 text-text-secondary cursor-help" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-text-primary text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 text-center pointer-events-none z-10">
                      Cubre la planificación, coordinación con proveedores, cambios, soporte y atención durante el viaje.
                    </span>
                  </span>
                )}
              </span>
              <span className="text-text-primary font-medium">{item.amount}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-border flex justify-between">
          <span className="font-semibold text-text-primary">Subtotal</span>
          <span className="font-semibold text-accent">{payNowTotal.toFixed(2)}€</span>
        </div>
      </div>

      {/* Pay to Providers Section */}
      {partnerItems.length > 0 && (
        <div className="p-4 bg-gray-50 border-b border-border">
          <h4 className="font-semibold text-text-primary mb-3">
            Pagas al proveedor
          </h4>
          <div className="space-y-2">
            {partnerItems.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-text-secondary">{item.label}</span>
                <span className="text-text-primary font-medium">{item.amount}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between">
            <span className="font-medium text-text-secondary">Subtotal (proveedor)</span>
            <span className="font-medium text-text-primary">{partnerTotal.toFixed(2)}€</span>
          </div>
        </div>
      )}

      {/* Total */}
      <div className="p-4 bg-accent/5">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-semibold text-text-primary">Total del viaje</span>
            {riders > 1 && totalPerPerson && (
              <p className="text-sm text-text-secondary">
                {totalPerPerson} por persona
              </p>
            )}
          </div>
          <span className="text-2xl font-bold text-accent">
            {(payNowTotal + partnerTotal).toFixed(2)}€
          </span>
        </div>
      </div>

      {/* Pending Confirmation Warning */}
      {hasPendingConfirmations && (
        <div className="p-4 bg-warning/10 border-t border-warning/20">
          <p className="text-sm text-warning font-medium">
            Algunos servicios están bajo confirmación
          </p>
          <p className="text-xs text-text-secondary mt-1">
            Se confirmará por WhatsApp/email. El pago restante se realizará tras confirmación.
          </p>
        </div>
      )}
    </div>
  )
}
