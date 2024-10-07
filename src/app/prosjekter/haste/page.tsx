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
          <h1 className={prata.className}>Haste</h1>
          <div className="space-x-4 my-5">
            <span className="bg-midnight px-2.5 py-0.5">UX</span>
            <span className="bg-midnight px-2.5 py-0.5">Grafisk design</span>
          </div>
          <p className="leading-normal my-5">
            Jeg hjelper Haste med brukertesting av deres applikasjon og gi
            innspill med fokus på brukervennlighet og universell utforming. I
            tillegg bistår jeg med andre designtjenester, og har blant annet
            hjulpet de med design av promografikk til App Store og Google
            Play. 
          </p>
          <p className="leading-normal">
            Haste er et transporteringssystem som er norskutviklet, og har fokus
            på enkel bruk. Systemet hjelper selskaper med å håndtere store
            oppdragsmengder ved å optimalisere ruteplanleggingen.
          </p>
        </div>
      </div>

    {/* ---------------- NEW SECTION ------------------ */}
      {/* Image gallery */}

      <div className="grid w-full place-items-center mt-20">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-none px-8">
          <div>
            <Image
              className="max-w-full shadow-lg"
              src="/haste-promo.png"
              alt="Visualisering av promografikk til Haste applikasjon, liggende format"
              width="500"
              height="0"
            />
          </div>
          <div>
            <Image
              className="max-w-full shadow-lg"
              src="/haste-promo-1.png"
              alt="Visualisering av promografikk til Haste applikasjon, stående format"
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
          Har du behov for hjelp innen design og
          brukervennlighet? Ta gjerne
          kontakt for å høre mer om hvordan jeg kan hjelpe.
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
