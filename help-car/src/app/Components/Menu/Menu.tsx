import Link from 'next/link';

export default function Menu() {
  return (
    <div>
      <Link href="/criar-conta">Criar Conta</Link>
      <Link href="/login">Entrar</Link>
    </div>
  );
}
