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
          <h1 className={prata.className}>Lima Foto</h1>
          <div className="space-x-4 my-5">
            <span className="bg-midnight px-2.5 py-0.5">UX</span>
            <span className="bg-midnight px-2.5 py-0.5">Tekst</span>
            <span className="bg-midnight px-2.5 py-0.5">Grafisk design</span>
          </div>
          <p className="leading-normal my-5">
            I dette prosjektet utviklet jeg en nettside for Lima Foto gjennom
            bruk av nettsidebyggeren Elementor i Wordspress. Prosjektet ble
            gjennomført i forbindelse med min tid i Netspire.
          </p>
          <p className="leading-normal">
            Lima Foto fotograferer bilder for barnehager, skoler, idrettslag og
            bedrifter.
          </p>
        </div>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Bilde av en bærebar datamaskin som viser nettsiden til Lima Foto"
          src="/limafoto-website-3.jpg"
          className="shadow-lg"
          width="800"
          height="0"
        />
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* List */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-28 space-y-5">
        <h2 className={prata.className}>Dette har jeg gjort for Lima Foto:</h2>
        <ul className="list-disc leading-loose px-14 pt-5 max-md:px-10">
          <li>Utvikling av nettside ved bruk av Elementor i Wordpress</li>
          <li>Planlegging og fasilitering av workshop</li>
          <li>
            Innholdsproduksjon og publisering av nyhetsartikler og innlegg til
            sosiale medier
          </li>
          <li>Hjelpe kunde med å teste programmer og verktøy</li>
          <li>Design av ulike maler</li>
        </ul>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Information */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-28 space-y-5 pb-8">
        <h2 className={prata.className}>Utvikling av nettside</h2>
        <p>
          For å bli godt kjent med kunden og deres behov, ble det gjennomført en
          workshop. Jeg planla ulike metoder og fasiliterte workshopen, og fikk
          verdifull innsikt fra kunden. Basert på innsikten, ble det designet en
          visuell identitet og nettside.
        </p>
        <p>
          Min rolle i dette prosjektet ble å videreføre designet over i
          Elementor i Wordpress og lansere nettsiden. Jeg har også gjort
          oppdateringer på nettsiden i form av nye sider og publisering av
          nyhetsartikler. 
        </p>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image wide */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Skjermbilder fra nettsiden til Lima Foto"
          src="/limafoto-website-pages-2.png"
          width="1000"
          height="0"
        />
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Information */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-28 space-y-5 pb-8">
        <h2 className={prata.className}>Innholdsproduksjon til sosiale medier</h2>
        <p>
          I tillegg til å publisere innhold på nettsiden, var det også viktig å
          nå ut i kanaler som Facebook og LinkedIn. Jeg har bistått kunden med
          å skrive tekst, samt utføre grafisk design til ulike innlegg.
        </p>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image gallery */}

      <div className="grid w-full place-items-center">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-none px-8">
          <div>
            <Image
              className="max-w-full shadow-lg"
              src="/limafoto-some.jpg"
              alt="Innlegg fra sosiale medier"
              width="500"
              height="0"
            />
          </div>
          <div>
            <Image
              className="max-w-full shadow-lg"
              src="/limafoto-some-2.jpg"
              alt="Innlegg fra sosiale medier"
              width="500"
              height="0"
            />
          </div>
        </div>
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
