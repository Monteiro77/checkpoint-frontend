'use strict'

const maioridade = sessionStorage.getItem('maioridade')

if(maioridade != 'sim' ){
  document.getElementById('body').onload = function(){
    swal({
        title: "Você é maior de idade? (+18)",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        closeOnClickOutside: false,
        closeOnEsc: false,
        buttons: ['Sim', 'Não']
      })
      .then((resposta) => {
        if (resposta) {
          window.location.assign('https://peppapig.fandom.com/wiki/Peppa_Pig_(TV_series)')
        }else{
          sessionStorage.setItem('maioridade', 'sim')
        }
      });
  };
}