import PortoSeguro from '../porto-cabecalho.png'

export default function Cabecalho(){
    return(
        <header>
            <img src={PortoSeguro} alt="porto-seguro-cabeçalho" />
            <div>
            <a id="btn-criar-conta"  href="./criar-conta.html">Cadastro</a>
            <a id="btn-login" href="./login.html">Login</a>
        </div>
        </header>
    )
}