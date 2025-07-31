import { BookOpen, Users, GraduationCap, Heart, Star, Calendar } from 'lucide-react'
import ProgramCard from '@/components/program/ProgramCard'
import AdditionalProgramCard from '@/components/program/AdditionalProgramCard'
import SectionHeader from '@/components/ui/SectionHeader'
import CTASection from '@/components/ui/CTASection'

export default function ProgramPage() {
  const programs = [
    {
      title: "Mudre sove",
      description: "Pravo mesto za decu osnovce u Beogradu, gde na kreativan način mogu da ispune svoje vreme pre i posle škole!",
      age: "7-15 godina",
      icon: BookOpen,
      link: "/program/mudre-sove",
      features: ["Boravak pre i posle škole", "Pomoć u domaćim zadacima", "Kreativne radionice"]
    },
    {
      title: "Moj dan",
      description: "Program za najmlađe - kreativno i zabavno učenje kroz igru i istraživanje.",
      age: "3-6 godina",
      icon: Heart,
      link: "/program/moj-dana",
      features: ["Kreativne aktivnosti", "Razvoj veština", "Igra i učenje"]
    },
    {
      title: "Budi važan - spremi maturu",
      description: "Stručna priprema za maturu uz individualni pristup i sistematsko učenje.",
      age: "17-19 godina",
      icon: GraduationCap,
      link: "/program/budi-vazan-spremi-maturu",
      features: ["Priprema za maturu", "Individualni pristup", "Testovi i vežbe"]
    },
    {
      title: "Roditelj u trendu",
      description: "Program za roditelje - kako da podržite razvoj svoje dece u modernom svetu.",
      age: "Roditelji",
      icon: Users,
      link: "/program/roditelj-u-trendu",
      features: ["Saveti za roditelje", "Moderne metode", "Podrška u odgoju"]
    }
  ]

  const additionalPrograms = [
    {
      title: "Škola matematike",
      description: "Razvijanje logičkog mišljenja i matematičkih veština",
      icon: Star,
      color: "text-yellow-600",
      link: "/program/dodatni-program/skola-matematike"
    },
    {
      title: "Škola slikanja",
      description: "Razvijanje kreativnosti i umetničkih veština",
      icon: Heart,
      color: "text-red-600",
      link: "/program/dodatni-program/skola-slikanja"
    },
    {
      title: "Škola stranog jezika",
      description: "Učenje stranih jezika kroz interaktivne metode",
      icon: BookOpen,
      color: "text-blue-600",
      link: "/program/dodatni-program/skola-stranog-jezika"
    },
    {
      title: "Škola skijanja",
      description: "Zimski sportovi i aktivnosti u prirodi",
      icon: Calendar,
      color: "text-green-600",
      link: "/program/dodatni-program/skola-skijanja"
    },
    {
      title: "Jezički kamp u prirodi",
      description: "Kombinacija učenja jezika i boravka u prirodi",
      icon: Users,
      color: "text-purple-600",
      link: "/program/dodatni-program/jezicki-kamp"
    },
    {
      title: "Montesori program",
      description: "Montesori metodologija za razvoj dece",
      icon: GraduationCap,
      color: "text-indigo-600",
      link: "/program/dodatni-program/montesori-program"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Naši <span className="text-blue-600">Programi</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Kreativna edukacija dece kroz različite programe prilagođene svim uzrastima. 
            Od najmlađih do maturanata, nudimo kvalitetno vreme i razvoj vašeg deteta.
          </p>
        </div>
      </section>

      {/* Osnovni programi */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Osnovni programi"
            subtitle="Naši glavni programi prilagođeni različitim uzrastima dece"
          />
          <div className="grid md:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}         
                icon={program.icon}
                link={program.link}
                variant="primary"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dodatni programi */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Dodatni programi"
            subtitle="Specijalizovani programi za dodatno razvijanje specifičnih veština i talenata"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalPrograms.map((program, index) => (
              <AdditionalProgramCard
                key={index}
                title={program.title}
                description={program.description}
                icon={program.icon}
                color={program.color}
                link={program.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prijavite svoje dete u program"
        subtitle="Kontaktirajte nas da saznamo više o vašem detetu i pronađemo najbolji program"
        primaryButton={{
          text: "0653237267",
          link: "/kontakt"
        }}
        secondaryButton={{
          text: "0113237267",
          link: "/kontakt"
        }}
        workingHours="od 7h do 18h"
        addressLink={{
          text: "Krunska 40, Vračar",
          url: "https://maps.google.com/?q=Krunska+40+Beograd+Serbia"
        }}
      />
    </div>
  )
} 