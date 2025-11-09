// NOVA PÁGINA - Exigida pela Play Store
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Head>
        <title>Política de Privacidade - Tenga</title>
        <meta
          name="description"
          content="Política de Privacidade e Tratamento de Dados da Tenga."
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
              Política de Privacidade
            </h1>
            <p className="mt-4 text-sm text-gray-500">
              Última atualização: 9 de Novembro de 2025
            </p>

            <div className="mt-8 space-y-6 text-gray-700">
              <p>
                Bem-vindo à Tenga ("nós", "nosso"). Estamos empenhados em
                proteger a sua privacidade. Esta Política de Privacidade explica
                como recolhemos, usamos, divulgamos e salvaguardamos as suas
                informações quando utiliza o nosso aplicativo móvel (o "App") e
                website (o "Site").
              </p>

              <h2 className="text-2xl font-semibold text-gray-800">
                1. Informação que Recolhemos
              </h2>
              <p>
                Podemos recolher informações sobre si de várias formas. A
                informação que podemos recolher através do App inclui:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>
                  <strong>Dados Pessoais:</strong> Informação de identificação
                  pessoal, como o seu nome, endereço de email, número de
                  telefone e informação demográfica (como a sua idade ou
                  género), que nos fornece voluntariamente quando se regista no
                  App.
                </li>
                <li>
                  <strong>Dados de Transação:</strong> Informação sobre as
                  compras ou vendas que faz através da plataforma, incluindo
                  detalhes do produto e informação de pagamento (processada pelo
                  nosso gateway de pagamento e não armazenada por nós).
                </li>
                <li>
                  <strong>Dados do Dispositivo:</strong> Informação do
                  dispositivo, como o modelo do seu telemóvel, versão do sistema
                  operativo e endereço IP.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800">
                2. Como Usamos a Sua Informação
              </h2>
              <p>
                Usamos a informação recolhida para:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Criar e gerir a sua conta.</li>
                <li>Processar as suas transações e envios.</li>
                <li>Melhorar a sua experiência na plataforma.</li>
                <li>Comunicar consigo sobre a sua conta ou transações.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800">
                3. Divulgação da Sua Informação
              </h2>
              <p>
                Não partilharemos a sua informação com terceiros, exceto nas
                seguintes situações:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>
                  <strong>Para Cumprir a Lei:</strong> Se formos obrigados por
                  lei ou em resposta a processos legais válidos.
                </li>
                <li>
                  <strong>Processadores de Pagamento:</strong> Partilhamos
                  informação com o nosso gateway de pagamento (e2Payments) apenas
                  para facilitar as suas transações.
                </li>
              </ul>

              <p className="mt-12 border-t pt-6 font-semibold text-gray-800">
                [Aviso: Este é um documento de exemplo. Por favor, consulte um
                advogado para criar uma Política de Privacidade completa e
                vinculativa que cumpra a legislação de Moçambique antes do
                lançamento.]
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}