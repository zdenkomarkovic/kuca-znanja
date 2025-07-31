import { LucideIcon } from 'lucide-react'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  icon?: LucideIcon
  iconColor?: string
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  icon: Icon,
  iconColor = "text-primary"
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      {Icon && (
        <div className="flex justify-center mb-4">
          <Icon className={`h-12 w-12 ${iconColor}`} />
        </div>
      )}
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
} 