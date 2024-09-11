import { useState } from 'react';
import PortoSeguro from '../img/porto-cabecalho.png';
import portoSeguro from '../img/porto-rodape.png';
import styles from '../styles/LoginConteudo.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    // Estados para armazenar o email, senha e a mensagem de feedback
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');

    const navigate = useNavigate(); // Hook para navegação

    // Função para realizar o login
    const fazerLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validar campos de entrada
        if (email.trim() === '' || senha.trim() === '') {
            setMensagem('Preencha todos os campos!');
            return;
        }

        // Verificando se o email e senha correspondem aos armazenados no localStorage
        const emailSalvo = window.localStorage.getItem('email');
        const senhaSalva = window.localStorage.getItem('senha');

        if (email === emailSalvo && senha === senhaSalva) {
            setMensagem('Login realizado com sucesso! Redirecionando para a página Inicial!...');
            setTimeout(() => {
                navigate('/home'); // Redirecionar para a página inicial ou outra página de destino
            }, 2000);
        } else {
            setMensagem('Email ou senha incorretos. Tente novamente.');
        }
    };

    return (
        <div className={styles.LoginConteudo}>
            <header>
                <img className={styles.cabecalho} src={PortoSeguro} alt="porto-seguro-cabecalho" />
            </header>

            <main>
                <form onSubmit={fazerLogin}>
                    <section className={styles.colocarDados}>
                        <h1 className={styles.login}>LOGIN</h1>

                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className={styles.email}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado de email
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Senha"
                                className={styles.senha}
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)} // Atualiza o estado de senha
                            />
                        </div>

                        <div>
                            <button type="submit" className={styles.btnConfirmar}>Confirmar</button>
                        </div>

                        <div>
                            {/* Navegação usando Link */}
                            <Link to="/" className={styles.btnVoltar}>Voltar</Link>
                        </div>
                    </section>
                </form>

                {/* Exibindo mensagem de erro ou sucesso */}
                {mensagem && <p className={styles.mensagem}>{mensagem}</p>}

                <div className={styles.fCriarLogin}>
                    <img src={portoSeguro} alt="Porto Seguro" className={styles.portoF} />
                </div>
            </main>
        </div>
    );
}
