vinhoInfos = {
    nome: sessionStorage.getItem("vinho_selecionado_nome") ?? null,
    tipo: sessionStorage.getItem("vinho_selecionado_tipo") ?? null,
    sobre: sessionStorage.getItem("vinho_selecionado_sobre") ?? null,
    safra: sessionStorage.getItem("vinho_selecionado_safra") ?? null,
    imagem: sessionStorage.getItem("vinho_selecionado_imagem") ?? null,
    preco: sessionStorage.getItem("vinho_selecionado_preco") ?? null,
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
  
  swal({
    title: `Cupom ${couponValue} ativado, você ganhou 10% de desconto!`, 
    icon: "success",
    dangerMode: true,
  });
}

couponButton.addEventListener("click", () => {
  const couponValue = document.getElementById("couponValue").value
  if(!isCouponUsed){
    if(couponValue === "FIAP2024"){
      validateCoupon(couponValue)
    } else {
        swal({
          title: `Cupom ${couponValue} invalido!`,
          icon: "error",
          dangerMode: true,
        });
    }
  }else{
    swal({
      title: `Você já aplicou um cupom`, 
      icon: "error",
      dangerMode: true,
    });
  }
})

function adicionarAoCarrinho() {
    valor = input.value;
    if(valor == 0) {
        swal({
          title: "Selecione a quantidade!",
          icon: "warning",
          dangerMode: true,
        });
        return;
    } else {
        preco = valor * vinhoInfos.preco
        swal({
          title: `Adicionado ${valor} ${vinhoInfos.nome}, com valor total de: R$${preco.toFixed(2)} ao carrinho!`,
          icon:"success",
          dangerMode: true,
        });
    } 
}