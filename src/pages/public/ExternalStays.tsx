import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight, Check, MapPin } from 'lucide-react'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'
import { useTranslation } from '../../i18n'

// Zonas disponibles con sus nombres para las URLs
const zones = [
  { id: 'montes-de-malaga', name: 'Montes de Málaga', searchQuery: 'Montes de Malaga, Malaga, Spain' },
  { id: 'velez-malaga', name: 'Vélez-Málaga', searchQuery: 'Velez-Malaga, Spain' },
  { id: 'archidona', name: 'Archidona', searchQuery: 'Archidona, Malaga, Spain' },
  { id: 'marbella', name: 'Marbella', searchQuery: 'Marbella, Spain' },
  { id: 'tarifa', name: 'Tarifa', searchQuery: 'Tarifa, Cadiz, Spain' },
  { id: 'granada', name: 'Granada / Sierra Nevada', searchQuery: 'Sierra Nevada, Granada, Spain' },
]

export default function ExternalStays() {
  const { t } = useTranslation()
  const [showForm, setShowForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedZone, setSelectedZone] = useState(zones[0])

  // Generar URLs dinámicas basadas en la zona seleccionada
  const getAirbnbUrl = (zone: typeof zones[0]) => {
    const query = encodeURIComponent(zone.searchQuery)
    return `https://www.airbnb.es/s/${query}/homes?query=${query}`
  }

  const getBookingUrl = (zone: typeof zones[0]) => {
    const query = encodeURIComponent(zone.searchQuery)
    return `https://www.booking.com/searchresults.html?ss=${query}&checkin=&checkout=&group_adults=4`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            {t('externalStays.success.title')}
          </h1>
          <p className="text-text-secondary mb-8">
            {t('externalStays.success.message')}
          </p>
          <Link to="/planificar/guia">
            <Button variant="primary" size="lg">
              {t('externalStays.success.cta')}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            {t('externalStays.title')}
          </h1>
          <p className="text-text-secondary">
            {t('externalStays.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!showForm ? (
          <div className="space-y-6">
            {/* Zone Selector */}
            <div className="bg-surface rounded-xl border border-border p-6">
              <label className="flex items-center gap-2 text-sm font-medium text-text-primary mb-3">
                <MapPin className="w-4 h-4 text-accent" />
                {t('tripBuilder.step1.zone')}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {zones.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZone(zone)}
                    className={`p-3 text-sm font-medium rounded-lg border transition-all ${
                      selectedZone.id === zone.id
                        ? 'bg-accent text-white border-accent'
                        : 'bg-surface text-text-primary border-border hover:border-accent'
                    }`}
                  >
                    {zone.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Platform buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href={getAirbnbUrl(selectedZone)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 p-6 bg-surface border border-border rounded-xl hover:shadow-md hover:border-[#FF5A5F] transition-all group"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                  alt="Airbnb"
                  className="h-8"
                />
                <span className="text-sm text-text-secondary group-hover:text-[#FF5A5F] flex items-center gap-1">
                  {t('zoneDetail.searchOnAirbnb')} en {selectedZone.name}
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
              <a
                href={getBookingUrl(selectedZone)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 p-6 bg-surface border border-border rounded-xl hover:shadow-md hover:border-[#003580] transition-all group"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg"
                  alt="Booking.com"
                  className="h-6"
                />
                <span className="text-sm text-text-secondary group-hover:text-[#003580] flex items-center gap-1">
                  {t('zoneDetail.searchOnBooking')} en {selectedZone.name}
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            </div>

            <div className="text-center py-8">
              <div className="w-12 h-px bg-border mx-auto mb-4" />
              <p className="text-text-secondary mb-6">
                {t('externalStays.alreadyBooked')}
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => setShowForm(true)}
              >
                {t('externalStays.alreadyBookedButton')}
              </Button>
            </div>
          </div>
        ) : (
          /* Form */
          <div className="bg-surface rounded-xl border border-border p-6 md:p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              {t('externalStays.form.title')}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label={t('externalStays.form.link')}
                placeholder="https://www.airbnb.es/rooms/..."
                helpText={t('externalStays.form.linkHelp')}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label={t('externalStays.form.checkIn')}
                  type="date"
                />
                <Input
                  label={t('externalStays.form.checkOut')}
                  type="date"
                />
              </div>

              <Select
                label={t('externalStays.form.riders')}
                options={[
                  { value: '4', label: '4 riders' },
                  { value: '5', label: '5 riders' },
                  { value: '6', label: '6 riders' },
                  { value: '7', label: '7 riders' },
                  { value: '8', label: '8 riders' },
                ]}
              />

              <Input
                label={t('externalStays.form.location')}
                placeholder={t('externalStays.form.locationPlaceholder')}
              />

              <Input
                label={t('externalStays.form.arrivalTime')}
                placeholder={t('externalStays.form.arrivalTimePlaceholder')}
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  {t('externalStays.form.notes')}
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t('externalStays.form.notesPlaceholder')}
                />
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {t('externalStays.success.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Info note */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-text-secondary">
            <strong>{t('common.note')}:</strong> {t('externalStays.note')}
          </p>
        </div>
      </div>
    </div>
  )
}
