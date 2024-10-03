import Image from 'next/image';
import EmpresaPorto1 from './Components/public/empresa-porto-1.jpeg';
import EmpresaPorto2 from './Components/public/empresa-porto-2.jpg';
import Concerto1 from './Components/public/concerto-1.jpg';
import Avaliacao from './Components/public/avaliacao.jpeg';
import Integrantes from './Components/Integrantes/Integrantes';
import Site from './Components/Site/Site';
import './globals.css'
 
export default function Home() {
    return (
        <div className="flex flex-wrap justify-center mt-5">
            <main>
                <div  className="justify-center text-center w-[1085px] h-[181px] rounded-[10.16px] border border-[#d9d9d9] mb-5">
                    <h1 className="text-[#00a1fc] text-center text-4xl font-sans">PORTO SEGURO</h1>
                    <p className="text-white text-center text-base -mt-1.7">
                        A Porto é uma empresa com mais de 75 anos de experiência, atuando como um ecossistema completo que vai além de uma seguradora. Composta por 27 empresas, a Porto abrange três principais áreas de negócios: Porto Seguro, Porto Saúde e Porto Bank, oferecendo soluções de proteção para diversas necessidades, desde o cotidiano até momentos significativos. A Porto Seguro Companhia de Seguros Gerais, fundada em 1945, é a principal empresa do grupo, especializada em seguros de veículos, imóveis e transporte. Outras áreas de atuação incluem seguros de vida, previdência privada, saúde empresarial coletivo, assistência à saúde e planos odontológicos para pessoas jurídicas.
                    </p>
                </div>

                <div className="flex justify-between mt-5 mb-5 gap-12">
                        <Image className="rounded-[17.23px] w-[300px]" src={EmpresaPorto1} alt="Porto"/>
                        <Image className="rounded-[17.23px] w-[300px]" src={EmpresaPorto2} alt="Porto"/>
                </div>

                <div  className="justify-center text-center w-[1085px] h-[181px] rounded-[10.16px] border border-[#d9d9d9] mb-5">
                    <h1 className="text-[#00a1fc] text-center text-4xl font-sans">HELP CAR</h1>
                    <p className="text-white text-center text-base -mt-1.7">
                        Muitos clientes podem sair insatisfeitos ou desconfiados ao levar seus carros ao mecânico, especialmente quando se sentem enganados ou pressionados a realizar serviços desnecessários. Para resolver isso, criamos o Help Car, um bot que diagnostica o problema do veículo, indica as peças necessárias, estima o custo do serviço e das peças, e verifica se há uma oficina próxima ao seu endereço. O Help Car oferece suporte, tirando dúvidas e fornecendo um valor aproximado, dando ao cliente mais confiança e controle sobre o serviço a ser realizado.
                    </p>
                </div>

                    <div className="flex justify-between mt-5 mb-5 gap-12">
                        <Image className="rounded-[17.23px] w-[300px]" src={Concerto1} alt="Concerto-1"/>
                        <Image className="rounded-[17.23px] w-[300px]" src={Avaliacao} alt="Avaliação"/>
                    </div>

                <Integrantes />

                <div>
                    <h2 className="mt-[100px] text-[15px] text-center font-sans text-white">ACOMPANHE A PORTO NAS REDES SOCIAIS</h2>
                    <Site />
                </div>
            </main>
        </div>
    );
}
