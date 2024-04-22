'use strict'

const maioridade = localStorage.getItem('maioridade')

if(maioridade != 'sim' ){
  document.getElementById('body').onload = function(){
    swal({
        title: "Você é maior de idade?",
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
          localStorage.setItem('maioridade', 'sim')
        }
      });
  };
}