vinhoInfos = {
    nome: sessionStorage.getItem("vinho_selecionado_nome"),
    tipo: sessionStorage.getItem("vinho_selecionado_tipo"),
    sobre: sessionStorage.getItem("vinho_selecionado_sobre"),
    safra: sessionStorage.getItem("vinho_selecionado_safra"),
    imagem: sessionStorage.getItem("vinho_selecionado_imagem"),
    preco: sessionStorage.getItem("vinho_selecionado_preco"),
};
if(vinhoInfos.nome == null) {
    window.location.assign("../pages/vinhos.html");
}
document.getElementById("wine-name").innerHTML = vinhoInfos.nome.toUpperCase();
document.getElementById("img-wine").setAttribute('src', vinhoInfos.imagem);
document.querySelector(".textWine").innerHTML = vinhoInfos.sobre;
document.querySelector(".safraWine").innerHTML = "<b>Safra</b>: " + vinhoInfos.safra;
document.querySelector(".typeWine").innerHTML = "<b>Tipo</b>: " + vinhoInfos.tipo;
document.querySelector(".typeWine").innerHTML = "<b>Tipo</b>: " + vinhoInfos.tipo;
document.querySelector(".priceWine").innerHTML = "R$" + vinhoInfos.preco;

let counter = 1;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

function get() {
  return counter;
}

const inc = document.getElementById("increment");
const input = document.getElementById("input");
const dec = document.getElementById("decrement");

inc.addEventListener("click", () => {
  increment();
  input.value = get();
  valor = input.value;
  preco = valor * vinhoInfos.preco
  document.querySelector(".priceWine").innerHTML = "R$" + preco;
});

dec.addEventListener("click", () => {
  if (input.value > 0) {
    decrement();
  }
  input.value = get();
  valor = input.value;
  preco = valor * vinhoInfos.preco
  document.querySelector(".priceWine").innerHTML = "R$" + preco;
});

function adicionarAoCarrinho() {
    valor = input.value;
    if(valor == 0) {
        swal("Selecione a quantidade!", "", "warning");
        return;
    } else {
        preco = valor * vinhoInfos.preco
        swal(`Adicionado ${valor} ${vinhoInfos.nome}, com valor total de: R$${preco} ao carrinho!`, "", "success");
    } 
}