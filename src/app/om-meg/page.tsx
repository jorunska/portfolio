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
          <a href="/#projects" className="px-1 py-3 hover:text-gray-500">
            Prosjekter
          </a>
          <a
            href="/om-meg"
            className="px-1 py-3 hover:text-gray-500 italic font-bold"
          >
            Om meg
          </a>
          <a href="#contact" className="px-1 py-3 hover:text-gray-500">
            Kontakt
          </a>
        </div>
      </nav>

      {/* ---------------- NEW SECTION ------------------ */}
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

      {/* ---------------- NEW SECTION ------------------ */}
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
            <li>Innholdsproduksjon</li>
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

      {/* ---------------- NEW SECTION ------------------ */}
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
            Min største styrke er mitt store engasjement for både kreativitet og
            teknologi. Jeg kan hjelpe din bedrift med design av nettside eller
            andre digitale løsnigner, innholdsproduksjon til sosiale medier,
            rådgivning og andre designtjenester.
          </p>
          <p>
            I tillegg har jeg kompetanse om brukervennlighet og universell
            utforming, og leverer alltid tjenester med dette i fokus.
          </p>
        </div>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Section 4 - more information about me */}
      <div className="flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 space-x-12 max-md:space-x-0 mt-36">
        <div className="w-3/5 max-md:pt-10 max-md:w-full">
          <h2 className={prata.className}>Hvordan jobber jeg?</h2>
          <p className="leading-normal my-5">
            Jeg brenner for å hjelpe små og store bedrifter med å løse deres
            behov og utfordringer. For å forstå behov setter jeg meg godt inn i
            bedriften og hvem kunden er. Du som kunde blir inkludert i alle
            faser i prosjektet, slik at du får mulighet til å dele dine innspill
            og kompetanse.
          </p>
          <p>
            Når du samarbeider med meg får du med deg en som er opptatt av
            kvalitet, og som leverer tjenester på en effektiv og ryddig måte. I
            tillegg er jeg opptatt av å skape godt samarbeid og stiller opp der
            det trengs.
          </p>
        </div>
        <div className="w-2/5 max-md:w-full max-sm:pb-0">
          <Image
            alt="En kvinne står med ryggen til og skriver på en tavle som henger på veggen"
            src="/jorun-tavle.jpg"
            width="430"
            height="0"
          />
        </div>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Reference */}

      <div className="bg-happygreen max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 space-y-5 p-16 mx-20 my-20 max-md:mx-8">
        <h3 className={prata.className}>Hva andre sier om meg</h3>
        <p>
          Jorun har vært en stor ressurs og vært en viktig bidragsyter for å
          heve det visuelle uttrykket på sosiale medier, utvikle et smakfullt
          design og god brukervennlighet for Saas-plattformen Happy Dogs.
        </p>
        <p>
          Hun har hatt verdifulle innspill på problemstillinger vi har møtt og
          har hevet kvaliteten betraktelig. Jorun har utviklet templates for
          sosiale medier og ikoner som står i stil med designet og fargepaletten
          vår. Jeg kan virkelig anbefale henne videre!
        </p>
        <p className="italic">
          {" "}
          – Marie H. Gjerde, CEO & Co-founder Happy Dogs
        </p>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Footer */}
      <div className="max-lg:px-8 lg:px-20 2xl:px-36 p-16 mt-8" id="contact">
        <h2 className={prata.className}>Skal vi ta en kaffe?</h2>
        <p className="text-2xl max-md:text-xl my-5 lg:pr-48">
          Ønsker du å bli bedre kjent eller har et spennende prosjekt på gang?
          Ta gjerne kontakt for å diskutere et samarbeid eller for å ta en
          uforpliktende prat!
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
