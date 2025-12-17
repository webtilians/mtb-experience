import { useEffect, useRef, useState } from 'react'

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
  const [scriptReady, setScriptReady] = useState(false)

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="trailforks/widget.js"]')
    
    if (existingScript) {
      // Script already exists, check if TFWidgets is available
      if ((window as any).TFWidgets) {
        setScriptReady(true)
      } else {
        existingScript.addEventListener('load', () => setScriptReady(true))
      }
    } else {
      // Load the script
      const script = document.createElement('script')
      script.src = 'https://es.pinkbike.org/ttl-86400/sprt/j/trailforks/widget.js'
      script.async = true
      script.onload = () => setScriptReady(true)
      document.head.appendChild(script)
    }
  }, [])

  useEffect(() => {
    // Re-initialize widgets when script is ready or regionId changes
    if (scriptReady && (window as any).TFWidgets) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        (window as any).TFWidgets.init()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [scriptReady, regionId])

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
