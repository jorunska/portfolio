import Image from "next/image";
import localFont from "next/font/local";

const prata = localFont({
  src: "../../fonts/Prata-Regular.ttf",
  variable: "--font-prata-regular",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between select-none">
      {/* Navbar */}
      <nav className="navbar bg-lightbrown max-lg:px-8 lg:px-16 2xl:px-36 fixed w-full">
        <div className="flex space-x-4 items-center max-sm:space-x-3">
          <a href="/" className="py-1 pr-3">
            <Image
              alt="Logo Jorun Skålnes"
              src="/js-logo.svg"
              width="50"
              height="0"
            />
          </a>
          <a href="/#projects" className="px-2 py-3 hover:text-gray-500">
            Prosjekter
          </a>
          <a href="/om-meg" className="px-2 py-3 hover:text-gray-500">
            Om meg
          </a>
          <a href="#contact" className="px-2 py-3 hover:text-gray-500">
            Kontakt
          </a>
        </div>
      </nav>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Header */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-48">
        <div className="w-10/12 max-md:w-full">
          <h1 className={prata.className}>Alimenta</h1>
          <div className="space-x-4 my-5">
            <span className="bg-midnight px-2.5 py-0.5">UX</span>
            <span className="bg-midnight px-2.5 py-0.5">Tekst</span>
            <span className="bg-midnight px-2.5 py-0.5">Grafisk design</span>
          </div>
          <p className="leading-normal my-5">
            Jeg har hjulpet Alimenta med å modernisere deres nettside og
            visuelle identitet. I tillegg har jeg bistått kunden med
            innholdsproduksjon. Prosjektet ble gjennomført i forbindelse med min
            tid hos Netspire.
          </p>
          <p className="leading-normal">
            Alimenta leverer råvarer, ingredienser, smaker og blandinger til små
            og store matprodusenter.
          </p>
        </div>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Bilde av en bærebar datamaskin som viser nettsiden til Alimenta"
          src="/alimenta-website-mockup.png"
          className="shadow-lg"
          width="800"
          height="0"
        />
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* List */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-28 space-y-5">
        <h2 className={prata.className}>Dette har jeg gjort for Alimenta:</h2>
        <ul className="list-disc leading-loose px-14 pt-5 max-md:px-10">
          <li>Videreutvikling av visuell identitet</li>
          <li>Design av ny nettside</li>
          <li>
            Innholdsproduksjon og publisering av nyhetsartikler og innlegg til
            sosiale medier
          </li>
          <li>Design av ikoner</li>
          <li>Design av roll-up, etiketter og annet printmateriell</li>
          <li>Utformet digital designmanual til kunde</li>
          <li>Oppsett av analyseverktøy</li>
        </ul>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Green box */}

      <div className="bg-happygreen max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 space-y-5 p-16 mx-20 my-20 max-md:mx-8">
        <h3 className={prata.className}>
          Videreutvikling av visuell identitet
        </h3>
        <p>
          Kunden hadde en nettside og visuell identitet fra før av. I dette
          prosjektet var det ønskelig å modernisere merkevaren, og få inn noe
          mer varme. Derfor ble det laget mørkere og lysere varianter av
          hovedfargene grønn og blå, samt lagt til fargen oransje.
        </p>
        <p>
          I tillegg designet jeg ikoner tilpasset hvert produkt som kunden
          tilbyr. Bladet fra logoen ble brukt som grafisk element flere steder
          på siden.
        </p>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image wide */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Visning av farger, fonter, grafiske elementer og ikoner til Alimenta"
          src="/alimenta-profile.png"
          width="1000"
          height="0"
        />
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Information */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-28 space-y-5 pb-8">
        <h2 className={prata.className}>Design av nettside</h2>
        <p>
          Når den visuelle identiteten var utviklet, gikk jeg over på å designe
          nettsiden til Alimenta. Målet for nettsiden var å fremme hva kunden
          kan bistå med, samt sørge for at den var oversiktlig og ryddig å
          navigere seg rundt på.
        </p>
      </div>

      
      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image wide */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Skjermbilder fra nettsiden til Alimenta"
          src="/alimenta-website.png"
          width="1000"
          height="0"
        />
      </div>


      {/* ---------------- NEW SECTION ------------------ */}
      {/* Footer */}
      <div className="max-lg:px-8 lg:px-20 2xl:px-36 p-16 mt-36" id="contact">
        <h2 className={prata.className}>Skal vi ta en kaffe?</h2>
        <p className="text-2xl max-md:text-xl my-5 lg:pr-48">
          Har du behov for hjelp med design av nettsider? Eller bistand rundt
          innholdsproduksjon? Ta gjerne kontakt for å høre mer om hvordan jeg
          kan hjelpe.
        </p>
        <div>
          <a href="mailto:jorunskalnes@icloud.com">
            {" "}
            <button className="text-white py-2 px-4 hover:bg-black my-5">
              Kontakt meg
            </button>
          </a>
        </div>
      </div>

      <footer className="footer text-center p-6 text-white bg-stone-700">
        Designet og utviklet av Jorun Skålnes | 2024 |{" "}
        <a
          href="https://www.linkedin.com/in/jorunskalnes/"
          className="underline underline-offset-2"
        >
          Følg meg på LinkedIn
        </a>{" "}
        og{" "}
        <a
          href="https://www.instagram.com/skaalnes.no/"
          className="underline underline-offset-2"
        >
          Instagram
        </a>
      </footer>
    </main>
  );
}
