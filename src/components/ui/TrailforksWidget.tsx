import { useEffect, useRef } from 'react'

interface TrailforksWidgetProps {
  regionId: string
  height?: string
  className?: string
}

export default function TrailforksWidget({ 
  regionId, 
  height = '500px',
  className = '' 
}: TrailforksWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    // Load Trailforks widget script only once
    if (!scriptLoaded.current) {
      const existingScript = document.querySelector('script[src*="trailforks/widget.js"]')
      
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://es.pinkbike.org/ttl-86400/sprt/j/trailforks/widget.js'
        script.async = true
        document.head.appendChild(script)
      }
      
      scriptLoaded.current = true
    }

    // Re-initialize widgets when regionId changes
    const timer = setTimeout(() => {
      if ((window as any).TFWidgets) {
        (window as any).TFWidgets.init()
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [regionId])

  return (
    <div className={`rounded-xl overflow-hidden border border-border ${className}`}>
      <div 
        ref={containerRef}
        className="TrailforksWidgetMap"
        data-w="100%"
        data-h={height}
        data-rid={regionId}
        data-activitytype="1"
        data-maptype="trailforks"
        data-trailstyle="difficulty"
        data-controls="1"
        data-list="0"
        data-dml="1"
        data-layers="labels,route,poi,polygon,directory,region"
        data-z=""
        data-lat=""
        data-lon=""
        data-hideunsanctioned="0"
        data-basicmap="0"
      />
    </div>
  )
}
