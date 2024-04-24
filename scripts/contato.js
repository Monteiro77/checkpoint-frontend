const sendButton = document.getElementById("sendButton")


const sendForm = (event) => {
    event.preventDefault()

    const nameInputed = document.getElementById("name").value
    const emailInputed = document.getElementById("email").value
    const messageInputed = document.getElementById("message").value

    if(!nameInputed){
        swal("O seu nome não pode estar vazio", "", "error");
    }else if(!emailInputed){
        swal("O seu email não pode estar vazio", "", "error");
    }else if(!messageInputed){
        swal("O campo de mensagem não pode estar vazio", "", "error");
    }else{
        swal(`Enviado com sucesso!\nNome: ${nameInputed}\nEmail: ${emailInputed}\nMensagem: ${messageInputed.substring(0, 10)}...`, "", "success");
    }
}


sendButton.addEventListener("click", sendForm)