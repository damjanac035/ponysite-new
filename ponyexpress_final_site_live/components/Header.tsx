import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Pony Express LTD</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="#services">Services</Link>
        <Link href="#drivers">Drivers</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  )
}