import { Link } from 'react-router-dom'
import { Mail, Phone, ExternalLink, Check, X } from 'lucide-react'
import Button from '../../components/ui/Button'

// Mock data
const leads = [
  {
    id: 1,
    type: 'external',
    email: 'rider@example.com',
    phone: '+34 600 111 222',
    zone: 'Ronda',
    dates: '15-19 Mar 2025',
    riders: 6,
    externalLink: 'https://airbnb.es/rooms/12345',
    notes: 'Grupo de amigos de Madrid',
    createdAt: 'Hace 2h',
    status: 'new',
  },
  {
    id: 2,
    type: 'contact',
    email: 'grupo@example.com',
    phone: '+44 7700 900000',
    zone: 'Axarquía',
    dates: 'Abril 2025',
    riders: 8,
    message: 'We are a group from UK looking for a week of enduro riding...',
    createdAt: 'Hace 5h',
    status: 'new',
  },
  {
    id: 3,
    type: 'external',
    email: 'mtb.fan@example.com',
    phone: '+33 6 12 34 56 78',
    zone: 'Sierra Nevada',
    dates: '1-5 Abr 2025',
    riders: 4,
    externalLink: 'https://booking.com/hotel/12345',
    notes: '',
    createdAt: 'Ayer',
    status: 'contacted',
  },
]

export default function AdminLeads() {
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
              <Link to="/admin/reservas" className="text-gray-300 hover:text-white">
                Reservas
              </Link>
              <Link to="/admin/leads" className="text-white font-medium">
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
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Leads</h2>
            <p className="text-text-secondary">
              Contactos de usuarios que han reservado alojamiento externo o enviado formulario de contacto.
            </p>
          </div>
        </div>

        {/* Leads List */}
        <div className="space-y-4">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="bg-surface rounded-xl border border-border p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      lead.type === 'external'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {lead.type === 'external' ? 'Alojamiento externo' : 'Contacto'}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      lead.status === 'new'
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 text-text-secondary'
                    }`}
                  >
                    {lead.status === 'new' ? 'Nuevo' : 'Contactado'}
                  </span>
                  <span className="text-sm text-text-secondary">{lead.createdAt}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="primary" size="sm">
                    <Check className="w-4 h-4 mr-1" />
                    Convertir a reserva
                  </Button>
                  <Button variant="ghost" size="sm">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-text-secondary">Contacto</p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-text-secondary" />
                    <a
                      href={`mailto:${lead.email}`}
                      className="text-accent hover:underline"
                    >
                      {lead.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-text-secondary" />
                    <span className="text-text-primary">{lead.phone}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Zona</p>
                  <p className="font-medium text-text-primary">{lead.zone}</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Fechas</p>
                  <p className="font-medium text-text-primary">{lead.dates}</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Riders</p>
                  <p className="font-medium text-text-primary">{lead.riders} personas</p>
                </div>
              </div>

              {lead.externalLink && (
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-text-secondary mb-1">
                    Enlace de alojamiento:
                  </p>
                  <a
                    href={lead.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline flex items-center gap-1"
                  >
                    {lead.externalLink}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              {lead.message && (
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-text-secondary mb-1">Mensaje:</p>
                  <p className="text-text-primary">{lead.message}</p>
                </div>
              )}

              {lead.notes && (
                <div className="mt-3">
                  <p className="text-sm text-text-secondary">Notas: {lead.notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
