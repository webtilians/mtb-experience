import { Mail, MapPin, Phone } from 'lucide-react'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import WhatsAppButton from '../../components/ui/WhatsAppButton'

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Contacto
          </h1>
          <p className="text-text-secondary">
            ¿Tienes dudas? Estamos aquí para ayudarte.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              Habla con nosotros
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Email</h3>
                  <a
                    href="mailto:info@mtbexperience.com"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    info@mtbexperience.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Teléfono</h3>
                  <a
                    href="tel:+34600000000"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    +34 600 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Ubicación</h3>
                  <p className="text-text-secondary">
                    Sur de Andalucía, España
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
              <h3 className="font-semibold text-text-primary mb-2">
                ¿Prefieres WhatsApp?
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Respondemos rápido. Es la forma más directa de contactarnos.
              </p>
              <WhatsAppButton />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface rounded-xl border border-border p-6 md:p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              Envíanos un mensaje
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Nombre" placeholder="Tu nombre" />
                <Input
                  label="Email"
                  type="email"
                  placeholder="tu@email.com"
                />
              </div>

              <Input
                label="Asunto"
                placeholder="¿Sobre qué quieres preguntarnos?"
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Cuéntanos..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
