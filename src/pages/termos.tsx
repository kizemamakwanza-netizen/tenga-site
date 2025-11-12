import Head from 'next/head';
import { motion } from 'framer-motion';

// Página dos Termos de Uso - Exigida pela Play Store
export default function TermosECondicoes() {
  return (
    <>
      <Head>
        {/* O título que nos deste */}
        <title>📜 Termos de Uso — Tenga</title>
        <meta
          name="description"
          content="Termos e Condições de uso da plataforma Tenga."
        />
      </Head>

      {/* Container principal da página */}
      <main className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 sm:p-12 rounded-lg shadow-lg"
          >
            {/* Título e Data de Atualização */}
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
              Termos e Condições de Uso
            </h1>
            <p className="text-center text-gray-500 mt-4">
              {/* A tua data oficial */}
              Última atualização: 11 de Novembro de 2025
            </p>

            {/* Conteúdo Legal (O teu texto oficial) */}
            <div className="prose prose-lg max-w-none mt-12 space-y-6 text-gray-700">
              <p>
                Bem-vindo à Tenga. Estes Termos de Uso (“Termos”) regulam o
                acesso e o uso do site Tenga, incluindo todos os seus conteúdos,
                funcionalidades e serviços oferecidos pela equipa Tenga (“nós”,
                “nosso”, “nos”).
              </p>
              <p>
                Ao acessar ou utilizar o site, você concorda com estes Termos.
                Caso não concorde, por favor, não utilize o nosso site.
              </p>

              <h2>1. Objetivo do Site</h2>
              <p>
                O site Tenga tem como objetivo apresentar o projeto e os serviços
                oferecidos, bem como partilhar informações, notícias e conteúdos
                relevantes relacionados ao desenvolvimento digital e às
                iniciativas da Tenga.
              </p>
              <p>
                Atualmente, o site não realiza transações financeiras nem
                comercializa produtos ou serviços. No futuro, novas
                funcionalidades poderão ser implementadas.
              </p>

              <h2>2. Uso Permitido</h2>
              <p>
                O utilizador compromete-se a usar o site de forma responsável,
                apenas para fins legítimos e de acordo com as leis aplicáveis de
                Moçambique.
              </p>
              <p>É estritamente proibido:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Utilizar o site para fins fraudulentos, ilegais ou abusivos;
                </li>
                <li>
                  Tentar obter acesso não autorizado a sistemas, servidores ou
                  bases de dados;
                </li>
                <li>
                  Copiar, reproduzir ou redistribuir qualquer conteúdo sem
                  autorização prévia por escrito.
                </li>
              </ul>

              <h2>3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo disponível neste site — incluindo textos,
                logótipos, imagens, design, gráficos e código — é propriedade da
                Tenga ou de seus criadores/parceiros e está protegido por leis de
                direitos autorais e propriedade intelectual.
              </p>
              <p>
                É proibida a cópia ou reutilização sem autorização prévia.
              </p>

              <h2>4. Conteúdo do Utilizador</h2>
              <p>
                Em determinadas áreas do site (como formulários de contacto ou
                comentários), o utilizador pode submeter informações.
              </p>
              <p>Ao fazê-lo, o utilizador declara que:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  As informações fornecidas são verdadeiras e não violam direitos
                  de terceiros;
                </li>
                <li>
                  A Tenga poderá entrar em contacto através do endereço de
                  e-mail fornecido para responder à solicitação.
                </li>
              </ul>

              <h2>5. Links Externos</h2>
              <p>
                O site da Tenga pode conter links para sites de terceiros. Não
                temos controlo sobre o conteúdo ou práticas desses sites, e não
                nos responsabilizamos por quaisquer danos ou perdas decorrentes
                do uso deles.
              </p>

              <h2>6. Limitação de Responsabilidade</h2>
              <p>
                A Tenga não se responsabiliza por eventuais interrupções, erros
                ou falhas técnicas no site. O utilizador reconhece que o uso do
                site é feito por sua conta e risco.
              </p>

              <h2>7. Alterações dos Termos</h2>
              <p>
                Podemos atualizar estes Termos de Uso periodicamente. A versão
                mais recente estará sempre disponível neste mesmo endereço, com a
                data de atualização no topo do documento.
              </p>

              <h2>8. Contato</h2>
              <p>
                📩 Em caso de dúvidas sobre estes Termos, entre em contacto
                connosco pelo e-mail:
                <a
                  href="mailto:benitokizemamakwanza@gmail.com"
                  className="text-blue-600 hover:underline ml-1"
                >
                  benitokizemamakwanza@gmail.com
                </a>
              </p>

              <h2>9. Lei Aplicável</h2>
              <p>
                Estes Termos são regidos pelas leis da República de Moçambique.
                Qualquer disputa será resolvida nos tribunais competentes do
                país.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}