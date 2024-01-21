import Image from 'next/image';

import './globals.css'

export default function Home() {
  return (
    <main>
      <div className="bg-holder"></div>
      <div className='container'>

        <div>
          <a

            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Image
              src="/signature_2.png"
              alt="Joruns Logo"
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
        <div className='container-fluid mt-5'>
          <div className='row align-items-center'>
            <div className='col'>
              <p className='subheading'>Hei, jeg heter Jorun!</p>
              <h1>Jeg er en engasjert designer</h1>
              <p>– Som brenner for å designe brukervennlige løsninger som gjør hverdagen enklere for alle!</p>
            </div>
            <div className='col'>
              <img className='img-front'
                src="/workshop.jpg"
                alt="Joruns Logo"
              />

            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <h2>Erfaring</h2>
        <p>Nedenfor kan du se en oversikt over min erfaring</p>
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
      <div className="card flex-md-row align-items-center" >
        <img className="card-img" src="portrett-jorun.jpg" alt="Card image cap" />
        <div className="card-body">
          <h2>Om meg</h2>
          <p>Jeg har en bachelorgrad innen interaksjonsdesign, og har stort engasjement for faget. I prosjekter er jeg opptatt av å designe løsninger som er brukervennlige med fokus på universell utforming.</p>
          <p className='mb-5'>Jeg har 3 års erfaring, hvor jeg har deltatt i tjenestedesignprosjekter og utforming av digitale løsninger.</p>
          <a className='button' href='mailto:jorunskalnes.com'>Send meg en melding</a>
        </div>
      </div>

      <footer className="footer text-center p-4 bg-dark text-white">Nettsiden er designet og utviklet av Jorun Skålnes | 2024</footer>

    </main>


  )
}
