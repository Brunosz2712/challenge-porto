"use client"; // Adiciona isso para marcar o componente como cliente

import { usePathname } from 'next/navigation'; // Importa usePathname
import Link from 'next/link';

export default function Menu() {
  const pathname = usePathname(); // Obtém o pathname atual

  // Verifica se a rota atual é "Criar Conta" ou "Entrar"
  const shouldHideMenu = pathname === '/Components/criar-conta' || pathname === '/Components/login';

  if (shouldHideMenu) {
    return null; // Não renderiza o menu
  }

  return (
    <div className="flex mt-auto justify-end">

    <Link 
    className="bg-[#00a1fc] text-white w-[120px] h-[25px] no-underline font-sans border border-[#d9d9d9] mr-3 rounded-[20px] flex items-center justify-center text-center hover:bg-black hover:text-[#00a1fc] transition duration-300" 
    href="/Components/criar-conta">
    Criar Conta
    </Link>

    <Link 
    className="bg-[#00a1fc] text-white w-[120px] h-[25px] no-underline font-sans border border-[#d9d9d9] mr-3 rounded-[20px] flex items-center justify-center text-center hover:bg-black hover:text-[#00a1fc] transition duration-300" 
    href="/Components/login">
    Entrar
    </Link>

    </div>

  );
}
