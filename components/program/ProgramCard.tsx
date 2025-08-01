import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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
    <Card className={`hover:shadow-xl h-full transition-shadow duration-300 flex flex-col ${
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
              <CardTitle className=" text-primary">{title}</CardTitle>
              
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm md:text-lg">{description}</p>
      </CardContent>
      {isPrimary && (
        <CardFooter>
          <Link href={link} className="w-full">
            <button className="w-full bg-primary hover:bg-blue-500/70 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors">
              Saznaj više
            </button>
          </Link>
        </CardFooter>
      )}

    </Card>
  )
} 