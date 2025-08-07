import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Target, Users, BookOpen, Star, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import HeroProgrami from "@/components/HeroProgrami";

export default function SkolaMatematikePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroProgrami
        Hero01={"/skola matematike.jpg"}
        word={"ŠKOLA MATEMATIKE"}
        text={[
          "Kuća znanja posebnu pažnju posvećuje talentovanoj deci u matematici.",
          "Celokupna organizacija je usmerena na pripremu učenika za učešće na takmičenjima, ali se prate i individualna interesovanja učenika.",
        ]}
      />
      {/* Organizacija */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Organizacija škole" icon={Clock} />
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-primary/20 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Trajanje</h3>
                <p className="text-sm text-muted-foreground">
                  od oktobra do kraja aprila meseca
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Časovi</h3>
                <p className="text-sm text-muted-foreground">
                  dva puta nedeljno u manjim grupama
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Individualna nastava</h3>
                <p className="text-sm text-muted-foreground">
                  organizovana je i individualna nastava
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Grupe */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="ŠKOLA MATEMATIKE je podeljena u 4 grupe"
            icon={Users}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Grupa 1",
                subtitle: "predškolska grupa",
                description:
                  "zadaci koji razvijaju logiku, pažnju, brzinu rezonovanja i maštu",
              },
              {
                title: "Grupa 2",
                subtitle: "1. i 2. razred osnovne škole",
                description: "Misliša, Kengur, individualna interesovanja",
              },
              {
                title: "Grupa 3",
                subtitle: "3. i 4. razred osnovne škole",
                description: "Misliša, Kengur, školsko, opštinsko, gradsko",
              },
              {
                title: "Grupa 4",
                subtitle: "5 – 8 razreda",
                description:
                  "Misliša, Kengur, školsko, opštinsko, gradsko, republičko, olimpijada",
              },
            ].map((group, index) => (
              <Card key={index} className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center text-lg">
                    {group.title}
                  </CardTitle>
                  <p className="text-center text-sm font-medium text-primary">
                    {group.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {group.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Predavači */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Predavači" icon={Star} />
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
              <p className="text-lg font-semibold">
                Predavači su nastavnici matematike sa nizom uspešnih generacija
                matematičara!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Program" icon={Calculator} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Prebrojavanje, presipanje, premeravanje",
              "Prirodni brojevi: numeracija, računske operacije, dešifrovanje",
              "Metoda duži",
              "Metod pravougaonika",
              "Rešavanje zadataka putem grafikona",
              "Rešavanje zadataka pomoću jednačine",
              "Magični kvadrat i druge šeme",
              "Logički i kombinatorni zadaci",
              "Zadaci sa mernim jedinicama (vreme, dužina, masa, površina, zapremina)",
              "Geometrijski oblici: osnovni geometrijski oblici, ugao, trougao, pravougaonik, kvadrat, krug",
              "Zanimljivi zadaci",
              "Zadaci sa takmičenja",
            ].map((topic, index) => (
              <Card key={index} className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-sm">{topic}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prijavite svoje dete u Školu matematike"
        subtitle="Razvijte matematičke talente vašeg deteta i pripremite ga za takmičenja"
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
