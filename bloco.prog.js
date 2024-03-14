const terminal = document.getElementById('terminal');
const commandInput = document.getElementById('commandInput');

commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = commandInput.value;
        executeCommand(command);
        commandInput.value = '';
    }
});

function executeCommand(command) {
    const output = document.createElement('p');
    output.textContent = '> ' + command;
    terminal.appendChild(output);

    switch(command.toLowerCase()) {
        case '40321550#%':
            printHelp();
            break;
        case 'sagaz1535limpar':
            clearTerminal();
            break;
        default:
            printError();
    }
}

function printHelp() {
    const helpText = [
        'OLÁ SAGAZ SEJA BEM VINDO A SUA AREA PROTEGIDA!',
    ];

    helpText.forEach(function(line) {
        const p = document.createElement('p');
        p.textContent = line;
        terminal.appendChild(p);
    });
}

function clearTerminal() {
    terminal.innerHTML = '';
}

function printError() {
    const error = document.createElement('p');
    error.textContent = 'Comando não reconhecido. detectamos que voce nao é o programador do site, estamos bloqueando o site e entrando em contato com a nossa equipe...OU DIGITE A PALAVRA CHAVE PARA NAO OCORRER O BLOQUEIO DE ACESSO NAO AUTORIZADO!!!!';
    terminal.appendChild(error);
}