import Head from 'next/head';
import { motion } from 'framer-motion';

// NOVA PÁGINA - Política de Exclusão de Conta (Exigida pela Play Store)
export default function ExclusaoDeConta() {
  return (
    <>
      <Head>
        <title>Exclusão de Conta e Dados - Tenga</title>
        <meta
          name="description"
          content="Política e procedimento para a exclusão de conta e dados da plataforma Tenga."
        />
        {/* Diz aos robôs do Google para não indexarem esta página (não é marketing) */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 sm:p-12 rounded-lg shadow-lg"
          >
            {/* Título e Data */}
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
              Política de Exclusão de Conta e Dados
            </h1>
            <p className="text-center text-gray-500 mt-4">
              {/* Data que nos deste */}
              Última atualização: 13 de Novembro de 2025
            </p>

            {/* Conteúdo Legal (O teu texto oficial) */}
            <div className="prose prose-lg max-w-none mt-12 space-y-6 text-gray-700">
              <p>
                Esta página explica como você, utilizador da plataforma
                <strong>Tenga</strong> (o "App"), pode solicitar a exclusão da
                sua conta e dos seus dados associados.
              </p>

              <h2>1. Como Solicitar a Exclusão da Conta</h2>
              <p>
                Como a Tenga é uma plataforma que lida com transações
                financeiras e histórico de pedidos, a exclusão de conta deve ser
                verificada manualmente pela nossa equipa para garantir a
                segurança e integridade dos dados de todos os utilizadores
                (Vendedores e Clientes).
              </p>
              <p>
                Para solicitar a exclusão permanente da sua conta e dos seus
                dados pessoais, por favor, siga os seguintes passos:
              </p>
              <ul className="list-decimal list-inside space-y-2 pl-4">
                <li>
                  Envie um email para:{' '}
                  {/* Substituí o placeholder pelo teu email oficial */}
                  <a
                    href="mailto:benitokizemamakwanza@gmail.com"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    benitokizemamakwanza@gmail.com
                  </a>
                </li>
                <li>
                  No assunto do email, coloque:{' '}
                  <strong>"SOLICITAÇÃO DE EXCLUSÃO DE CONTA"</strong>.
                </li>
                <li>
                  No corpo do email, inclua o <strong>email</strong> ou{' '}
                  <strong>número de telefone</strong> que você usou para se
                  registar na Tenga.
                </li>
              </ul>
              <p>
                A nossa equipa irá contactá-lo de volta através desse email para
                verificar a sua identidade antes de proceder com a exclusão, que
                será concluída num prazo de até 30 dias.
              </p>

              <h2>2. Dados que Serão Excluídos</h2>
              <p>
                Após a verificação, procederemos à exclusão permanente dos seus
                dados de identificação pessoal (PII). Isto inclui:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>A sua conta de autenticação (Firebase Auth).</li>
                <li>
                  O seu documento de perfil na coleção `users` (incluindo nome,
                  email, telefone, idade, género, província, foto de perfil,
                  etc.).
                </li>
                <li>O seu saldo da `walletBalance`.</li>
                <li>Os seus endereços de entrega guardados (`addresses`).</li>
                <li>O seu histórico de avaliações (`reviews`).</li>
                <li>
                  Os seus dados de candidatura a Vendedor
                  (`sellerApplicationData`), se aplicável.
                </li>
              </ul>

              <h2>3. Dados que Serão Mantidos (Anonimizados)</h2>
              <p>
                Para cumprir com obrigações legais, fiscais e para manter a
                integridade dos relatórios financeiros da plataforma (ex: o
                histórico de vendas de um Vendedor),{' '}
                <strong>não podemos apagar</strong> certos registos de
                transações.
              </p>
              <p>
                No entanto, iremos <strong>anonimizar</strong> permanentemente
                esses registos. Os seguintes dados serão mantidos, mas{' '}
                <strong>desassociados</strong> da sua identidade:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Registos de Encomendas (`orders`):</strong> O seu
                  `userId` e nome serão removidos do registo da encomenda. O
                  registo da transação (ex: "Produto X foi vendido por 1500 MZN")
                  será mantido.
                </li>
                <li>
                  <strong>Registos de Produtos (`products`):</strong> Se você for
                  um Vendedor, os produtos que criou permanecerão na plataforma,
                  mas o campo `sellerId` será anonimizado.
                </li>
              </ul>
              <p>
                Estes dados anonimizados são mantidos apenas para fins de
                contabilidade e análise estatística, e não podem ser usados para
                o identificar.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}