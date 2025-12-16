import { Check } from 'lucide-react'

interface StepperProps {
  currentStep: number
  steps?: string[]
}

const defaultSteps = ['Viaje', 'Alojamiento', 'Guía', 'Extras', 'Pago']

export default function Stepper({
  currentStep,
  steps = defaultSteps,
}: StepperProps) {
  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < currentStep
          const isCurrent = stepNumber === currentStep
          const isLast = index === steps.length - 1

          return (
            <div key={step} className="flex items-center flex-1">
              {/* Step */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                    isCompleted
                      ? 'bg-accent text-white'
                      : isCurrent
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 text-text-secondary'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    stepNumber
                  )}
                </div>
                <span
                  className={`font-medium text-sm ${
                    isCurrent ? 'text-text-primary' : 'text-text-secondary'
                  }`}
                >
                  {step}
                </span>
              </div>

              {/* Connector */}
              {!isLast && (
                <div
                  className={`flex-1 h-0.5 mx-4 ${
                    isCompleted ? 'bg-accent' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text-primary">
            Paso {currentStep} de {steps.length}
          </span>
          <span className="text-sm text-text-secondary">
            {steps[currentStep - 1]}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
