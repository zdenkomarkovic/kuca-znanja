import HeroProgrami from "@/components/HeroProgrami";

export default function RecOsnivacaPage() {
  return (
    <div className="container mx-auto px-4 pb-20">
      <HeroProgrami
        Hero01={"/rec osnivaca.jpg"}
        word={"Reč osnivača"}
        text={[
          "U vremenu u kojem živimo pregalaštvo u obrazovanju je posebno dragoceno, budući da životu daje smisao i svakodnevicu čini vrednijom.",
        ]}
      />

      <div className="max-w-4xl mx-auto mt-8">
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            <strong>KUĆA ZNANJA</strong> nastala je kao odgovor na posebnu
            potrebu zaposlenih roditelja, da svoju decu predaju u sigurne ruke
            profesionalaca, koji će u potpunosti biti partner porodici u
            vaspitanju i obrazovanju dece od 7 do 15 godina.
          </p>

          <p className="mb-6">
            <strong>KUĆA ZNANJA</strong> je koncipirana kao mesto za decu
            osnovce, gde na kreativan način mogu da ispune svoje vreme pre i
            posle škole! Mesto ispunjeno pažnjom, kreativnim radom i veselom
            grajom! Deca se igraju, uče jezike, kreiraju mape uma, slikaju,
            pevaju…
          </p>

          <p className="mb-6">
            <strong>Naš moto je kreativno dete!</strong>
          </p>

          <p className="mb-6">
            Detetu je potrebna podrška za jedan mali korak, koji daje veliki
            učinak u stvaralaštvu. Probuditi kreativni moment kod deteta,
            probuditi emocije, koje će poneti svu složenost stvaralaštva,
            pronaći motiv na putu do uspeha – jesu načela rada tima
            profesionalaca zaposlenih u <strong>KUĆI ZNANJA</strong>.
          </p>

          <p className="mb-6">
            Za roditelje spremne da ulažu u obrazovanje svoje dece! Za sve one
            koji shvataju značaj obrazovanja!
          </p>

          <p className="text-center font-semibold">
            Dobro došli!
            <br />
            <span className="text-primary">Ramona Ručnov</span>
          </p>
        </div>
      </div>
    </div>
  );
}
