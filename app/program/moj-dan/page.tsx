import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Palette, Gift } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import HeroProgrami from "@/components/HeroProgrami";

export default function MojDanaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroProgrami
        Hero01={"/Moj dan.jpg"}
        word={"MOJ DAN"}
        text={[
          "MOJ DAN je dan kada proslavljam svoj rođendan.",
          "MOJ DAN je prezenzacijа moje knjige.",
          "MOJ DAN je organizacija izložbe mojih radova",
        ]}
        imgtext={"Moj dan"}
      />

      {/* Organizacija rođendana */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1] ">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Organizacija rođendana" icon={Gift} />
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-center text-primary">Detalji programa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="font-bold">Uzrast:</p>
                    <p className="">5 – 15 godina</p>
                  </div>
                  <div>
                    <p className="font-bold">Vreme:</p>
                    <p className="">2 – 4 časa</p>
                  </div>
                  <div>
                    <p className="font-bold">Mesto:</p>
                    <p className="">
                      naše prostorije ili posebno odabran ambijent
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Broj:</p>
                    <p className="">do 20 dece</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-center text-primary">Zabavno – edukativni program</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {[
                    "Predstava",
                    "Zabavno-interaktivni program za decu: motoričke igre, igre iznenađenja, pesme",
                    "Predstava + animacija",
                    "Potraga za blagom",
                    "Dopunski program: oslikavanje, baloni, sapunica, karaoke",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <p className="">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          
          </div>
          <div className="mt-8 p-6 bg-primary/5 rounded-lg">
            <p className="text-center font-medium">
              Kuća znanja se obavezuje da pripremi zabavni deo.
            </p>
            <p className="text-center mt-2">
              Ukoliko je potrebno, a uz dogovor sa roditeljem, naši organizatori
              mogu da obezbede: posluženje, piće i tortu.
            </p>
          </div>
        </div>
      </section>
      <CTASection
        title="Organizujte svoj poseban dan!"
        subtitle="Kontaktirajte nas da organizujemo rođendan, prezentaciju knjige ili izložbu za vaše dete."
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
      {/* Prezentacija knjige */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Prezentacija knjige" icon={BookOpen} />
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Pedagozi Kuće znanja se trude da podrže talente naših polaznika.
                Decu podstičemo da pišu: pesme, priče, strip, dnevnik i sl.
              </p>
              <p className="text-lg leading-relaxed">
                Zajedno pripremamo knjigu za izdavanje.
              </p>
              <p className="text-lg leading-relaxed">
                Organizujemo prezentaciju knjige u našem prostoru ili u
                odabranom ambijentu.
              </p>
            </div>
            <Card className="border-2 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <BookOpen className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Podržavamo talente</h3>
                  <p className="text-muted-foreground">
                    Svako dete ima priču za pričanje. Mi im pomažemo da je
                    napišu i objave.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organizacija izložbe slika */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Organizacija izložbe slika" icon={Palette} />
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Card className="border-2 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <Palette className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Škola slikanja</h3>
                  <p className="text-muted-foreground">
                    U okviru Škole slikanja organizujemo izložbu slika
                    najuspešnijih učenika.
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Za organizaciju izložbe slika se mogu javiti i svi
                zainteresovani, koji ne pohađaju naše časove.
              </p>
              <div className="p-6 bg-primary/5 rounded-lg">
                <h4 className="font-semibold mb-2">Otvoreno za sve</h4>
                <p className="text-muted-foreground">
                  Naše izložbe su otvorene za sve talente, bez obzira da li
                  pohađaju naše časove ili ne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    
    </div>
  );
}
