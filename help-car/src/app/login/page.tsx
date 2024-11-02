"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import "../globals.css";

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');

    const router = useRouter();

    const fazerLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (email.trim() === '' || senha.trim() === '') {
            setMensagem('Preencha todos os campos!');
            return;
        }

        const emailSalvo = window.localStorage.getItem('email');
        const senhaSalva = window.localStorage.getItem('senha');

        if (email === emailSalvo && senha === senhaSalva) {
            setMensagem('Login realizado com sucesso! Redirecionando para a página Inicial...');
            setTimeout(() => {
                router.push('/'); 
            }, 2000);
        } else {
            setMensagem('Email ou senha incorretos. Tente novamente.');
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black p-8"> {/* Fundo preto */}
            <section className="w-full max-w-lg bg-gray-800 rounded-lg p-10 shadow-lg">
                <h1 className="text-center text-3xl font-bold text-blue-400 mb-8">ENTRAR</h1>

                <form onSubmit={fazerLogin} className="space-y-6">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Senha"
                            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    {mensagem && <p className="text-center text-red-500">{mensagem}</p>} {/* Mensagem de erro/sucesso */}

                    <div>
                        <button className="w-full py-3 mt-6 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600" type="submit">
                            Confirmar
                        </button>
                    </div>
                </form>
            </section>

            {/* Div para centralizar o botão Voltar */}
            <div className="mt-6">
                <Link href="/" className="inline-block py-2 px-4 rounded-lg bg-gray-600 text-white hover:bg-gray-700 text-center">
                    Voltar
                </Link>
            </div>
        </main>
    );
}
