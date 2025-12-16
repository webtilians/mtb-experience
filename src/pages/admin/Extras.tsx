import { Link } from 'react-router-dom'
import { Plus, Edit, Trash2 } from 'lucide-react'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'

const extras = [
  {
    id: 'transfer',
    name: 'Transfer aeropuerto',
    price: '120€',
    priceUnit: '/trayecto',
    provider: 'Taxi Ronda SL',
    isPartner: true,
    status: 'active',
  },
  {
    id: 'shuttle',
    name: 'Uplifts / Shuttles',
    price: '80€',
    priceUnit: '/día/grupo',
    provider: 'Shuttle Ronda',
    isPartner: true,
    status: 'active',
  },
  {
    id: 'food-pack',
    name: 'Welcome food pack',
    price: '45€',
    priceUnit: '/grupo',
    provider: 'MTB Experience',
    isPartner: false,
    status: 'active',
  },
  {
    id: 'ebike',
    name: 'Alquiler eMTB',
    price: '80€',
    priceUnit: '/día/bici',
    provider: 'Bike Rental Málaga',
    isPartner: true,
    status: 'active',
  },
  {
    id: 'dh-bike',
    name: 'Alquiler bici DH',
    price: '60€',
    priceUnit: '/día/bici',
    provider: 'DH Bikes Granada',
    isPartner: true,
    status: 'inactive',
  },
  {
    id: 'photo',
    name: 'Foto/Vídeo',
    price: '250€',
    priceUnit: '/día',
    provider: 'Action Media',
    isPartner: true,
    status: 'active',
  },
]

export default function AdminExtras() {
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
              <Link to="/admin/alojamientos" className="text-gray-300 hover:text-white">Alojamientos</Link>
              <Link to="/admin/extras" className="text-white font-medium">Extras</Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Extras y proveedores</h2>
          <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
            Nuevo extra
          </Button>
        </div>

        <div className="bg-surface rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Extra</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Precio</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Proveedor</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Tipo</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase">Estado</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-text-secondary uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {extras.map((extra) => (
                <tr key={extra.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-text-primary">{extra.name}</td>
                  <td className="px-4 py-4 text-text-primary">
                    {extra.price} <span className="text-text-secondary text-sm">{extra.priceUnit}</span>
                  </td>
                  <td className="px-4 py-4 text-text-primary">{extra.provider}</td>
                  <td className="px-4 py-4">
                    {extra.isPartner ? (
                      <Badge type="partner" />
                    ) : (
                      <span className="px-2 py-1 bg-gray-100 text-text-secondary text-xs rounded">Propio</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 text-xs rounded ${extra.status === 'active' ? 'bg-accent/10 text-accent' : 'bg-gray-100 text-text-secondary'}`}>
                      {extra.status === 'active' ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
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
