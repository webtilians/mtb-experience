import { ExternalLink, TrendingUp, ArrowDown, Star } from 'lucide-react'

interface CardTrailProps {
  name: string
  difficulty: 'Verde' | 'Azul' | 'Rojo' | 'Negro' | 'Doble Negro'
  distance: string
  descent: string
  rating?: number
  trailforksUrl?: string
  stravaUrl?: string
  description?: string
}

const difficultyColors = {
  'Verde': 'bg-green-500',
  'Azul': 'bg-blue-500',
  'Rojo': 'bg-red-500',
  'Negro': 'bg-gray-900',
  'Doble Negro': 'bg-gray-900',
}

const difficultyLabels = {
  'Verde': 'Fácil',
  'Azul': 'Intermedio',
  'Rojo': 'Difícil',
  'Negro': 'Muy difícil',
  'Doble Negro': 'Experto',
}

export default function CardTrail({
  name,
  difficulty,
  distance,
  descent,
  rating,
  trailforksUrl,
  stravaUrl,
  description,
}: CardTrailProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-4 hover:border-accent/50 hover:shadow-md transition-all">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`w-3 h-3 rounded-full ${difficultyColors[difficulty]}`}
              title={difficultyLabels[difficulty]}
            />
            <h4 className="font-semibold text-text-primary">{name}</h4>
            {rating && (
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-medium">{rating.toFixed(1)}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-text-secondary mb-2">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <ArrowDown className="w-3.5 h-3.5" />
              <span>{descent}</span>
            </div>
            <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">
              {difficultyLabels[difficulty]}
            </span>
          </div>

          {description && (
            <p className="text-sm text-text-secondary line-clamp-2">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {trailforksUrl && (
            <a
              href={trailforksUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
              title="Ver en Trailforks"
            >
              <img 
                src="https://www.trailforks.com/favicon.ico" 
                alt="Trailforks" 
                className="w-3.5 h-3.5"
              />
              <span className="hidden sm:inline">Trailforks</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {stravaUrl && (
            <a
              href={stravaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-orange-50 text-[#FC4C02] rounded-lg hover:bg-orange-100 transition-colors"
              title="Ver en Strava"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
              </svg>
              <span className="hidden sm:inline">Strava</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
