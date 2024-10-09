"use client"; // Adiciona isso para marcar o componente como cliente

import { usePathname } from 'next/navigation'; // Importa usePathname
import Link from 'next/link';

export default function Menu() {
  const pathname = usePathname(); // Obtém o pathname atual

  // Verifica se a rota atual é "Criar Conta" ou "Entrar"
  const shouldHideMenu = pathname === '/criar-conta' || pathname === '/login';

  if (shouldHideMenu) {
    return null; // Não renderiza o menu
  }

  return (
    <div className="botaoCadastroLogin">

    <Link 
    className="btnCriarConta" href="/criar-conta">Criar Conta</Link>

    <Link 
    className="btnLogin" href="/login">Entrar</Link>

    </div>

  );
}
