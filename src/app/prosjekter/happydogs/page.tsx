import Image from 'next/image';

export default function Happydogs() {
    return (
        <main>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{' '}
                        <Image
                            src="/js-logo.svg"
                            alt="Joruns Logo"
                            width={80}
                            height={80}
                            priority
                        /></a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="/prosjekter/happydogs">Prosjekter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="projects-container">
                <div className="border-holder"></div>
                <div className="containers">
                    <h1 className='mb-4'>Happy Dogs</h1>
                    <p className='tag'>– Frivillig arbeid</p>
                    <p>Samarbeidet med Happy Dogs ble startet i forbindelse med mitt frivillige engasjement gjennom tjenesten Muttu. Min rolle har vært å bidra med det visuelle uttrykket. </p>
                    <p>Happy Dogs er et digitalt verktøy for hundeiere, oppdrettere og valpekjøpere.</p>
                </div>
            </div>

            <div className='containers mockup pb-5'>
                <img src='/Mockup-ikoner.png' alt='Mockup av ikoner designet til Happy Dogs' />
            </div>

            <div className="containers work">
                <h2>Dette har jeg gjort for Happy Dogs:</h2>
                <div className='row experience'>
                    <div className='col'>
                        <p>Design av ikoner</p>
                        <p>Rådgivning om merkevare, design og brukervennlighet</p>
                        <p>Deltakelse i workshop for gjennomgang av brukertester og design</p>

                    </div>
                    <div className='col'>
                        <p>Maler og bannere til sosiale medier</p>
                        <p>Presentasjonsmal</p>
                    </div>
                </div>
            </div>

            <div className="containers">
                <div className="row d-flex justify-content-center">
                    <div className="col col-lg-5">
                        <img src='/design-happydogs.png' className="img-fluid" />
                    </div>
                    <div className="col col-lg-5">
                        <img src='/sosiale-medier-happydogs.png' className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="containers">
                <figure className="text-center">
                    <blockquote className="blockquote pt-5">
                        <p>Jorun har vært en stor ressurs og vært en viktig bidragsyter for å heve det visuelle uttrykket på sosiale medier, utvikle et smakfullt design og god brukervennlighet for Saas-plattformen Happy Dogs. Hun har hatt verdifulle innspill på problemstillinger vi har møtt og har hevet kvaliteten betraktelig. Jorun har utviklet templates for sosiale medier og ikoner som står i stil med designet og fargepaletten vår. Jeg kan virkelig anbefale henne videre!</p>
                    </blockquote>
                    <figcaption className="blockquote-footer pt-4 pb-5">
                        Marie H. Gjerde, <cite title="Source Title"> CEO & Co-founder Happy Dogs</cite>
                    </figcaption>
                </figure>
            </div>

    
            <footer className="footer text-center p-4 text-white">Nettsiden er designet og utviklet av Jorun Skålnes | 2024</footer>
        </main>

    )
}
