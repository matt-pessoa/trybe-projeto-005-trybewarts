function buttonLogin() {
  const loginButton = document.getElementById('login');
  loginButton.addEventListener('click', () => {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('password').value;
    const trybeEmail = 'tryber@teste.com';
    const trybePassword = '123456';

    if (userEmail === trybeEmail && userPassword === trybePassword) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

buttonLogin();
function buttonSubmit() {
  const submitButton = document.getElementById('submit-btn');
  const checkBox = document.getElementById('agreement');
  // https://www.horadecodar.com.br/2020/07/28/como-verificar-se-um-checkbox-esta-checado-c-javascript-ou-jquery/
  checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
}

buttonSubmit();
