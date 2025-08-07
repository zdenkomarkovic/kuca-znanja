import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import MotionComponent2 from "@/components/MotionComponent2";
import MotionComponent1 from "@/components/MotionComponent1";
import MotionComponent3 from "@/components/MotionComponent3";
import HeroProgrami from "@/components/HeroProgrami";
import Hero2Programi from "@/components/Hero2Programi";
import Mudresovice from "@/components/Mudresovice";

export default function MudreSovePage() {
  return (
    <div className="">
      <Hero2Programi Hero01={"/Mudre sove.jpg"} Hero02={"/Mudre  sovice.jpg"} />

      {/* Karakteristike programa */}
      <section className="px-2 bg-gradient-to-br from-white to-[#f1f1f1] ">
        <div className="container px-2 md:px-4 py-12 mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
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
              "Obezbeđen obrok (doručak, užina, ručak)",
            ].map((feature, index) => (
              <MotionComponent2 key={index}>
                <div className=" border-2 border-blue-100 h-full flex items-center space-x-3 px-4 py-2 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src="/Mudre sove.png"
                    width={50}
                    height={50}
                    alt="mudre sove"
                    className=""
                  />
                  <p className="">{feature}</p>
                </div>
              </MotionComponent2>
            ))}
          </div>
        </div>
      </section>

      {/* Raspored dana */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1] ">
        <div className="container px-2 md:px-12 mx-auto">
          <SectionHeader title="Raspored dana" icon={Clock} />

          <div className="grid lg:grid-cols-2 gap-4 mt-12">
            {/* PRE PODNE SEKCIJA */}
            <div>
              <h3 className="text-2xl font-bold text-primary text-center mb-6">
                PRE PODNE
              </h3>
              <div className="space-y-3">
                {[
                  {
                    time: "7 - 8",
                    activity: "Otvaranje i dolazak dece u boravak",
                  },
                  {
                    time: "8 - 9",
                    activity:
                      "Slobodne aktivnosti (gimnastika, muzička radionica, poruka dana)",
                  },
                  { time: "9 - 11", activity: "Izrada domaćeg zadatka" },
                  { time: "11 - 12", activity: "Aktivnosti po izboru učenika" },
                  { time: "12 - 13", activity: "Čas stranog jezika" },
                  { time: "13 - 13:30", activity: "Ručak" },
                  { time: "13:30 - 13:45", activity: "Odlazak u školu" },
                ].map((item, index) => (
                  <MotionComponent1 key={index}>
                    {" "}
                    <Card
                      key={index}
                      className="shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="font-bold text-primary">
                            {item.time}
                          </div>
                          <div className="flex-1">{item.activity}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </MotionComponent1>
                ))}
              </div>
            </div>

            {/* POSLE PODNE SEKCIJA */}
            <div>
              <h3 className="text-2xl font-bold text-primary text-center mb-6">
                POSLE PODNE
              </h3>
              <div className="space-y-3">
                {[
                  {
                    time: "12 - 13",
                    activity: "Dolazak dece sa časova u boravak, ručak",
                  },
                  { time: "13 - 14", activity: "Čas stranog jezika" },
                  { time: "14 - 16", activity: "Izrada domaćeg zadatka" },
                  { time: "16 - 17", activity: "Aktivnosti po izboru učenika" },
                  {
                    time: "17 - 17:30",
                    activity: "Odlazak dece i zatvaranje boravka",
                  },
                ].map((item, index) => (
                  <MotionComponent3 key={index}>
                    <Card className=" shadow-lg hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="font-bold text-primary">
                            {item.time}
                          </div>
                          <div className="flex-1">{item.activity}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </MotionComponent3>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Prijavite svoje dete u program 'Mudre sove'"
        subtitle="Obezbedite svojoj deci kvalitetno vreme pre i posle škole u kreativnom i sigurnom okruženju"
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
      {/* Tim koji radi sa decom */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1] text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Sa decom rade" iconColor="text-white" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Učitelji",
                description:
                  "Sa bogatim iskustvom i nizom kvalitetnih generacija iza sebe",
              },
              {
                title: "Profesori stranih jezika",
                description: "Francuski, engleski, nemački, ruski",
              },
              {
                title: "Defektolog",
                description:
                  "Grafomotorika, izgovor glasova, poremećaj pažnje, poremećaj u ponašanju",
              },
              {
                title: "Lekar",
                description: "Stručno medicinsko praćenje dece",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className=" text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {member.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Mudresovice />
      {/* CTA Section */}
    </div>
  );
}
