import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pony Express LTD</title>
        <meta name="description" content="Dry Van, Heated and Tanker Freight | Pony Express LTD from Hamilton, Ontario" />
      </Head>
      <main className="text-center p-8">
        <h1 className="text-5xl font-bold mb-4 text-blue-900">Pony Express LTD</h1>
        <p className="text-xl text-gray-700 mb-6">Dry Van | Heated | Tanker Freight – Hamilton, ON</p>
        <div className="flex justify-center gap-4">
          <Image src="/IMG_0363.JPG" alt="Truck 1" width={400} height={250} />
          <Image src="/IMG_9879.jpg" alt="Truck 2" width={400} height={250} />
        </div>
      </main>
    </>
  )
}