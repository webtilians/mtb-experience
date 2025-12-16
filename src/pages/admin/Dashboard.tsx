import { Link } from 'react-router-dom'
import {
  Calendar,
  Users,
  Package,
  TrendingUp,
  AlertCircle,
} from 'lucide-react'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'

// Mock data
const stats = [
  { label: 'Reservas este mes', value: '12', icon: Calendar, trend: '+3' },
  { label: 'Leads pendientes', value: '5', icon: Users, trend: '+2' },
  { label: 'Ingresos mes', value: '8.450€', icon: TrendingUp, trend: '+18%' },
]

const upcomingBookings = [
  {
    id: 'MTB-2025-0342',
    client: 'Carlos García',
    zone: 'Ronda',
    dates: '15-19 Mar',
    riders: 6,
    status: 'confirmed',
  },
  {
    id: 'MTB-2025-0343',
    client: 'John Smith',
    zone: 'Axarquía',
    dates: '22-25 Mar',
    riders: 4,
    status: 'pending',
  },
  {
    id: 'MTB-2025-0344',
    client: 'Marie Dubois',
    zone: 'Sierra Nevada',
    dates: '1-5 Abr',
    riders: 8,
    status: 'confirmed',
  },
]

const pendingLeads = [
  {
    id: 1,
    email: 'rider@example.com',
    type: 'external',
    zone: 'Ronda',
    date: 'Hace 2h',
  },
  {
    id: 2,
    email: 'grupo@example.com',
    type: 'contact',
    zone: 'Axarquía',
    date: 'Hace 5h',
  },
]

const pendingConfirmations = [
  { type: 'Shuttle', booking: 'MTB-2025-0342', provider: 'Shuttle Ronda' },
  { type: 'eMTB', booking: 'MTB-2025-0343', provider: 'Bike Rental Málaga' },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="bg-text-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">MTB Experience - Admin</h1>
            <nav className="flex items-center gap-6">
              <Link to="/admin" className="text-white font-medium">
                Dashboard
              </Link>
              <Link to="/admin/reservas" className="text-gray-300 hover:text-white">
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
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl border border-border p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-6 h-6 text-accent" />
                <span className="text-sm text-accent font-medium">
                  {stat.trend}
                </span>
              </div>
              <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
              <p className="text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Bookings */}
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-xl border border-border">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h2 className="font-semibold text-text-primary">
                  Próximas reservas
                </h2>
                <Link to="/admin/reservas">
                  <Button variant="ghost" size="sm">
                    Ver todas
                  </Button>
                </Link>
              </div>
              <div className="divide-y divide-border">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium text-text-primary">
                          {booking.client}
                        </p>
                        <p className="text-sm text-text-secondary">
                          {booking.id} • {booking.zone} • {booking.riders} riders
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-text-secondary">
                        {booking.dates}
                      </span>
                      <Badge
                        type={
                          booking.status === 'confirmed' ? 'confirmed' : 'pending'
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pending Leads */}
            <div className="bg-surface rounded-xl border border-border">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h2 className="font-semibold text-text-primary">
                  Leads pendientes
                </h2>
                <span className="px-2 py-0.5 bg-accent text-white text-xs rounded-full">
                  {pendingLeads.length}
                </span>
              </div>
              <div className="divide-y divide-border">
                {pendingLeads.map((lead) => (
                  <div key={lead.id} className="p-4">
                    <p className="font-medium text-text-primary text-sm">
                      {lead.email}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {lead.type === 'external' ? 'Alojamiento externo' : 'Contacto'} •{' '}
                      {lead.zone} • {lead.date}
                    </p>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-border">
                <Link to="/admin/leads">
                  <Button variant="secondary" size="sm" className="w-full">
                    Gestionar leads
                  </Button>
                </Link>
              </div>
            </div>

            {/* Pending Confirmations */}
            <div className="bg-warning/10 border border-warning/20 rounded-xl">
              <div className="p-4 border-b border-warning/20 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-warning" />
                <h2 className="font-semibold text-text-primary">
                  Pendiente confirmar
                </h2>
              </div>
              <div className="divide-y divide-warning/20">
                {pendingConfirmations.map((item, index) => (
                  <div key={index} className="p-4">
                    <p className="font-medium text-text-primary text-sm">
                      {item.type}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {item.booking} • {item.provider}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
