"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import "../globals.css";

export default function CriarConta() {
    const [nomeCompleto, setNomeCompleto] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');
    const [erro, setErro] = useState<string>('');

    const router = useRouter();

    const validarEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const criarConta = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!nomeCompleto.trim() || !email.trim() || !senha.trim() || !confirmarSenha.trim()) {
            setErro('Preencha todos os campos!');
            return;
        }

        if (!validarEmail(email)) {
            setErro('Insira um email válido!');
            return;
        }

        if (senha !== confirmarSenha) {
            setErro('As senhas não coincidem! Tente novamente.');
            return;
        }

        const dadosConta = {
            nomeCompleto,
            email,
            senha,
        };

        try {
            const response = await fetch("http://localhost:8080/contaCliente", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dadosConta),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erro ao criar conta');
            }

            setErro('');
            setMensagem('Conta Criada com Sucesso! Redirecionando para a página de login...');

            setTimeout(() => {
                router.push('../login');
            }, 2000);
        } catch (error) {
            // Usando uma verificação segura para o erro
            const errorMessage = (error as Error).message || 'Ocorreu um erro inesperado';
            setErro(errorMessage);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black p-8">
            <section className="w-full max-w-lg bg-gray-800 rounded-lg p-10 shadow-lg">
                <h1 className="text-center text-3xl font-bold text-blue-400 mb-8">CRIAR CONTA</h1>

                <form onSubmit={criarConta} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Nome Completo"
                            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={nomeCompleto}
                            onChange={(e) => setNomeCompleto(e.target.value)}
                        />
                    </div>

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

                    <div>
                        <input
                            type="password"
                            placeholder="Confirmar Senha"
                            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                    </div>

                    {erro && (
                        <div role="alert" className="text-red-500 text-center mt-2">
                            {erro}
                        </div>
                    )}

                    {mensagem && (
                        <div role="alert" className="text-green-500 text-center mt-2">
                            {mensagem}
                        </div>
                    )}

                    <div>
                        <button type="submit" className="w-full py-3 mt-6 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600">
                            Confirmar
                        </button>
                    </div>
                </form>
            </section>

            <div className="mt-6">
                <Link href="/" className="inline-block py-2 px-4 rounded-lg bg-gray-600 text-white hover:bg-gray-700">
                    Voltar
                </Link>
            </div>
        </main>
    );
}
