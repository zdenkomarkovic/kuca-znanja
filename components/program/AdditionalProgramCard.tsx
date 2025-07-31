import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface AdditionalProgramCardProps {
  title: string
  description: string
  icon: LucideIcon
  color?: string
  link?: string
}

export default function AdditionalProgramCard({ 
  title, 
  description, 
  icon: Icon,
  color = "text-primary",
  link
}: AdditionalProgramCardProps) {
  const cardContent = (
    <Card className="text-center hover:shadow-lg transition-shadow border-2 border-gray-100">
      <CardContent className="p-6">
        <div className="flex justify-center mb-4">
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  )

  if (link) {
    return (
      <Link href={link}>
        {cardContent}
      </Link>
    )
  }

  return cardContent
} 