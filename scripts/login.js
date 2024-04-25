textoLogin = document.getElementById('texto-login');

textoLogin.addEventListener('click', function (e) {
  e.preventDefault();

  if (sessionStorage.getItem('Login') === 'OK') {
    sessionStorage.removeItem('Login');
    alert('Logout realizado com sucesso!');
    textoLogin.innerHTML = 'Entrar';
  } else {
    fetch('login.html').then((response) => {
      if (response.ok) {
        window.location.replace('login.html');
      } else {
        window.location.replace('pages/login.html');
      }
    });
  }
});

if (sessionStorage.getItem('Login') === 'OK') {
  textoLogin.innerHTML = 'Sair';
}

function logar() {
  user = document.getElementById('login-user').value;
  password = document.getElementById('login-password').value;

  if (user === '1234' && password === '1234') {
    sessionStorage.setItem('Login', 'OK');
    alert('Login realizado com sucesso');
    textoLogin.innerHTML = 'Sair';
  } else {
    alert('Usuário ou senha incorreto');
  }
}
