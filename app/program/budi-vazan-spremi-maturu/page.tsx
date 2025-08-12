import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Target,
  Star,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import HeroProgrami from "@/components/HeroProgrami";

export default function BudiVazanSpremiMaturuPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroProgrami
        Hero01={"/Budi vazan.jpg"}
        word={"BUDI VAŽAN"}
        text={[
          "Neka ti Mala matura bude zadovoljstvo!",
          "BUDI VAŽAN ~  spremi maturu sa osmehom!",
        ]}
        imgtext={"Budi važan spremi maturu"}
      />
      {/* Celokupna priprema */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]">
        <div className="max-w-8xl mx-auto">
          <SectionHeader
            title="Celokupna priprema za Malu maturu"
            icon={GraduationCap}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Srpski jezik",
                icon: <BookOpen className="h-8 w-8 text-primary" />,
              },
              {
                title: "Matematika",
                icon: <Target className="h-8 w-8 text-primary" />,
              },
              {
                title: "Izborni predmet",
                description: "istorija, geografija, biologija, fizika, hemija",
                icon: <Star className="h-8 w-8 text-primary" />,
              },
            ].map((subject, index) => (
              <Card
                key={index}
                className="border-2 border-primary shadow-lg hover:shadow-xl shadow-primary transition-shadow duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{subject.icon}</div>
                  <h3 className="font-semibold mb-2">{subject.title}</h3>
                  {subject.description && (
                    <p className="">
                      {subject.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Način rada */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Način rada" icon={Clock} />
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Metodologija</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Rad je koncipiran tako da polaznik jedan deo časa sluša
                  predavanje, a zatim na pripremljenom listiću radi vežbu. Nakon
                  svake celine sledi provera.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    Polaznik dobija sav materijal za rad:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 ">
                    <p>• svesku</p>
                    <p>• štampani materijal</p>
                    <p>• olovku</p>
                    <p>• gumicu</p>
                    <p>• lenjir</p>
                    <p>• šestar</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Organizacija časova</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p>
                      Pripremni časovi su organizovani vikendom u manjim grupama
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p>
                      Organizujemo i individualne časove za pripremu završnog
                      ispita u terminu, koji polazniku odgovara
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p>Časove pripreme drže iskusni predavači</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Poruke */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span>Đacima</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Da bi upisao ono što voliš da učiš, treba dobro da se
                  pripremiš za Završni ispit. To je tvoj prvi test zrelosti!
                </p>
                <p> Završni ispit te čeka u junu.</p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-semibold text-primary">
                    Potrudi se da ti Završni ispit bude zadovoljstvo.
                  </p>
                </div>
              </CardContent>
            </Card>
              <Card className="border-2 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Roditeljima</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Da bi Vaše dete izabralo školu koju voli, pomozite mu da sa
                  osmehom pripremi gradivo i da bez straha ode na Završni ispit.
                </p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-semibold text-primary">
                    Sama priprema za Završni ispit je i Vaša odgovornost!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Spremite se za Završni ispit bez stresa!"
        subtitle="Kontaktirajte nas da organizujemo pripremu za Završni ispit vašeg deteta."
        primaryButton={{
          text: "0653237267",
          link: "/kontakt",
        }}
        secondaryButton={{
          text: "0113237267",
          link: "/kontakt",
        }}
        workingHours="od 7h do 18h"
        addressLink={{
          text: "Krunska 40, Vračar",
          url: "https://maps.google.com/?q=Krunska+40+Beograd+Serbia",
        }}
      />
    </div>
  );
}
