import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Ciljevi() {
  const posebniCiljevi = [
    "Unapređenje svesti o potrebi permanentnog i doživotnog obrazovanja",
    "Razvoj interkulturalne svesti i dijaloga",
    "Promovisanje humanih vrednosti neophodnih za zdrav život u zajednici",
    "Razvoj osetljivosti na pitanja ravnopravnosti i prevazilaženja predrasuda",
    "Promovisanje etičkih standarda ponašanja kroz svakodnevnu komunikaciju",
    "Korišćenje Interneta u obrazovne svrhe"
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
     
      
      <div className="max-w-5xl mx-auto mt-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Opšti cilj</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="">
              Naš cilj je da polaznicima učenje kroz neformalno obrazovanje učinimo posebnim iskustvom, oslobođenim od bilo kakvog opterećenja. Mišljenja smo da samo na taj način rezultati mogu biti konkretni i odgovarajući zahtevima globalnog tržišta rada, kao i lokalnoj zajednici.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Posebni ciljevi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {posebniCiljevi.map((cilj, index) => (
                <Card key={index} className="border-2 border-primary hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <p className="">{cilj}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 