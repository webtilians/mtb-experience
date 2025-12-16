import { Link } from 'react-router-dom'
import { Mountain, Instagram, Mail } from 'lucide-react'
import WhatsAppButton from '../ui/WhatsAppButton'

const legalLinks = [
  { label: 'Términos y condiciones', href: '/terminos' },
  { label: 'Política de privacidad', href: '/privacidad' },
  { label: 'Política de cancelación', href: '/cancelacion' },
]

const navLinks = [
  { label: 'Zonas', href: '/zonas' },
  { label: 'Alojamientos', href: '/alojamientos' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-accent" />
              <span className="font-heading font-bold text-xl">
                MTB Experience
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Guía local + logística + casas verificadas + extras a medida en Andalucía.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <WhatsAppButton variant="footer" />
              <a
                href="mailto:info@mtbexperience.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@mtbexperience.com
              </a>
              <a
                href="https://instagram.com/mtbexperience"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @mtbexperience
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MTB Experience. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs">
              Los servicios de alojamiento y transporte son prestados por terceros colaboradores.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
