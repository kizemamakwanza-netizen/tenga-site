// ATUALIZADO - Links de Rodapé agora funcionam
import Image from 'next/image';
import Link from 'next/link';

// Icones simples para redes sociais (Placeholders)
const SocialIcon = ({ href, label }: { href: string; label: string }) => (
  <a href={href} className="text-gray-400 hover:text-gray-300">
    <span className="sr-only">{label}</span>
    {/* Placeholder visual para o ícone */}
    <div className="w-6 h-6 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"></div>
  </a>
);

export default function Footer() {
  return (
    <footer
      className="bg-gray-800 text-gray-300"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Coluna 1: Logo e Social */}
          <div className="space-y-8 xl:col-span-1">
            <Image
              // CORREÇÃO: Usar o .png
              src="https://placehold.co/140x48/FFFFFF/000000.png?text=Tenga"
              alt="Logo Tenga (Branco)"
              width={140}
              height={48}
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-400 max-w-xs">
              O marketplace local de Moçambique. Conectando vendedores e
              compradores.
            </p>
            <div className="flex space-x-6">
              <SocialIcon href="#" label="Facebook" />
              <SocialIcon href="#" label="Instagram" />
              <SocialIcon href="#" label="LinkedIn" />
            </div>
          </div>

          {/* Coluna 2 e 3: Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Links da Empresa */}
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">
                  Empresa
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/sobre"
                      className="text-base text-gray-400 hover:text-gray-300"
                    >
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-400 hover:text-gray-300"
                    >
                      Carreiras
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-400 hover:text-gray-300"
                    >
                      Imprensa
                    </a>
                  </li>
                </ul>
              </div>

              {/* Links Legais (A SECÇÃO ATUALIZADA) */}
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/privacidade"
                      className="text-base text-gray-400 hover:text-gray-300"
                    >
                      Privacidade
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/termos"
                      className="text-base text-gray-400 hover:text-gray-300"
                    >
                      Termos
                    </Link>
                  </li>
                  {/* NOVO LINK ADICIONADO AQUI */}
                  <li>
                    <Link
                      href="/exclusao"
                      className="text-base text-gray-400 hover:text-gray-300"
                    >
                      Exclusão de Conta
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Tenga, Lda. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}