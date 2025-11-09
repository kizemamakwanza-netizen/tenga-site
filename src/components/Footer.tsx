import Image from 'next/image';

export function Footer() {
  const socialLinks = [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ];

  const footerNav = [
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', href: '#' },
        { label: 'Carreiras', href: '#' },
        { label: 'Imprensa', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidade', href: '#' },
        { label: 'Termos', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo e Info */}
          <div className="space-y-8 xl:col-span-1">
            <Image
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
              {/* TODO: Adicionar ícones sociais */}
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.label}</span>
                  {/* Ícone virá aqui */}
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerNav.slice(0, 1).map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">
                    {group.title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {group.links.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-base text-gray-400 hover:text-gray-300"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {footerNav.slice(1, 2).map((group) => (
                <div key={group.title} className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">
                    {group.title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {group.links.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-base text-gray-400 hover:text-gray-300"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Newsletter (pode ser adicionado mais tarde) */}
            <div className="md:grid md:grid-cols-1 md:gap-8">
               {/* <h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">
                  Subscreva a nossa newsletter
                </h3>
                <p className="mt-4 text-base text-gray-400">
                  Receba as últimas novidades e ofertas.
                </p> */}
            </div>

          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Tenga, Lda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}