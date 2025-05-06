'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function Navbar() {
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/products/logo.png"
              alt="Bereket Şişeleri Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-semibold text-emerald-600">Bereket Şişeleri</span>
          </Link>

          {/* Hamburger Menü (Mobil için) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Menü Öğeleri (Büyük ekran) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-emerald-600 transition">Ana Sayfa</Link>
            <Link href="/market" className="text-gray-600 hover:text-emerald-600 transition">Şişeler</Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-emerald-600 transition">İletişim</Link>
          </div>

          {/* Sepet */}
          <div className="flex items-center space-x-4">
            <Link href="/sepet" className="text-gray-600 hover:text-emerald-600 transition">Sepet</Link>
            <Link href="/sepet" className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-emerald-600 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobil Menü Açılır */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link href="/" className="block text-gray-600 hover:text-emerald-600">Ana Sayfa</Link>
            <Link href="/market" className="block text-gray-600 hover:text-emerald-600">Şişeler</Link>
            <Link href="/iletisim" className="block text-gray-600 hover:text-emerald-600">İletişim</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
