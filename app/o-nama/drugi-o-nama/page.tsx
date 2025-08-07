import Testemonials from "@/components/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/ui/SectionHeader";
import { MessageCircle, Star } from "lucide-react";

export default function DrugiONamaPage() {
  const testimonials = [
    {
      type: "UTISCI ĐAKA",
      items: [
        {
          initial: "J",
          gradient: "from-pink-500 to-purple-500",
          quote:
            "Mudra Sova je dobra škola!!! Lepu kulturu ima i mnogo znanja pritom, a i mnogo drugara, i lepu hranu, nove i nove lepe stvari!!!",
          name: "Jovana",
          position: "1. razred",
        },
        {
          initial: "M",
          gradient: "from-blue-500 to-cyan-500",
          quote:
            'Ja volim da idem u "Mudre sove", zato što sam upoznao drugare. Preporučujem Vama da dovedete decu. :)',
          name: "Martin",
          position: "1. razred",
        },
        {
          initial: "S",
          gradient: "from-green-500 to-teal-500",
          quote:
            'Volim "Mudre sove", jer se uvek zabavljamo i stvaramo kreativne Imamo mnogo prijatelja i drugara! Često idemo u razne posete: muzeja, akvarijuma, parkova… Volim "Mudre sove", jer tamo vreme provodi sa nama najbolja učiteljica Ramona Ručnov i još neke druge odlične učiteljice!',
          name: "Sofija",
          position: "III razred",
        },
      ],
    },
    {
      type: "UTISCI RODITELJA",
      items: [
        {
          initial: "A",
          gradient: "from-orange-500 to-red-500",
          quote:
            'Za "Mudre sove" je karakteristično: kvalitetan rad i dobro izabran kadar. Zadovoljni smo odnosom prema deci i trudom koji ulažete. Sviđa nam se što su deca u manjoj grupi, skoncentrisana na rad domaćih zadataka.',
          name: "Aleksandra Bogdanović",
          position: "privatni preduzetnik",
        },
        {
          initial: "D",
          gradient: "from-purple-500 to-pink-500",
          quote:
            "Zadovoljni smo kvalitetom rada, prilagođenim konkretnim potrebama svakog deteta. Našoj devojčici odgovara kvalitetna pomoć pri učenju i završavanju domaćih zadataka. Posebno bismo istakli mogućnost da dete kvalitetno iskoristi slobodno vreme nakon škole.",
          name: "Dragana Poznanić",
          position: "",
        },
        {
          initial: "T",
          gradient: "from-indigo-500 to-blue-500",
          quote:
            "Prioritetnim u centru smatramo individualni rad sa detetom i stalan kvalitetan kadar. Zadovoljni smo što vidimo da naše dete napreduje. Najviše nam se dopada organizovanost u centru.",
          name: "Tanja Jovanović",
          position: "prof. biologije",
        },
        {
          initial: "A",
          gradient: "from-teal-500 to-green-500",
          quote:
            "Samo da Vam prenesem Unine utiske sa casa biologije. Odusevljena je nacinom na koji radite.",
          name: "Aleksandra Ilic",
          position: "ekonomista",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <SectionHeader
        title="Drugi o nama"
        subtitle="Utisci đaka i roditelja"
        icon={MessageCircle}
      />

      <Testemonials />
    </div>
  );
}
