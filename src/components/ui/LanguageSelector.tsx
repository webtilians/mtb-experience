import { useTranslation } from '../../i18n'
import { Globe } from 'lucide-react'

export default function LanguageSelector() {
  const { locale, setLocale } = useTranslation()

  return (
    <div className="relative group">
      <button 
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors text-text-secondary hover:text-text-primary"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium uppercase">{locale}</span>
      </button>
      
      {/* Dropdown */}
      <div className="absolute right-0 top-full mt-1 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[120px]">
        <button
          onClick={() => setLocale('es')}
          className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${
            locale === 'es' ? 'text-accent font-medium' : 'text-text-primary'
          }`}
        >
          <span className="text-base">🇪🇸</span>
          Español
        </button>
        <button
          onClick={() => setLocale('en')}
          className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${
            locale === 'en' ? 'text-accent font-medium' : 'text-text-primary'
          }`}
        >
          <span className="text-base">🇬🇧</span>
          English
        </button>
      </div>
    </div>
  )
}
