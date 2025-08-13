import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Star, BookOpen, Brain } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import HeroProgrami from "@/components/HeroProgrami";
import MotionComponent1 from "@/components/MotionComponent1";
import MotionComponent3 from "@/components/MotionComponent3";
import MotionComponent2 from "@/components/MotionComponent2";

export default function MontesoriProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroProgrami
        Hero01={"/Montesori program.jpg"}
        word={"MONTESORI PROGRAM"}
        text={[]}
        imgtext={"Montesori program"}
      />
      {/* Osnova metode */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Osnova Montesori metode" icon={Heart} />
          <div className="grid lg:grid-cols-2 gap-8 overflow-hidden">
            <MotionComponent1>
            <Card className="border shadow-md shadow-primary hover:shadow-xl transition-shadow duration-300 border-primary">
              <CardHeader>
                <CardTitle className="text-center text-primary">Filozofija metode</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Naši časovi se realizuju prema programu Marije Montesori.
                  Osnova Montesori metode leži u ideji da se dete maksimalno
                  uključi u aktivnost, jer formirana sredina omogućava detetu da
                  razvije svoje potencijale.
                </p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-semibold text-center">
                    Pomozi mi da sebi ovo napravim.
                  </p>
                </div>
              </CardContent>
            </Card>
            </MotionComponent1>
            <MotionComponent3>
            <Card className="border h-full shadow-md shadow-primary hover:shadow-xl transition-shadow duration-300 border-primary">
              <CardHeader>
                <CardTitle className="text-center text-primary">Razlika od tradicionalne nastave</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Naši časovi ne liče na tradicionalnu nastavu. Marija Montesori
                  je bila uverena da svako dete može da otkrije svoju snagu.
                </p>
                <p>
                  Uloga nastavnika na časovima nije da predaje, već da podržavam
                  samostalnost u radu deteta.
                </p>
              </CardContent>
            </Card>
            </MotionComponent3>
          </div>
        </div>
      </section>

      {/* Razvijaju se */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Razvijaju se" icon={Brain} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Pažnja",
              "Kreativno i logičko mišljenje",
              "Pamćenje",
              "Govor",
              "Mašta",
              "Motorika",
            ].map((skill, index) => (
              <MotionComponent2 key={index}>
              <Card
               
                className="border h-full shadow-md shadow-primary hover:shadow-xl transition-shadow duration-300 border-primary text-center"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">{skill}</h3>
                </CardContent>
              </Card>
              </MotionComponent2>
            ))}
          </div>
        </div>
      </section>

      {/* Timski rad */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Timski rad" icon={Users} />
          <MotionComponent2>
          <Card className="border shadow-md shadow-primary hover:shadow-xl transition-shadow duration-300 border-primary">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <p className="text-lg font-semibold">
                Tokom timskog rada deca se uče da misle, donose zaključke, utiču
                na tok aktivnosti.
              </p>
            </CardContent>
          </Card>
          </MotionComponent2>
        </div>
      </section>
      {/* CTA Section */}
      <CTASection
        title="Prijavite svoje dete u Montesori program"
        subtitle="Razvijte potencijale vašeg deteta kroz Montesori metodologiju"
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
      {/* Ključ rada */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Ključ rada sa decom" icon={Heart} />
          <div className="grid lg:grid-cols-2 gap-8">
            <MotionComponent1>
            <Card className="border shadow-md shadow-primary hover:shadow-xl transition-shadow duration-300 border-primary">
              <CardHeader>
                <CardTitle className="text-center text-primary">Odnos prema detetu</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ključ moga rada sa decom, a prema metodici Marije Montesori,
                  je odnos prema detetu kao jedinstvenoj neponovljivoj ličnosti,
                  sa svojim ličnim planom razvoja, svojim sopstvenim pristupom i
                  rokovima osvajanja sveta koji ga okružuje.
                </p>
              </CardContent>
            </Card>
            </MotionComponent1>
            <MotionComponent3>
            <Card className="border shadow-md shadow-primary hover:shadow-xl transition-shadow duration-300 border-primary">
              <CardHeader>
                <CardTitle className="text-center text-primary">Senzomotorni razvoj</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Korišćenje elemenata metodike Marije Montesori u radu pruža
                  kroz senzomotorni razvoj deteta mogućnost da usredsredi pažnju
                  i pažljivo radi, da se skoncentriše, da usmerava svoju
                  aktivnost i ponašanje, kao i da formira govor i maštu.
                </p>
              </CardContent>
            </Card>
            </MotionComponent3>
          </div>
        </div>
      </section>

      {/* Predavač */}
        <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Predavač" icon={Star} />
          <MotionComponent2>
          <Card className="border shadow-md shadow-primary hover:shadow-xl transition-shadow duration-300 border-primary">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
              <p className="text-lg font-semibold">
                Jelena Skvorcova, defektolog – logoped sa višegodišnjim
                iskustvom u radu sa decom
              </p>
            </CardContent>
          </Card>
          </MotionComponent2>
            </div>
      </section>


    </div>
  );
}
