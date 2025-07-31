import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Heart, BookOpen, MessageCircle, Star, Target } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import CTASection from '@/components/ui/CTASection'

export default function RoditeljUTrenduPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-[#f1f1f1] to-[#e0e0e0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-primary">RODITELJ U TRENDU</span>
              </h1>
              <div className="space-y-4">
                <p className="text-xl leading-relaxed">
                  Tamo gde su deca, tu su i roditelji!
                </p>
                <p className="text-lg leading-relaxed">
                  Posebnu pažnju posvećujemo roditeljima. Danas je izazov biti roditelj. 
                  I zato, <strong>Roditelj</strong> ispisujemo velikim slovom.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Roditelj u trendu.jpg"
                alt="Roditelj u trendu program"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Oblici saradnje */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Oblici saradnje sa roditeljima"
            icon={Users}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Savetovalište",
                icon: <MessageCircle className="h-8 w-8 text-primary" />
              },
              {
                title: "Predavanja",
                description: "iz oblasti: pedagogije, andragogije, medicine rada, psihologije...",
                icon: <BookOpen className="h-8 w-8 text-primary" />
              },
              {
                title: "Seminari",
                icon: <Target className="h-8 w-8 text-primary" />
              },
              {
                title: "Roditeljski sastanci",
                icon: <Users className="h-8 w-8 text-primary" />
              },
              {
                title: "Individualni sastanci",
                description: "sa roditeljima",
                icon: <Heart className="h-8 w-8 text-primary" />
              },
              {
                title: "Individualni razgovori",
                description: "sa roditeljima uz prisustvo deteta",
                icon: <MessageCircle className="h-8 w-8 text-primary" />
              }
            ].map((service, index) => (
              <Card key={index} className="border-2 border-primary/20 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  {service.description && (
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sa nama je RODITELJ U TRENDU */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Sa nama je RODITELJ U TRENDU"
            icon={Star}
          />
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Informisan Roditelj</h3>
                <p className="text-muted-foreground">
                  ... uvek i u svemu informisan Roditelj!
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Edukovan Roditelj</h3>
                <p className="text-muted-foreground">
                  ... pedagoški edukovan Roditelj!
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Garancija za dete</h3>
                <p className="text-muted-foreground">
                  ... garancija za kreativno i srećno detinjstvo!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dodatne informacije */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Zašto je važno biti u trendu?</h2>
            <p className="text-lg leading-relaxed">
              Danas je izazov biti roditelj. Svaki dan donosi nove izazove i pitanja. 
              Naš program pomaže roditeljima da budu informisani, edukovani i spremni 
              za sve izazove modernog roditeljstva.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-primary/5 rounded-lg">
                <h3 className="font-semibold mb-2">Stručna podrška</h3>
                <p className="text-muted-foreground">
                  Dobijate stručnu podršku od iskusnih pedagoga i psihologa
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg">
                <h3 className="font-semibold mb-2">Praktični saveti</h3>
                <p className="text-muted-foreground">
                  Učite kroz praktične primere i rešenja za svakodnevne situacije
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Budite roditelj u trendu"
        subtitle="Pridružite se našem programu i postanite informisan i edukovan roditelj"
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