import { Link } from 'react-router-dom'
import { Search, Filter, Eye, MoreVertical } from 'lucide-react'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'

// Mock data
const bookings = [
  {
    id: 'MTB-2025-0342',
    client: 'Carlos García',
    email: 'carlos@example.com',
    zone: 'Ronda',
    dates: '15-19 Mar 2025',
    riders: 6,
    total: '1.485€',
    status: 'confirmed',
  },
  {
    id: 'MTB-2025-0343',
    client: 'John Smith',
    email: 'john@example.com',
    zone: 'Axarquía',
    dates: '22-25 Mar 2025',
    riders: 4,
    total: '980€',
    status: 'pending',
  },
  {
    id: 'MTB-2025-0344',
    client: 'Marie Dubois',
    email: 'marie@example.com',
    zone: 'Sierra Nevada',
    dates: '1-5 Abr 2025',
    riders: 8,
    total: '2.240€',
    status: 'confirmed',
  },
  {
    id: 'MTB-2025-0341',
    client: 'Pedro Martínez',
    email: 'pedro@example.com',
    zone: 'Ronda',
    dates: '8-12 Mar 2025',
    riders: 5,
    total: '1.250€',
    status: 'completed',
  },
]

export default function AdminBookings() {
  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="bg-text-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">MTB Experience - Admin</h1>
            <nav className="flex items-center gap-6">
              <Link to="/admin" className="text-gray-300 hover:text-white">
                Dashboard
              </Link>
              <Link to="/admin/reservas" className="text-white font-medium">
                Reservas
              </Link>
              <Link to="/admin/leads" className="text-gray-300 hover:text-white">
                Leads
              </Link>
              <Link to="/admin/zonas" className="text-gray-300 hover:text-white">
                Zonas
              </Link>
              <Link to="/admin/alojamientos" className="text-gray-300 hover:text-white">
                Alojamientos
              </Link>
              <Link to="/admin/extras" className="text-gray-300 hover:text-white">
                Extras
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Reservas</h2>
          <Button variant="primary">+ Nueva reserva</Button>
        </div>

        {/* Filters */}
        <div className="bg-surface rounded-xl border border-border p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Buscar por código, cliente..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            <select className="px-3 py-2 border border-border rounded-lg">
              <option>Estado: Todos</option>
              <option>Confirmadas</option>
              <option>Pendientes</option>
              <option>Completadas</option>
            </select>
            <select className="px-3 py-2 border border-border rounded-lg">
              <option>Zona: Todas</option>
              <option>Ronda</option>
              <option>Axarquía</option>
              <option>Sierra Nevada</option>
            </select>
            <Button variant="ghost" leftIcon={<Filter className="w-4 h-4" />}>
              Más filtros
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-surface rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">
                  Código
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">
                  Cliente
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">
                  Zona
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">
                  Fechas
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">
                  Riders
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">
                  Total
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">
                  Estado
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-text-secondary uppercase">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <span className="font-mono text-sm text-text-primary">
                      {booking.id}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-medium text-text-primary">
                        {booking.client}
                      </p>
                      <p className="text-sm text-text-secondary">{booking.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-text-primary">{booking.zone}</td>
                  <td className="px-4 py-4 text-text-primary">{booking.dates}</td>
                  <td className="px-4 py-4 text-text-primary">{booking.riders}</td>
                  <td className="px-4 py-4 font-medium text-text-primary">
                    {booking.total}
                  </td>
                  <td className="px-4 py-4">
                    <Badge
                      type={
                        booking.status === 'confirmed'
                          ? 'confirmed'
                          : booking.status === 'pending'
                            ? 'pending'
                            : 'verified'
                      }
                    />
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
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
