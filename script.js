function toggleMode() {
    var body = document.body;

    // Alternar entre 'modo-normal' e 'modo-escuro'
    body.classList.toggle('modo-normal');
    body.classList.toggle('modo-escuro');
}

// Adicione um ouvinte de evento para chamar a função quando o botão for clicado
document.getElementById('toggleButton').addEventListener('click', toggleMode);
