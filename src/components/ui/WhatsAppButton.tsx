import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  variant?: 'default' | 'footer' | 'inline'
  message?: string
  phone?: string
}

export default function WhatsAppButton({
  variant = 'default',
  message = 'Hola, me gustaría más información sobre los viajes MTB',
  phone = '34600000000', // Replace with actual phone
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  if (variant === 'footer') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        Hablar por WhatsApp
      </a>
    )
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#128C7E] transition-colors"
    >
      <MessageCircle className="w-5 h-5" />
      Hablar por WhatsApp
    </a>
  )
}
