import PortoSeguro from '../img/porto-cabecalho.png';
import EmpresaPorto1 from '../img/empresa-porto-1.jpeg';
import EmpresaPorto2 from '../img/empresa-porto-2.jpg';
import Concerto1 from '../img/concerto-1.jpg';
import Avaliacao from '../img/avaliacao.jpeg';
import Felipe from '../img/felipe.jpeg';
import Pedro from '../img/pedro.jpeg';
import Bruno from '../img/bruno.jpeg';
import Site from './Site';
import Porto from '../img/porto-seg.png';
import styles from '../styles/ConteudoPrincipal.module.css';
import { Link } from 'react-router-dom';

export default function Inicio() {
    return (
        <div className={styles.CabecalhoPrincipal}>
            <header>
                <img className={styles.cabecalho} src={PortoSeguro} alt="porto-seguro-cabecalho" />
                <div className={styles.botaoCadastroLogin}>
                    <Link className={styles.btnCriarConta} to="/criar-conta">Cadastro</Link>
                    <Link className={styles.btnLogin} to="/login">Login</Link>
                </div>
            </header>

            <main className={styles.ConteudoPrincipal}>
                <div className={styles.container}>
                    <div className={styles.portoSeguro}>
                        <div className={styles.titulo}>
                            <h1 className={styles.portoSeguroH1}>PORTO SEGURO</h1>
                        </div>
                        <div className={`${styles.texto} ${styles.porto}`}>
                            <p className={styles.paragPorto}>
                                A Porto é uma empresa com mais de 75 anos de experiência, atuando como um ecossistema completo que vai além de uma seguradora. Composta por 27 empresas, a Porto abrange três principais áreas de negócios: Porto Seguro, Porto Saúde e Porto Bank, oferecendo soluções de proteção para diversas necessidades, desde o cotidiano até momentos significativos. A Porto Seguro Companhia de Seguros Gerais, fundada em 1945, é a principal empresa do grupo, especializada em seguros de veículos, imóveis e transporte. Outras áreas de atuação incluem seguros de vida, previdência privada, saúde empresarial coletivo, assistência à saúde e planos odontológicos para pessoas jurídicas.
                            </p>
                        </div>
                    </div>

                    <div className={styles.containerPorto}>
                        <img className={styles.imgPorto} src={EmpresaPorto1} alt="porto" />
                        <img className={styles.imgPorto} src={EmpresaPorto2} alt="porto-2" />
                    </div>

                    <div className={styles.helpCar}>
                        <div className={styles.titulo}>
                            <h1 className={styles.helpCarH1}>HELP CAR</h1>
                        </div>
                        <div className={`${styles.texto} ${styles.porto}`}>
                            <p className={styles.paragPorto}>
                                Muitos clientes podem sair insatisfeitos ou desconfiados ao levar seus carros ao mecânico, especialmente quando se sentem enganados ou pressionados a realizar serviços desnecessários. Para resolver isso, criamos o Help Car, um bot que diagnostica o problema do veículo, indica as peças necessárias, estima o custo do serviço e das peças, e verifica se há uma oficina próxima ao seu endereço. O Help Car oferece suporte, tirando dúvidas e fornecendo um valor aproximado, dando ao cliente mais confiança e controle sobre o serviço a ser realizado.
                            </p>
                        </div>
                        <div className={styles.containerHelpCar}>
                            <img className={styles.imgPorto} src={Concerto1} alt="concerto-1" />
                            <img className={styles.imgPorto} src={Avaliacao} alt="avaliacao" />
                        </div>

                        <div className={styles.integrantes}>
                            <div className={styles.titulo}>
                                <h1 className={styles.integrantesH1}>INTEGRANTES</h1>
                            </div>
                            <div className={styles.grupo}>
                                <div className='pedro1'>
                                    <img className={styles.pedro} src={Pedro} alt="pedro" />
                                    <h3>NOME: Pedro Manzo Yokoo</h3>
                                    <p>RM: 556115</p>
                                    <p>TURMA: 1TDSPI</p>
                                </div>

                                <div className='felipe2'>
                                    <img className={styles.felipe} src={Felipe} alt="felipe" />
                                    <h3>NOME: Felipe Orikasa</h3>
                                    <p>RM: 557435</p>
                                    <p>TURMA: 1TDSPG</p>
                                </div>

                                <div className='bruno3'>
                                    <img className={styles.bruno} src={Bruno} alt="bruno" />
                                    <h3>NOME: Bruno da Silva Souza</h3>
                                    <p>RM: 94346</p>
                                    <p>TURMA: 1TDSPG</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.redSoc}>
                            <h2 className={styles.acompanhe}>ACOMPANHE A PORTO NAS REDES SOCIAIS</h2>
                            <Site />
                        </div>
                        <img className={styles.imgPorto2} src={Porto} alt="Porto Seguro" />
                    </div>
                </div>
            </main>
        </div>
    );
}
