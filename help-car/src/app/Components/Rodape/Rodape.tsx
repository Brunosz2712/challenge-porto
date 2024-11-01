import Image from 'next/image';

export default function Rodape() {
  return (
    <div className="fRodape flex justify-center p-4 md:p-8 bg-black">
      <footer>
        <Image 
          className="cabecalho" 
          src="/img/porto-rodape.png" 
          alt="Porto Seguro rodapé" 
          width={120}  // Largura da imagem do rodapé
          height={120}  // Altura da imagem do rodapé
          priority
          style={{ width: '100%', height: 'auto' }}  // Para garantir que a imagem se ajuste responsivamente
        />
      </footer>
    </div>
  );
}
