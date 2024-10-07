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
          <a href="/#projects" className="px-1 py-3 hover:text-gray-500">
            Prosjekter
          </a>
          <a href="/om-meg" className="px-1 py-3 hover:text-gray-500">
            Om meg
          </a>
          <a href="#contact" className="px-1 py-3 hover:text-gray-500">
            Kontakt
          </a>
        </div>
      </nav>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Header */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-48">
        <div className="w-10/12 max-md:w-full">
          <h1 className={prata.className}>Fra Nittedal</h1>
          <div className="space-x-4 my-5">
            <span className="bg-midnight px-2.5 py-0.5">UX</span>
            <span className="bg-midnight px-2.5 py-0.5">Grafisk design</span>
          </div>
          <p className="leading-normal my-5">
            I prosjektet Fra Nittedal har jeg bistått med design av visuell
            identitet og nettside. Prosjektet ble gjennomført i forbindelse med
            min tid i Netspire.
          </p>
          <p className="leading-normal">
            Fra Nittedal er et prosjekt som skal vise frem jobb- og bomuligheter
            i Nittedal. Målet er å fremme lokal næringsliv i bygda, og
            viktigheten av å handle lokalt.
          </p>
        </div>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Skjermbilde av nettsiden til Fra Nittedal"
          src="/franittedal-website.png"
          width="800"
          height="0"
        />
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* List */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-28 space-y-5">
        <h2 className={prata.className}>
          Dette har jeg gjort for Fra Nittedal:
        </h2>
        <ul className="list-disc leading-loose px-14 pt-5 max-md:px-10">
          <li>
            Utvikling av visuell identitet - logo, farger og grafiske elementer
          </li>
          <li>Design av nettside</li>
          <li>Bistand rundt videreutvikling og idemyldring av prosjekt</li>
          <li>Utforming av en designmanual</li>
        </ul>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Reference */}

      <div className="bg-happygreen max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 space-y-5 p-16 mx-20 my-20 max-md:mx-8">
        <h3 className={prata.className}>Utvikling av visuell identitet</h3>
        <p>
          Fra Nittedal har en egen logo hvor a-en er byttet ut med et tre. I
          tillegg benyttes det det flere hus og trær som grafiske elementer for
          å fremme at Nittedal er et bosted i nærheten av marka.
        </p>
        <p>
          Det er benyttet duse farger: Mørk grønn, lys grønn, lys blå og
          oransje. Fargene mørk og lys grønn benyttes generelt på siden og er
          hovedfargene til profilen. Den lyse blå fargen benyttes på sider og
          elementer der man informerer om hvordan det er å leve i Nittedal. Den
          oransje fargen benyttes for å fremme jobbmuligheter i bygda.
        </p>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image wide */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Visning av visuell identitet til Fra Nittedal"
          src="/franittedal-profile.png"
          width="1000"
          height="0"
        />
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* List */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 space-y-5">
        <h2 className={prata.className}>
          Prosessen ved utvikling av nettsiden til kunde:
        </h2>
        <p>
          I dette prosjektet deltok jeg aktivt ved design av nettsiden. For å
          sikre god brukervennlighet og ryddig struktur, ble det startet med
          skisser før jeg gikk over på design. Jeg samarbeidet med en grafisk
          designer og utvikler når nettsiden ble utviklet.
        </p>
        <p>
          På denne nettsiden ble det aktivt lagt ut artikler som omhandlet lokal
          næringsliv. Derfor var jeg aktiv ved å hjelpe til med å publisere
          innholdet både på nettsiden og i sosiale medier.
        </p>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image wide */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Skjermbilder fra nettsiden til Site Service"
          src="/franittedal-pages.png"
          width="1000"
          height="0"
        />
      </div>

    

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Footer */}
      <div className="max-lg:px-8 lg:px-20 2xl:px-36 p-16 mt-36" id="contact">
        <h2 className={prata.className}>Skal vi ta en kaffe?</h2>
        <p className="text-2xl max-md:text-xl my-5 lg:pr-48">
          Har du behov for design av nettside og videreutvikling av visuell
          identitet? Eller andre spennende prosjekter? Ta gjerne kontakt for å
          høre hvordan jeg kan hjelpe.
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
