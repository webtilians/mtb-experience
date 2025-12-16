import { Link } from 'react-router-dom'
import { Users, MapPin, Check } from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

interface CardStayProps {
  id: string
  title: string
  images: string[]
  municipality: string
  capacity: number
  priceRange: string
  isVerified?: boolean
  amenities?: string[]
  isSelected?: boolean
  onSelect?: () => void
}

export default function CardStay({
  id,
  title,
  images,
  municipality,
  capacity,
  priceRange,
  isVerified = true,
  amenities = [],
  isSelected = false,
  onSelect,
}: CardStayProps) {
  return (
    <div
      className={`group bg-surface rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-200 ${
        isSelected ? 'border-accent ring-2 ring-accent/20' : 'border-border'
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={images[0] || '/placeholder-stay.jpg'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isVerified && (
          <div className="absolute top-3 left-3">
            <Badge type="verified" />
          </div>
        )}
        {isSelected && (
          <div className="absolute top-3 right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <Check className="w-5 h-5 text-white" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-text-primary text-lg mb-1">{title}</h3>

        <div className="flex items-center gap-3 text-sm text-text-secondary mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {municipality}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {capacity} personas
          </span>
        </div>

        {/* Amenities preview */}
        {amenities.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="px-2 py-0.5 bg-gray-100 text-text-secondary text-xs rounded"
              >
                {amenity}
              </span>
            ))}
            {amenities.length > 3 && (
              <span className="px-2 py-0.5 text-text-secondary text-xs">
                +{amenities.length - 3} más
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-lg font-semibold text-text-primary">
              {priceRange}
            </span>
            <span className="text-sm text-text-secondary"> /noche</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {onSelect ? (
            <Button
              variant={isSelected ? 'primary' : 'secondary'}
              size="md"
              className="flex-1"
              onClick={onSelect}
            >
              {isSelected ? 'Seleccionada' : 'Seleccionar esta casa'}
            </Button>
          ) : (
            <Link to={`/alojamientos/${id}`} className="flex-1">
              <Button variant="secondary" size="md" className="w-full">
                Ver detalles
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Price note */}
      <div className="px-4 pb-4">
        <p className="text-xs text-text-secondary">
          Precio orientativo. Puede variar por temporada.
        </p>
      </div>
    </div>
  )
}
