import Image from 'next/image';
import Menu from '../Menu/Menu';

export default function Cabecalho() {
  return (
    <div className="CabecalhoPrincipal">
      <header className="flex justify-between items-center p-4 md:p-6">
        <Image 
          className="cabecalho w-[150px] md:w-[250px] lg:w-[280px]" 
          src="/img/porto-cabecalho.png" 
          alt="Porto Seguro cabeçalho" 
          width={1080} 
          height={720}
          priority
        />
        <Menu />
      </header>
    </div>
  );
}
