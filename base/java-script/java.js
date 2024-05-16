function exibirNomeCompleto() {
    let inputNomeCompleto = document.getElementById("nome-completo");
    let nomeCompleto = inputNomeCompleto.value
    console.log(nomeCompleto);
}

function exibirEmail() {
    let inputEmail = document.getElementById("email");
    let email = inputEmail.value
    console.log(email);
}

function criarSenha() {
    let senhaInput = document.getElementById('senha');
    let confirmarSenhaInput = document.getElementById('confirmar-senha');
    let senha = senhaInput.value;
    let confirmarSenha = confirmarSenhaInput.value;
    let mensagemElement = document.getElementById('mensagem');

    if (senha.trim() !== '' && confirmarSenha.trim() !== '') {
        if (senha === confirmarSenha) {
            window.minhaSenha = senha;
            mensagemElement.textContent = "Conta Criada com Sucesso!";
        } else {
            mensagemElement.textContent = "As senhas não coincidem! Tente Novamente.";
        }
    } else {
        mensagemElement.textContent = "Preencha todos os campos!";
    }
}

function fazerLogin() {
    let emailInput = document.getElementById('email').value;
    let senhaInput = document.getElementById('senha').value;
    let mensagemElement = document.getElementById('mensagem');
    if(emailInput === 'usuario@usuario.com.br' || 'usuario@usuario.com' && senhaInput === 'senha123') {
        mensagemElement.textContent = "Sucesso! Voltando para a página inicial!"
        setTimeout(function() {
            window.location.href = './index.html';
        }, 1000);
    }else{
        mensagemElement.textContent = "Inválido! Tente Novamente."
    }
}