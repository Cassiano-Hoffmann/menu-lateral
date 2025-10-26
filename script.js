const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// Abrir menu
menuBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.hidden = false;
  setTimeout(() => overlay.classList.add('show'), 10);
});

// Fechar menu
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  setTimeout(() => (overlay.hidden = true), 300);
});

// Fechar clicando fora do menu
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  setTimeout(() => (overlay.hidden = true), 300);
});