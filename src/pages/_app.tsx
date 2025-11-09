import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// CORREÇÃO AQUI: Header precisa de chavetas {}, Footer não.
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '@/lib/gtag'; // Importa o nosso novo ficheiro
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // --- GOOGLE ANALYTICS ---
  // Este useEffect corre sempre que a rota (página) muda
  useEffect(() => {
    // Se o ID do Analytics existir (lido do .env.local), regista a "pageview"
    if (gtag.GA_TRACKING_ID) {
      const handleRouteChange = (url: URL) => {
        gtag.pageview(url);
      };
      // "Ouve" a mudança de rota
      router.events.on('routeChangeComplete', handleRouteChange);
      router.events.on('hashChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
        router.events.off('hashChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);
  // --- FIM DO GOOGLE ANALYTICS ---

  return (
    // Esta div assegura que o Footer fica em baixo
    <div className="flex flex-col min-h-screen">
      <Head>
        {/* Viewport é essencial para o design responsivo (mobile) */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* O Header aparece em todas as páginas */}
      <Header />

      {/* O "Component" é a página atual (Home, Sobre, etc.) */}
      {/* flex-grow faz esta secção "empurrar" o rodapé para baixo */}
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>

      {/* O Footer aparece em todas as páginas */}
      <Footer />
    </div>
  );
}