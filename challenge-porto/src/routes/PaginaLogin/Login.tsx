import PortoSeguro from '../img/porto-cabecalho.png'
import portoSeguro from '../img/porto-rodape.png'
import styles from '../css/LoginConteudo.module.css'

export default function Login() {
    return (

        <div className={styles.LoginConteudo}>

            <header>
                <img className={styles.cabecalho} src={PortoSeguro} alt="porto-seguro-cabecalho" />
            </header>

            <main>
            <form action="">
                <section className={styles.colocarDados}>

                    <h1 className={styles.login}>LOGIN</h1>

                    <div>
                        <input type="email" placeholder='Email' className={styles.email}/>                        
                    </div>
                    
                    <div>
                        <input type="passaword" placeholder='Senha' className={styles.senha}/>
                    </div>

                    <div>
                        <button className={styles.btnConfirmar}>Confirmar</button>
                    </div>

                    <div>
                        <a href=""  className={styles.btnVoltar}>Voltar</a>
                    </div>
            
                </section>
            </form>
            <div  className={styles.fCriarLogin}>
                <img src={portoSeguro} alt="Porto Seguro"  className={styles.portoF} />
            </div>
        </main>

        </div>
    );
}