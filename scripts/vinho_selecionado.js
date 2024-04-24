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
let isCouponUsed = false;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

function get() {
  return counter;
}

const setWinePrice = (newValue) => {
  vinhoInfos.preco = newValue
}

const inc = document.getElementById("increment");
const input = document.getElementById("input");
const dec = document.getElementById("decrement");
const couponButton = document.getElementById("couponButton")

inc.addEventListener("click", () => {
  increment();
  input.value = get();
  valor = input.value;
  preco = valor * vinhoInfos.preco
  document.querySelector(".priceWine").innerHTML = "R$" + preco.toFixed(2);
});

dec.addEventListener("click", () => {
  if (input.value > 0) {
    decrement();
  }
  input.value = get();
  valor = input.value;
  preco = valor * vinhoInfos.preco
  document.querySelector(".priceWine").innerHTML = "R$" + preco.toFixed(2);
});

const validateCoupon = (couponValue) => {
  isCouponUsed = true

  const counter = input.value
  const winePrice = vinhoInfos.preco
  const newWinePrice = winePrice - ( winePrice * 0.10 )
  setWinePrice(newWinePrice.toFixed(2))

  const actualPrice = counter * winePrice
  const formattedActualPrice = actualPrice - (actualPrice * 0.1)
  document.querySelector(".priceWine").innerHTML = "R$" + formattedActualPrice.toFixed(2);
  
  swal(`Cupom ${couponValue} ativado, você ganhou 10% de desconto!`, "", "success");
}

couponButton.addEventListener("click", () => {
  const couponValue = document.getElementById("couponValue").value
  if(!isCouponUsed){
    if(couponValue === "FIAP2024"){
      validateCoupon(couponValue)
    } else {
      swal(`Cupom ${couponValue} invalido!`, "", "error");
    }
  }else{
    swal(`Você já aplicou um cupom`, "", "error");
  }
})

function adicionarAoCarrinho() {
    valor = input.value;
    if(valor == 0) {
        swal("Selecione a quantidade!", "", "warning");
        return;
    } else {
        preco = valor * vinhoInfos.preco
        swal(`Adicionado ${valor} ${vinhoInfos.nome}, com valor total de: R$${preco.toFixed(2)} ao carrinho!`, "", "success");
    } 
}