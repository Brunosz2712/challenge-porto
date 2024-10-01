import Image from 'next/image';
import EmpresaPorto1 from '../public/empresa-porto-1.jpeg';
import EmpresaPorto2 from '../public/empresa-porto-2.jpg';
import Concerto1 from '../public/concerto-1.jpg';
import Avaliacao from '../public/avaliacao.jpeg';
import Site from '../Site/Site'
import Integrantes from '../Integrantes/Integrantes';


export default function Conteudo(){
    return(
        <div>
            <main>
                <div>
                    <div>
                        <div>
                            <h1>PORTO SEGURO</h1>
                        </div>
                        <div>
                            <p>
                                A Porto é uma empresa com mais de 75 anos de experiência, atuando como um ecossistema completo que vai além de uma seguradora. Composta por 27 empresas, a Porto abrange três principais áreas de negócios: Porto Seguro, Porto Saúde e Porto Bank, oferecendo soluções de proteção para diversas necessidades, desde o cotidiano até momentos significativos. A Porto Seguro Companhia de Seguros Gerais, fundada em 1945, é a principal empresa do grupo, especializada em seguros de veículos, imóveis e transporte. Outras áreas de atuação incluem seguros de vida, previdência privada, saúde empresarial coletivo, assistência à saúde e planos odontológicos para pessoas jurídicas.
                            </p>
                        </div>
                    </div>

                    <div>
                        <Image src={EmpresaPorto1} alt="Porto" width={143} height={191}/>
                        <Image src={EmpresaPorto2} alt="Porto" width={143} height={191}/>
                    </div>

                    <div>
                        <div>
                            <h1>HELP CAR</h1>
                        </div>
                        <div>
                            <p>
                                Muitos clientes podem sair insatisfeitos ou desconfiados ao levar seus carros ao mecânico, especialmente quando se sentem enganados ou pressionados a realizar serviços desnecessários. Para resolver isso, criamos o Help Car, um bot que diagnostica o problema do veículo, indica as peças necessárias, estima o custo do serviço e das peças, e verifica se há uma oficina próxima ao seu endereço. O Help Car oferece suporte, tirando dúvidas e fornecendo um valor aproximado, dando ao cliente mais confiança e controle sobre o serviço a ser realizado.
                            </p>
                        </div>
                        <div>
                            <Image src={Concerto1} alt="Concerto-1" width={143} height={191}/>
                            <Image src={Avaliacao} alt="Avaliação" width={143} height={191}/>
                        </div>

                        <Integrantes/>

                        <div>
                            <h2>ACOMPANHE A PORTO NAS REDES SOCIAIS</h2>
                            <Site />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}