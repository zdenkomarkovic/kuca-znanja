"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, MapPin } from 'lucide-react'


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto  md:px-32">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Content */}
          <div className="text-center px-2 space-y-2 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-2 md:space-y-4 mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-primary">KUĆA ZNANJA</span>
                <br />
                <span className="text-xl md:text-3xl text-muted-foreground font-medium">
                  Centar za kreativnu edukaciju dece
                </span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Pravo mesto za decu osnovce u Beogradu, gde na kreativan način mogu da ispune svoje vreme pre i posle škole!
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto  text-sm md:text-lg">
             <div className='mx-auto'>
             <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Boravak pre i posle škole</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Kreativne radionice</span>
              </div>
              </div> 
              <div className='mx-auto'>


              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Pomoć u izradi domaćih zadataka</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Edukativne aktivnosti</span>
              </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#programi">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white hover:text-primary hover:border-primary border-2 border-primary px-8 py-3 text-lg">
                  Pogledajte programe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="tel:+381603456309">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  +38160 3456309
                </Button>
              </Link>

            </div>

            {/* Contact info */}
            <a 
              href="https://maps.google.com/?q=Krunska+40+Beograd+Serbia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm py-2 flex items-center justify-center gap-2 hover:text-primary transition-colors"
            >
              <MapPin className="h-5 w-5 text-primary" />
              Krunska 40 • Vračar
            </a>
         
          </div>

          {/* Logo Image */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                             <div className=" z-0 bg-white transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/kuca-znanja-logo.png"
                    alt="Kuća znanja logo"
                    className="w-full h-full"

                  />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
