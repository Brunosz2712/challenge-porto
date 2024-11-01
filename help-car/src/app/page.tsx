import Image from 'next/image';
import Integrantes from './Integrantes/Integrantes';
import Site from './Site/Site';
import './globals.css';

export default function Home() {
    return (
        <div>
            <main className="flex flex-wrap justify-center mt-[5%]">
                <div className="flex flex-wrap justify-center w-full">

                    {/* Seção Porto Seguro */}
                    <div className="flex justify-center text-center w-[1085px] h-[181px] rounded-[10.16px] border border-[#d9d9d9] mb-[5%] bg-[#1a1a1a]">
                        <div className="porto">
                            <div className="texto">
                                <div className="titulo">
                                    <h1 className="flex justify-center text-[34.12px] text-[#00a1fc] font-sans font-bold tracking-wide uppercase">PORTO SEGURO</h1>
                                </div>
                                <p className="text-white text-center text-[100%] font-light leading-relaxed">
                                    A Porto é uma empresa com mais de 75 anos de experiência, atuando como um ecossistema completo que vai além de uma seguradora. Composta por 27 empresas, a Porto abrange três principais áreas de negócios: Porto Seguro, Porto Saúde e Porto Bank, oferecendo soluções de proteção para diversas necessidades, desde o cotidiano até momentos significativos. A Porto Seguro Companhia de Seguros Gerais, fundada em 1945, é a principal empresa do grupo, especializada em seguros de veículos, imóveis e transporte. Outras áreas de atuação incluem seguros de vida, previdência privada, saúde empresarial coletivo, assistência à saúde e planos odontológicos para pessoas jurídicas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Imagens da Porto */}
                    <div className="flex justify-between mt-[5%] mb-[5%] gap-[50px]">
                        <Image className="rounded-[17.23px] w-[300px]" src="/img/empresa-porto-1.jpeg" alt="Porto" width={300} height={400} />
                        <Image className="rounded-[17.23px] w-[300px]" src="/img/empresa-porto-2.jpg" alt="Porto" width={300} height={400} />
                    </div>

                    {/* Seção Help Car */}
                    <div className="flex justify-center text-center w-[1085px] h-[181px] rounded-[10.16px] border border-[#d9d9d9] mb-[5%] bg-[#1a1a1a]">
                        <div className="texto">
                            <div className="titulo">
                                <h1 className="flex justify-center text-[34.12px] text-[#00a1fc] font-sans font-bold tracking-wide uppercase">HELP CAR</h1>
                            </div>
                            <p className="text-white text-center text-[100%] mt-[0.2%] font-light leading-relaxed">
                                Muitos clientes podem sair insatisfeitos ou desconfiados ao levar seus carros ao mecânico, especialmente quando se sentem enganados ou pressionados a realizar serviços desnecessários. Para resolver isso, criamos o Help Car, um bot que diagnostica o problema do veículo, indica as peças necessárias, estima o custo do serviço e das peças, e verifica se há uma oficina próxima ao seu endereço. O Help Car oferece suporte, tirando dúvidas e fornecendo um valor aproximado, dando ao cliente mais confiança e controle sobre o serviço a ser realizado.
                            </p>
                        </div>
                    </div>

                    {/* Imagens do Help Car */}
                    <div className="flex justify-between mt-[5%] mb-[5%] gap-[50px]">
                        <Image className="rounded-[17.23px] w-[300px]" src="/img/concerto-1.jpg" alt="Concerto-1" width={300} height={400} />
                        <Image className="rounded-[17.23px] w-[300px]" src="/img/avaliacao.jpeg" alt="Avaliação" width={300} height={400} />
                    </div>

                    </div>
                    

                {/* Redes Sociais */}
                <div className="flex justify-center flex-col mt-[100px] text-[15px] text-center font-sans text-white">
                <Integrantes />
                    <h2 className="acompanhe font-semibold text-lg tracking-wider">ACOMPANHE A PORTO NAS REDES SOCIAIS</h2>
                    <Site />
                </div>
            </main>
        </div>
    );
}
