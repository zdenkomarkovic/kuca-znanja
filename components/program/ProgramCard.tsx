import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
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
            className="object-cover w-full "
          />
           <Link href={link} className="w-full">
            <button className=" absolute bottom-0 right-0 text-primary font-semibold py-3 px-6">
              Saznaj više...
            </button>
          </Link>
        </div>
      )}



    </Card>
  )
} 