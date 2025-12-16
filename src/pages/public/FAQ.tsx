import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: '¿Qué incluye el servicio de guía?',
        a: 'El pack de guía incluye briefing diario y planificación de rutas según tu nivel, acompañamiento durante las salidas, soporte mecánico básico, recomendaciones locales y coordinación logística del viaje.',
      },
      {
        q: '¿Qué nivel necesito para participar?',
        a: 'Tenemos rutas para niveles intermedio y avanzado. Es importante saber manejar la bici en senderos técnicos. Si tienes dudas sobre tu nivel, contáctanos y te asesoramos.',
      },
      {
        q: '¿Cuántos días dura un viaje típico?',
        a: 'Los viajes más comunes son de 3-4 días de riding, pero podemos organizar desde escapadas de fin de semana hasta semanas completas.',
      },
    ],
  },
  {
    category: 'Alojamiento',
    questions: [
      {
        q: '¿Qué significa "casa verificada"?',
        a: 'Son alojamientos que hemos visitado personalmente y que cumplen requisitos específicos para grupos MTB: parking amplio, zona para guardar bicis, buena ubicación respecto a los trails, etc.',
      },
      {
        q: '¿Puedo reservar mi propio alojamiento?',
        a: '¡Claro! Puedes reservar en Airbnb o Booking y después contratar con nosotros solo el guía y los extras. Tenemos un formulario específico para esto.',
      },
      {
        q: '¿Cómo funciona la disponibilidad?',
        a: 'Las casas se muestran como "disponibles bajo confirmación". Tras tu solicitud, verificamos disponibilidad y te confirmamos en menos de 24h.',
      },
    ],
  },
  {
    category: 'Precios y pagos',
    questions: [
      {
        q: '¿Qué es la tarifa de gestión?',
        a: 'Es una tarifa que cubre la planificación del viaje, coordinación con proveedores de transporte y servicios, gestión de cambios, y soporte durante toda tu estancia.',
      },
      {
        q: '¿Cómo funcionan los pagos?',
        a: 'Al reservar pagas a MTB Experience el servicio de guía y la tarifa de gestión. Si el alojamiento es de nuestro inventario, también lo pagas a través de nosotros. Los servicios de partners (transfers, shuttles) se pueden pagar directamente a ellos o a través de nosotros según el caso.',
      },
      {
        q: '¿Cuál es la política de cancelación?',
        a: 'Cancelación gratuita hasta 30 días antes. Entre 30-14 días, retención del 50%. Menos de 14 días, no hay reembolso. Consulta los términos completos en nuestra política de cancelación.',
      },
    ],
  },
  {
    category: 'Logística',
    questions: [
      {
        q: '¿Necesito traer mi propia bici?',
        a: 'Recomendamos traer tu propia bici, pero tenemos partners de alquiler de eMTB y bicis de DH si prefieres no transportarla.',
      },
      {
        q: '¿Ofrecéis transporte desde el aeropuerto?',
        a: 'Sí, trabajamos con partners de transporte que pueden recogerte en los aeropuertos de Málaga, Granada o Sevilla.',
      },
      {
        q: '¿Hay servicio de shuttle/uplift?',
        a: 'Sí, según la zona podemos organizar shuttles para maximizar el descenso. Esto se añade como extra en el configurador.',
      },
    ],
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Preguntas frecuentes
          </h1>
          <p className="text-text-secondary">
            Todo lo que necesitas saber sobre nuestros viajes MTB.
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {faqs.map((section) => (
          <div key={section.category} className="mb-10">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.questions.map((item, index) => {
                const itemId = `${section.category}-${index}`
                const isOpen = openItems.includes(itemId)

                return (
                  <div
                    key={itemId}
                    className="bg-surface border border-border rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(itemId)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-text-primary pr-4">
                        {item.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-text-secondary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <p className="text-text-secondary">{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
