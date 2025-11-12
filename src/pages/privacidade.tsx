import Head from 'next/head';
import { motion } from 'framer-motion';

// Página da Política de Privacidade - Exigida pela Play Store
export default function PoliticaDePrivacidade() {
  return (
    <>
      <Head>
        {/* O teu título oficial */}
        <title>🛡️ Política de Privacidade — Tenga</title>
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
            {/* Título e Data */}
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
              Política de Privacidade
            </h1>
            <p className="text-center text-gray-500 mt-4">
              {/* A tua data oficial */}
              Última atualização: 11 de Novembro de 2025
            </p>

            {/* Conteúdo Legal (O teu texto oficial) */}
            {/* Usamos a classe "prose" do Tailwind para formatar automaticamente o texto legal */}
            <div className="prose prose-lg max-w-none mt-12 space-y-6 text-gray-700">
              <p>
                Bem-vindo à Tenga (“nós”, “nosso”, “nos”). Estamos comprometidos
                em proteger a sua privacidade e garantir que os seus dados
                pessoais são tratados com segurança, transparência e
                responsabilidade.
              </p>
              <p>
                Esta Política de Privacidade descreve como recolhemos, usamos,
                armazenamos e partilhamos as suas informações quando utiliza o
                nosso site e aplicativo móvel (em conjunto, “Plataforma”).
              </p>

              <h2>1. Informação que Recolhemos</h2>
              <p>
                Podemos recolher diferentes tipos de informações sobre si,
                incluindo:
              </p>

              <h3>🧍‍♂️ Dados Pessoais</h3>
              <p>Informações de identificação pessoal, como:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Dados demográficos (como idade e género)</li>
              </ul>
              <p>
                Estes dados são fornecidos voluntariamente por si quando cria
                uma conta, faz login ou entra em contato connosco.
              </p>

              <h3>💳 Dados de Transação</h3>
              <p>
                Informações relacionadas a compras, vendas ou transações
                realizadas na Plataforma, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Detalhes dos produtos</li>
                <li>Métodos de pagamento</li>
                <li>Identificadores de transações</li>
              </ul>
              <p>
                ⚠️ Nota: As informações de pagamento não são armazenadas por nós.
                São processadas de forma segura através do nosso gateway de
                pagamento (atualmente, e2Payments).
              </p>

              <h3>📱 Dados do Dispositivo e Uso</h3>
              <p>
                Podemos recolher automaticamente informações técnicas, como:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Modelo do dispositivo</li>
                <li>Sistema operativo e versão</li>
                <li>Endereço IP</li>
                <li>Dados de navegação e interação com o site/app</li>
              </ul>

              <h2>2. Como Usamos a Sua Informação</h2>
              <p>Usamos os dados recolhidos para:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Criar e gerir a sua conta de utilizador.</li>
                <li>Processar as suas transações e comunicações.</li>
                <li>Melhorar a funcionalidade e segurança da plataforma.</li>
                <li>Personalizar a sua experiência de utilização.</li>
                <li>Enviar notificações, atualizações e informações relevantes.</li>
              </ul>

              <h2>3. Divulgação da Sua Informação</h2>
              <p>
                Comprometemo-nos a não vender, trocar ou alugar as suas
                informações pessoais.
              </p>
              <p>A partilha de dados só ocorre nas seguintes situações:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Cumprimento Legal: Quando exigido por lei, por decisão
                  judicial ou autoridade governamental.
                </li>
                <li>
                  Prestadores de Serviço: Com parceiros que nos auxiliam na
                  operação do site e do app (como o gateway de pagamento), sempre
                  sob contrato de confidencialidade.
                </li>
                <li>
                  Segurança: Quando necessário para prevenir fraudes, ataques
                  cibernéticos ou outras atividades ilegais.
                </li>
              </ul>

              <h2>4. Segurança dos Dados</h2>
              <p>
                Implementamos medidas técnicas e organizacionais adequadas para
                proteger os seus dados contra acesso não autorizado, alteração,
                divulgação ou destruição.
              </p>
              <p>
                Mesmo assim, nenhum sistema é 100% seguro. Por isso,
                recomendamos que também proteja as suas credenciais e
                dispositivos pessoais.
              </p>

              <h2>5. Retenção de Dados</h2>
              <p>
                Os seus dados pessoais são mantidos apenas pelo tempo necessário
                para cumprir as finalidades descritas nesta política, salvo se a
                lei exigir um período de conservação maior.
              </p>

              <h2>6. Os Seus Direitos</h2>
              <p>
                De acordo com as leis de proteção de dados aplicáveis, tem
                direito a:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Aceder, corrigir ou eliminar as suas informações pessoais.
                </li>
                <li>Retirar o seu consentimento para o tratamento dos dados.</li>
                <li>
                  Solicitar informações sobre como os seus dados são utilizados.
                </li>
              </ul>
              <p>
                Para exercer esses direitos, entre em contato através de:
                <a
                  href="mailto:benitokizemamakwanza@gmail.com"
                  className="text-blue-600 hover:underline ml-1"
                >
                  📧 benitokizemamakwanza@gmail.com
                </a>
              </p>

              <h2>7. Alterações a Esta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente
                para refletir mudanças nas nossas práticas ou exigências legais.
              </p>
              <p>
                A nova versão será publicada nesta página com a data de
                atualização correspondente.
              </p>

              <h2>8. Contacto</h2>
              <p>
                Se tiver dúvidas, sugestões ou pedidos relacionados com esta
                Política de Privacidade, pode entrar em contato connosco pelo
                e-mail:
                <a
                  href="mailto:benitokizemamakwanza@gmail.com"
                  className="text-blue-600 hover:underline ml-1"
                >
                  📨 benitokizemamakwanza@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}