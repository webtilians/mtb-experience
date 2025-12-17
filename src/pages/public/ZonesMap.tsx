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
  {
    id: 'marbella',
    title: 'Marbella',
    image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800',
    tags: ['Costa', 'Vistas', 'Premium'],
    level: 'Intermedio' as const,
    type: 'Enduro' as const,
    description: 'Costa del Sol: trails con vistas al mar. Sierra Blanca y clima perfecto todo el año.',
    coords: { lat: 36.5100, lng: -4.8824 },
  },
  {
    id: 'tarifa',
    title: 'Tarifa',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    tags: ['África', 'Viento', 'Aventura'],
    level: 'Avanzado' as const,
    type: 'Enduro' as const,
    description: 'El punto más al sur de Europa: trails con vistas a África y el Estrecho.',
    coords: { lat: 36.0143, lng: -5.6044 },
  },
  {
    id: 'granada',
    title: 'Granada',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    tags: ['Sierra Nevada', 'Alta montaña', 'Épico'],
    level: 'Avanzado' as const,
    type: 'Enduro' as const,
    description: 'Descensos épicos desde Sierra Nevada. Hasta 2000m de desnivel por bajada.',
    coords: { lat: 37.1773, lng: -3.5986 },
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
            <div className="lg:flex-1 h-[400px] lg:h-[calc(100vh-200px)] relative overflow-hidden">
              {/* Map background image */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200"
                alt="Mapa de Andalucía"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-forest-600/20 to-earth-600/20" />
              
              {/* Grid overlay for better visibility */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />

              {/* Zone pins with real approximate positions */}
              {filteredZones.map((zone) => {
                // Convert coordinates to approximate map positions
                // Andalucía roughly: lat 36-38, lng -7 to -2
                const positionMap: Record<string, { left: string; top: string }> = {
                  'montes-de-malaga': { left: '55%', top: '65%' },
                  'velez-malaga': { left: '65%', top: '68%' },
                  'archidona': { left: '58%', top: '50%' },
                  'marbella': { left: '42%', top: '75%' },
                  'tarifa': { left: '20%', top: '85%' },
                  'granada': { left: '75%', top: '45%' },
                }
                const pos = positionMap[zone.id] || { left: '50%', top: '50%' }
                
                return (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZone(zone.id)}
                    className={`absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-full transition-all duration-200 group ${
                      selectedZone === zone.id ? 'z-20 scale-110' : 'z-10 hover:z-20 hover:scale-105'
                    }`}
                    style={{ left: pos.left, top: pos.top }}
                  >
                    {/* Pin */}
                    <div className={`relative ${
                      selectedZone === zone.id 
                        ? 'text-accent' 
                        : 'text-forest-700 group-hover:text-accent'
                    }`}>
                      <svg width="40" height="50" viewBox="0 0 40 50" fill="currentColor" className="drop-shadow-lg">
                        <path d="M20 0C8.954 0 0 8.954 0 20c0 11.046 20 30 20 30s20-18.954 20-30C40 8.954 31.046 0 20 0zm0 28c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
                      </svg>
                      <div className={`absolute top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        selectedZone === zone.id 
                          ? 'bg-white text-accent' 
                          : 'bg-white text-forest-700 group-hover:text-accent'
                      }`}>
                        {zone.level === 'Avanzado' ? '🔥' : '⭐'}
                      </div>
                    </div>
                    {/* Label */}
                    <div className={`mt-1 px-2 py-1 rounded-md text-xs font-semibold whitespace-nowrap shadow-md ${
                      selectedZone === zone.id 
                        ? 'bg-accent text-white' 
                        : 'bg-white text-text-primary group-hover:bg-accent group-hover:text-white'
                    }`}>
                      {zone.title}
                    </div>
                  </button>
                )
              })}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg text-sm">
                <p className="font-semibold text-text-primary mb-2">Leyenda</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span>⭐</span>
                    <span className="text-text-secondary">Intermedio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🔥</span>
                    <span className="text-text-secondary">Avanzado</span>
                  </div>
                </div>
              </div>

              {/* Zoom hint */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg text-xs text-text-secondary">
                Haz clic en una zona para ver detalles
              </div>
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
