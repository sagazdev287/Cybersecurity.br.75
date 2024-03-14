document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificação simples da senha
    if (username === 'Sagaz#%' && password === 'Sagaz40321550#%') {
        // Redireciona para a página após o login bem-sucedido
        window.location.href = 'bloco.prog.html';
    } else {
        // Exibe mensagem de erro
        document.getElementById('login-error').innerText = 'Credenciais inválidas. Tente novamente.';
    }
});
