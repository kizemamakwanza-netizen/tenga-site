// NOVA PÁGINA - Exigida pela Play Store
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function TermosECondicoes() {
  return (
    <>
      <Head>
        <title>Termos e Condições - Tenga</title>
        <meta
          name="description"
          content="Termos e Condições de Uso da plataforma Tenga."
        />
      </Head>
      <main className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 sm:p-12 rounded-lg shadow-lg"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Termos e Condições de Uso
            </h1>
            <p className="mt-4 text-sm text-gray-500">
              Última atualização: 9 de Novembro de 2025
            </p>

            <div className="mt-8 space-y-6 text-gray-700">
              <p>
                Estes Termos e Condições de Uso ("Termos") regem o seu acesso e
                uso do aplicativo móvel Tenga ("App") e dos serviços ("Serviços")
                fornecidos por nós.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao aceder ou usar o nosso App, concorda em estar vinculado a
                estes Termos. Se não concordar com estes Termos, não use o App.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800">
                2. Contas de Utilizador
              </h2>
              <p>
                Para usar certas funcionalidades do App (como Vendedor), terá de
                se registar para uma conta. É responsável por salvaguardar a sua
                password e por todas as atividades que ocorram na sua conta.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800">
                3. Responsabilidades dos Vendedores
              </h2>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>
                  Os Vendedores são os únicos responsáveis pelos produtos que
                  listam.
                </li>
                <li>
                  Os Vendedores comprometem-se a fornecer descrições precisas e
                  honestas dos seus produtos.
                </li>
                <li>
                  A Tenga reserva-se o direito de remover listagens que violem
                  os nossos termos.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800">
                4. Pagamentos e Taxas
              </h2>
              <p>
                A Tenga cobra uma taxa de serviço (ex: 1-2%) sobre todas as
                transações bem-sucedidas concluídas através da plataforma, para
                cobrir os custos operacionais e de processamento de pagamento.
                Esta taxa será deduzida automaticamente do valor da venda.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800">
                5. Limitação de Responsabilidade
              </h2>
              <p>
                A Tenga é uma plataforma de marketplace que conecta compradores e
                vendedores. Não somos responsáveis pela qualidade, segurança ou
                legalidade dos itens vendidos.
              </p>

              <p className="mt-12 border-t pt-6 font-semibold text-gray-800">
                [Aviso: Este é um documento de exemplo. Por favor, consulte um
                advogado para criar Termos e Condições completos e vinculativos
                que reflitam o seu modelo de negócio exato antes do lançamento.]
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}