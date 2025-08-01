import CTASection from "@/components/ui/CTASection";
import Image from "next/image";
import Cilj from "@/components/Cilj";
import Testemonials from "@/components/Testimonials";
import Hero2 from "@/components/Hero2";

export default function Home() {
  return (
    <div className="">
      {/* <Hero /> */}
      <Hero2 />
      {/* Hero Image Section */}
      <Cilj />
      <CTASection
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
      />

      <Testemonials />
    </div>
  );
}
