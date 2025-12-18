import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Mountain } from 'lucide-react'
import Button from '../ui/Button'
import LanguageSelector from '../ui/LanguageSelector'
import { useTranslation } from '../../i18n'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const navItems = [
    { label: t('nav.zones'), href: '/zonas' },
    { label: t('nav.stays'), href: '/alojamientos' },
    { label: 'Trailbuilders', href: '/trailbuilders' },
    { label: 'FAQ', href: '/faq' },
    { label: t('nav.contact'), href: '/contacto' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Mountain className="w-8 h-8 text-accent" />
            <span className="font-heading font-bold text-xl text-text-primary">
              MTB Experience
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <LanguageSelector />

            {/* CTA */}
            <Link to="/planificar">
              <Button variant="primary" size="md">
                {t('nav.planTrip')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-accent'
                    : 'text-text-secondary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <LanguageSelector />
              <Link to="/planificar" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" size="lg" className="w-full">
                  {t('nav.planTrip')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
