import Image from 'next/image';

import './globals.css'

export default function Home() {

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
                                <a className="nav-link" href="/prosjekter/happydogs">Prosjekter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


      <div className='containers'>
      <div className="bg-holder"></div>
        <div className='header'>
          <div className='mt-5'>
          <h1>Interaksjons-designer</h1>
          <p>Hei, jeg heter Jorun og jeg designer brukervennlige løsninger som gjør hverdagen enklere for alle! Jeg har erfaring med å delta i prosjekter fra start til slutt, og er opptatt av å levere høy kvalitet til både kunder og sluttbruker.</p>
          <a className='button' href='/prosjekter/happydogs'>Se mitt siste prosjekt</a>
        </div>
        </div>
        </div>



        <div className='containers services'>
          <h2>Kompetanse & erfaring</h2>
          <p>Nedenfor kan du se en oversikt over hva jeg har erfaring innen</p>
          <div className='row m-2 p-2 experience'>
            <div className='col'>
              <p>Tjenestedesign og designprosess</p>
              <p>Brukervennlighet</p>
              <p>Universell utforming</p>
              <p>Design av digitale løsninger</p>
              <p>Grafisk design</p>
            </div>
            <div className='col'>
              <p>Prosjektledelse</p>
              <p>Strategi og rådgivning</p>
              <p>Sosiale medier</p>
              <p>Google analyseverktøy</p>
              <p>Grunnleggende koding</p>
            </div>
          </div>
          </div>



      <div className="projects">
        <div className="containers pt-5 pb-5">
          <h2 className='pb-5'>Siste prosjekt</h2>
          <div className="card card-project mb-3">
            <div className="row g-0">
              <div className="col-md-7">
                <img src="hund-unsplash.jpg" className="img-fluid" alt="Valp løper rundt utendørs" />
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <a href='/prosjekter/happydogs'><h3 className="card-title pb-2 mb-4">Happy Dogs</h3></a>
                  <p className="card-text pb-4">Samarbeidet har bestått i utforming av maler til sosiale medier, samt design av ikoner til merkevaren.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card card-info flex-md-row align-items-center" >
        <img className="card-img" src="portrett-jorun.jpg" alt="Portrett av Jorun Skålnes" />
        <div className="card-body">
          <h2>Om meg</h2>
          <p>Jeg har en bachelorgrad innen interaksjonsdesign, og har stort engasjement for faget. I prosjekter er jeg opptatt av å designe løsninger som er brukervennlige med fokus på universell utforming.</p>
          <p className='mb-5'>Jeg har nå 3 års erfaring, og har deltatt i tjenestedesignprosjekter og utforming av digitale løsninger.</p>
          <a className='button' href='mailto:jorunskalnes.com'>Send meg en melding</a>
        </div>
      </div>

      <footer className="footer text-center p-4 text-white">Nettsiden er designet og utviklet av Jorun Skålnes | 2024</footer>

    </main>



  )
}
