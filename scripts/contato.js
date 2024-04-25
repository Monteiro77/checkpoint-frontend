const sendButton = document.getElementById("sendButton");


const sendForm = (event) => {
    event.preventDefault()

    const nameInputed = document.getElementById("name").value
    const emailInputed = document.getElementById("email").value
    const messageInputed = document.getElementById("message").value

    if(!nameInputed){
        swal({
            title: `O seu nome não pode estar vazio`, 
            icon: "error",
            dangerMode: true,
        });
    }else if(!emailInputed){
        swal({
            title: `O seu email não pode estar vazio`, 
            icon: "error",
            dangerMode: true,
        });
    }else if(!messageInputed){
        swal({
            title: `O campo de mensagem não pode estar vazio`, 
            icon: "error",
            dangerMode: true,
        });
    }else{
        swal({
            title: `Enviado com sucesso!\nNome: ${nameInputed}\nEmail: ${emailInputed}\nMensagem: ${messageInputed.substring(0, 10)}...`, 
            icon: "success",
            dangerMode: true,
        });
    }
}


sendButton.addEventListener("click", sendForm)