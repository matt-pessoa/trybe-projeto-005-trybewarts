function buttonLogin() {
  const loginButton = document.getElementById('login');
  loginButton.addEventListener('click', () => {
      const userEmail = document.getElementById('user-email').value;
      const userPassword = document.getElementById('password').value;
      const trybeEmail = 'tryber@teste.com';
      const trybePassword = '123456';
  
      if(userEmail === trybeEmail && userPassword === trybePassword) {
        alert('Olá, Tryber!');
      }else {
        alert('Email ou senha inválidos.');
      }
    });
}

buttonLogin();

