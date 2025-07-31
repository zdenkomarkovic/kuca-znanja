import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface ProgramCardProps {
  title: string
  description: string
  icon: LucideIcon
  link: string
  variant?: 'primary' | 'secondary'
  image?: string
}

export default function ProgramCard({ 
  title, 
  description, 

  icon: Icon, 
  link, 

  variant = 'primary',
  image
}: ProgramCardProps) {
  const isPrimary = variant === 'primary'
  
  return (
    <Card className={`hover:shadow-xl transition-shadow duration-300 ${
      isPrimary ? 'border-2 border-blue-100' : 'border-2 border-gray-100'
    }`}>
      {image && (
        <div className="relative  w-full  rounded-t-lg">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className="object-cover w-full aspect-[16/13]"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon className={`h-8 w-8 ${isPrimary ? 'text-primary' : 'text-muted-foreground'}`} />
            <div>
              <CardTitle className="text-2xl text-primary">{title}</CardTitle>
          
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm md:text-lg">{description}</p>

        {isPrimary && (
          <Link href={link}>
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors">
              Saznaj više
            </button>
          </Link>
        )}
      </CardContent>
    </Card>
  )
} 