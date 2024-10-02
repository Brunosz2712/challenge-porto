"use client"; // Isso garante que o componente seja tratado como um Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Atualizado para next/navigation
import Link from 'next/link';

export default function CriarConta() {
    // Estados para os campos de input
    const [nomeCompleto, setNomeCompleto] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');
    const [erro, setErro] = useState<string>('');

    const router = useRouter(); // Hook de navegação

    // Validação simples de email
    const validarEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    // Função para criar conta
    const criarConta = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validando campos
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

        // Simulando salvar no "banco de dados" via localStorage
        window.localStorage.setItem('email', email);
        window.localStorage.setItem('senha', senha);

        // Limpa erros
        setErro('');

        // Exibindo mensagem de sucesso
        setMensagem('Conta Criada com Sucesso! Redirecionando para a página de login...');

        // Redirecionar para a página de login após 2 segundos
        setTimeout(() => {
            router.push('../Components/login');
        }, 2000);
    };

    return (
        <main>
            <section>
                <h1>CRIAR CONTA</h1>

                <form onSubmit={criarConta}>
                    <div>
                        <input
                            type="text"
                            placeholder="Nome Completo"
                            value={nomeCompleto}
                            onChange={(e) => setNomeCompleto(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Confirmar Senha"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                    </div>

                    <div>
                        <button type="submit">Confirmar</button>
                    </div>
                </form>

                {/* Mensagem de erro */}
                {erro && (
                    <div aria-live="polite" style={{ color: 'red' }}>
                        {erro}
                    </div>
                )}

                {/* Mensagem de sucesso */}
                {mensagem && (
                    <div aria-live="polite" style={{ color: 'green' }}>
                        {mensagem}
                    </div>
                )}
            </section>

            <div>
                <Link href="/">Voltar</Link>
            </div>
        </main>
    );
}
