import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  EyeIcon,
  AcademicCapIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const valores = [
  {
    name: 'Comunidade',
    description: 'Tudo o que fazemos é a pensar no desenvolvimento da comunidade local.',
    icon: HeartIcon,
  },
  {
    name: 'Inovação',
    description: 'Usamos a tecnologia para resolver problemas reais de forma simples.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Transparência',
    description: 'Construímos confiança através de processos claros e honestos.',
    icon: EyeIcon,
  },
];

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre Nós - Tenga</title>
        <meta
          name="description"
          content="Conheça a equipa e a missão da Tenga."
        />
      </Head>

      {/* Secção Principal */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left lg:flex lg:items-center lg:justify-between"
          >
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                A nossa <span className="text-blue-600">Missão</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl lg:mx-0 mx-auto">
                Somos uma equipa apaixonada por tecnologia e pelo desenvolvimento
                de Moçambique. A nossa missão é criar a melhor e mais acessível
                plataforma de marketplace local, conectando vendedores e
                compradores de forma fácil, segura e eficiente.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
              <Image
                src="https://placehold.co/600x400/F3F4F6/CCCCCC.png?text=Equipa+Tenga"
                alt="Equipa Tenga"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Secção de Valores */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Os Nossos Valores
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              O que nos move todos os dias.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {valores.map((valor) => (
              <motion.div
                key={valor.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                  <valor.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {valor.name}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {valor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}