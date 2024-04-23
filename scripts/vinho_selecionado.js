vinhoInfos = {
    nome: sessionStorage.getItem("vinho_selecionado_nome"),
    tipo: sessionStorage.getItem("vinho_selecionado_tipo"),
    sobre: sessionStorage.getItem("vinho_selecionado_sobre"),
    safra: sessionStorage.getItem("vinho_selecionado_safra"),
    imagem: sessionStorage.getItem("vinho_selecionado_imagem"),
};
document.getElementById("wine-name").innerHTML = vinhoInfos.nome;
document.getElementById("img-wine").setAttribute('src', vinhoInfos.imagem);
document.querySelector(".textWine").innerHTML = vinhoInfos.sobre;
document.querySelector(".safraWine").innerHTML = "Safra: " + vinhoInfos.safra;
document.querySelector(".typeWine").innerHTML = "Tipo: " + vinhoInfos.tipo;