import Image from 'next/image';
import PortoSeguroRodape from '../public/porto-rodape.png';

export default function Rodape(){
    return(
        <div>
            <footer>
            <Image src={PortoSeguroRodape} alt="Porto Seguro rodapé" width={220} height={100}/>
            </footer>
        </div>
    )
}