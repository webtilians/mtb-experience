import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Stepper from '../../components/ui/Stepper'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'

const zones = [
  { value: 'montes-de-malaga', label: 'Montes de Málaga' },
  { value: 'velez-malaga', label: 'Vélez-Málaga' },
  { value: 'archidona', label: 'Archidona' },
  { value: 'marbella', label: 'Marbella' },
  { value: 'tarifa', label: 'Tarifa' },
  { value: 'granada', label: 'Granada' },
]

const ridingTypes = [
  { value: 'enduro', label: 'Enduro' },
  { value: 'dh', label: 'DH (Descenso)' },
  { value: 'ambos', label: 'Ambos' },
]

const levels = [
  { value: 'intermedio', label: 'Intermedio' },
  { value: 'avanzado', label: 'Avanzado' },
]

const airports = [
  { value: 'malaga', label: 'Málaga (AGP)' },
  { value: 'granada', label: 'Granada (GRX)' },
  { value: 'sevilla', label: 'Sevilla (SVQ)' },
  { value: 'otro', label: 'Otro / Coche propio' },
]

export default function Step1TripDetails() {
  const [searchParams] = useSearchParams()
  const preselectedZone = searchParams.get('zona') || ''

  const [formData, setFormData] = useState({
    zone: preselectedZone,
    startDate: '',
    endDate: '',
    riders: '6',
    ridingType: 'enduro',
    level: 'intermedio',
    airport: '',
  })

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isValid =
    formData.zone &&
    formData.startDate &&
    formData.endDate &&
    formData.riders

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Stepper */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Stepper currentStep={1} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Tu viaje
          </h1>
          <p className="text-text-secondary">
            Cuéntanos los detalles básicos para preparar tu experiencia.
          </p>
        </div>

        <div className="bg-surface rounded-xl border border-border p-6 md:p-8">
          <div className="space-y-6">
            <Select
              label="Zona"
              options={zones}
              value={formData.zone}
              onChange={(e) => updateField('zone', e.target.value)}
              placeholder="Selecciona una zona"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Fecha de llegada"
                type="date"
                value={formData.startDate}
                onChange={(e) => updateField('startDate', e.target.value)}
              />
              <Input
                label="Fecha de salida"
                type="date"
                value={formData.endDate}
                onChange={(e) => updateField('endDate', e.target.value)}
              />
            </div>

            <Select
              label="Número de riders"
              options={[
                { value: '4', label: '4 riders' },
                { value: '5', label: '5 riders' },
                { value: '6', label: '6 riders' },
                { value: '7', label: '7 riders' },
                { value: '8', label: '8 riders' },
              ]}
              value={formData.riders}
              onChange={(e) => updateField('riders', e.target.value)}
            />

            {parseInt(formData.riders) >= 8 && (
              <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                <p className="text-sm text-warning">
                  Para grupos de 8+ riders puede ser necesario coordinar 2 vehículos de shuttle.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Tipo de riding"
                options={ridingTypes}
                value={formData.ridingType}
                onChange={(e) => updateField('ridingType', e.target.value)}
              />
              <Select
                label="Nivel"
                options={levels}
                value={formData.level}
                onChange={(e) => updateField('level', e.target.value)}
                helpText="Si tienes dudas, elige 'Intermedio' y lo ajustamos."
              />
            </div>

            <Select
              label="Aeropuerto de llegada (opcional)"
              options={airports}
              value={formData.airport}
              onChange={(e) => updateField('airport', e.target.value)}
              placeholder="Selecciona aeropuerto"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Link to="/">
            <Button variant="ghost" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Volver
            </Button>
          </Link>
          <Link to="/planificar/alojamiento">
            <Button
              variant="primary"
              size="lg"
              disabled={!isValid}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Continuar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
