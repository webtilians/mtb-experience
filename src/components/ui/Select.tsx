import { SelectHTMLAttributes, forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'

interface Option {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: Option[]
  placeholder?: string
  helpText?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      options,
      placeholder = 'Seleccionar...',
      className = '',
      id,
      helpText,
      ...props
    },
    ref
  ) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={`
              w-full px-4 py-2.5 bg-surface border rounded-lg text-text-primary appearance-none
              transition-colors duration-200 cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
              disabled:bg-gray-100 disabled:cursor-not-allowed
              ${error ? 'border-danger focus:ring-danger' : 'border-border'}
              ${className}
            `}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" />
        </div>
        {helpText && !error && <p className="mt-1.5 text-sm text-text-secondary">{helpText}</p>}
        {error && <p className="mt-1.5 text-sm text-danger">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
