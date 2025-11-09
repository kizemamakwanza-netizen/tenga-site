import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const funcionalidades = [
  {
    name: 'Listagem de Produtos Fácil',
    description:
      'Vendedores podem adicionar, editar e gerir os seus produtos com um painel de controlo simples.',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Carrinho de Compras Integrado',
    description:
      'Compradores podem adicionar múltiplos itens de diferentes vendedores e fazer o checkout de uma só vez.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Pagamentos Seguros',
    description:
      'Integração com gateways de pagamento locais (ex: M-Pesa) para transações seguras. (Funcionalidade Premium)',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Gestão de Encomendas',
    description:
      'Vendedores recebem notificações e gerem o estado das suas encomendas, desde a confirmação até à entrega.',
    icon: CurrencyDollarIcon,
  },
];

export default function Servicos() {
  return (
    <>
      <Head>
        <title>Nossos Serviços - Tenga</title>
        <meta
          name="description"
          content="Descubra o que a Tenga oferece para vendedores e compradores."
        />
      </Head>

      {/* Secção Principal */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Uma plataforma,
              <span className="text-blue-600"> muitas soluções.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              A Tenga foi desenhada para ser a ponte entre vendedores e
              compradores em Moçambique, oferecendo as ferramentas certas para o
              comércio local.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Secção de Funcionalidades */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              O que oferecemos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Funcionalidades chave da nossa plataforma.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {funcionalidades.map((func) => (
              <motion.div
                key={func.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                  <func.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {func.name}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {func.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secção CTA (Call to Action) */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Pronto para começar?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Baixe o app e junte-se à comunidade Tenga hoje mesmo.
          </p>
          <motion.a
            href="#" // TODO: Link para a página Home ou de Download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white text-base font-medium rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Baixar o App
          </motion.a>
        </div>
      </section>
    </>
  );
}