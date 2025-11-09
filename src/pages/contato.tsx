import Head from 'next/head';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { UserIcon, EnvelopeIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const templateParams = {
      from_name: nome,
      from_email: email,
      message: mensagem,
    };

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    console.log('Mensagem enviada com sucesso!');
    setEnviado(true);
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
  }
};


  return (
    <>
      <Head>
        <title>Contato - Tenga</title>
        <meta name="description" content="Entre em contato com a equipa Tenga." />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Entre em Contato
          </h1>
          <p className="mt-4 text-lg text-center text-gray-600">
            Tem alguma dúvida ou sugestão? Gostaríamos de ouvir de si.
          </p>

          {enviado ? (
            <div className="mt-12 p-8 bg-white rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-semibold text-green-600">
                Obrigado!
              </h2>
              <p className="mt-2 text-gray-600">
                A sua mensagem foi enviada com sucesso. Entraremos em contato em
                breve.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-12 p-8 bg-white rounded-lg shadow-lg space-y-6"
            >
              {/* Campo Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700"
                >
                  Seu Nome
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Campo Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Seu Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="voce@exemplo.com"
                  />
                </div>
              </div>

              {/* Campo Mensagem */}
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensagem
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none">
                    <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    required
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Escreva a sua mensagem aqui..."
                  ></textarea>
                </div>
              </div>

              {/* Botão de Envio */}
              <div className="text-right">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Enviar Mensagem
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </>
  );
}