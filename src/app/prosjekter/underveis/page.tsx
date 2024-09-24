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
          <h1 className={prata.className}>Underveis</h1>
          <div className="space-x-4 my-5">
            <span className="bg-midnight px-2.5 py-0.5">UX</span>
            <span className="bg-midnight px-2.5 py-0.5">Rådgivning</span>
            <span className="bg-midnight px-2.5 py-0.5">Tekst</span>
          </div>
          <p className="leading-normal my-5">
            Prosjektet Underveis er utført i forbindelse med min tid hos
            Netspire. Min rolle har vært å bidra med å designe nettside og sørge
            for at den digitale læreboka er brukervennlig og forståelig for alle
            brukergrupper.
          </p>
          <p className="leading-normal">
            Underveis er en digital lærebok om ungdom, risiko og trafikk, og
            tilhører Trygg Trafikk.
          </p>
        </div>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Skjermbilde av digital lærebok"
          src="/underveis-book.png"
          width="800"
          height="0"
        />
      </div>

      {/* ---------------- NEW SECTION ------------------ */}      
      {/* List */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-28 space-y-5">
        <h2 className={prata.className}>Dette har jeg gjort for Underveis:</h2>
        <ul className="list-disc leading-loose px-14 pt-5 max-md:px-10">
          <li>Rådgivning rundt brukervennlighet og universell utforming</li>
          <li>Utforming av digital lærebok</li>
          <li>Skisser og design av nettside</li>
          <li>Innholdsproduksjon i samarbeid med kunde</li>
          <li>Idemyldring for videreføring av prosjekt</li>
        </ul>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Green box */}

      <div className="bg-happygreen max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 space-y-5 p-16 mx-20 my-20 max-md:mx-8">
        <h3 className={prata.className}>Underveis er en digital lærebok</h3>
        <p>
          Kunden tok kontakt for å få hjelp til å sørge for at innholdet til en
          digital lærebok ble presentert på en brukervennlig måte. Min jobb ble
          å utforme boka i et kursprogram som heter Rise 360, hvor jeg fokuserte
          på at oppsettet skulle være ryddig og enkelt å navigere for brukere.
        </p>
        <p>
          Logo og farger var allerede utviklet til Underveis, og jeg brukte
          dette for å forme både den digitale boka og nettsiden. Kunden deltok
          aktivt i alle faser og kom med sine innspill.
        </p>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Image gallery */}

      <div className="grid w-full place-items-center">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-none px-8">
          <div>
            <Image
              className="max-w-full"
              src="/underveis-book-chapter.png"
              alt="Visning av et kapittel i den digitale boka til Underveis"
              width="500"
              height="0"
            />
          </div>
          <div>
            <Image
              className="max-w-full"
              src="/underveis-text.png"
              alt="Visning av en artikkel publisert på nettsiden til Underveis"
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
          Har du en digital lærebok eller kurs du ønsker å utvikle? Eller
          trenger hjelp med design av andre digitale løsnigner? Gjerne ta
          kontakt for en uforpliktende prat.
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
      </footer>
    </main>
  );
}
