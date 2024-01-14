import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col sm p-32 bg-gradient-to-r from-gray-50 to-purple-50">
      <div className="lg:flex">
       
        <div className="">
          <a
            className=""
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Image
              src="/signature_2.png"
              alt="Joruns Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className='w-4/5'>
        <h1>Interaksjonsdesigner som brenner for brukervennlighet og universell utforming</h1>
      </div>

      
    </main>
  )
}
