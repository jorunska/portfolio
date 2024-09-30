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
        <div className="flex space-x-4 items-center max-sm:space-x-2">
          <a href="/" className="py-1 pr-3">
            <Image
              alt="Logo Jorun Skålnes"
              src="/js-logo.svg"
              width="50"
              height="0"
            />
          </a>
          <a href="#projects" className="px-2 py-3 hover:text-gray-500">
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
      <div className="flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-48 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-32">
        <div className="w-3/5 max-md:w-full max-md:pb-16">
          <h1 className={prata.className}>Hei, jeg heter Jorun!</h1>
          <p className="text-2xl max-md:text-xl leading-normal my-5 lg:pr-25">
            Jeg er en engasjert designer som har erfaring med å
            designe digitale brukervennlige løsninger, innholdsproduksjon og andre designtjenester.
          </p>
          <div>
            <a href="#contact">
              <button className="text-white py-2 px-4 hover:bg-black my-5">
                Kontakt meg
              </button>
            </a>
          </div>
        </div>
        <div className="w-2/5 max-md:w-full">
          <Image
            alt="En kvinne som sitter og jobber på en bærebar datamaskin"
            src="/Jorun-in-action.jpg"
            width="450"
            height="0"
          />
        </div>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Projects */}

      <div className="max-lg:px-8 lg:px-20 2xl:px-36 my-20" id="projects">
        <h2 className={prata.className}>Prosjekter</h2>
        <p>
          Se hvilke prosjekter jeg har gjennomført. Dette er prosjekter fra
          arbeidslivet, frivillig arbeid og fra studietiden.
        </p>
        <div className="grid w-full place-items-center">
          <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-none max-md:px-0 px-8 mt-16">
            {/* Project 1 */}
            <a href="/prosjekter/happydogs" className="projects">
              <div>
                <Image
                  alt="Golden retriever valp kommer løpende på gress"
                  src="/hund-unsplash.jpg"
                  className="object-cover h-80 lg:h-96 shadow-xl mb-8"
                  width="650"
                  height="0"
                />
                <div className="space-y-5">
                  <h3 className={prata.className}>Happy Dogs</h3>
                  <p>
                    Et digitalt verktøy for hundeiere, oppdrettere og
                    valpekjøpere
                  </p>
                  <div className="space-x-4">
                    <span className="bg-midnight px-2.5 py-0.5">
                      Rådgivning
                    </span>
                    <span className="bg-midnight px-2.5 py-0.5">
                      Grafisk design
                    </span>
                    <span className="bg-midnight px-2.5 py-0.5">UX</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 2 */}
            <a href="/prosjekter/site-service" className="projects">
              <div>
                <Image
                  alt="Visualisering av nettside på en laptop"
                  src="/site-service-mockup.png"
                  className="object-cover h-80 lg:h-96 shadow-xl  mb-8"
                  width="650"
                  height="0"
                />
                <div className="space-y-5">
                  <h3 className={prata.className}>Site Service Gruppen</h3>
                  <p>Nettside for leverandør innen telekommunikasjon</p>
                  <div className="space-x-4">
                    <span className="bg-midnight px-2.5 py-0.5">UX</span>
                    <span className="bg-midnight px-2.5 py-0.5">
                      Grafisk design
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 3 */}
            <a href="/prosjekter/underveis" className="projects">
              <div>
                <Image
                  alt="Visualisering av prosjektet Underveis"
                  src="/underveis-prosjekt.png"
                  className="object-cover h-80 lg:h-96 shadow-xl  mb-8"
                  width="650"
                  height="0"
                />
                <div className="space-y-5">
                  <h3 className={prata.className}>Underveis</h3>
                  <p>Digital lærebok om ungdom, risiko og trafikk</p>
                  <div className="space-x-4">
                    <span className="bg-midnight px-2.5 py-0.5">UX</span>
                    <span className="bg-midnight px-2.5 py-0.5">
                      Rådgivning
                    </span>
                    <span className="bg-midnight px-2.5 py-0.5">Tekst</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 4 */}
            <a href="/prosjekter/hytteveggbilder" className="projects">
              <div>
                <Image
                  alt="En ugle ute i natur"
                  src="/hytteveggbilder-owl.jpg"
                  className="object-cover h-80 lg:h-96 shadow-xl  mb-8"
                  width="650"
                  height="0"
                />
                <div className="space-y-5">
                  <h3 className={prata.className}>Hytteveggbilder</h3>
                  <p>Nettbutikk for kjøp av eksklusive bilder</p>
                  <div className="space-x-4">
                    <span className="bg-midnight px-2.5 py-0.5">UX</span>
                    <span className="bg-midnight px-2.5 py-0.5">
                      Rådgivning
                    </span>
                  </div>
                </div>
              </div>
            </a>


            {/* Project 5 */}
            <a href="/prosjekter/limafoto" className="projects">
              <div>
                <Image
                  alt="Bilde av en bærebar datamaskin som viser nettsiden til Lima Foto"
                  src="/limafoto-website-3.jpg"
                  className="object-cover h-80 lg:h-96 shadow-xl  mb-8"
                  width="650"
                  height="0"
                />
                <div className="space-y-5">
                  <h3 className={prata.className}>Lima Foto</h3>
                  <p>Nettside for bedrift som tilbyr fotografering</p>
                  <div className="space-x-4">
                    <span className="bg-midnight px-2.5 py-0.5">UX</span>
                    <span className="bg-midnight px-2.5 py-0.5">
                      Tekst
                    </span>
                    <span className="bg-midnight px-2.5 py-0.5">
                      Grafisk design
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 6 */}
            <a href="/prosjekter/alimenta" className="projects">
              <div>
                <Image
                  alt="Bilde av en bærebar datamaskin som viser nettsiden til Alimenta"
                  src="/alimenta-website-mockup.png"
                  className="object-cover h-80 lg:h-96 shadow-xl  mb-8"
                  width="650"
                  height="0"
                />
                <div className="space-y-5">
                  <h3 className={prata.className}>Alimenta</h3>
                  <p>Nettside for bedrift som leverer ingredienser til matprodusenter</p>
                  <div className="space-x-4">
                    <span className="bg-midnight px-2.5 py-0.5">UX</span>
                    <span className="bg-midnight px-2.5 py-0.5">
                      Tekst
                    </span>
                    <span className="bg-midnight px-2.5 py-0.5">
                      Grafisk design
                    </span>
                  </div>
                </div>
              </div>
            </a>


            {/* Project */}
            <a href="/prosjekter/indre-matre" className="projects">
              <div>
                <Image
                  alt="Landskapsbilde av Indre Matre, med utsikt over fjell og sjø"
                  src="/indre-matre.jpg"
                  className="object-cover h-80 lg:h-96 shadow-xl  mb-8"
                  width="650"
                  height="0"
                />
                <div className="space-y-5">
                  <h3 className={prata.className}>Indre Matre</h3>
                  <p>Egenutviklet nettside (fremdeles under arbeid)</p>
                  <div className="space-x-4">
                    <span className="bg-midnight px-2.5 py-0.5">Design</span>
                    <span className="bg-midnight px-2.5 py-0.5">Koding</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project */}
            <a href="/prosjekter/solskinn" className="projects">
              <div>
                <Image
                  alt="Visning av logo til prosjektet Solskinn på en mobil"
                  src="/solskinn-prosjekt.png"
                  className="object-cover h-80 lg:h-96 shadow-xl mb-8"
                  width="650"
                  height="0"
                />
                <div className="space-y-5">
                  <h3 className={prata.className}>Solskinn</h3>
                  <p>
                    Konseptforslag for å motivere pasienter til å møte til time
                    ved DPS
                  </p>
                  <div className="space-x-4 space-y-4">
                    <span className="bg-midnight px-2.5 py-0.5">
                      Tjenestedesign
                    </span>
                    <span className="bg-midnight px-2.5 py-0.5">
                      Grafisk design
                    </span>
                    <span className="bg-midnight px-2.5 py-0.5">Koding</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* About me */}
      <div className="flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 space-x-12 max-md:space-x-0 mt-16">
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
          <div>
            <a href="/om-meg">
              <button className="text-white py-2 px-4 hover:bg-black my-5">
                Mer informasjon om meg
              </button>
            </a>
          </div>
        </div>
      </div>


      {/* ---------------- NEW SECTION ------------------ */}
      {/* Footer */}
      <div className="max-lg:px-8 lg:px-20 2xl:px-36 p-16 mt-36" id="contact">
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
        Designet og utviklet av Jorun Skålnes | 2024 |{" "}
        <a
          href="https://www.linkedin.com/in/jorunskalnes/"
          className="underline underline-offset-2"
        >
          Følg meg på LinkedIn
        </a>{" "} og <a href="https://www.instagram.com/skaalnes.no/"
          className="underline underline-offset-2">Instagram</a>
      </footer>
    </main>
  );
}
