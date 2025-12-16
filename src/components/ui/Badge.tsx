interface BadgeProps {
  type: 'verified' | 'pending' | 'confirmed' | 'partner'
  className?: string
}

const badgeConfig = {
  verified: {
    label: 'Verificado',
    className: 'bg-accent/10 text-accent border-accent/20',
  },
  pending: {
    label: 'Bajo confirmación',
    className: 'bg-warning/10 text-warning border-warning/20',
  },
  confirmed: {
    label: 'Confirmado',
    className: 'bg-success/10 text-success border-success/20',
  },
  partner: {
    label: 'Partner',
    className: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  },
}

export default function Badge({ type, className = '' }: BadgeProps) {
  const config = badgeConfig[type]

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded border ${config.className} ${className}`}
    >
      {config.label}
    </span>
  )
}
