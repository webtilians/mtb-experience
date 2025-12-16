import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/public/Home'
import ZonesMap from './pages/public/ZonesMap'
import ZoneDetail from './pages/public/ZoneDetail'
import StaysList from './pages/public/StaysList'
import StayDetail from './pages/public/StayDetail'
import ExternalStays from './pages/public/ExternalStays'
import FAQ from './pages/public/FAQ'
import Contact from './pages/public/Contact'
import Terms from './pages/public/legal/Terms'
import Privacy from './pages/public/legal/Privacy'
import Cancellation from './pages/public/legal/Cancellation'
import BuilderStep1 from './pages/builder/Step1TripDetails'
import BuilderStep2 from './pages/builder/Step2Accommodation'
import BuilderStep3 from './pages/builder/Step3GuidePack'
import BuilderStep4 from './pages/builder/Step4Extras'
import BuilderStep5 from './pages/builder/Step5Checkout'
import BuilderSuccess from './pages/builder/Success'
import MyBooking from './pages/account/MyBooking'
import AdminDashboard from './pages/admin/Dashboard'
import AdminBookings from './pages/admin/Bookings'
import AdminLeads from './pages/admin/Leads'
import AdminZones from './pages/admin/Zones'
import AdminStays from './pages/admin/Stays'
import AdminExtras from './pages/admin/Extras'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="zonas" element={<ZonesMap />} />
        <Route path="zonas/:zoneId" element={<ZoneDetail />} />
        <Route path="alojamientos" element={<StaysList />} />
        <Route path="alojamientos/:stayId" element={<StayDetail />} />
        <Route path="alojamiento-externo" element={<ExternalStays />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="terminos" element={<Terms />} />
        <Route path="privacidad" element={<Privacy />} />
        <Route path="cancelacion" element={<Cancellation />} />
        
        {/* Builder / Wizard Routes */}
        <Route path="planificar">
          <Route index element={<BuilderStep1 />} />
          <Route path="alojamiento" element={<BuilderStep2 />} />
          <Route path="guia" element={<BuilderStep3 />} />
          <Route path="extras" element={<BuilderStep4 />} />
          <Route path="checkout" element={<BuilderStep5 />} />
          <Route path="confirmacion" element={<BuilderSuccess />} />
        </Route>

        {/* Account Routes */}
        <Route path="mi-reserva" element={<MyBooking />} />
      </Route>

      {/* Admin Routes (separate layout) */}
      <Route path="/admin">
        <Route index element={<AdminDashboard />} />
        <Route path="reservas" element={<AdminBookings />} />
        <Route path="leads" element={<AdminLeads />} />
        <Route path="zonas" element={<AdminZones />} />
        <Route path="alojamientos" element={<AdminStays />} />
        <Route path="extras" element={<AdminExtras />} />
      </Route>
    </Routes>
  )
}

export default App
