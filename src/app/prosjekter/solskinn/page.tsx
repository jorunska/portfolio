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
          <h1 className={prata.className}>Solskinn</h1>
          <div className="space-x-4 my-5">
            <span className="bg-midnight px-2.5 py-0.5">Tjenestedesign</span>
            <span className="bg-midnight px-2.5 py-0.5">Grafisk design</span>
            <span className="bg-midnight px-2.5 py-0.5">Koding</span>
          </div>
          <p className="leading-normal my-5">
            Dette prosjektet utførte jeg som bacheloroppgave under studiet
            Bachelor i Interaksjonsdesign. Oppgaven ble levert mai 2021, og jeg
            utførte også et forarbeidsprosjekt til oppgaven for å planlegge og
            forberede. I dette prosjektet samarbeidet jeg med en medstudent som
            studerte Bachelor i Webutvikling.
          </p>
          <p className="leading-normal">
            Bakgrunnen for valg av oppgave var mitt personlige engasjement for å
            jobbe med et helserelatert tema. I god tid før oppstart, hadde jeg
            et møte med Sykehuset Innlandet for å avtale et samarbeid.
          </p>
        </div>
      </div>

      {/* Image */}

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Visning av logo til prosjektet Solskinn på en mobil"
          src="/Solskinn-prosjekt.png"
          className="shadow-lg"
          width="800"
          height="0"
        />
      </div>

      {/* green text box */}

      <div className="bg-happygreen max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mx-16 p-16 space-y-5 m-24">
        <h3 className={prata.className}>
          Problemstilling: Hvordan kan vi motivere pasienter til å møte til time
          ved DPS Poliklinikk Lillehammer?
        </h3>
        <p>
          Pasientfravær er et problem innen helsevesenet, og det kan påvirke
          pasienters helse og behandlingsutfall. Hos Divisjon for Psykisk
          Helsevern (DPS) utgjorde over 60% pasientfravær i 2018. Derfor trengte
          DPS bistand til å finne ut hva de kunne gjøre for å redusere
          pasientfraværet. Tjenestedesign ble benyttet som metodikk i dette
          prosjektet, da det var hensiktsmessig å se på behov til både
          organisasjon og bruker.
        </p>
      </div>

      {/* Text and image */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 space-y-5">
        <h2 className={prata.className}>Designprosessen:</h2>
        <p>
          Double diamond modellen ble benyttet for å visualisere prosessen som
          ble gjennomført i prosjektet. Prosjektet bestod av fasene: Forarbeid,
          utforske, definere, pre-ideering, ideering og prototype. Målet i
          prosjektet var å finne rett problem før rett løsning, og det ble
          benyttet en rekke metoder for å sikre at man hadde nok data og fant
          riktig løsning.
        </p>
      </div>

      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-20 place-self-center">
        <Image
          alt="Visualisering av designprosessen gjennomført i prosjektet Solskinn, inkludert alle metoder som er gjennomført"
          src="/solskinn-designprosess.png"
          className="shadow-lg"
          width="800"
          height="0"
        />
      </div>

      {/* green text box */}

      <div className="bg-happygreen max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mx-16 p-16 space-y-5 m-24">
        <h3 className={prata.className}>Min rolle i prosjektet</h3>
        <p>
          I dette prosjektet var jeg prosjektleder, og tok hovedansvar for
          planlegging og gjennomføring av prosjektet. Jeg hadde ansvar for å
          gjennomføre intervjuer, brukertester, holde møter og workshops, samt
          utforming av skisser og design. I utviklingsfasen bistod jeg også med
          å style nettsiden (Bootstrap, CSS), for å sørge for at designet kom på
          plass.
        </p>
      </div>

      {/* Text and image */}
      <div className="max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 space-y-5">
        <h2 className={prata.className}>
          Basert på funn fra innsiktsarbeid ble konseptforslaget Solskinn
          utviklet
        </h2>
        <p>
          Solskinn ble valg som navn for å bringe hele konseptet sammen til en
          helhet. Ordet solskinn symboliserer mer imøtekommende opplevelser og
          bidra til mer motivasjon for å møte til time.
        </p>
        <h3 className={prata.className}>
          Resultatet ble et konsept bestående av:
        </h3>
        <ul className="list-disc leading-loose px-14 pb-10 max-md:px-10">
          <li>
            Nettside med mulighet for å ta kontakt med DPS og finne informasjon
            om avdelingen
          </li>
          <li>Logo som skal være tydelig kjennemerke til DPS</li>
          <li>
            Designmanual som forklarer fargepalett, bruk av farger, typografi,
            universell utforming
          </li>
          <li>Tekstinnhold til SMS-påminnelse</li>
        </ul>
      </div>

      {/* Image gallery */}

      <div className="grid w-full place-items-center">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-none px-8 mt-10">
          <div>
            <Image
              className="object-cover h-96 max-w-full shadow-lg"
              src="/solskinn-sms.png"
              alt="Visualisering av SMS-påminnelse til prosjektet Solskinn"
              width="500"
              height="0"
            />
          </div>
          <div>
            <Image
              className="object-cover h-96 max-w-full shadow-lg"
              src="/solskinn-nettside.png"
              alt="Visualisering av nettsiden til prosjektet Solskinn"
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
