import React, { useState } from 'react';
import PortoSeguro from '../img/porto-cabecalho.png';
import portoSeguro from '../img/porto-rodape.png';
import styles from '../styles/ConteudoCriarConta.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function CriarConta() {
    // Estados para os campos de input
    const [nomeCompleto, setNomeCompleto] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');
    
    const navigate = useNavigate();

    // Função para criar conta
    const criarConta = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validando campos
        if (nomeCompleto.trim() === '' || email.trim() === '' || senha.trim() === '' || confirmarSenha.trim() === '') {
            setMensagem('Preencha todos os campos!');
            return;
        }

        if (senha !== confirmarSenha) {
            setMensagem('As senhas não coincidem! Tente novamente.');
            return;
        }

        // Simulando salvar no "banco de dados" via localStorage
        window.localStorage.setItem('email', email);
        window.localStorage.setItem('senha', senha);

        // Exibindo mensagem de sucesso
        setMensagem('Conta Criada com Sucesso! Redirecionando para a página de login...');

        // Redirecionar para a página de login após 2 segundos
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    };

    return (
        <div className={styles.ConteudoCriarConta}>
            <header>
                <img className={styles.cabecalho} src={PortoSeguro} alt="porto-seguro-cabecalho" />
            </header>

            <main>
                <section className={styles.colocarDados}>
                    <h1 className={styles.criarConta}>CRIAR CONTA</h1>

                    <form onSubmit={criarConta}>
                        <div>
                            <input
                                type="text"
                                placeholder="Nome Completo"
                                className={styles.nomeCompleto}
                                value={nomeCompleto}
                                onChange={(e) => setNomeCompleto(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className={styles.email}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Senha"
                                className={styles.senha}
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Confirmar Senha"
                                className={styles.confirmarSenha}
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                            />
                        </div>

                        <div>
                            <button type="submit" className={styles.btnConfirmar}>Confirmar</button>
                        </div>
                    </form>

                    {/* Mensagem de erro ou sucesso */}
                    {mensagem && <div className={styles.mensagem}>{mensagem}</div>}
                </section>

                <div>
                    <Link to="/" className={styles.btnVoltar}>Voltar</Link>
                </div>

                <div className={styles.fCriarConta}>
                    <img src={portoSeguro} alt="Porto Seguro" className={styles.portoF} />
                </div>
            </main>
        </div>
    );
}