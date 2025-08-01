import Link from 'next/link'
import { MapPin } from 'lucide-react'

interface CTASectionProps {
  title: string
  subtitle: string
  primaryButton: {
    text: string
    link: string
  }
  secondaryButton?: {
    text: string
    link: string
  }
  workingHours?: string
  addressLink?: {
    text: string
    url: string
  }
  bgColor?: string
}

export default function CTASection({ 
  title, 
  subtitle, 
  primaryButton, 
  secondaryButton,
  workingHours,
  addressLink,
  bgColor = "bg-gradient-to-br from-blue-400 via-[#00aceb] to-indigo-600"
}: CTASectionProps) {
  return (
    <section className={`py-6 px-4 ${bgColor} text-white`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white mb-2">{title}</h2>
        <p className="mb-4">{subtitle}</p>
        {workingHours && (
          <p className="text-lg text-blue-200 mb-6">
            <strong>Radno vreme:</strong> {workingHours}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <Link href={`tel:${primaryButton.text}`}>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              {primaryButton.text}
            </button>
          </Link>
          {secondaryButton && (
            <Link href={`tel:${secondaryButton.text}`}>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors">
                {secondaryButton.text}
              </button>
            </Link>
          )}
        </div>
        {addressLink && (
          <div className="flex justify-center">
            <a 
              href={addressLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2  hover:text-blue-200 transition-colors"
            >
              <MapPin className="h-5 w-5" />
              {addressLink.text}
            </a>
          </div>
        )}
      </div>
    </section>
  )
} 