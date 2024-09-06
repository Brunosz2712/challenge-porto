import portoSeguro from '../img/porto-rodape.png'

import styles from '../css/LoginConteudo.module.css'

export default function Conteudo(){
    return(
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

                    {/* <button className={styles.btnConfirmar}></button>
                    <a href=""  className={styles.btnVoltar}></a> */}
                </section>
            </form>
            <div  className={styles.fCriarLogin}>
                <img src={portoSeguro} alt="Porto Seguro"  className={styles.portoF} />
            </div>
        </main>
    );
}