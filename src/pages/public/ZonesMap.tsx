import { useState } from 'react'
import { MapPin, List, Filter } from 'lucide-react'
import CardZone from '../../components/cards/CardZone'
import Button from '../../components/ui/Button'

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
    coords: { lat: 36.7861, lng: -4.3931 },
  },
  {
    id: 'velez-malaga',
    title: 'Vélez-Málaga',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800',
    tags: ['Mar', 'Montaña', 'Flow'],
    level: 'Intermedio' as const,
    type: 'Enduro' as const,
    description: 'La Axarquía: trails únicos entre el mar y la montaña. Clima suave todo el año.',
    coords: { lat: 36.7833, lng: -4.1000 },
  },
  {
    id: 'archidona',
    title: 'Archidona',
    image: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800',
    tags: ['Salvaje', 'Auténtico', 'Técnico'],
    level: 'Avanzado' as const,
    type: 'Enduro' as const,
    description: 'Comarca Nororiental: trails salvajes y poco transitados. Paisaje interior andaluz.',
    coords: { lat: 37.0833, lng: -4.3833 },
  },
]

export default function ZonesMap() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map')
  const [selectedZone, setSelectedZone] = useState<string | null>(null)
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
            Zonas de riding
          </h1>
          <p className="text-text-secondary">
            Explora las mejores zonas de MTB en el sur de Andalucía.
          </p>
        </div>
      </div>

      {/* Filters & View Toggle */}
      <div className="bg-surface border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-text-secondary" />
                <span className="text-sm text-text-secondary hidden sm:inline">Filtrar:</span>
              </div>
              <div className="flex gap-2">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as any)}
                  className="px-3 py-1.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="all">Tipo: Todos</option>
                  <option value="Enduro">Enduro</option>
                  <option value="DH">DH</option>
                </select>
                <select
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value as any)}
                  className="px-3 py-1.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="all">Nivel: Todos</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                </select>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('map')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'map'
                    ? 'bg-surface shadow-sm text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <MapPin className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-surface shadow-sm text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        {viewMode === 'map' ? (
          <div className="flex flex-col lg:flex-row">
            {/* Map */}
            <div className="lg:flex-1 h-[400px] lg:h-[calc(100vh-200px)] bg-gray-200 relative">
              {/* Placeholder for actual map implementation */}
              <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Mapa interactivo</p>
                  <p className="text-sm">(Integrar Mapbox o Google Maps)</p>
                </div>
              </div>

              {/* Zone pins simulation */}
              {filteredZones.map((zone, index) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  className={`absolute w-10 h-10 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                    selectedZone === zone.id
                      ? 'bg-accent text-white scale-125 z-10'
                      : 'bg-surface border-2 border-accent text-accent hover:scale-110'
                  }`}
                  style={{
                    left: `${20 + index * 20}%`,
                    top: `${30 + (index % 2) * 30}%`,
                  }}
                >
                  <MapPin className="w-5 h-5" />
                </button>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:w-96 bg-surface border-l border-border overflow-y-auto lg:h-[calc(100vh-200px)]">
              <div className="p-4 space-y-4">
                {filteredZones.map((zone) => (
                  <div
                    key={zone.id}
                    className={`transition-all ${
                      selectedZone === zone.id ? 'ring-2 ring-accent rounded-xl' : ''
                    }`}
                    onClick={() => setSelectedZone(zone.id)}
                  >
                    <CardZone {...zone} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* List View */
          <div className="px-4 sm:px-6 lg:px-20 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredZones.map((zone) => (
                <CardZone key={zone.id} {...zone} />
              ))}
            </div>

            {filteredZones.length === 0 && (
              <div className="text-center py-12">
                <p className="text-text-secondary">
                  No hay zonas que coincidan con los filtros seleccionados.
                </p>
                <Button
                  variant="ghost"
                  className="mt-4"
                  onClick={() => {
                    setFilterType('all')
                    setFilterLevel('all')
                  }}
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
