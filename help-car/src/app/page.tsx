import Image from 'next/image';
import Integrantes from './Integrantes/Integrantes';
import Site from './Site/Site';
import './globals.css';

export default function Home() {
    return (
        <div className="bg-black"> {/* Fundo da página */}
            <main className="flex flex-col items-center justify-center mt-10 px-4 md:px-10">
                <div className="flex flex-col w-full max-w-5xl">

                    {/* Seção Porto Seguro */}
                    <div className="flex flex-col text-center w-full mb-10 rounded-lg border border-[#d9d9d9] bg-[#1a1a1a] p-6">
                        <h1 className="text-2xl text-[#00a1fc] font-bold uppercase mb-4">PORTO SEGURO</h1>
                        <p className="text-white font-light leading-relaxed">
                            A Porto é uma empresa com mais de 75 anos de experiência, atuando como um ecossistema completo que vai além de uma seguradora. Composta por 27 empresas, a Porto abrange três principais áreas de negócios: Porto Seguro, Porto Saúde e Porto Bank, oferecendo soluções de proteção para diversas necessidades, desde o cotidiano até momentos significativos. A Porto Seguro Companhia de Seguros Gerais, fundada em 1945, é a principal empresa do grupo, especializada em seguros de veículos, imóveis e transporte. Outras áreas de atuação incluem seguros de vida, previdência privada, saúde empresarial coletivo, assistência à saúde e planos odontológicos para pessoas jurídicas.
                        </p>
                    </div>

                    {/* Imagens da Porto */}
                    <div className="flex justify-between gap-6 mb-10">
                        <Image className="rounded-lg w-full max-w-[300px] h-auto" src="/img/empresa-porto-1.jpeg" alt="Porto" width={300} height={400} />
                        <Image className="rounded-lg w-full max-w-[300px] h-auto" src="/img/empresa-porto-2.jpg" alt="Porto" width={300} height={400} />
                    </div>

                    {/* Seção Help Car */}
                    <div className="flex flex-col text-center w-full mb-10 rounded-lg border border-[#d9d9d9] bg-[#1a1a1a] p-6">
                        <h1 className="text-2xl text-[#00a1fc] font-bold uppercase mb-4">HELP CAR</h1>
                        <p className="text-white font-light leading-relaxed">
                            Muitos clientes podem sair insatisfeitos ou desconfiados ao levar seus carros ao mecânico, especialmente quando se sentem enganados ou pressionados a realizar serviços desnecessários. Para resolver isso, criamos o Help Car, um bot que diagnostica o problema do veículo, indica as peças necessárias, estima o custo do serviço e das peças, e verifica se há uma oficina próxima ao seu endereço. O Help Car oferece suporte, tirando dúvidas e fornecendo um valor aproximado, dando ao cliente mais confiança e controle sobre o serviço a ser realizado.
                        </p>
                    </div>

                    {/* Imagens do Help Car */}
                    <div className="flex justify-between gap-6 mb-10">
                        <Image className="rounded-lg w-full max-w-[300px] h-auto" src="/img/concerto-1.jpg" alt="Concerto-1" width={300} height={400} />
                        <Image className="rounded-lg w-full max-w-[300px] h-auto" src="/img/avaliacao.jpeg" alt="Avaliação" width={300} height={400} />
                    </div>
                </div>
                
                {/* Redes Sociais */}
                <div className="flex flex-col mt-10 text-center text-white">
                    <Integrantes />
                    <h2 className="font-semibold text-lg tracking-wider mb-2">ACOMPANHE A PORTO NAS REDES SOCIAIS</h2>
                    <Site />
                </div>
            </main>
        </div>
    );
}
