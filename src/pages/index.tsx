import Head from 'next/head';
import { motion } from 'framer-motion';
// CORREÇÃO AQUI: O nome do ícone estava errado.
import {
  CheckCircleIcon,
  BuildingStorefrontIcon, // Nome corrigido (era StorefrontIcon)
  UsersIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import AdBanner from '@/components/AdBanner'; // <--- 1. IMPORTAR O COMPONENTE

const features = [
  // ... (o teu código existente dos features mantem-se igual)
  {
    name: 'Para Compradores',
    description:
      'Encontre tudo o que precisa, de vendedores locais confiáveis, num só lugar.',
    icon: UsersIcon,
  },
  {
    name: 'Para Vendedores',
    description: 'Abra a sua loja digital em minutos e alcance milhares de clientes em Moçambique.',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Seguro e Confiável',
    description: 'Plataforma segura com foco na comunidade local e transações verificadas.',
    icon: CheckCircleIcon,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Tenga - O Teu Mercado Digital</title>
        <meta
          name="description"
          content="Tenga - O marketplace local de Moçambique. Conectando vendedores e compradores."
        />
      </Head>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          O teu <span className="text-blue-600">Mercado Digital</span>
          <br />
          em Moçambique.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Conectando vendedores e compradores locais com a tecnologia que
          merecem. Encontre produtos, serviços e muito mais.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
           {/* ... (teus botões de download mantêm-se iguais) ... */}
           <motion.a href="#" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white text-base font-medium rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300">Baixar o App (iOS)</motion.a>
           <motion.a href="#" className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white text-base font-medium rounded-md shadow-md hover:bg-gray-700 transition-colors duration-300">Baixar o App (Android)</motion.a>
        </div>
      </motion.section>

      {/* --- ANÚNCIO 1: Entre o Hero e a Imagem --- */}
      <div className="container mx-auto px-4">
         <AdBanner  className="my-8" />
      </div>

      {/* Placeholder para imagem do App */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Image
          src="https://placehold.co/1000x500/F3F4F6/CCCCCC.png?text=Preview+do+App+Tenga"
          alt="Preview do App Tenga"
          width={1000}
          height={500}
          className="rounded-lg shadow-xl mx-auto"
        />
      </div>


      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
          {/* --- ANÚNCIO 2: Antes do título das features --- */}
          <AdBanner className="mb-16" />

          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Tudo o que precisas, num só lugar
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A Tenga foi desenhada a pensar na comunidade local.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}