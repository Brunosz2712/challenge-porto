import Image from 'next/image';
import Menu from '../Menu/Menu';

export default function Cabecalho() {
  return (
    <div className="CabecalhoPrincipal">
      <header>
      <Image className="cabecalho" src="/img/porto-cabecalho.png" alt="Porto Seguro cabeçalho" width={1080} height={720}/>
        <Menu/>
      </header>
    </div>
  );
}
