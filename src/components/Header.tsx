import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

// Links de navegação
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre Nós' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/contato', label: 'Contato' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="https://placehold.co/120x40/000000/FFFFFF.png?text=Tenga"
              alt="Logo Tenga"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            {/* <span className="text-2xl font-bold text-blue-600 ml-2">Tenga</span> */}
          </div>

          {/* Navegação Desktop */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Botão de Download (Desktop) */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 transition-colors"
            >
              Baixar o App
            </a>
          </div>

          {/* Botão de Menu (Mobile) */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile (Dropdown) */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto', y: 0 },
          closed: { opacity: 0, height: 0, y: -10 },
        }}
        transition={{ duration: 0.3 }}
        className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="pt-2 pb-3 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="block w-full text-left pl-3 pr-4 py-2 bg-blue-50 border-l-4 border-blue-500 text-base font-medium text-blue-700"
          >
            Baixar o App
          </a>
        </div>
      </motion.div>
    </header>
  );
}