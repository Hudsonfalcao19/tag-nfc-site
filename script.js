// Seleciona elementos
const pixBtn = document.getElementById('pixBtn');
const modal = document.getElementById('pixModal');
const closeBtn = document.querySelector('.close');
const copyBtn = document.getElementById('copyBtn');
const pixKey = document.getElementById('pixKey');

// Abrir modal
pixBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Fechar modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
  if (e.target == modal) modal.style.display = 'none';
});

// Copiar chave Pix
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(pixKey.textContent)
    .then(() => alert('Chave Pix copiada!'))
    .catch(() => alert('Erro ao copiar.'));
});
