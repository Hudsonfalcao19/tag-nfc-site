const pixBtn = document.getElementById("pixBtn");
const modal = document.getElementById("pixModal");
const closeBtn = document.querySelector(".close");
const copyBtns = document.querySelectorAll(".copyBtn");

// Abrir modal
pixBtn.onclick = () => {
  modal.style.display = "block";
};

// Fechar modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Fechar clicando fora
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Copiar chave Pix e senha WiFi
copyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.key;
    navigator.clipboard.writeText(key);
    
    // Diferentes mensagens para diferentes tipos
    if (btn.classList.contains('wifi-copy')) {
      alert(`Senha WiFi copiada: ${key}`);
    } else {
      alert(`Chave copiada: ${key}`);
    }
  });
});