import { ExternalLink } from 'lucide-react'

interface AccommodationButtonsProps {
  locationName: string
  className?: string
}

export default function AccommodationButtons({ locationName, className = '' }: AccommodationButtonsProps) {
  // Limpiamos el nombre de la zona para usarlo en las URLs
  const query = encodeURIComponent(locationName)

  // Construcción de URLs
  const airbnbUrl = `https://www.airbnb.es/s/${query}/homes?query=${query}`
  const bookingUrl = `https://www.booking.com/searchresults.html?ss=${query}`

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      
      {/* Botón de Airbnb (Color marca: Rojo/Rosado) */}
      <a 
        href={airbnbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FF5A5F] hover:bg-[#E0484D] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12.001 18.35c-.59 0-1.1-.21-1.53-.56-.43-.35-1.05-.94-1.89-1.79-.84-.85-1.42-1.53-1.73-2.04-.31-.51-.57-1.01-.78-1.51-.21-.5-.31-.99-.31-1.47 0-.74.24-1.35.73-1.84.49-.49 1.1-.73 1.84-.73.37 0 .73.08 1.08.25.35.17.65.39.9.67.25-.28.55-.5.9-.67.35-.17.71-.25 1.08-.25.74 0 1.35.24 1.84.73.49.49.73 1.1.73 1.84 0 .48-.1.97-.31 1.47-.21.5-.47 1-.78 1.51-.31.51-.89 1.19-1.73 2.04-.84.85-1.46 1.44-1.89 1.79-.43.35-.94.56-1.53.56h-.02z"/>
        </svg>
        Buscar en Airbnb
        <ExternalLink className="w-4 h-4" />
      </a>

      {/* Botón de Booking (Color marca: Azul) */}
      <a 
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#003580] hover:bg-[#00264D] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        Buscar en Booking
        <ExternalLink className="w-4 h-4" />
      </a>

    </div>
  )
}
