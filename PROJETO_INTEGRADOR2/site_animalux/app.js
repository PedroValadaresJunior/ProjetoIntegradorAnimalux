document.getElementById('contato-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
});

// Simulação de dados (backend falso)
const fakeUsers = [
  { email: "cliente@animalux.com", password: "123456" },
  { email: "admin@animalux.com", password: "admin123" }
];

// Alterna visibilidade do modal
function toggleLoginModal() {
  const modal = document.getElementById('login-modal');
  modal.classList.toggle('hidden');
  document.getElementById('login-error').textContent = '';
}

// Lógica de login
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const user = fakeUsers.find(u => u.email === email && u.password === password);

  if (user) {
    alert('Login bem-sucedido! Bem-vindo à Animalux.');
    toggleLoginModal();
    // Aqui poderíamos salvar login com localStorage/sessionStorage
  } else {
    document.getElementById('login-error').textContent = 'Email ou senha incorretos.';
  }
});
