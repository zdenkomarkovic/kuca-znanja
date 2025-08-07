import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Palette,
  Calendar,
  Users,
  Star,
  DollarSign,
  Target,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import HeroProgrami from "@/components/HeroProgrami";

export default function SkolaSlikanjaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroProgrami
        Hero01={"/skola slikanja.jpg"}
        word={"ŠKOLA SLIKANJA"}
        text={[
          "Škola slikanja počinje 15. septembra, a završava se u junu sledeće godine.",
          "Prijave su do kraja avgusta tekuće godine.",
        ]}
      />
      {/* Organizacija */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Organizacija časova" icon={Calendar} />
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>Raspored časova</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Časovi se održavaju dva puta nedeljno: jedan čas tokom radne
                  nedelje, a drugi čas subotom.
                </p>
                <p>
                  Tačno vreme održavanja časa preciziraćemo nakon razgovora sa
                  roditeljima i prema školskim obavezama polaznika.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>Predavač</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Časove vodi profesorka metodike likovne kulture na Učiteljskom
                  fakultetu Milena Stojanović.
                </p>
                <p>
                  Želja profesorke je da grupe budu manje, kako bi se svakom
                  detetu posvetila.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nivoi */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Program smo podelili na 4 nivoa" icon={Users} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Predškolci",
                icon: <Palette className="h-8 w-8 text-primary" />,
              },
              {
                title: "7 – 9 godina",
                icon: <Target className="h-8 w-8 text-primary" />,
              },
              {
                title: "10 – 12 godina",
                icon: <Star className="h-8 w-8 text-primary" />,
              },
              {
                title: "13 – 15 godina",
                icon: <Users className="h-8 w-8 text-primary" />,
              },
            ].map((nivo, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 text-center"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{nivo.icon}</div>
                  <h3 className="font-semibold">{nivo.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materijal i cena */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>Materijal</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Materijal kojim se radi je kvalitetan i svakoj temi
                  prilagođen.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <span>Cena</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold">
                  Cena na mesečnom nivou je 80e u dinarskoj protivvrednosti.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">Može se platiti:</p>
                  <div className="space-y-1 text-sm">
                    <p>a) u celosti, pri čemu dajemo 10% popusta;</p>
                    <p>b) u dve rate;</p>
                    <p>c) nakon svakog časa.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Izložbe */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Izložbe radova" icon={Palette} />
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <Palette className="h-12 w-12 text-primary" />
              </div>
              <p className="text-lg font-semibold">
                Organizujemo polugodišnje i godišnje izložbe radova polaznika.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pripremni program */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="PRIPREMNI PROGRAM" icon={Target} />
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Priprema učenika za upis u umetničke škole</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Priprema maturanata za upis na Likovnu akademiju</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prijavite svoje dete u Školu slikanja"
        subtitle="Razvijte umetničke talente vašeg deteta i pripremite ga za umetničke škole"
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
