const sendButton = document.getElementById("sendButton")


const sendForm = (event) => {
    event.preventDefault()

    const nameInputed = document.getElementById("name").value
    const emailInputed = document.getElementById("email").value
    const messageInputed = document.getElementById("message").value

    if(!nameInputed){
        alert("O seu nome não pode estar vazio")
    }else if(!emailInputed){
        alert("O seu email não pode estar vazio")
    }else if(!messageInputed){
        alert("O campo de mensagem não pode estar vazio")
    }else{
        alert(`Enviado com sucesso!\n\nNome: ${nameInputed}\nEmail: ${emailInputed}\nMensagem: ${messageInputed}`)
    }
}


sendButton.addEventListener("click", sendForm)