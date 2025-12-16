import { Plus, Minus } from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

interface CardExtraProps {
  id: string
  title: string
  description: string
  price: string
  priceUnit?: string
  isPartner?: boolean
  isSelected?: boolean
  quantity?: number
  maxQuantity?: number
  disabled?: boolean
  onSelect?: () => void
  onQuantityChange?: (quantity: number) => void
}

export default function CardExtra({
  title,
  description,
  price,
  priceUnit = '',
  isPartner = false,
  isSelected = false,
  quantity = 0,
  maxQuantity = 10,
  disabled = false,
  onSelect,
  onQuantityChange,
}: CardExtraProps) {
  const hasQuantity = Boolean(onQuantityChange)

  return (
    <div
      className={`bg-surface rounded-xl border p-4 transition-all duration-200 ${
        isSelected ? 'border-accent ring-2 ring-accent/20' : 'border-border'
      } ${disabled ? 'opacity-50' : ''}`}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-text-primary">{title}</h4>
            {isPartner && <Badge type="partner" />}
          </div>
          <p className="text-sm text-text-secondary mb-2">{description}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-semibold text-accent">{price}</span>
            {priceUnit && (
              <span className="text-sm text-text-secondary">{priceUnit}</span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex-shrink-0">
          {hasQuantity ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onQuantityChange?.(Math.max(0, quantity - 1))}
                disabled={disabled || quantity === 0}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border hover:bg-gray-50 disabled:opacity-50"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <button
                onClick={() =>
                  onQuantityChange?.(Math.min(maxQuantity, quantity + 1))
                }
                disabled={disabled || quantity >= maxQuantity}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border hover:bg-gray-50 disabled:opacity-50"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Button
              variant={isSelected ? 'primary' : 'secondary'}
              size="sm"
              onClick={onSelect}
              disabled={disabled}
            >
              {isSelected ? 'Añadido' : 'Añadir'}
            </Button>
          )}
        </div>
      </div>

      {/* Pending confirmation warning */}
      {disabled && (
        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-xs text-warning flex items-center gap-1">
            <Badge type="pending" />
            <span>Te confirmamos en menos de 24h</span>
          </p>
        </div>
      )}
    </div>
  )
}
