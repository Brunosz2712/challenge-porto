import styles from '../css/CabecalhorCriarConta.module.css'
import PortoSeguro from '../img/porto-cabecalho.png'

export default function CabecalhoPrincipal() {
    return (
        <div className={styles.CabecalhoPrincipal}>
            <header>
                <img className={styles.cabecalho} src={PortoSeguro} alt="porto-seguro-cabecalho" />
            </header>
        </div>
    );
}