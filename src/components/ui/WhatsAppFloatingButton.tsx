import { MessageCircle } from 'lucide-react'

interface WhatsAppFloatingButtonProps {
  message?: string
  phone?: string
}

export default function WhatsAppFloatingButton({
  message = 'Hola, me gustaría más información sobre los viajes MTB',
  phone = '34600000000', // Replace with actual phone
}: WhatsAppFloatingButtonProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-200"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
