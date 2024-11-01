"use client"; // Marca o componente como cliente

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
    <div className="botaoCadastroLogin flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
      <Link className="btnCriarConta bg-[#00a1fc] text-white w-[120px] h-[35px] rounded-[20px] flex items-center justify-center hover:bg-black hover:text-[#00a1fc] transition-colors" href="/criar-conta">
        Criar Conta
      </Link>
      <Link className="btnLogin bg-[#00a1fc] text-white w-[120px] h-[35px] rounded-[20px] flex items-center justify-center hover:bg-black hover:text-[#00a1fc] transition-colors" href="/login">
        Entrar
      </Link>
    </div>
  );
}
