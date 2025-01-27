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
          <h1 className={prata.className}>Norsk kredittforum</h1>
          <div className="space-x-4 my-5">
            <span className="bg-midnight px-2.5 py-0.5">UX</span>
          </div>
          <p className="leading-normal my-5">
            For Norsk Kredittforum har jeg videreutviklet deres visuelle
            identitet og designet en ny og mer moderne nettside. Prosjektet ble
            gjennomført i forbindelse med min tid i Netspire.
          </p>
          <p className="leading-normal">
            Norsk Kredittforum er en frivillig organisasjon som skaper møteplasser
            med fokus på kunnskapsformidlig og nettverksbygging innen økonomi,
            kreditt og finans.
          </p>
        </div>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Skjermbilde av forsiden til nettsiden til Norsk Kredittforum"
          src="/kredittforum-website.png"
          className="shadow-lg"
          width="800"
          height="0"
        />
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* List */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-28 space-y-5">
        <h2 className={prata.className}>Dette har jeg gjort for Norsk Kredittforum:</h2>
        <ul className="list-disc leading-loose px-14 pt-5 max-md:px-10">
          <li>
            Videreutvikling av visuell identitet
          </li>
          <li>Design av nettside</li>
          <li>
            Publisering av arrangementer på nettside, sosiale medier og arrangementsverktøy 
          </li>
        </ul>
      </div>


 {/* ---------------- NEW SECTION ------------------ */}
      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Skjermbilder av nettsiden til Norsk Kredittforum"
          src="/kredittforum-pages.png"
          className="shadow-lg"
          width="1000"
          height="0"
        />
      </div>


      {/* ---------------- NEW SECTION ------------------ */}
      {/* Footer */}
      <div className="max-lg:px-8 lg:px-20 2xl:px-36 p-16 mt-36" id="contact">
        <h2 className={prata.className}>Skal vi ta en kaffe?</h2>
        <p className="text-2xl max-md:text-xl my-5 lg:pr-48">
          Trenger du hjelp med design av nettside? Ta gjerne
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
        Designet og utviklet av Jorun Skålnes | 2025 |{" "}
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
