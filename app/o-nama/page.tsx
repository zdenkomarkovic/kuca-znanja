import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Target, Award, Star, Calendar, Heart } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import CTASection from '@/components/ui/CTASection'

export default function ONamaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O <span className="text-blue-600">nama</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Centar za kreativnu edukaciju dece - mesto gde se talenat, kreativnost i znanje spajaju 
            u jedinstveno iskustvo za vaše dete.
          </p>
        </div>
      </section>

      {/* Reč osnivača */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-100">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <CardTitle className="text-3xl text-gray-900">Reč osnivača</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  U vremenu u kojem živimo pregalaštvo u obrazovanju je posebno dragoceno, budući da životu
                  daje smisao i svakodnevicu čini vrednijom. KUĆA ZNANJA nastala je kao odgovor na posebnu
                  potrebu zaposlenih roditelja, da svoju decu predaju u sigurne ruke profesionalaca, koji će u
                  potpunosti biti partner porodici u vaspitanju i obrazovanju dece od 7 do 15 godina.
                </p>
                
                <p>
                  KUĆA ZNANJA je koncipirana kao mesto za decu osnovce, gde na kreativan način mogu da
                  ispune svoje vreme pre i posle škole!
                  Mesto ispunjeno pažnjom, kreativnim radom i veselom grajom!
                  Deca se igraju, uče jezike, kreiraju mape uma, slikaju, pevaju…
                </p>
                
                <p className="text-center font-semibold text-blue-600">
                  Naš moto je kreativno dete!
                </p>
                
                <p>
                  Detetu je potrebna podrška za jedan mali korak, koji daje veliki učinak u stvaralaštvu.
                </p>
                
                <p>
                  Probuditi kreativni moment kod deteta, probuditi emocije, koje će poneti svu složenost
                  stvaralaštva, pronaći motiv na putu do uspeha – jesu načela rada tima profesionalaca zaposlenih
                  u KUĆI ZNANJA.
                </p>
                
                <p className="text-center">
                  Za roditelje spremne da ulažu u obrazovanje svoje dece!
                </p>
                
                <p className="text-center">
                  Za sve one koji shvataju značaj obrazovanja!
                </p>
                
                <p className="text-center font-semibold">
                  Dobro došli!
                </p>
              </div>
              
              <div className="text-center pt-4">
                <p className="font-semibold text-blue-600">Ramona Ručnov</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Misija */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Naša misija</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">MISIJA</h3>
                <p className="text-gray-700 leading-relaxed">
                  Partner porodici u vaspitavanju i obrazovanju dece osnovne škole!
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">VIZIJA</h3>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>
                    Svojim jedinstvenim programom želimo da stvorimo najbolje uslove za stvaralaštvo deteta u
                    vreme pre i posle škole.
                  </p>
                  <p>
                    Kao partner porodici u vaspitanju i obrazovnju dece vodimo računa o: celokupnoj organizaciji
                    slobodnog vremena, razvoju potencijala deteta i oblikovanju mlađe generacije kao korisnog
                    člana društvene zajednice.
                  </p>
                  <p>
                    Uz stručan i kreativan kadar pružamo uslove prilagođene individualnom razvoju deteta u
                    osnovnoškolskom periodu.
                  </p>
                  <p>
                    Posebnim pristupom detetu doprinosimo poboljšanju kvaliteta njegovog rada i ličnog razvoja u
                    socijalnom okruženju.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Drugi o nama */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Drugi o nama</h2>
          </div>
          
          {/* UTISCI ĐAKA */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">UTISCI ĐAKA</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      J
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-6 text-center">
                    "Mudra Sova je dobra škola!!! Lepu kulturu ima i mnogo znanja pritom,
                    a i mnogo drugara, i lepu hranu, nove i nove lepe stvari!!!"
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">Jovana</p>
                    <p className="text-sm text-gray-600">1. razred</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      M
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-6 text-center">
                    "Ja volim da idem u "Mudre sove", zato što sam upoznao drugare. 
                    Preporučujem Vama da dovedete decu. :)"
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">Martin</p>
                    <p className="text-sm text-gray-600">1. razred</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      S
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-6 text-center">
                    "Volim "Mudre sove", jer se uvek zabavljamo i stvaramo kreativne stvari. 
                    Imamo mnogo prijatelja i drugara! Često idemo u razne posete: muzeja, akvarijuma, parkova… 
                    Volim "Mudre sove", jer tamo vreme provodi sa nama najbolja učiteljica Ramona Ručnov i još neke druge odlične učiteljice!"
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">Sofija</p>
                    <p className="text-sm text-gray-600">III razred</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* UTISCI RODITELJA */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">UTISCI RODITELJA</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      A
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-6 text-center">
                    "Za "Mudre sove" je karakteristično: kvalitetan rad i dobro izabran kadar. 
                    Zadovoljni smo odnosom prema deci i trudom koji ulažete. 
                    Sviđa nam se što su deca u manjoj grupi, skoncentrisana na rad domaćih zadataka."
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">Aleksandra Bogdanović</p>
                    <p className="text-sm text-gray-600">Privatni preduzetnik</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      D
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-6 text-center">
                    "Zadovoljni smo kvalitetom rada, prilagođenim konkretnim potrebama svakog deteta. 
                    Našoj devojčici odgovara kvalitetna pomoć pri učenju i završavanju domaćih zadataka. 
                    Posebno bismo istakli mogućnost da dete kvalitetno iskoristi slobodno vreme nakon škole."
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">Dragana Poznanić</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      T
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-6 text-center">
                    "Prioritetnim u centru smatramo individualni rad sa detetom i stalan kvalitetan kadar. 
                    Zadovoljni smo što vidimo da naše dete napreduje. 
                    Najviše nam se dopada organizovanost u centru."
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">Tanja Jovanović</p>
                    <p className="text-sm text-gray-600">Prof. biologije</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      A
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-6 text-center">
                    "Samo da Vam prenesem Unine utiske sa časa biologije. Oduševljena je načinom na koji radite."
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">Aleksandra Ilić</p>
                    <p className="text-sm text-gray-600">Ekonomista</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Franšiza */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Franšiza"
            icon={Star}
          />
          
          {/* Opis franšiznog sistema */}
          <div className="mb-12">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>OPIS FRANŠIZNOG SISTEMA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p>
                    Kuća znanja nastala je kao odgovor na posebnu potrebu zaposlenih roditelja, da svoju
                    decu predaju u sigurne ruke profesionalaca, koji će u potpunosti biti partner porodici u
                    vaspitanju i obrazovanju dece od 7 do 15 godina.
                  </p>
                  <p>
                    Obrazovanje za život, tradicija i srećno dete - izbor je svakog modernog roditelja.
                  </p>
                  <p>
                    Roditelj je danas u prilici da vaspitno reaguje na sve oblike svakodnevice. Sa jedne strane
                    ići u korak sa modernim izazovima, sa druge strane uvažiti tradiciju i sve što nose životne
                    vrednosti... I sve to upakovati tako da nam obrazovanje pruža kvalitet života, a da naše
                    dete bude srećno! Pa, gde to ima?! Kuća znanja je nosilac ovakvog projekta, izgrađen
                    oko programa za decu osnovne škole i njihove roditelje. Zbog toga Kuća znanja sa
                    razlogom nosi titulu vodećeg brenda u neformalnom obrazovanju u Srbiji!
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="font-semibold text-primary text-center">
                      Naš moto je kreativno dete!
                    </p>
                  </div>
                  <p>
                    Detetu je potrebna podrška za jedan mali korak, koji daje veliki učinak u stvaralaštvu.
                    Probuditi kreativni moment kod deteta, probuditi emocije, koje će poneti svu složenost
                    stvaralaštva, pronaći motiv na putu do uspeha – jesu načela rada tima profesionalaca
                    zaposlenih u Kući znanja.
                  </p>
                  <p>
                    Kuća znanja je obrazovni sistem, koji vodi računa o celokupnom razvoju deteta.
                    Program je prilagođen uzrastu deteta, ali i potrebama savremene porodice:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Mudre sovice</li>
                    <li>Mudre sove</li>
                    <li>Budi važam – spremi maturu</li>
                    <li>Moj dan</li>
                    <li>Roditelj u trendu</li>
                  </ol>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Osnova našeg rada je:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>podsticanje, razvoj i sistematsko praćenje talenata deteta;</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>posebno osmišljen materijal i aktivnosti za svaki program;</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>profesionalni izbor i mentorski rad sa zaposlenima.</span>
                    </li>
                  </ul>
                </div>
                
                <p>
                  Svakodnevnu organizaciju rada u Kući znanja prožimaju: multikulturalnost, zdrava
                  ishrana, prevoz dece do/od škole, sportske aktivnosti, razvoj talenata, edukativne šetnje,
                  inovacije u radu, nastava u prirodi.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Podrška primaocima */}
          <div className="mb-12">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>PODRŠKA PRIMAOCIMA</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>mentorski rad:</strong> obuka za vođenje posla, obuka za primenu vaspitno-obrazovnog
                    programa, obuka za inovacije u programima</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>prenos znanja i pravo primene vaspitno-obrazovnog programa Kuća znanja</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>obavezna obuka u našem objektu u trajanju od 1 meseca</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>sertifikat</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>organizacija sistema: ketering, prevoz, potrošni materijal</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>pravni tim</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>pravo korišćenja žiga</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>radni materijal</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>konstantna podrška</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>podrška pri vođenju marketinških kampanja</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>ugovorna saradnja 5 – 10 godina</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Očekivani iznos investicija */}
          <div className="mb-12">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>OČEKIVANI IZNOS INVESTICIJA</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Početni iznos:</strong> na upit (zavisi od potencijalnog broja dece, kao i od veličine i
                    stanja objekta)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Redovna mesečna naknada:</strong> 7%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Opremanje prostora:</strong> učionica sa tablom, stolovima i stolicama; ormarići;
                    didaktički materijal.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Osnovni zahtevi sistema */}
          <div>
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>OSNOVNI ZAHTEVI SISTEMA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Primalac franšize treba da obezbedi prostor i osnovna sredstva za realizaciju programa
                  (stolovi i stolice, tabla, ormarići, didaktički materijal).
                </p>
                <p>
                  Poželjno je iskustvo u radu sa decom.
                </p>
                <p>
                  Neophodna je spremnost na dugoročnu poslovnu saradnju, kao i na poslovanje po
                  metodologiji poslovnog sistema Kuća znanja.
                </p>
                <p>
                  Primalac franšize ima obavezu da zaposli stručni kadar iz oblasti obrazovanja: vaspitači,
                  učitelji, predmetni nastavnici, higijeničarka, servirka.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     
    

      <CTASection
        title="Pridružite se našoj porodici"
        subtitle="Doživite razliku koju kreativna edukacija može da napravi u životu vašeg deteta"
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