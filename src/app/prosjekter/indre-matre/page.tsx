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
          <a href="/om-meg" className="px-3 py-3 hover:text-gray-500">
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
          <h1 className={prata.className}>Indre Matre</h1>
          <div className="space-x-4 my-5">
            <span className="bg-midnight px-2.5 py-0.5">Koding</span>
            <span className="bg-midnight px-2.5 py-0.5">Design</span>
          </div>
          <p className="leading-normal my-5">
            Dette prosjekt er noe jeg har gjort på min fritid, og er en nettside
            for å informere om stedet Indre Matre i Norge. Nettsiden er
            fremdeles under utvikling, og vil få mer informasjon om ikke lenge.
          </p>
          <p className="leading-normal">
            I dette prosjektet har jeg designet og utviklet nettsiden, ved bruk av Next.js, HTML, CSS og Tailwind. Her har jeg opprettet domene indrematre.no og hostet siden via GitHub. Bilder på siden er tatt av meg. 
          </p>
        </div>
      </div>

      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Visualisering av nettsiden til Indre Matre"
          src="/indrematre-nettside.png"
          className="shadow-lg"
          width="800"
          height="0"
        />
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
