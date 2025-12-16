import { Link } from 'react-router-dom'
import { Plus, Edit, Eye, Trash2, Users } from 'lucide-react'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'

const stays = [
  {
    id: 'casa-1',
    name: 'Casa Rural El Molino',
    municipality: 'Ronda',
    capacity: 6,
    priceRange: '120-150€',
    status: 'verified',
    bookings: 5,
  },
  {
    id: 'casa-2',
    name: 'Cortijo Los Olivos',
    municipality: 'Arriate',
    capacity: 8,
    priceRange: '150-180€',
    status: 'verified',
    bookings: 3,
  },
  {
    id: 'casa-3',
    name: 'Villa Axarquía',
    municipality: 'Cómpeta',
    capacity: 6,
    priceRange: '100-130€',
    status: 'verified',
    bookings: 4,
  },
  {
    id: 'casa-4',
    name: 'Finca Sierra Nevada',
    municipality: 'Capileira',
    capacity: 10,
    priceRange: '200-250€',
    status: 'pending',
    bookings: 0,
  },
]

export default function AdminStays() {
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
              <Link to="/admin/zonas" className="text-gray-300 hover:text-white">Zonas</Link>
              <Link to="/admin/alojamientos" className="text-white font-medium">Alojamientos</Link>
              <Link to="/admin/extras" className="text-gray-300 hover:text-white">Extras</Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Alojamientos</h2>
          <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
            Nuevo alojamiento
          </Button>
        </div>

        <div className="bg-surface rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Alojamiento</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Municipio</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Capacidad</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Precio/noche</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Estado</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Reservas</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-text-secondary uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {stays.map((stay) => (
                <tr key={stay.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-text-primary">{stay.name}</td>
                  <td className="px-4 py-4 text-text-primary">{stay.municipality}</td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-1 text-text-primary">
                      <Users className="w-4 h-4 text-text-secondary" />
                      {stay.capacity}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-text-primary">{stay.priceRange}</td>
                  <td className="px-4 py-4">
                    <Badge type={stay.status === 'verified' ? 'verified' : 'pending'} />
                  </td>
                  <td className="px-4 py-4 text-text-primary">{stay.bookings}</td>
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
