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

      {/* Header */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-48">
        <div className="w-10/12 max-md:w-full">
          <h1 className={prata.className}>Hytteveggbilder</h1>
          <div className="space-x-4 my-5">
            <span className="bg-midnight px-2.5 py-0.5">UX</span>
            <span className="bg-midnight px-2.5 py-0.5">Rådgivning</span>
          </div>
          <p className="leading-normal my-5">
            Denne kunden var helt i oppstartsfasen når samarbeidet ble startet,
            og jeg har bistått kunden med utvikling av visuell identitet og
            nettbutikk. Prosjektet ble gjennomført i forbindelse med min tid i
            Netspire.
          </p>
          <p className="leading-normal">
            Hytteveggbilder er en nettbutikk hvor du kan handle eksklusive
            bilder til hytteveggen. Målet var å designe en nettbutikk med fokus
            på kvalitet.
          </p>
        </div>
      </div>

      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Nettbutikken til Hytteveggbilder vises på en bærebar datamaskin"
          src="/hytteveggbilder-project.jpg"
          width="800"
          height="0"
        />
      </div>

      {/* List */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-28 space-y-5">
        <h2 className={prata.className}>
          Dette har jeg gjort for Hytteveggbilder:
        </h2>
        <ul className="list-disc leading-loose px-14 pt-5 max-md:px-10">
          <li>Rådgivning rundt brukervennlighet og universell utforming</li>
          <li>Utforming av visuell identitet – fonter og farger</li>
          <li>Skisser og design av nettbutikk</li>
          <li>Opplæring av kunde i Wordpress og WooCommerce</li>
          <li>Oppfølging av kunde for videreutvikling</li>
        </ul>
      </div>

      {/* Green box */}

      <div className="bg-happygreen max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 space-y-5 p-16 mx-20 my-20 max-md:mx-8">
        <h3 className={prata.className}>
          Hytteveggbilder selger eksklusive bilder
        </h3>
        <p>
          Kunden tok kontakt for å få hjelp til å sette opp en nettbutikk til
          sin nyoppstartede bedrift. Det var viktig at nettbutikken reflekterte
          ekslusivitet og kvalitet, noe som var viktig for å skille seg ut fra
          konkurrentene. Ved utvikling hadde jeg fokus på at nettbutikken skulle
          oppleves ryddig og oversiktlig for sluttbrukere.
        </p>
        <p>
          Til den visuelle profilen ble det valgt å bruke fargene gull, beige og
          mørk brun for å fremme ekslusivitet. Logo har kunden selv utviklet.
          Kunden deltok aktivt i alle faser av prosjektet og kom med sine
          innspill.
        </p>
      </div>

      {/* Image gallery */}

      <div className="grid w-full place-items-center">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-none px-8">
          <div>
            <Image
              className="max-w-full"
              src="/hytteveggbilder-products.png"
              alt="Visning av produktene i nettbutikken til Hytteveggbilder"
              width="500"
              height="0"
            />
          </div>
          <div>
            <Image
              className="max-w-full"
              src="/hytteveggbilder-frontpage.png"
              alt="Visning av en seksjon på forsiden til Hytteveggbilder"
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
