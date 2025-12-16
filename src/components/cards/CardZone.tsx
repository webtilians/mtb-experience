import { Link } from 'react-router-dom'
import { MapPin, Mountain, TrendingUp } from 'lucide-react'
import Button from '../ui/Button'

interface CardZoneProps {
  id: string
  title: string
  image: string
  tags: string[]
  level: 'Intermedio' | 'Avanzado'
  type: 'Enduro' | 'DH' | 'Ambos'
  description?: string
  size?: 'lg' | 'sm'
}

export default function CardZone({
  id,
  title,
  image,
  tags,
  level,
  type,
  description,
  size = 'lg',
}: CardZoneProps) {
  const isLarge = size === 'lg'

  return (
    <div
      className={`group bg-surface rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-200 ${
        isLarge ? '' : 'flex'
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          isLarge ? 'h-48' : 'w-32 h-32 flex-shrink-0'
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2 py-1 bg-black/60 text-white text-xs font-medium rounded">
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-4 ${isLarge ? '' : 'flex-1'}`}>
        <h3 className={`font-semibold text-text-primary ${isLarge ? 'text-lg mb-2' : 'text-base mb-1'}`}>
          {title}
        </h3>

        {/* Tags & Info */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="flex items-center gap-1 text-xs text-text-secondary">
            <TrendingUp className="w-3 h-3" />
            {level}
          </span>
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-100 text-text-secondary text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {description && isLarge && (
          <p className="text-sm text-text-secondary mb-4 line-clamp-2">
            {description}
          </p>
        )}

        <Link to={`/zonas/${id}`}>
          <Button variant="secondary" size={isLarge ? 'md' : 'sm'} className="w-full">
            <MapPin className="w-4 h-4" />
            Planificar en esta zona
          </Button>
        </Link>
      </div>
    </div>
  )
}
