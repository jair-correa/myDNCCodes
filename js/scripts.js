const form = document.getElementById('registroForm')
const inputNome = document.getElementById('nome')
const inputIdade = document.getElementById('idade')
const paragrafoMensagem = document.getElementById('mensagem')
const botaoEnviar = document.getElementById('botaoEnviar')

function validarFormulario(event) {
    event.preventDefault()

    paragrafoMensagem.textContent = ''
    inputNome.style.border = ''
    inputIdade.style.border = ''

    if(inputNome.value === '') {
        paragrafoMensagem.textContent = 'Por favor, preencha o campo nome'
        paragrafoMensagem.style.color = 'red'
        inputNome.style.border = '2px solid red'
        return
    } else {
        inputNome.style.border = '2px solid green'
    }

    if(inputIdade.value === '') {
        paragrafoMensagem.textContent = 'Por favor, preencha o campo idade'
        paragrafoMensagem.style.color = 'red'
        inputIdade.style.border = '2px solid red'
        return
    } else {
        inputIdade.style.border = '2px solid green'
    }

    if(inputIdade.value < 18) {
        paragrafoMensagem.textContent = 'Você deve ter pelo menos 18 anos para se registrar'
        paragrafoMensagem.style.color = 'red'
        inputIdade.style.border = '2px solid green'
        return
    } else {
        inputIdade.style.border = '2px solid green'
    }

    paragrafoMensagem.textContent = `Bem-vindo ${inputNome.value}! Seu registro foi concluído com sucesso.`
    paragrafoMensagem.style.color = 'green'

    inputNome.value = ''
    inputIdade.value = ''

}

form.addEventListener('submit', validarFormulario)