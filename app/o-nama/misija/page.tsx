import HeroProgrami from "@/components/HeroProgrami";

export default function MisijaPage() {
  return (
    <div className="">
      <HeroProgrami
        Hero01={"/istraživački duh.jpg"}
        word={"Misija"}
        text={[
          "Partner porodici u vaspitavanju i obrazovanju dece osnovne škole!",
        ]}
      />

      <div className="max-w-4xl px-2 mx-auto mt-8 space-y-8 pb-10">
        <h2>VIZIJA</h2>
        <p>
          Svojim jedinstvenim programom želimo da stvorimo najbolje uslove za
          stvaralaštvo deteta u vreme pre i posle škole.
        </p>

        <p>
          Kao partner porodici u vaspitanju i obrazovnju dece vodimo računa o:
        </p>

        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>celokupnoj organizaciji slobodnog vremena</li>
          <li>razvoju potencijala deteta</li>
          <li>
            oblikovanju mlađe generacije kao korisnog člana društvene zajednice
          </li>
        </ul>

        <p>
          Uz stručan i kreativan kadar pružamo uslove prilagođene individualnom
          razvoju deteta u osnovnoškolskom periodu.
        </p>

        <p>
          Posebnim pristupom detetu doprinosimo poboljšanju kvaliteta njegovog
          rada i ličnog razvoja u socijalnom okruženju.
        </p>
      </div>
    </div>
  );
}
