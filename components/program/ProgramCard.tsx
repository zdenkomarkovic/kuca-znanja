import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface ProgramCardProps {
  title: string
  link: string
  image?: string
}

export default function ProgramCard({ 
  title, 
  link, 
  image
}: ProgramCardProps) {

  
  return (
    <Card className={`hover:shadow-xl h-full transition-shadow duration-300 flex flex-col border-2 border-blue-100`}>
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