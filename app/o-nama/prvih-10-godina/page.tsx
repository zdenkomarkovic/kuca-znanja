import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/ui/SectionHeader";
import { Calendar } from "lucide-react";

export default function Prvih10GodinaPage() {
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
      <SectionHeader
        title="Prvih 10 godina"
        icon={Calendar}
      />
      
      
    </div>
  );
} 