'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiOutlinePhone, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#D4A574] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-white">
              <div className="text-xl lg:text-2xl font-bold tracking-tight">Vision Ultimate</div>
              <div className="text-sm text-[#F4E4C1] font-medium">Studio</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-[#F4E4C1] text-black shadow-md'
                    : 'text-white hover:bg-white/10 hover:text-[#F4E4C1]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:09173031325"
              className="flex items-center space-x-2 text-white hover:text-[#F4E4C1] transition-colors duration-200"
            >
              <HiOutlinePhone className="w-4 h-4" />
              <span className="text-sm font-medium">091730 31325</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#F4E4C1] text-[#8B4513] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Your Photoshoot
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiOutlineBars3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-[#D4A574] border-t border-white/20">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-[#F4E4C1] text-black'
                    : 'text-white hover:bg-white/10 hover:text-[#F4E4C1]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Phone & CTA */}
            <div className="pt-4 border-t border-white/20 space-y-3">
              <a
                href="tel:09173031325"
                className="flex items-center space-x-3 px-4 py-3 text-white hover:text-[#F4E4C1] transition-colors duration-200"
              >
                <HiOutlinePhone className="w-5 h-5" />
                <span className="font-medium">091730 31325</span>
              </a>
              <Link
                href="/contact"
                className="block bg-[#F4E4C1] text-[#8B4513] px-4 py-3 rounded-lg text-base font-semibold text-center hover:bg-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Your Photoshoot Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}