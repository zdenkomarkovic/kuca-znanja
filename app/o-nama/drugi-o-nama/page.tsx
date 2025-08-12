import Testemonials from "@/components/Testimonials";
import SectionHeader from "@/components/ui/SectionHeader";
import { MessageCircle } from "lucide-react";

export default function DrugiONamaPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <SectionHeader
        title="Drugi o nama"
        subtitle="Utisci đaka, roditelja i medija"
        icon={MessageCircle}
      />

      <Testemonials />
    </div>
  );
}
