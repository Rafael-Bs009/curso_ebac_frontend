const form = document.getElementById('calculo');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const mensagemSucesso = document.querySelector('.success-message');
const mensagemErro = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorCampoA = Number(campoA.value);
    const valorCampoB = Number(campoB.value)

    const mensagemSucessoTexto = `Esta correto o número ${valorCampoB} é maior que o número ${valorCampoA}`;
    const mensagemErroTexto = `Esta errado o número ${valorCampoB} não é maior que o número ${valorCampoA}`;

    if (valorCampoA >= valorCampoB) {
        mensagemErro.innerHTML = mensagemErroTexto;
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';

    } else {
        mensagemSucesso.innerHTML = mensagemSucessoTexto;
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';
    }
});

campoA.addEventListener('focus', function() {
    campoA.value = '';
    mensagemSucesso.style.display = 'none';
    mensagemErro.style.display = 'none';
});

campoB.addEventListener('focus', function() {
    campoB.value = '';
    mensagemSucesso.style.display = 'none';
    mensagemErro.style.display = 'none';
});