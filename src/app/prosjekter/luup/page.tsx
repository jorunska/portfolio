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
          <h1 className={prata.className}>Luup</h1>
          <div className="space-x-4 my-5">
            <span className="bg-midnight px-2.5 py-0.5">Tekst</span>
            <span className="bg-midnight px-2.5 py-0.5">Grafisk design</span>
            <span className="bg-midnight px-2.5 py-0.5">SOME</span>
          </div>
          <p className="leading-normal my-5">
            Jeg ble kontaktet av Luup gjennom tjenesten Muttu, og vi startet
            samarbeidet i september 2024. Min rolle er å være innholdsprodusent
            til sosiale medier. Her hjelper jeg til med tekst, foto og video,
            planlegging og publisering av innhold til sosiale medier.
          </p>
          <p className="leading-normal">
            Luup er en tjeneste hvor brukere kan shoppe klær på en bærekraftig
            måte. Gjennom en form for bytteordning, kan man bruke oppsamlede
            poeng for å handle klær.
          </p>
        </div>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="En mobil blir holdt med visning av Instagram-profilen til Luup"
          src="/luup-some.JPG"
          className="shadow-lg"
          width="800"
          height="0"
        />
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* List */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-28 space-y-5">
        <h2 className={prata.className}>Dette gjør jeg for Luup:</h2>
        <ul className="list-disc leading-loose px-14 pt-5 max-md:px-10">
          <li>
            Planlegging og publisering av innlegg til Instagram, Facebook og TikTok
          </li>
          <li>Foto og video</li>
          <li>
            Tekstproduksjon
          </li>
          <li>Brukertest og innspill på tjeneste</li>
          <li>Grafisk design til sosiale medier</li>
        </ul>
      </div>


      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image gallery */}

      <div className="grid w-full place-items-center pt-20">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-none px-8">
          <div>
            <Image
              className="max-w-full shadow-lg"
              src="/luup-some-posts.png"
              alt="Visning av ulike innlegg til sosiale medier"
              width="500"
              height="0"
            />
          </div>
          <div>
            <Image
              className="max-w-full shadow-lg"
              src="/luup-text.JPG"
              alt="Visning av tekst på en bærebar datamaskin"
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
          Har du behov for hjelp innen sosiale medier, design og
          brukervennlighet? Eller trenger du en sparringspartner? Ta gjerne
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
