import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/ui/SectionHeader";
import { Building2 } from "lucide-react";

export default function FransizaPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <SectionHeader
        title="Franšiza"
        subtitle="OPIS FRANŠIZNOG SISTEMA"
        icon={Building2}
      />

      <div className="max-w-6xl mx-auto mt-8 space-y-8">
        <Card>
          <CardContent className="p-6">
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                Kuća znanja nastala je kao odgovor na posebnu potrebu zaposlenih
                roditelja, da svoju decu predaju u sigurne ruke profesionalaca,
                koji će u potpunosti biti partner porodici u vaspitanju i
                obrazovanju dece od 7 do 15 godina.
              </p>

              <p className="mb-6">
                Obrazovanje za život, tradicija i srećno dete - izbor je svakog
                modernog roditelja. Roditelj je danas u prilici da vaspitno
                reaguje na sve oblike svakodnevice. Sa jedne strane ići u korak
                sa modernim izazovima, sa druge strane uvažiti tradiciju i sve
                što nose životne vrednosti... I sve to upakovati tako da nam
                obrazovanje pruža kvalitet života, a da naše dete bude srećno!
                Pa, gde to ima?!
              </p>

              <p className="mb-6">
                Kuća znanja je nosilac ovakvog projekta, izgrađen oko programa
                za decu osnovne škole i njihove roditelje. Zbog toga Kuća znanja
                sa razlogom nosi titulu vodećeg brenda u neformalnom obrazovanju
                u Srbiji!
              </p>

              <p className="mb-6">
              <strong className="text-primary">Naš moto je kreativno dete!</strong> Detetu je potrebna podrška za jedan mali korak, koji daje veliki
                učinak u stvaralaštvu. Probuditi kreativni moment kod deteta,
                probuditi emocije, koje će poneti svu složenost stvaralaštva,
                pronaći motiv na putu do uspeha – jesu načela rada tima
                profesionalaca zaposlenih u Kući znanja.
              </p>

              <p className="mb-6">
                Kuća znanja je obrazovni sistem, koji vodi računa o celokupnom
                razvoju deteta. Program je prilagođen uzrastu deteta, ali i
                potrebama savremene porodice:
              </p>

              <ol className="list-decimal list-inside space-y-2 ml-4 mb-6">
                <li>Mudre sovice</li>
                <li>Mudre sove</li>
                <li>Budi važam – spremi maturu</li>
                <li>Moj dan</li>
                <li>Roditelj u trendu</li>
              </ol>

              <p className="mb-6">
                <strong>Osnova našeg rada je:</strong>
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>
                  podsticanje, razvoj i sistematsko praćenje talenata deteta;
                </li>
                <li>
                  posebno osmišljen materijal i aktivnosti za svaki program;
                </li>
                <li>profesionalni izbor i mentorski rad sa zaposlenima.</li>
              </ul>

              <p className="mb-6">
                Svakodnevnu organizaciju rada u Kući znanja prožimaju:
                multikulturalnost, zdrava ishrana, prevoz dece do/od škole,
                sportske aktivnosti, razvoj talenata, edukativne šetnje,
                inovacije u radu, nastava u prirodi.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              PODRŠKA PRIMAOCIMA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                mentorski rad: obuka za vođenje posla, obuka za primenu
                vaspitno-obrazovnog programa, obuka za inovacije u programima
              </li>
              <li>
                prenos znanja i pravo primene vaspitno-obrazovnog programa Kuća
                znanja
              </li>
              <li>obavezna obuka u našem objektu u trajanju od 1 meseca</li>
              <li>sertifikat</li>
              <li>
                organizacija sistema: ketering, prevoz, potrošni materijal
              </li>
              <li>pravni tim</li>
              <li>pravo korišćenja žiga</li>
              <li>radni materijal</li>
              <li>konstantna podrška</li>
              <li>podrška pri vođenju marketinških kampanja</li>
              <li>ugovorna saradnja 5 – 10 godina</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              OČEKIVANI IZNOS INVESTICIJA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Početni iznos: na upit (zavisi od potencijalnog broja dece, kao
                i od veličine i stanja objekta)
              </li>
              <li>Redovna mesečna naknada: 7%</li>
              <li>
                Opremanje prostora: učionica sa tablom, stolovima i stolicama;
                ormarići; didaktički materijal.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              OSNOVNI ZAHTEVI SISTEMA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Primalac franšize treba da obezbedi prostor i osnovna sredstva za
              realizaciju programa (stolovi i stolice, tabla, ormarići,
              didaktički materijal).
            </p>
            <p className="mb-4">
              Poželjno je iskustvo u radu sa decom. Neophodna je spremnost na
              dugoročnu poslovnu saradnju, kao i na poslovanje po metodologiji
              poslovnog sistema Kuća znanja.
            </p>
            <p>
              Primalac franšize ima obavezu da zaposli stručni kadar iz oblasti
              obrazovanja: vaspitači, učitelji, predmetni nastavnici,
              higijeničarka, servirka.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
