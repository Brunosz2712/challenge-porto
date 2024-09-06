import styles from '../css/CabecalhoPrincipal.module.css'
import PortoSeguro from '../img/porto-cabecalho.png'

export default function CabecalhoPrincipal() {
    return (
        <div className={styles.CabecalhoPrincipal}>
            <header>
                <img className={styles.cabecalho} src={PortoSeguro} alt="porto-seguro-cabecalho" />
                <div className={styles.botaoCadastroLogin}>
                    <a className={styles.btnCriarConta} href="./criar-conta.html">Cadastro</a>
                    <a className={styles.btnLogin} href="./login.html">Login</a>
                </div>
            </header>
        </div>
    );
}


{/* <a id="btnCriarConta"  href="./criar-conta.html">Cadastro</a>
                <a id="btnLogin" href="./login.html">Login</a> */}