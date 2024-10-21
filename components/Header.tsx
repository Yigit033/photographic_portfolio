"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          PhotoPortfolio
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/">
                <Button variant={pathname === '/' ? 'default' : 'ghost'}>Home</Button>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <Button variant={pathname.startsWith('/gallery') ? 'default' : 'ghost'}>Gallery</Button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <Button variant={pathname === '/about' ? 'default' : 'ghost'}>About</Button>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <Button variant={pathname === '/contact' ? 'default' : 'ghost'}>Contact</Button>
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header