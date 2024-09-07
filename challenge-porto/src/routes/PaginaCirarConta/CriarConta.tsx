import PortoSeguro from '../img/porto-cabecalho.png'
import portoSeguro from '../img/porto-rodape.png';
import styles from '../css/Conteudo.CriarConta.module.css';

export default function CriarConta() {
    return (
        <div className={styles.ConteudoCriarConta}>

            <header>
                <img className={styles.cabecalho} src={PortoSeguro} alt="porto-seguro-cabecalho" />
            </header>

            <main>
            <section className={styles.colocarDados}>

                <h1 className={styles.criarConta}>CRIAR CONTA</h1>

                <form action="">

                <div>
                    <input type="text" placeholder='Nome Completo' className={styles.nomeCompleto} />
                </div>

                <div>
                    <input type="email" placeholder='Email' className={styles.email} />
                </div>

                <div>
                    <input type="password" placeholder='Senha' className={styles.senha} />
                </div>

                <div>
                    <input type="password" placeholder='Confirmar Senha' className={styles.confirmarSenha} />
                </div>

                </form>

            </section>

                    <div>
                        <button className={styles.btnConfirmar}>Confirmar</button>
                    </div>

                    <div>
                        <a href=""  className={styles.btnVoltar}>Voltar</a>
                    </div>

            <div className={styles.fCriarConta}> 
                <img src={portoSeguro} alt="Porto Seguro" className={styles.portoF} />
            </div>

        </main>

        </div>
    );
}