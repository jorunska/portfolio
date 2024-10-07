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
          <h1 className={prata.className}>Site Service Gruppen</h1>
          <div className="space-x-4 my-5">
            <span className="bg-midnight px-2.5 py-0.5">UX</span>
            <span className="bg-midnight px-2.5 py-0.5">Grafisk design</span>
          </div>
          <p className="leading-normal my-5">
            Prosjektet Site Service Gruppen er utført i forbindelse med min tid
            hos Netspire. Min rolle har vært å bidra med videreutvikling og
            design av visuell identitet og nettside, samt bistand innen grafisk
            design.
          </p>
          <p className="leading-normal">
            Site Service Gruppen leverer tjenester innen telekommunikasjon, og
            er et landsdekkende selskap.
          </p>
        </div>
      </div>

     {/* ---------------- NEW SECTION ------------------ */}
      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Skjermbilde av nettsiden til Site Service Gruppen"
          src="/site-service-nettside.png"
          width="800"
          height="0"
        />
      </div>

     {/* ---------------- NEW SECTION ------------------ */}
      {/* List */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-28 space-y-5">
        <h2 className={prata.className}>
          Dette har jeg gjort for Site Service Gruppen:
        </h2>
        <ul className="list-disc leading-loose px-14 pt-5 max-md:px-10">
          <li>Prosjektledelse og utforming av prosess</li>
          <li>Planlegging og fasilitering av workshop</li>
          <li>Videreutvikling av visuell identitet</li>
          <li>Skisser og design av nettside</li>
          <li>Deltakelse på fotografering</li>
          <li>
            Presentasjonsmaler, dokumentmaler og bannere til sosiale medier
            kanaler
          </li>
          <li>Digital designmanual</li>
          <li>Oppsett av analyseverktøy</li>
        </ul>
      </div>

     {/* ---------------- NEW SECTION ------------------ */}
      {/* Reference */}

      <div className="bg-happygreen max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 space-y-5 p-16 mx-20 my-20 max-md:mx-8">
        <h3 className={prata.className}>
          Videreutvikling av visuell identitet
        </h3>
        <p>
          Kunden ble invitert på en workshop som jeg planla og fasiliterte, hvor
          målet var å bli bedre kjent med kunden og deres behov. Resultater fra
          workshopen ble brukt som grunnlag for å videreutvikle den visuelle
          identiteten.
        </p>
        <p>
          Logoen og fargene ble videreført og brukt som utgangspunkt til å lage
          en profil som er skandinavisk, menneskelig og med fokus på høy
          kompetanse. Formen på logo har to spisse og to buede hjørner, og denne
          formen ble brukt på knapper, bilder og bakgrunner på nettsiden for å
          skape en rød tråd i profilen.
        </p>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image gallery */}

      <div className="grid w-full place-items-center">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-none px-8">
          <div>
            <Image
              className="max-w-full shadow-lg"
              src="/site-service-color.png"
              alt="Logo og farger til Site Service Gruppen sin merkevare"
              width="500"
              height="0"
            />
          </div>
          <div>
            <Image
              className="max-w-full shadow-lg"
              src="/site-service-visual.jpg"
              alt="Visualisering av design til Site Service Gruppen"
              width="500"
              height="0"
            />
          </div>
        </div>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* List */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 space-y-5">
        <h2 className={prata.className}>
          Prosessen ved utvikling av nettsiden til kunde:
        </h2>
        <p>
          Jeg har vært aktiv i utvikling av prosessen og rutinen rundt levering
          av nettsider. I dette prosjektet har kunden deltatt aktivt i alle
          faser, og har hatt mulighet til å komme med innspill som sikret at
          kundens behov ble oppfylt i hele prosjektet.
        </p>
        <ul className="list-disc leading-loose px-14 pt-5 max-md:px-10 pb-10">
          <li>Workshop</li>
          <li>Skisser</li>
          <li>Design</li>
          <li>Utvikling</li>
          <li>Testing og lansering</li>
          <li>Videre oppføling og levering av andre tjenester til kunde</li>
        </ul>
      </div>

 {/* ---------------- NEW SECTION ------------------ */}
      {/* Image wide */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Skjermbilder fra nettsiden til Site Service"
          src="/site-service-website-pages.png"
          width="1000"
          height="0"
        />
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          src="/site-service-atlanterhavsveien.jpg"
          alt="Bilde fra Atlanterhavsveien med utsikt over bro, fjell og sjø"
          width="800"
          height="0"
        />
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Footer */}
      <div
        className="max-lg:px-8 lg:px-20 2xl:px-36 p-16 mt-36"
        id="contact"
      >
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
        </a>{" "}og <a href="https://www.instagram.com/skaalnes.no/"
          className="underline underline-offset-2">Instagram</a>
      </footer>
    </main>
  );
}
