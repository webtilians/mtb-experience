import { useState } from 'react'
import { Filter } from 'lucide-react'
import CardZone from '../../components/cards/CardZone'
import Button from '../../components/ui/Button'
import { useTranslation } from '../../i18n'

// Zones data - real zones only
const zones = [
  {
    id: 'montes-de-malaga',
    title: 'Montes de Málaga',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    tags: ['Técnico', 'Flow', 'Vistas'],
    level: 'Intermedio' as const,
    type: 'Enduro' as const,
    description: 'Trails técnicos a 20 minutos de la ciudad con vistas al Mediterráneo. +40 senderos señalizados.',
  },
  {
    id: 'velez-malaga',
    title: 'Vélez-Málaga',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800',
    tags: ['Mar', 'Montaña', 'Flow'],
    level: 'Intermedio' as const,
    type: 'Enduro' as const,
    description: 'La Axarquía: trails únicos entre el mar y la montaña. Clima suave todo el año.',
  },
  {
    id: 'archidona',
    title: 'Archidona',
    image: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800',
    tags: ['Salvaje', 'Auténtico', 'Técnico'],
    level: 'Avanzado' as const,
    type: 'Enduro' as const,
    description: 'Comarca Nororiental: trails salvajes y poco transitados. Paisaje interior andaluz.',
  },
  {
    id: 'marbella',
    title: 'Marbella',
    image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800',
    tags: ['Costa', 'Vistas', 'Premium'],
    level: 'Intermedio' as const,
    type: 'Enduro' as const,
    description: 'Costa del Sol: trails con vistas al mar. Sierra Blanca y clima perfecto todo el año.',
  },
  {
    id: 'tarifa',
    title: 'Tarifa',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    tags: ['África', 'Viento', 'Aventura'],
    level: 'Avanzado' as const,
    type: 'Enduro' as const,
    description: 'El punto más al sur de Europa: trails con vistas a África y el Estrecho.',
  },
  {
    id: 'granada',
    title: 'Granada',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    tags: ['Sierra Nevada', 'Alta montaña', 'Épico'],
    level: 'Avanzado' as const,
    type: 'Enduro' as const,
    description: 'Descensos épicos desde Sierra Nevada. Hasta 2000m de desnivel por bajada.',
  },
]

export default function ZonesMap() {
  const { t } = useTranslation()
  const [filterType, setFilterType] = useState<'all' | 'Enduro' | 'DH'>('all')
  const [filterLevel, setFilterLevel] = useState<'all' | 'Intermedio' | 'Avanzado'>('all')

  const filteredZones = zones.filter((zone) => {
    if (filterType !== 'all' && zone.type !== filterType) return false
    if (filterLevel !== 'all' && zone.level !== filterLevel) return false
    return true
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-6">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            {t('zones.title')}
          </h1>
          <p className="text-text-secondary">
            {t('zones.subtitle')}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-surface border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-text-secondary" />
              <span className="text-sm text-text-secondary hidden sm:inline">{t('zones.filters.filter')}:</span>
            </div>
            <div className="flex gap-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
                className="px-3 py-1.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="all">{t('zones.filters.typeAll')}</option>
                <option value="Enduro">{t('zones.filters.enduro')}</option>
                <option value="DH">{t('zones.filters.dh')}</option>
              </select>
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value as any)}
                className="px-3 py-1.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="all">{t('zones.filters.levelAll')}</option>
                <option value="Intermedio">{t('zones.filters.intermediate')}</option>
                <option value="Avanzado">{t('zones.filters.advanced')}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Zones Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredZones.map((zone) => (
            <CardZone key={zone.id} {...zone} />
          ))}
        </div>

        {filteredZones.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">
              {t('zones.noResults')}
            </p>
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => {
                setFilterType('all')
                setFilterLevel('all')
              }}
            >
              {t('zones.clearFilters')}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
