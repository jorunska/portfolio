import Image from "next/image";
import localFont from "next/font/local";

const prata = localFont({
  src: "./fonts/Prata-Regular.ttf",
  variable: "--font-prata-regular",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between select-none">
      {/* Navbar */}
      <nav className="navbar bg-lightbrown max-lg:px-8 lg:px-16 2xl:px-36 fixed w-full">
        <div className="flex space-x-4 items-center">
          <a href="/" className="py-1 pr-5">
            <Image
              alt="Logo Jorun Skålnes"
              src="/js-logo.svg"
              width="50"
              height="0"
            />
          </a>
          <a href="/#projects" className="px-3 py-3 hover:text-gray-500">
            Prosjekter
          </a>
          <a href="#" className="px-3 py-3 hover:text-gray-500">
            Om meg
          </a>
          <a href="#contact" className="px-3 py-3 hover:text-gray-500">
            Kontakt
          </a>
        </div>
      </nav>

      {/* Header */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-48">
        <div className="w-10/12 max-md:w-full">
          <h1 className={prata.className}>Happy Dogs</h1>
          <div className="space-x-4 my-5">
            <span className="bg-midnight px-2.5 py-0.5">Rådgivning</span>
            <span className="bg-midnight px-2.5 py-0.5">Grafisk design</span>
            <span className="bg-midnight px-2.5 py-0.5">UX</span>
          </div>
          <p className="leading-normal my-5">
            Samarbeidet med Happy Dogs ble startet i forbindelse med mitt
            frivillige engasjement gjennom tjenesten Muttu. Min rolle har vært å
            bidra med det visuelle uttrykket og være en rådgiver for
            startup-selskapet.
          </p>
          <p className="leading-normal">
            Happy Dogs er et digitalt verktøy for hundeiere, oppdrettere og
            valpekjøpere.
          </p>
        </div>
      </div>

      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Ikoner designet til Happy Dogs"
          src="/ikoner-happy-dogs.png"
          className="shadow-lg"
          width="800"
          height="0"
        />
      </div>

      {/* List */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-28 space-y-5">
        <h2 className={prata.className}>Dette har jeg gjort for Happy Dogs:</h2>
        <ul className="list-disc leading-loose px-14 py-10 max-md:px-10">
          <li>
            Rådgivning om merkevare, design, brukervennlighet og universell
            utforming
          </li>
          <li>Design av ikoner</li>
          <li>
            Deltakelse i workshop for gjennomgang av brukertester og design
          </li>
          <li>Maler og bannere til sosiale medier</li>
          <li>Presentasjonsmal</li>
        </ul>
      </div>

      {/* Reference */}

      <div className="bg-happygreen max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mx-16 p-16 space-y-5 m-24">
        <h3 className={prata.className}>Tilbakemelding fra Happy Dogs</h3>
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

      {/* Image gallery */}

      <div className="grid w-full place-items-center">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-none px-8 mt-10">
          <div>
            <Image
              className="max-w-full shadow-lg"
              src="/happydogs-some-poster.png"
              alt=""
              width="500"
              height="0"
            />
          </div>
          <div>
            <Image
              className="max-w-full shadow-lg"
              src="/happydogs-hunder.png"
              alt="Tre bilder av tre forskjellige hunder som ser mot kamera"
              width="500"
              height="0"
            />
          </div>
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
