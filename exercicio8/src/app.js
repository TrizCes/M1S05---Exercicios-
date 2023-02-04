import Usuario from './Usuario.js';
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const bAcessar = document.getElementById('Acessar');
const campoMensagem = document.getElementById('campo-Mensagem');

const usuarios = [
  new Usuario('Bia', 'bia@gmail.com', '12345'),
  new Usuario('Nice', 'nini@gmail.com', '23451'),
  new Usuario('Alex', 'alex@gmail.com', '34512'),
];

bAcessar.addEventListener('click', (event) => {
  event.preventDefault();
  let usuarioEncontrado = null;

  if (email.value && senha.value) {
    usuarioEncontrado = usuarios.find((usuario) => {
      return usuario.autenticar(email.value, senha.value);
    });
  }

  if (usuarioEncontrado) {
    campoMensagem.innerHTML = `Sucesso! Que bom que voltou ${usuarioEncontrado.nome}!`;
    email.value = '';
    senha.value = '';
  } else {
    campoMensagem.innerHTML = 'Credenciais inválidas. Tente novamente!';
  }
});
