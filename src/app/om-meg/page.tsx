import Image from "next/image";
import localFont from "next/font/local";

const prata = localFont({
  src: "../fonts/Prata-Regular.ttf",
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
          <a
            href="/om-meg"
            className="px-2 py-3 hover:text-gray-500 italic font-bold"
          >
            Om meg
          </a>
          <a href="#contact" className="px-2 py-3 hover:text-gray-500">
            Kontakt
          </a>
        </div>
      </nav>

      {/* About me */}
      <div className="flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 space-x-12 max-md:space-x-0 mt-36">
        <div className="w-2/5 max-md:w-full max-sm:pb-0">
          <Image
            alt="Portrettbilde av Jorun Skålnes"
            src="/jorun-7.jpg"
            width="430"
            height="0"
          />
        </div>
        <div className="w-3/5 max-md:pt-10 max-md:w-full">
          <h2 className={prata.className}>Om meg</h2>
          <p className="leading-normal my-5">
            Jeg har over tre års erfaring som interaksjonsdesigner, hvor jeg har
            designet digitale løsninger for små og større kundegrupper. I
            tillegg har jeg bistått som rådgiver, prosjektleder og
            innholdsprodusent.
          </p>
          <p>Bli bedre kjent med min kompetanse og erfaring på denne siden.</p>
          <div>
            <a href="https://www.linkedin.com/in/jorunskalnes/">
              <button className="text-white py-2 px-4 hover:bg-black my-5">
                Følg meg på LinkedIn
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* List with experience */}
      {/* List */}
      <div className="max-lg:px-8 lg:px-20 2xl:px-36 mt-28">
        <h2 className={prata.className}>Kompetanse</h2>
        <div className="grid grid-cols-2 max-md:grid-cols-none">
          <ul className="list-disc leading-loose px-14 pt-10 max-md:px-10 space-y-2">
            <li>Tjenestedesign og designprosess</li>
            <li>UX-design</li>
            <li>Brukervennlighet og universell utforming</li>
            <li>Design av digitale løsninger</li>
            <li>Grafisk design</li>
          </ul>
          <ul className="list-disc leading-loose px-14 max-md:px-10 space-y-2 pt-10 max-md:pt-2">
            <li>Prosjektledelse</li>
            <li>Strategi og rådgivning</li>
            <li>Sosiale medier</li>
            <li>Google analyseverktøy</li>
            <li>Koding (HTML, CSS, Bootstrap, Tailwind, Next.js, React)</li>
          </ul>
        </div>
      </div>

      {/* Section 3 - more information about me */}
      <div className="flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 space-x-12 max-md:space-x-0 mt-36">
        <div className="w-2/5 max-md:w-full max-sm:pb-0">
          <Image
            alt="Portrettbilde av Jorun Skålnes"
            src="/jorun-3.jpg"
            width="430"
            height="0"
          />
        </div>
        <div className="w-3/5 max-md:pt-10 max-md:w-full">
          <h2 className={prata.className}>Jeg er en engasjert designer!</h2>
          <p className="leading-normal my-5">
            Jeg brenner for å utvikle brukervennlige løsninger, og synes det er
            viktig å ha fokus på i vårt digitale samfunn. I tillegg er jeg
            opptatt av å oppfylle krav til universell utforming, slik at alle
            får mulighet til å bruke de digitale løsningene som finnes der ute i
            dag.
          </p>
          <p>
            Som person er jeg ryddig, strukturert og effektiv, og er opptatt av
            å levere høy kvalitet.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        className="max-lg:px-8 lg:px-20 2xl:px-36 p-16 bg-midnight mt-36"
        id="contact"
      >
        <h2 className={prata.className}>Skal vi ta en kaffe?</h2>
        <p className="text-2xl max-md:text-xl my-5">
          Ønsker du å bli bedre kjent eller har et spennende prosjekt på gang?
          Ta gjerne kontakt!
        </p>
        <div>
        <a href="mailto:jorunskalnes@icloud.com"> <button className="text-white py-2 px-4 hover:bg-black my-5">
            Kontakt meg
          </button></a>
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
      </footer>
    </main>
  );
}
