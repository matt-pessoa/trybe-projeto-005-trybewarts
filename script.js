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
function switchButtonSubmit() {
  const submitButton = document.getElementById('submit-btn');
  const checkBox = document.getElementById('agreement');

  // Evento inspirado no artigo: https://www.horadecodar.com.br/2020/07/28/como-verificar-se-um-checkbox-esta-checado-c-javascript-ou-jquery/
  checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
}

switchButtonSubmit();

function addCounterInitialValue() {
  const counter = document.getElementById('counter');
  const initialValue = 500;
  counter.textContent = initialValue;
}

addCounterInitialValue();

// Disparar essa função a cada input na textarea
function wordCounter() {
  const textArea = document.getElementById('textarea');
  const counter = document.getElementById('counter');

  // Event Listener inspirado na resposta de Etienne Martin (2017): https://stackoverflow.com/questions/14086398/count-textarea-characters
  textArea.addEventListener('input', (event) => {
    const element = event.target;
    const maxLength = element.getAttribute('maxLength');
    const currentLength = element.value.length;

    counter.textContent = `${maxLength - currentLength}`;
  });
}

wordCounter();
