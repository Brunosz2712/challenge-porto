import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
    // Estados para armazenar o email, senha e a mensagem de feedback
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');

    const router = useRouter(); // Hook para navegação

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
                router.push('/home'); // Redirecionar para a página inicial ou outra página de destino
            }, 2000);
        } else {
            setMensagem('Email ou senha incorretos. Tente novamente.');
        }
    };

    return (
        <main>
            <form onSubmit={fazerLogin}>
                <section>
                    <h1>LOGIN</h1>

                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado de email
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado de senha
                        />
                    </div>

                    <div>
                        <button type="submit">Confirmar</button>
                    </div>

                    <div>
                        <Link href="/">Voltar</Link>
                    </div>
                </section>
            </form>

            {/* Exibindo mensagem de erro ou sucesso */}
            {mensagem && <p>{mensagem}</p>}

        </main>
    );
}
