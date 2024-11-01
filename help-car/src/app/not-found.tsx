"use client"; 

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Importa usePathname
import "./globals.css"; 

export default function NotFound() {
    const pathname = usePathname(); // Obtém o pathname atual

    // Verifica se a rota atual é "Criar Conta" ou "Entrar"
    const shouldHideMenu = pathname === '/criar-conta' || pathname === '/login' || pathname === '/not-found';

    if (shouldHideMenu) {
        return null; // Não renderiza o menu
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <Image 
                className="mb-6 max-w-full h-auto rounded-lg" 
                src="/img/nao-encontrado.webp" 
                alt="Não encontrado" 
                width={270} 
                height={180} 
                priority
            />
            <section className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-red-500">404: Não Encontrado</h1>
                <p className="text-base md:text-lg mt-4">
                    A página que procura não foi encontrada!! Clique acima para ir para as páginas de cadastro ou entrar.
                    <br />Ou clique abaixo para voltar à página inicial.
                </p>
                <Link className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200" href="/">
                    Voltar para a Página Inicial
                </Link>
            </section>
        </main>
    );
}
