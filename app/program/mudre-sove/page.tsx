import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Users, BookOpen, Heart, Star, Clock } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import CTASection from '@/components/ui/CTASection'

export default function MudreSovePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-white to-[#f1f1f1]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary text-center md:text-left leading-tight">
                <span className="">MUDRE SOVE</span>
              </h1>
              <p className="text-xl text-gray-700 text-center md:text-left leading-relaxed">
                Pravo mesto za decu osnovce u Beogradu, gde na kreativan način mogu da ispune svoje vreme pre i posle škole!
              </p>
              <div className="bg-primary text-white px-3 md:px-6 mx-auto md:mx-0 py-2 md:py-3 rounded-lg w-fit">
                <p className="text-sm md:text-lg font-semibold">Namenjeno je deci uzrasta od 7 do 15 godina</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Mudre sove.png"
                alt="Mudre sove program"
                width={600}
                height={400}
                className="rounded-lg "
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Karakteristike programa */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Boravak pre i posle škole",
              "Odvođenje u školu i dovođenje iz škole",
              "Pomoć u izradi domaćih zadataka",
              "Sticanje novog i nadgradnja već postojećeg znanja",
              "Individualni rad sa detetom",
              "Priprema za kontrolne i pismene zadatke",
              "Priprema za takmičenja",
              "Kreativne radionice",
              "Edukativne radionice",
              "Boravak u prirodi (park, izleti, posete)",
              "Obilazak kulturno – istorijskih spomenika i kulturnih manifestacija",
              "Posebno osmišljeni zimski i letnji raspust",
              "Obezbeđen obrok (doručak, užina, ručak)"
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Raspored dana */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Raspored dana"
            icon={Clock}
          />
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-center text-xl">PRE PODNE</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { time: "7 - 8", activity: "Otvaranje i dolazak dece u boravak" },
                    { time: "8 - 9", activity: "Slobodne aktivnosti (gimnastika, muzička radionica, poruka dana)" },
                    { time: "9 - 11", activity: "Izrada domaćeg zadatka" },
                    { time: "11 - 12", activity: "Aktivnosti po izboru učenika" },
                    { time: "12 - 13", activity: "Čas stranog jezika" },
                    { time: "13 - 13:30", activity: "Ručak" },
                    { time: "13:30 - 13:45", activity: "Odlazak u školu" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-3 bg-primary/5 rounded-lg">
                      <div className="font-bold text-primary min-w-[80px]">{item.time}</div>
                      <div className="flex-1">{item.activity}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-center text-xl">POSLE PODNE</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { time: "12 - 13", activity: "Dolazak dece sa časova u boravak, ručak" },
                    { time: "13 - 14", activity: "Čas stranog jezika" },
                    { time: "14 - 16", activity: "Izrada domaćeg zadatka" },
                    { time: "16 - 17", activity: "Aktivnosti po izboru učenika" },
                    { time: "17 - 17:30", activity: "Odlazak dece i zatvaranje boravka" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-3 bg-primary/5 rounded-lg">
                      <div className="font-bold text-primary min-w-[80px]">{item.time}</div>
                      <div className="flex-1">{item.activity}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tim koji radi sa decom */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Sa decom rade"
            iconColor="text-white"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Učitelji",
                description: "Sa bogatim iskustvom i nizom kvalitetnih generacija iza sebe"
              },
              {
                title: "Profesori stranih jezika",
                description: "Francuski, engleski, nemački, ruski"
              },
              {
                title: "Defektolog",
                description: "Grafomotorika, izgovor glasova, poremećaj pažnje, poremećaj u ponašanju"
              },
              {
                title: "Lekar",
                description: "Stručno medicinsko praćenje dece"
              }
            ].map((member, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">{member.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prijavite svoje dete u program 'Mudre sove'"
        subtitle="Obezbedite svojoj deci kvalitetno vreme pre i posle škole u kreativnom i sigurnom okruženju"
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