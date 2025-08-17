
import Hero2 from "@/components/Hero2";
import ProgramCard from "@/components/program/ProgramCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen, GraduationCap, Heart, Users } from "lucide-react";

export default function Home() {
  const programs = [
    {
      title: "Mudre sove",
      description:
        "Pravo mesto za decu osnovce u Beogradu, gde na kreativan način mogu da ispune svoje vreme pre i posle škole! Namenjeno je deci uzrasta od 7 do 15 godina.",

      icon: BookOpen,
      link: "/program/mudre-sove",
      image: "/Mudre sove.png",
    },
    {
      title: "Moj dan",
      description:
        "MOJ DAN je dan kada proslavljam svoj rođendan. MOJ DAN je prezentacija moje knjige. MOJ DAN je organizacija izložbe mojih radova.",

      icon: Heart,
      link: "/program/moj-dana",
      image: "/Moj dan.png",
    },
    {
      title: "Budi važan - spremi maturu",
      description:
        "Neka ti Mala matura bude zadovoljstvo! Ovde ćeš korigovati propušteno i utvrditi već usvojeno gradivo. Bez opterećenja se spremi za završni ispit!",

      icon: GraduationCap,
      link: "/program/budi-vazan-spremi-maturu",
      image: "/Završni ispit (1).png",
    },
    {
      title: "Roditelj u trendu",
      description:
        "Tamo gde su deca, tu su i roditelji! Posebnu pažnju posvećujemo roditeljima. Danas je izazov biti roditelj.",
      icon: Users,
      link: "/program/roditelj-u-trendu",
      image: "/Roditelj u trendu.jpg",
    },
  ];

  // const additionalPrograms = [
  //   {
  //     title: "Škola matematike",
  //     description: "Razvijanje logičkog mišljenja i matematičkih veština",
  //     icon: Star,
  //     color: "text-yellow-600",
  //     link: "/program/dodatni-program/skola-matematike",
  //   },
  //   {
  //     title: "Škola slikanja",
  //     description: "Razvijanje kreativnosti i umetničkih veština",
  //     icon: Heart,
  //     color: "text-red-600",
  //     link: "/program/dodatni-program/skola-slikanja",
  //   },
  //   {
  //     title: "Škola stranog jezika",
  //     description: "Učenje stranih jezika kroz interaktivne metode",
  //     icon: BookOpen,
  //     color: "text-blue-600",
  //     link: "/program/dodatni-program/skola-stranog-jezika",
  //   },
  //   {
  //     title: "Škola skijanja",
  //     description: "Zimski sportovi i aktivnosti u prirodi",
  //     icon: Calendar,
  //     color: "text-green-600",
  //     link: "/program/dodatni-program/skola-skijanja",
  //   },
  //   {
  //     title: "Jezički kamp u prirodi",
  //     description: "Kombinacija učenja jezika i boravka u prirodi",
  //     icon: Users,
  //     color: "text-purple-600",
  //     link: "/program/dodatni-program/jezicki-kamp",
  //   },
  //   {
  //     title: "Montesori program",
  //     description: "Montesori metodologija za razvoj dece",
  //     icon: GraduationCap,
  //     color: "text-indigo-600",
  //     link: "/program/dodatni-program/montesori-program",
  //   },
  // ];

  return (
    <div className="">
      <Hero2 />

      {/* <section
        id="programi"
        className="py-20 px-4 bg-gradient-to-br from-white to-[#f1f1f1]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Naši <span className="text-primary">Programi</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Kreativna edukacija dece kroz različite programe prilagođene svim
            uzrastima. Od najmlađih do maturanata, nudimo kvalitetno vreme i
            razvoj vašeg deteta.
          </p>
        </div>
      </section> */}

      {/* Osnovni programi */}
      <section id="programi" className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1] ">
        <div className="container px-2 md:px-4 mx-auto">
          <SectionHeader
            title="Osnovni programi"
            subtitle="Naši glavni programi prilagođeni različitim uzrastima dece"
          />
          <div className="grid md:grid-cols-4 gap-4">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                link={program.link}
                image={program.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dodatni programi */}
      {/* <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]">
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
      </section> */}

      {/* <CTASection
        title="Prijavite svoje dete u program"
        subtitle="Kontaktirajte nas za više informacija o programima"
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
      /> */}
      {/* <Cilj /> */}
      {/* <Testemonials /> */}
    </div>
  );
}
