import React from "react";

import { Card, CardContent } from "./ui/card";

import { Heart, Star } from "lucide-react";

export default function Testemonials() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]  ">
      <div className="container px-2 md:px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-red-600" />
          </div>
          <h3 className=" text-center mb-12">UTISCI ĐAKA</h3>
        </div>

        {/* UTISCI ĐAKA */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                initial: "J",
                gradient: "from-blue-400 to-purple-600",
                quote:
                  "Mudra Sova je dobra škola!!! Lepu kulturu ima i mnogo znanja pritom, a i mnogo drugara, i lepu hranu, nove i nove lepe stvari!!!",
                name: "Jovana",
                position: "1. razred",
              },
              {
                initial: "M",
                gradient: "from-green-400 to-blue-600",
                quote:
                  "Ja volim da idem u Mudre sove, zato što sam upoznao drugare. Preporučujem Vama da dovedete decu. :)",
                name: "Martin",
                position: "1. razred",
              },
              {
                initial: "S",
                gradient: "from-pink-400 to-red-600",
                quote:
                  "Volim Mudre sove, jer se uvek zabavljamo i stvaramo kreativne stvari. Imamo mnogo prijatelja i drugara! Često idemo u razne posete: muzeja, akvarijuma, parkova… Volim Mudre sove, jer tamo vreme provodi sa nama najbolja učiteljica Ramona Ručnov i još neke druge odlične učiteljice!",
                name: "Sofija",
                position: "III razred",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 border-0"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold`}
                    >
                      {testimonial.initial}
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className=" italic mb-6 text-center text-primary">
                    {testimonial.quote}
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* UTISCI RODITELJA */}
        <div>
          <h3 className=" mb-12">UTISCI RODITELJA</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                initial: "A",
                gradient: "from-purple-400 to-indigo-600",
                quote:
                  "Za Mudre sove je karakteristično: kvalitetan rad i dobro izabran kadar. Zadovoljni smo odnosom prema deci i trudom koji ulažete. Sviđa nam se što su deca u manjoj grupi, skoncentrisana na rad domaćih zadataka.",
                name: "Aleksandra Bogdanović",
                position: "Privatni preduzetnik",
              },
              {
                initial: "D",
                gradient: "from-teal-400 to-cyan-600",
                quote:
                  "Zadovoljni smo kvalitetom rada, prilagođenim konkretnim potrebama svakog deteta. Našoj devojčici odgovara kvalitetna pomoć pri učenju i završavanju domaćih zadataka. Posebno bismo istakli mogućnost da dete kvalitetno iskoristi slobodno vreme nakon škole.",
                name: "Dragana Poznanić",
                position: "",
              },
              {
                initial: "T",
                gradient: "from-orange-400 to-red-600",
                quote:
                  "Prioritetnim u centru smatramo individualni rad sa detetom i stalan kvalitetan kadar. Zadovoljni smo što vidimo da naše dete napreduje. Najviše nam se dopada organizovanost u centru.",
                name: "Tanja Jovanović",
                position: "Prof. biologije",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold`}
                    >
                      {testimonial.initial}
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className=" italic mb-6 text-center text-primary">
                    {testimonial.quote}
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    {testimonial.position && (
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            {[
              {
                initial: "A",
                gradient: "from-indigo-400 to-purple-600",
                quote:
                  "Samo da Vam prenesem Unine utiske sa časa biologije. Oduševljena je načinom na koji radite.",
                name: "Aleksandra Ilić",
                position: "Ekonomista",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 max-w-2xl mx-auto"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold`}
                    >
                      {testimonial.initial}
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className=" italic mb-6 text-center text-primary">
                    {testimonial.quote}
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
