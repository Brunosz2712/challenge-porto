import Image from 'next/image';
import PortoSeguro from '../public/porto-cabecalho.png';
// import Menu from '../Menu/Menu';

export default function Cabecalho() {
  return (
    <div>
      <header>
        <Image src={PortoSeguro} alt="Porto Seguro cabeçalho"/>
        {/* <Menu/> */}
      </header>
    </div>
  );
}
