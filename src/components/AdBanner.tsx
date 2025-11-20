import { useEffect } from "react";

// Garante que o TypeScript reconhece a propriedade adsbygoogle no objeto window
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface Props {
  slot?: string; // O ID do bloco de anúncios que crias no painel do AdSense
  className?: string; // Opcional: para dar margens (ex: 'my-10')
}

export default function AdBanner({ slot, className = "" }: Props) {
  useEffect(() => {
    try {
      // Verifica se o script do AdSense já carregou e se o push é possível
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("Erro ao carregar AdSense:", e);
    }
  }, []);

  return (
    <div className={`w-full flex justify-center items-center overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minWidth: "300px", textAlign: "center" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}