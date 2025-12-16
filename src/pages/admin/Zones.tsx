import { Link } from 'react-router-dom'
import { Plus, Edit, Eye, Trash2 } from 'lucide-react'
import Button from '../../components/ui/Button'

const zones = [
  {
    id: 'ronda',
    name: 'Ronda / Serranía',
    type: 'Enduro',
    level: 'Avanzado',
    status: 'active',
    bookings: 8,
  },
  {
    id: 'axarquia',
    name: 'Axarquía',
    type: 'Enduro',
    level: 'Intermedio',
    status: 'active',
    bookings: 5,
  },
  {
    id: 'sierra-nevada',
    name: 'Sierra Nevada',
    type: 'DH',
    level: 'Avanzado',
    status: 'active',
    bookings: 12,
  },
  {
    id: 'alpujarra',
    name: 'La Alpujarra',
    type: 'Enduro',
    level: 'Intermedio',
    status: 'draft',
    bookings: 0,
  },
]

export default function AdminZones() {
  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="bg-text-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">MTB Experience - Admin</h1>
            <nav className="flex items-center gap-6">
              <Link to="/admin" className="text-gray-300 hover:text-white">Dashboard</Link>
              <Link to="/admin/reservas" className="text-gray-300 hover:text-white">Reservas</Link>
              <Link to="/admin/leads" className="text-gray-300 hover:text-white">Leads</Link>
              <Link to="/admin/zonas" className="text-white font-medium">Zonas</Link>
              <Link to="/admin/alojamientos" className="text-gray-300 hover:text-white">Alojamientos</Link>
              <Link to="/admin/extras" className="text-gray-300 hover:text-white">Extras</Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Zonas</h2>
          <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
            Nueva zona
          </Button>
        </div>

        <div className="bg-surface rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Zona</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Tipo</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Nivel</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Estado</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Reservas</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-text-secondary uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {zones.map((zone) => (
                <tr key={zone.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-text-primary">{zone.name}</td>
                  <td className="px-4 py-4 text-text-primary">{zone.type}</td>
                  <td className="px-4 py-4 text-text-primary">{zone.level}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 text-xs rounded ${zone.status === 'active' ? 'bg-accent/10 text-accent' : 'bg-gray-100 text-text-secondary'}`}>
                      {zone.status === 'active' ? 'Activa' : 'Borrador'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-text-primary">{zone.bookings}</td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="sm"><Trash2 className="w-4 h-4 text-danger" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
